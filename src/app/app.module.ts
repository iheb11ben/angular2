import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';
import { LayoutComponent } from './componets/layout/layout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { AddsubcategoryComponent } from './componets/addsubcategory/addsubcategory.component';
import { ListsubcategoryComponent } from './componets/listsubcategory/listsubcategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecherchePipe } from './pipes/recherche.pipe';
import { ProfileComponent } from './componets/profile/profile.component';
import { AddcategoryComponent } from './componets/addcategory/addcategory.component';
import { ListcategoryComponent } from './componets/listcategory/listcategory.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    AddproductComponent,
    ListproductComponent,
    LoginComponent,
    RegisterComponent,
    AddsubcategoryComponent,
    ListsubcategoryComponent,
    RecherchePipe,
    ProfileComponent,
    AddcategoryComponent,
    ListcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
