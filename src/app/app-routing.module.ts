import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent} from './menu/menu.component'
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path:'',
  component: MenuComponent,
  children:[
    {
      path:'',
      component: HomeComponent, 
    },
    {
      path:'home',
      component: HomeComponent, 
    },
    {
      path:'about',
      component: AboutComponent, 
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
