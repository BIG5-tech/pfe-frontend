import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) {}

  createStudent(data: Student): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: Bearer + token
    });
    return this.http.post(this.apiUrl, data, { headers });
  }
}
