import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe } from "@angular/common";
import { Smartphone } from "../Shared/Models/Smartphones";
import { SmartphoneListItemComponent } from "../smartphone-list-item/smartphone-list-item.component";
import { SmartphoneService } from "../Services/smartphone.service";
import { Router, RouterLink } from "@angular/router";
import { SmartphoneDetailsPipe } from "../pipes/smartphone-details.pipe";
import { HoverHighlightDirective } from "../directives/hover-highlight.directive";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    NgClass,
    NgOptimizedImage,
    RouterLink,
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    SmartphoneDetailsPipe,
    HoverHighlightDirective,
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  displayColumns: string[] = ['serialNumber', 'brand', 'storage', 'releaseDate', 'price'];
  smartphones: Smartphone[] = [];
  dataSource: MatTableDataSource<Smartphone> = new MatTableDataSource(this.smartphones);
  error: string | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private smartphoneService: SmartphoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: Smartphone[]) => {
        this.smartphones = data;
        this.error = null;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        this.error = 'Error fetching smartphones';
        console.error("Error fetching smartphones", err);
      },
      complete: () => console.log("Smartphone data fetch complete!")
    });
  }

  selectedSmartphone?: Smartphone;
  selectSmartPhone(phone: Smartphone): void {
    this.selectedSmartphone = phone;
  }

  editSmartphone(id: number): void {
    this.router.navigate(['/modify-list-item', id]);
  }

  onDelete(id: number): void {
    this.smartphones = this.smartphones.filter(smartphone => smartphone.id !== id);
    this.dataSource.data = this.smartphones;
  }
}
