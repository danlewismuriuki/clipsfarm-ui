import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private baseUrl = '/api/v1/jobs';

  constructor(private http: HttpClient) {}

  listJobs(status?: string, limit?: number): Observable<any> {
    const params: any = {};
    if (status) params.status = status;
    if (limit) params.limit = limit;
    return this.http.get(this.baseUrl, { params });
  }

  getJob(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}