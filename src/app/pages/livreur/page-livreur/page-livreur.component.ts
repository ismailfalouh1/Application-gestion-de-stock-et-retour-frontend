import { Component, OnInit } from '@angular/core';
import {FournisseurDto} from '../../../../gs-api/src/models/fournisseur-dto';
import {Router} from '@angular/router';
import {CltfrsService} from '../../../services/cltfrs/cltfrs.service';

@Component({
  selector: 'app-page-livreur',
  templateUrl: './page-livreur.component.html',
  styleUrls: ['./page-livreur.component.scss']
})
export class PageLivreurComponent implements OnInit {


  listFournisseur: Array<FournisseurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.cltFrsService.findAllFournisseurs()
    .subscribe(fournisseurs => {
      this.listFournisseur = fournisseurs;
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaulivreur']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }

}
