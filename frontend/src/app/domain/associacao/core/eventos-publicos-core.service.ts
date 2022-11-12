import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoInterface } from '../model/interface/evento-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosPublicosCoreService {

  constructor(
    private http : HttpClient
  ) { }
  getEvetos():Observable<EventoInterface[]>{
    return this.http.get<EventoInterface[]>('http://localhost:44315')
  }
}
