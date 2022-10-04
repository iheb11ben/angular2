import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './componets/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './componets/addsubcategory/addsubcategory.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';
import { LayoutComponent } from './componets/layout/layout.component';
import { ListcategoryComponent } from './componets/listcategory/listcategory.component';
import { ListsubcategoryComponent } from './componets/listsubcategory/listsubcategory.component';
import { LoginComponent } from './componets/login/login.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { RegisterComponent } from './componets/register/register.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { ListproductComponent } from './listproduct/listproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,children:[
  {path:'',component:LayoutComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'addsubcategory',component:AddsubcategoryComponent},
  {path:'listsubcategory',component:ListsubcategoryComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'listcategory',component:ListcategoryComponent},
  {path:'profil',component:ProfileComponent},
]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
