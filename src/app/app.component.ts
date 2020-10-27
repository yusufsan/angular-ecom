import { Component,OnInit } from '@angular/core';
import { LogInComponent } from './log_in/log-in/log-in.component';
import{ Router} from '@angular/router'
import{ RegisterService}  from './service/register.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';
  
public frmbtnDis:boolean=false
  public menuBtName:Array<any>=[
    { order:1,name:"home"          ,tooltip:"Home"    , TooltipPosition:"left",AdminAcc:'Y',UserAcc:'Y',
      path:'RegisterGrid'  },
    { order:2,name:"local_grocery_store" ,tooltip:"Purchase"  , TooltipPosition:"left",AdminAcc:'Y',
    UserAcc:'N', path:'card' },
  ];
  constructor( private Router : Router  , private RegisterService : RegisterService)
  {}
  ngOnint(){

    this.Router.navigate(['login'])

  }

  menuClick(data){
    this.sidenavclose()
    this.Router.navigate([data.path]);    
  }
  Logout()
  {
    this.frmbtnDis= false;
    this.sidenavclose()
    this.Router.navigate(['login'])
  }
  sidenavclose(){
    let data : HTMLElement = document.querySelectorAll('mat-sidenav')[0] as HTMLElement  
    if(data.style.visibility =="visible"){
        let sidenav = document.getElementById("close")
        sidenav.click()
    }
  }
}

