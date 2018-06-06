import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {UserModule} from './user/user.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AppService} from './service/app.service';
import {LoginService} from './service/login.service';
import {SignupService} from './service/signup.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: LoginComponent},
      {path: '**', component: LoginComponent}
    ])
  ],
  providers: [AppService, LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
