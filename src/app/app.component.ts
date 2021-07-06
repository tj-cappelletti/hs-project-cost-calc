import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  averageMaterialCost: number = 0;
  averageProductCost: number = 0;
  averageProductMarkup: number = 0;
  totalMaterials: number = 0;
  totalProducts: number = 0;
}
