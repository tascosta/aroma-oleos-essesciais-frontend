import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OleoService } from 'src/app/services/oleo.service';
import { Oleo } from '../view-models/oleo.viewmodel';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent implements OnInit {

  constructor(private _formBuider: FormBuilder, private oleoService: OleoService, private route: ActivatedRoute,
    private alertController: AlertController, private router: Router, private el: ElementRef) { }

  oleosFormGroup = this._formBuider.group({
    _id: [''],
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    comoUsar: ['', Validators.required]
  });

  customColor: string = '#66CDAA';
  oleo: any;
  oleos: any;
  exibirMensagens = false;
  exibirMensagemSucesso = false;
  exibirMensagemAlerta = true;
  exibirMensagemErro = false;
  editarOleo: boolean = false;
  id: string = '';
  mensagemErro: string = 'Ocorreu um erro ao salvar o formulário.';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editarOleo = !!params['editar'];
      this.id = params['_id'];
    });
    console.log(this.editarOleo)
    if (this.editarOleo) {
      this.obterOleo();
    }
  }

  acao() {
    if (this.editarOleo) {
      this.editar();
    } else {
      this.salvar();
    }
  }

  salvar() {
    let dados = this.oleosFormGroup.getRawValue();
    this.oleoService.post(dados).subscribe((response: any) => {
      this.oleo = response;
      this.presentAlert('Obrigado!', ['Cadastro realizado com sucesso!']);
    },
      (error) => {
        const messages = error.error.message;
        this.presentAlert('Erro!', messages);
      });
  }

  obterOleo() {
    this.oleoService.getId(`/${this.id}`).subscribe(
      data => {
        this.oleo = data as Oleo;
        setTimeout(() => {
          this.setOleoValues();
        }, 300);
      }
    );
  }

  setOleoValues() {
    this.oleosFormGroup.patchValue({
      _id: <string>this.oleo?._id,
      nome: <string>this.oleo?.nome,
      descricao: <string>this.oleo?.descricao,
      comoUsar: <string>this.oleo?.comoUsar,
    });
  }

  editar() {
    let dados = this.oleosFormGroup.getRawValue();
    this.oleoService.put(dados).subscribe((response: any) => {
      this.oleo = response;
      this.presentAlert('Obrigado!', ['Edição realizada com sucesso!']);
    },
      (error) => {
        const messages = error.error.message;
        this.presentAlert('Erro!', messages);
      });
  }

  async presentAlert(header: string, messages: string[] = []) {
    const message = messages.join(',\n');
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    await alert.onDidDismiss().then(() => {
      this.oleosFormGroup.reset();
      this.recarregarPagina();
    });
  }

  recarregarPagina() {
    if (this.editarOleo) {
      window.location.href = "/home";
    } else {
      window.location.reload();
    }
  }

  obterTodosOleos() {
    this.oleoService.get().subscribe(
      data => {
        this.oleos = data as Oleo;
      }
    );
  }

  validarCampos() {
    let dados = this.oleosFormGroup.getRawValue();

    let valid = false;
    if (!valid) {
      const invalidControl = this.el.nativeElement.querySelector('textarea.ng-invalid,input.ng-invalid,input.ion-invalid,textarea.ion-invalid');
      if (invalidControl) {
        invalidControl.focus();
      }
      return false;
    } else {

      return false;
    }
  }
}




