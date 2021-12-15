import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IElement } from "src/app/interfaces/element.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  
  constructor(private http: HttpClient) { }

  getElements(): Observable<IElement> {
    return this.http.get<IElement>(`${environment.apiURL}/api/login/auth`);
  }
}