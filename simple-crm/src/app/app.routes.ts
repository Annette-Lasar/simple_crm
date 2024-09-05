import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  {
    path: 'staff-member',
    component: StaffMemberComponent,
    title: 'Staff member',
  },
];
