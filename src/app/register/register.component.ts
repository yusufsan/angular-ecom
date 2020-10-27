import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms'
import {MustMatch} from '../custom_Validator/custom.Validator'
import { Router, ActivatedRoute} from '@angular/router'
import {RegisterService} from '../service/register.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GoogleMapComponent} from '.././Dialog_Component/google-map/google-map.component'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm: any;
  numberPattern = "^[0-9]*$";
  public imageData: string = ''
  public sub: Subscription;
  public data =''
  fileName;
  constructor( private fb : FormBuilder , private RegisterService : RegisterService,
    private Router:Router, private MatDialog : MatDialog
    , private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    //let data 
    this.sub = this.ActivatedRoute.queryParams.subscribe(params => {
       this.data = params["data"] == null ? '' : params["data"];

    });    

      this.RegForm = this.fb.group({
        userName: ['', Validators.required],
        passWord: ['', Validators.required],
        conFirmpassWord: ['', Validators.required],
        emailid: ['',Validators.email],
        mobileNo: ['',Validators.pattern(this.numberPattern)],
        file: ['']
       
      },{
        validator: MustMatch('passWord', 'conFirmpassWord')
      }
      )

     let filterData =  this.RegisterService.userdataModelArr.filter(ele => {
        return ele.userName == this.data
      })

      if(this.data != ''){
      this.RegForm.patchValue({
        userName: filterData[0].userName ,
        passWord:filterData[0].passWord ,
        conFirmpassWord: filterData[0].conFirmpassWord ,
        emailid: filterData[0].emailid ,
        mobileNo: filterData[0].mobileNo ,
        file: filterData[0].file         
        });   

        this.imageData = filterData[0].file
      }

 
  }
  ngAfterViewInit() {
    this.sub.unsubscribe();
  }
  getFormControl(name) {
    return this.RegForm.get(name);
  }
  getValue() {
    let res = false; 
    if(this.RegForm.get('file').value == "")
    {
      alert("File Upload required")
      return false;
    }
    if(this.data != '')
    this.RegisterService.editUserData(this.RegForm.value)
    else
    res = this.RegisterService.AddUserData(this.RegForm.value)
    
    if(res == true)
    {
      alert("User Name already exists")
      return false;
    }
    else{
      if(this.data != '')
      alert("User Id Edited successfully ")
      else
      alert("User Id created successfully ")
      this.Router.navigate(['RegisterGrid'])
    }
  }

  openGoogleMap(): void {
    let dialogRef = this.MatDialog.open(GoogleMapComponent
      , {  width: '500px',      height: '450px'    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onFileChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
       this.RegForm.patchValue({
         file: reader.result          
    });
    this.imageData =  reader.result.toString()
        // need to run CD since file load runs outside of zone
      //  this.cd.markForCheck();
      };
    }
  }

  UploadBtn() {
    document.getElementById("UploadForm").click();
  }

  deleteImg() {
   // if (this.screenMode == "Add") {
      this.imageData = ""
      this.RegForm.patchValue({
        file:''          
   });
    // }
    // else {
    //   this.imageData = ""
    //   this._DataService.deleteImg(this._RegistrationModel.fileName).subscribe(data => {
    //     alert(data.result)
    //   })
    // }
  }
}
