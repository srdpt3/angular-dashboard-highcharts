import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  ticker: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, ticker: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, ticker: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, ticker: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, ticker: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, ticker: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, ticker: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, ticker: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, ticker: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, ticker: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, ticker: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, ticker: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, ticker: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, ticker: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, ticker: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, ticker: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, ticker: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, ticker: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, ticker: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, ticker: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, ticker: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  treeMap= [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'ticker'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.treeMap = this.dashboardService.treeMap();


    this.dataSource.paginator = this.paginator;
  }

}
