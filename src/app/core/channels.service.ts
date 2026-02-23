import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChannelsService {
  private baseUrl = '/api/v1/channels';

  constructor(private http: HttpClient) {}

  listChannels(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getChannel(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createChannel(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateChannel(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  deleteChannel(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  resetLimits(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/reset`, {});
  }

  getStats(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/stats`);
  }
}