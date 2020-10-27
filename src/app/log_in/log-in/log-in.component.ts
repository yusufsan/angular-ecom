
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import{Router} from '@angular/router'

import { MatButtonModule } from '@angular/material'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private userId: string;
  private passWord: string;
  value = 'Clear me';
  loginForm: any;
  address: any;
  userName = 'User'
  password = 'welcome@1'
  constructor(private fb: FormBuilder, private Route: Router ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
     
    })
  }
  getVaule() {
    if (this.loginForm.get('userName').value.toUpperCase() == this.userName.toUpperCase() &&
      this.loginForm.get('passWord').value == this.password) {
      alert("Login successfully ");

      this.Route.navigate(['RegisterGrid']);
    }
    else{
      alert("Invalid User Name and Password");
      return false;
    }
  }
  getFormControl(name) {
    return this.loginForm.get(name);
  }
}
