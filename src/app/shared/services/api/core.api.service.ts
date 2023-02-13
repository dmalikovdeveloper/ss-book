import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CoreApiService {
  private http = inject(HttpClient);

  constructor() {}

  private formatErrors(error: any) {
    return throwError(error.error.message);
  }

  private url(path: string): string {
    return `${environment.baseUrl}/${path}`;
  }

  protected get(path: string, id: number | null = null, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(this.url(id ? `${path}/${id}` : path), { params })
      .pipe(catchError(this.formatErrors));
  }

  protected put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(this.url(path), body).pipe(catchError(this.formatErrors));
  }

  protected post<P, R = {}>(path: string, body: P): Observable<R> {
    return this.http.post<R>(this.url(path), body).pipe(catchError(this.formatErrors));
  }

  protected delete(path: string, id: number): Observable<any> {
    return this.http.delete(this.url(`${path}/${id}`)).pipe(catchError(this.formatErrors));
  }
}
