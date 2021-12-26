import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ElementsService } from './elements.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { tap } from 'rxjs/operators';
import { ElementColumns } from 'src/app/enums/element-column.enum';
import { ISearchInput } from '../../interfaces/search.interface';
import { Icons } from '../../enums/icon.enum';
import { ElementModalComponent } from '../element-modal/element-modal.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  dataSource = new MatTableDataSource<IElement>();
  displayedColumns = [
    ElementColumns.Name,
    ElementColumns.Symbol,
    ElementColumns.AtomicNumber,
    ElementColumns.AtomicMass,
    ElementColumns.State,
    ElementColumns.Details
  ];
  search: ISearchInput = {
    placeholder: 'Search element ...',
    value: ''
  };
  
  settingsIcon = Icons.Menu;

  constructor(
    private elementsService: ElementsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadElements();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadElements(): void {
    this.elementsService.getElements().pipe(
      tap(res => {
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

  clearFilter(): void {
    this.dataSource.filter = '';
    this.search.value = '';
  }

  openModal(element: IElement): void {
    const dialogRef = this.dialog.open(ElementModalComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe();
  }
}