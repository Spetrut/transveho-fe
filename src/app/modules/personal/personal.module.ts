import { NgModule } from '@angular/core';
import {
  PersonalRoutingModule,
  routedComponents
} from './personal-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@transveho-shared';
import { OccDriversModule } from '@transveho-core';
import { DriversService } from './drivers/service/drivers.service';
import { OccUsersModule } from '../../core/occ/services/users/occ-users.module';

@NgModule({
  declarations: [routedComponents],
  imports: [
    OccUsersModule,
    OccDriversModule,
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
  providers: [DriversService]
})
export class PersonalModule {}
