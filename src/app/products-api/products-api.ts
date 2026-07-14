import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductAPI } from '../services/product-api';

@Component({
  selector: 'app-products-api',
  imports: [],
  templateUrl: './products-api.html',
  styleUrl: './products-api.css',
})
export class ProductsAPI implements OnInit {
  products: any;

  showModal = false;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'danger' = 'success';

  constructor(
    private productAPIService: ProductAPI,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  protected handleDelete(product: any) {
    let confirmation = confirm('etes vous sur de vouloir suprrimer produit id :' + product.id);
    if (confirmation) {
      this.productAPIService.deleteProduct(product).subscribe({
        next: (response) => {
          this.getAllProducts();
          this.cdr.detectChanges();
          this.openModal('Succés', 'Produit id :'+
            product.id+' supprimer avec succes!', 'success');
        },
        error: (err) => {
          console.log(err);
          this.openModal(
            'Erreur', 'échec de la suppression product id :' +
            product.id + '. essayer encore.',  'danger',
          );
        },
      });
    }
  }

  getAllProducts() {
    this.productAPIService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.openModal('échec de recuperer les produits', err.message+'. essayer encore.', 'danger');
      },
    });
  }

  openModal(title: string, message: string, type: 'success' | 'danger') {
    this.modalTitle = title;
    this.modalMessage = message;
    this.modalType = type;
    this.showModal = true;
    this.cdr.detectChanges();
  }

  closeModal() {
    this.showModal = false;
    this.cdr.detectChanges();
  }
}
