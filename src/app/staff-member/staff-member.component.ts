import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../shared/components/dialog-add-staff-member/dialog-add-staff-member.component';
import { StaffMember } from '../shared/models/staff-member.class';

@Component({
  selector: 'app-staff-member',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    DialogAddUserComponent,
  ],
  templateUrl: './staff-member.component.html',
  styleUrl: './staff-member.component.scss',
})
export class StaffMemberComponent {
  staffMember: StaffMember = new StaffMember();

  constructor(public dialog: MatDialog) {
    
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
