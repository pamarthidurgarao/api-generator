import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EntityComponent } from './entity/entity.component'
import { AppServiceService } from './app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  payload = {};
  entites = [];
  appForm:FormGroup;
  constructor(public dialog: MatDialog,public fb:FormBuilder, public appService:AppServiceService) {}

  ngOnInit(){
    this.createForm();
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(EntityComponent, {
      width: '90%',
      height: '90%',
      data: {  }
    });

    dialogRef.componentInstance.onAdd.subscribe((data: any) => {
      this.entites = data;

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  createForm(){
    this.appForm = this.fb.group({
      appName: '',
      packageName:'',
      entites: this.fb.array([])
    });
  }

  generate(){
    debugger
    let payload = this.appForm.value;
    payload.entites = this.entites;
    this.appService.addHero(payload);
  }
  downloda(){

  }
}
 
