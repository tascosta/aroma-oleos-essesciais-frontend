import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EventEmitter } from 'stream';
import { OleoService } from '../services/oleo.service';
import { Oleo } from '../view-models/oleo.viewmodel';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent {
  constructor(private oleoService: OleoService, private alertController: AlertController, private router: Router) { }

  oleos: any;
  roleMessage = '';

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  ngOnInit() {
    setTimeout(() => {
      this.obterOleos();
    }, 500);

  }

  obterOleos() {
    this.oleoService.get().subscribe(
      data => {
        this.oleos = data as Oleo;
      }
    );
    console.log('aqui!!!!!');
  }

  excluirOleo(id: any) {
    this.oleoService.deletar(`/${id}`).subscribe(
      data => {
        this.presentAlert();
      }
    );
  }

  async presentAlertConfirmacao(id: any) {
    const alert = await this.alertController.create({
      header: 'Tem certeza que deseja excluir o oleo!',
      subHeader: 'Essa ação não poderá ser desfeita!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });
    await alert.present();

    await alert.onDidDismiss().then((data) => {
      const role = data.role;
      if (role === 'confirm') {
        this.excluirOleo(id);
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Obrigado!',
      subHeader: 'Oleo excluído com sucesso!',
      message: 'Obrigado!',
      buttons: ['OK'],
    });
    await alert.present();
    await alert.onDidDismiss().then((data) => {
      setTimeout(() => {
        this.obterOleos();
      }, 300);
    });
  }
}
