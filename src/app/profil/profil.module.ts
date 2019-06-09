import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule { }
