import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Conferencia } from './conferencia';

@Injectable(
    {providedIn: "root"}
)
export class ConferenciaService {
private apiUrl: string = environment.baseUrl + 'conferencia';


constructor(private http: HttpClient) { }

getConferencias(): Observable<Conferencia[]>{
    return this.http.get<Conferencia[]>(this.apiUrl);
}

}
