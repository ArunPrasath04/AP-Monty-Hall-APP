import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable()
export class PlayService {
    private _baseUrl = '';
    private _apiUrl = '';

    constructor (private http: HttpClient) {
        this._baseUrl = environment.baseApiUrl;
        this._apiUrl = `${this._baseUrl}/MontyHall`;
    }

    montyDecides (model: any) : Observable<any> {
        return this.http.post(`${this._apiUrl}/MontyDecides`, model)
            .pipe(
                map((response: any) => response),
                catchError(error => throwError(error))
            );
    }

}