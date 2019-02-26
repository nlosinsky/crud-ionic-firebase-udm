import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  imports: [
    CommonModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [],
  declarations: [HomePage],
  providers: [],
})
export class HomeModule {
}

