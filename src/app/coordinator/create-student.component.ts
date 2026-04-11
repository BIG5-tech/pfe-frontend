import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  form: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.form = this.fb.group({
      nom:            ['', [Validators.required, Validators.minLength(2)]],
      prenom:         ['', [Validators.required, Validators.minLength(2)]],
      email:          ['', [Validators.required, Validators.email]],
      student_number: ['', [Validators.required]],
      department:     ['', Validators.required],
      year_of_study:  ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.studentService.createStudent(this.form.value).subscribe({
      next: (res) => {
        this.successMessage = 'Compte créé ! Mot de passe temporaire : ' + res.tempPassword;
        this.form.reset();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la création.';
        this.loading = false;
      }
    });
  }
}
