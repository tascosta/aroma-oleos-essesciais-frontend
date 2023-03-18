import { Component, OnInit } from '@angular/core';
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
    private alertController: AlertController, private router: Router) { }

  oleosFormGroup = this._formBuider.group({
    _id: [''],
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    comoUsar: ['', Validators.required]
  });

  customColor: string = '#66CDAA';
  oleo: any;
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

    if (this.editarOleo) {
      this.obterOleos();

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
      this.presentAlert('Cadastro realizado com sucesso!');
    },
      (error) => {
        console.log(error);
      });
  }

  obterOleos() {
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
      this.presentAlert('Edição realizada com sucesso!');
    },
      (error) => {
        this.exibirMensagemSucesso = false;
        this.exibirMensagemErro = true;
      });
  }

  async presentAlert( header: string) {
    const alert = await this.alertController.create({
      header: header,
      // subHeader: 'Important message',
      message: 'Obrigado!',
      buttons: ['OK'],
    });

    await alert.present();

    await alert.onDidDismiss().then(() => {
      this.oleosFormGroup.reset();
      this.redirecionarPagina();
    });
  }

  redirecionarPagina() {
    this.router.navigate(['/home']);
  }
}




