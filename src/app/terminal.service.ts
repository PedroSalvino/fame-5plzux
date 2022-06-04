import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terminal, TerminalApiResponse } from '../interfaces';
import { GlobalService } from './global.service';

@Injectable()
export class TerminalService {
  terminais: Terminal[] = [];
  terminalPicked: Terminal = {} as Terminal;

  constructor(private http: HttpClient, public global: GlobalService) {}

  getTerminal(id: number) {
    this.http
      .get<Terminal>(`${this.global.api}/terminal/${id}`)
      .subscribe((data) => {
        if (data) this.terminalPicked = data;
      });
  }

  getTerminais() {
    this.http
      .get<TerminalApiResponse>(`${this.global.api}/terminal/page`)
      .subscribe((data) => {
        if (data) this.terminais = data.content;
      });
  }
}
