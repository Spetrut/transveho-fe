import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OccDriversService, OccUsersService, Personal } from '@transveho-core';

@Injectable()
export class DriversService {
  constructor(
    private readonly occUsersService: OccUsersService,
    private readonly occDriversService: OccDriversService
  ) {}

  public loadAllDrivers(): Observable<Personal[]> {
    return this.occDriversService.getAllDrivers();
  }

  public deleteDriver(username: string): Observable<any> {
    return this.occUsersService.deleteUser(username);
  }

  public updateDriver(
    id: number,
    username: string,
    driver: Personal
  ): Observable<any> {
    return this.occUsersService.updateUser(id, username, driver);
  }

  public createDriver(driver: Personal): Observable<any> {
    return this.occUsersService.createUser(driver);
  }
}
