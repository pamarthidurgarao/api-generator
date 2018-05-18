import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EntityComponent>, private fb: FormBuilder) { }


  orderForm: FormGroup;
  items: any[]=[];
  @Output() onAdd = new EventEmitter<any>(true);

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    this.orderForm = this.fb.group({
      tableName: '',
      items: this.fb.array([ this.createItem() ])
    });
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      type: '',
      isMandatory: false,
      isPrimary:false
    });
  }
  
  submitTable(): void {
    this.onAdd.emit(this.orderForm.value);
  }

  addItem(): void {
    let items = this.orderForm.get('items') as FormArray;
    items.push(this.createItem());
  }

  dataType=['String','Integer','Boolean','Date','DateTime','BigDecimal','Long'];
}

