import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  Email: string;
  ngOnInit() {
    this.signUpForm = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required],
      Location: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  signup() {
    this.router.navigate(['user/home']);
  }

}
