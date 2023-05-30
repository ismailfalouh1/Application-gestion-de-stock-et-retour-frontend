import { Component, OnInit } from '@angular/core';
import {FournisseurDto} from '../../../../gs-api/src/models/fournisseur-dto';
import {Router} from '@angular/router';
import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';
import {ClientDto} from '../../../../gs-api/src/models/client-dto';

@Component({
  selector: 'app-page-aidemaga',
  templateUrl: './page-aidemaga.component.html',
  styleUrls: ['./page-aidemaga.component.scss']
})
export class PageAidemagaComponent implements OnInit {

  listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients(): void {
    this.cltFrsService.findAllClients()
    .subscribe(clients => {
      this.listClient = clients;
    });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauaidemaga']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
