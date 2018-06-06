import {UserModel} from '../dto/usermodel';
import {SignupService} from '../service/signup.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private signUpService: SignupService) {}
  user: UserModel;

  ngOnInit() {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.user = this.signUpForm.value;
    this.signUpService.signup(this.user).subscribe(data => {
      if (data) {
        this.router.navigate(['/login']);
      }
    });
  }
}
