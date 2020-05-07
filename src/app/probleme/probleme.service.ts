import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICategorie } from './probleme';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private URLDonnees ='api/categories';

  constructor(private http: HttpClient) { }

  obtenirCategories(): Observable<ICategorie[]> {

    return this.http.get<ICategorie[]>(this.URLDonnees).pipe(
    tap(data=> console.log('obtenirCategories: ' + JSON.stringify(data))),
    catchError(this.handleError)
    );
  }
    private handleError(err:HttpErrorResponse) {

      let errorMessage = '';

      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
      } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

      }
      console.error(errorMessage);
      return throwError(errorMessage);

    }

  }
   



