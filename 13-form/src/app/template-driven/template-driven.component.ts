import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`

  `]
})
export class TemplateDrivenComponent {

  user:any={
    userid: '',
    password:''
  }
  onSubmit(form){
    // console.log(form);
    console.log(this.user)
  }
}
