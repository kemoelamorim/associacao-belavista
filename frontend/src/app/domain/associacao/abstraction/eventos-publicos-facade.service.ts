import { Injectable } from '@angular/core';
import { EventosPublicosCoreService } from '../core/eventos-publicos-core.service';

@Injectable({
  providedIn: 'root'
})
export class EventosPublicosFacadeService {

  constructor(
    private eventosPublicosService:EventosPublicosCoreService
  ) { }
  burcaEventos(){
    return this.eventosPublicosService.getEvetos()
  }
}
