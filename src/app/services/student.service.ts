import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost/backend/dashbord-backend/api/students';

  constructor(private http: HttpClient) {}

  createStudent(data: Student): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}