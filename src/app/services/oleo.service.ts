import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OleoService {
  path: string = 'oleos';
  constructor(public httpService: HttpService) {
  }

  post(dados: any) {
    let dadosForm = JSON.parse(JSON.stringify(dados))
    delete dadosForm._id 
    return this.httpService.postSemHeader(this.path, dadosForm);
  }

  put(dados: any) {
    let dadosForm = JSON.parse(JSON.stringify(dados));
    return this.httpService.put(this.path, dados._id, dadosForm);
  }


  getId(id: string) {
    return this.httpService.get(this.path + id);
  }

  get() {
    return this.httpService.get(this.path);
  }

  deletar(id: string) {
    return this.httpService.delete(this.path + id);
  }
}
