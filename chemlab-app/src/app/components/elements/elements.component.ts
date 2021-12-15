import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ElementsService } from './elements.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { map } from 'rxjs/operators';
import { ElementColumns } from 'src/app/enums/element-column.enum';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  displayedColumns = [
    ElementColumns.Name,
    ElementColumns.Symbol,
    ElementColumns.AtomicNumber,
    ElementColumns.AtomicMass
  ];
  dataSource = new MatTableDataSource<IElement>();

  constructor(private elementsService: ElementsService) { }

  ngOnInit(): void {
    this.loadElements();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadElements(): void {
    this.elementsService.getElements().pipe(
      map(res => {
        this.dataSource.data = res;
      })
    )
    .subscribe();
  }

  applyFilter(event: Event): void {
    const { target } = event;
    const filterValue: string = (target as HTMLInputElement).value;
    filterValue.trim();
    filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
