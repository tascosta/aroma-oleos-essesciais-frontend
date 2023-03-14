import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {

  constructor(private _formBuider: FormBuilder) { }
  customColor: string = '#66CDAA';
  oleosFormGroup = this._formBuider.group({
    nome: ['', Validators.required],
    propriedades: ['', Validators.required],
    comoUsar: ['', Validators.required]
  });
  
  ngOnInit() { }


  salvar() {
    let dados = this.oleosFormGroup.getRawValue();
    console.log(dados);
  }
}