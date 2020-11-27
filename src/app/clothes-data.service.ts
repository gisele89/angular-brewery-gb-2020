import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';
import { Clothes } from './clothes-list/Clothes';
const URL = 'https://5fc14c2dcb4d020016fe6853.mockapi.io/api/v1/clothes';
@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClientModule) { }

  public getAll(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(URL);
  }
}
