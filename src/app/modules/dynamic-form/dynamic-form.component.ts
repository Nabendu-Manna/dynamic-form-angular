import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup
  formFieldsStructure: any[]

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.formFieldsStructure = [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter Your Name"
      }, {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter Your Name"
      }
    ];
    this.dynamicForm = this._formBuilder.group({})
  }

  ngOnInit(): void {
    this.buildProposalForm(this.formFieldsStructure);
  }

  buildProposalForm(formFieldsStructure: any[]) {
    formFieldsStructure.forEach(formFieldItem => {
      this.dynamicForm.addControl(
        formFieldItem.name,
        this._formBuilder.control(formFieldItem.default_value)
      )
    })
  }

}
