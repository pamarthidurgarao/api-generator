import {UserModel} from '../dto/usermodel';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = 'Tamarada';
  sideBar;
  userModel: UserModel;
  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUser();
  }

  toggle() {
    if (this.sideBar) {
      this.sideBar = null;
    } else {
      this.sideBar = 'active';
    }
  }

  loadUser() {
    if (localStorage.getItem('user')) {
      this.userModel = JSON.parse(localStorage.getItem('user'));
    }
    if (!this.userModel) {
      this.router.navigate(['login']);
    }
  }

}
