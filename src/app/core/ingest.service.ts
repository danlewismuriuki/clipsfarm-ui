import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IngestService {
  private baseUrl = '/api/v1/ingest';

  constructor(private http: HttpClient) {}

  submitUrls(urls: string[], batch_id?: string): Observable<any> {
    return this.http.post(this.baseUrl, { urls, batch_id });
  }

  getBatchStatus(batch_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/batch/${batch_id}`);
  }
}