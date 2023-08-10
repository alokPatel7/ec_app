import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswoardPageRoutingModule } from './reset-passwoard-routing.module';

import { ResetPasswoardPage } from './reset-passwoard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswoardPageRoutingModule
  ],
  declarations: [ResetPasswoardPage]
})
export class ResetPasswoardPageModule {}
