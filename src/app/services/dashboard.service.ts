// BIG5-69 - Ajouter tri des comptes rendus
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private apiUrl = 'http://localhost/pfe-backend';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
  }

  getDashboardData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/dashboard.php`, {
      headers: this.getHeaders()
    });
  }

  savePreferences(prefs: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/preferences.php`, prefs, {
      headers: this.getHeaders()
    });
  }

  markNotificationRead(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/notifications.php`,
      { id }, { headers: this.getHeaders() }
    );
  }

  markAllNotificationsRead(): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/notifications.php`,
      { all: true }, { headers: this.getHeaders() }
    );
  }
}