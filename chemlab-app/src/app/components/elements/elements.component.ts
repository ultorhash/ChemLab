import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ElementsService } from './elements.service';
import { IElement } from 'src/app/interfaces/element.interface';
import { retry, tap } from 'rxjs/operators';
import { ElementColumns } from 'src/app/enums/element-column.enum';
import { ISearchInput } from '../../interfaces/search.interface';
import { Icons } from '../../enums/icon.enum';
import { ElementModalComponent } from '../element-modal/element-modal.component';
import { Store } from '@ngxs/store';
import { SetElements, GetElements } from 'src/app/store/actions/elements.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  private _elementsSubscription: Subscription = new Subscription();
  private _storeSubscription: Subscription = new Subscription();
  private _elements$: Observable<IElement[]>;
  
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
  
  dataReady: boolean = false;
  settingsIcon: Icons = Icons.Menu;

  constructor(
    private elementsService: ElementsService,
    private store: Store,
    public dialog: MatDialog
  ) {
    this._elements$ = this.store.select(state => state.elements.elements);
  }

  ngOnInit(): void {
    this.loadElements();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadElements(): void {
    this._elementsSubscription = this._elements$.subscribe(elements => {
      if (elements.length !== 0) {
        this.dataSource.data = elements;
        this.dataReady = true;
      } else {
        this._storeSubscription = this.elementsService.getElements().pipe(
          tap(res => {
            this.dataSource.data = res;
            this.store.dispatch(new SetElements(res))
            this.dataReady = true;
          }),
          retry(3)
        )
        .subscribe();
      }
    });
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

  ngOnDestroy(): void {
    this._elementsSubscription.unsubscribe();
    this._storeSubscription.unsubscribe();
  }
}