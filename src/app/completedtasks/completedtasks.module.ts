import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedtasksPageRoutingModule } from './completedtasks-routing.module';

import { CompletedtasksPage } from './completedtasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedtasksPageRoutingModule
  ],
  declarations: [CompletedtasksPage]
})
export class CompletedtasksPageModule {}
