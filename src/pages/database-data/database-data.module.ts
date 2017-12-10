import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatabaseDataPage } from './database-data';

@NgModule({
  declarations: [
    DatabaseDataPage,
  ],
  imports: [
    IonicPageModule.forChild(DatabaseDataPage),
  ],
})
export class DatabaseDataPageModule {}
