import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstUpperCaseLetter } from 'src/app/utils/validators/firstUpperCaseLetter';
import { genreCreationDTO } from './genre';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: genreCreationDTO;

  @Output()
  onSubmit: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstUpperCaseLetter()]
      }]
    });
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value);
  }

  getNameFieldErrorMsg(){
    var field = this.form.get('name');
    if ( field?.hasError('required') ){
      return 'El campo nombre es requerido';
    }
    if ( field?.hasError('firstUpperCaseLetter') ){
      return field.getError('firstUpperCaseLetter').msg;
    }
    return '';
  }

}
