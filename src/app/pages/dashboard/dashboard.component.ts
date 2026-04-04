import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = true;
  savingPrefs = false;
  projets: any[] = [];
  comptesRendus: any[] = [];
  notifications: any[] = [];
  nonLues = 0;
  preferences: any = { filtre_projet: 'tous', tri_comptes_rendus: 'date_desc' };
  currentUser: any;

  constructor(
    private dashboardService: DashboardService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.auth.getCurrentUser();
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.projets       = data.projets;
        this.comptesRendus = data.comptes_rendus;
        this.notifications = data.notifications;
        this.nonLues       = data.non_lues;
        this.preferences   = data.preferences;
        this.loading       = false;
      },
      error: () => {
        this.loading = false;
        this.auth.logout();
      }
    });
  }

  savePreferences(): void {
    this.savingPrefs = true;
    this.dashboardService.savePreferences(this.preferences).subscribe({
      next: () => {
        this.savingPrefs = false;
        this.loadDashboard();
      },
      error: () => { this.savingPrefs = false; }
    });
  }

  markRead(notif: any): void {
    if (notif.lu) return;
    this.dashboardService.markNotificationRead(notif.id).subscribe({
      next: () => {
        notif.lu = 1;
        this.nonLues = Math.max(0, this.nonLues - 1);
      }
    });
  }

  markAllRead(): void {
    this.dashboardService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.lu = 1);
        this.nonLues = 0;
      }
    });
  }

  logout(): void {
    this.auth.logout();
  }
}