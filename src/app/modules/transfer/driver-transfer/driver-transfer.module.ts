import { NgModule } from '@angular/core';
import { CurrentTransferComponent } from './current-transfer/current-transfer.component';
import { CurrentTransferService } from './current-transfer/service/current-transfer.service';
import { CurrentTransferResolver } from './current-transfer/resolver/current-transfer.resolver';
import { OccDriverTransferModule } from '@transveho-core';
import { SharedModule } from '@transveho-shared';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';

@NgModule({
  imports: [
    OccDriverTransferModule,
    SharedModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzKKVgFL89spGJqRlR6yFLP0bEjM1XaNY'
    })
  ],
  declarations: [CurrentTransferComponent],
  providers: [CurrentTransferService, CurrentTransferResolver]
})
export class DriverTransferModule {}
