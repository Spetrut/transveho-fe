import { NgModule } from '@angular/core';
import {
  PersonalRoutingModule,
  routedComponents
} from './personal-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@transveho-shared';
import { PersonalService } from './service/personal.service';

@NgModule({
  declarations: [routedComponents],
  imports: [
    PersonalRoutingModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatCheckboxModule,
    MdePopoverModule,
    MatCardModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [PersonalService]
})
export class PersonalModule {}