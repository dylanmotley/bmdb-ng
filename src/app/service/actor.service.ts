import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

const URL: string = 'http://localhost:8080/api/actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(
    private http: HttpClient
  ) { }

 list(): Observable<Actor[]> {
   return this.http.get(URL+'/') as Observable<Actor[]>;
 }

 get(id: number): Observable<Actor> {
  return this.http.get(URL+'/'+id) as Observable<Actor>;
}

create(actor: Actor): Observable<Actor> {
 return this.http.post(URL+"/", actor) as Observable<Actor>;
}

edit(actor: Actor): Observable<Actor> {
 return this.http.put(URL+"/", actor) as Observable<Actor>;
}

delete(id: number): Observable<Actor> {
 return this.http.delete(URL+'/'+id) as Observable<Actor>;
}
}
