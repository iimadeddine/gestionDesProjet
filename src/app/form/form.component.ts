/**
 * Created by mohma on 7/26/2017.
 */
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './form.component.html',
  selector:'formPage'
})
export class FormComponent {
  formGroup : FormGroup;

  constructor() {
  }
}


