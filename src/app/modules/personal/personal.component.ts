import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { PersonalService } from './service/personal.service';
import { of, Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { PersonalEntriesPage } from '@transveho-core';
import { PersonalEntry } from '@transveho-core';
import { columnsToDisplay } from './columns-to-display';

@Component({
  selector: 'personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnDestroy, AfterViewChecked {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource: PersonalEntry[];
  columnsToDisplay = columnsToDisplay;
  headerColumns = columnsToDisplay.map(column => column.elementPropertyName);
  dispatcherServiceSubscription: Subscription;
  selection = new SelectionModel<PersonalEntry>(true, []);

  constructor(
    private dispatcherService: PersonalService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.dispatcherServiceSubscription = this.paginatorComponent.matPaginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.dispatcherService.loadPaginatedEntries(
            this.paginatorComponent.matPaginator.pageIndex
          );
        }),
        map((page: PersonalEntriesPage) => {
          this.pageIndex = page.pageNumber;
          return page.dispatcherEntries;
        }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(dispatcherEntries => (this.dataSource = dispatcherEntries));
    this.cdRef.detectChanges();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PersonalEntry): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.indexOf(row) + 1
    }`;
  }

  ngOnDestroy(): void {
    if (this.dispatcherServiceSubscription) {
      this.dispatcherServiceSubscription.unsubscribe();
    }
    this.cdRef.detach();
  }

  openActionPopup(clickEvent) {
    clickEvent.stopPropagation();
  }
}
