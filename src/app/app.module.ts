import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Swal from 'sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { AboutComponent } from './about/about.component';
import { RimsComponent } from './rims/rims.component';
import { SelectmodelComponent } from './selectmodel/selectmodel.component';
import { SpoilersComponent } from './spoilers/spoilers.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AlertboxComponent } from './alertbox/alertbox.component';
import { RvComponent } from './rv/rv.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    AboutComponent,
    RimsComponent,
    SelectmodelComponent,
    SpoilersComponent,
    SignupComponent,
    ContactComponent,
    AlertboxComponent,
    RvComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


