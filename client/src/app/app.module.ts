import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { EntityComponent } from './entity/entity.component'
import { AppServiceService } from './app-service.service'

@NgModule({
  declarations: [
    AppComponent,
    EntityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent],
  entryComponents: [EntityComponent]
})
export class AppModule { }
