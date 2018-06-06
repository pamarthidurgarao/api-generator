import {UserModel} from '../dto/usermodel';
import {LoginService} from '../service/login.service';
import {Component, OnInit} from '@angular/core';
import {LoginModel} from './loginmodel';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userModel: UserModel;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')
      ]),
      password: ['', Validators.required]
    });
  }

  login() {
    this.userModel = this.loginForm.value;
    this.loginService.login(this.userModel.email).subscribe(data => {
      if (data.user && data.user.password === this.userModel.password) {
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['user/ReportGeneratorView']);
      }
    });
  }
}
