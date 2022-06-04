import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo, CargoApiResponse } from '../interfaces';
import { GlobalService } from './global.service';

@Injectable()
export class CargoService {
  cargos: Cargo[] = [];
  cargoPicked: Cargo = {} as Cargo;

  constructor(private http: HttpClient, public global: GlobalService) {}

  getCargo(id: number) {
    this.http.get<Cargo>(`${this.global.api}/cargo/${id}`).subscribe((data) => {
      if (data) this.cargoPicked = data;
    });
  }

  getCargos() {
    this.http
      .get<CargoApiResponse>(`${this.global.api}/cargo/page`)
      .subscribe((data) => {
        if (data) this.cargos = data.content;
      });
  }
}
