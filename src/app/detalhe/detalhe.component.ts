import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    this.obterOleos();
  }

  obterOleos() {
    this.oleoService.get().subscribe(
      data => {
        this.oleos = data as Oleo;
      }
    );
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
      header: 'Oleo excluído com sucesso!',
      // subHeader: 'Important message',
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
