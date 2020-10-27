import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LogInComponent // ,NotRegComponent 
} from './log_in/log-in/log-in.component';
import { RegisterComponent} from './register/register.component';
import { UserGirdComponent} from './user-gird/user-gird.component'
import { CardComponent } from './card/card.component'

const routes: Routes = [

  {path:'login', component:LogInComponent},
  {path:'Register' ,component:RegisterComponent},
  {path:'RegisterGrid' ,component:UserGirdComponent},
  {path:'card' ,component:CardComponent},
  
  
//  {path:'',component: NotRegComponent},
  {path:'**', redirectTo:'login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
