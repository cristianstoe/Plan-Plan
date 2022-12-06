import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private http: HttpClient) { }

  getAll(baseUrl): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id, baseUrl): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data, baseUrl): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(cpf, data, baseUrl): Observable<any> {
    return this.http.put(`${baseUrl}/${cpf}`, data);
  }

  delete(id, baseUrl): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(baseUrl): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByInstrument(instrument, baseUrl): Observable<any> {
    return this.http.get(`${baseUrl}/10?instrument=${instrument}`);
  }
}
