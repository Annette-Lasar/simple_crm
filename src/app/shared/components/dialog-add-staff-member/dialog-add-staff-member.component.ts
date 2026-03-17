import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { StaffMember} from '../../models/staff-member.class';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-add-staff-member.component.html',
  styleUrl: './dialog-add-staff-member.component.scss',
})
export class DialogAddUserComponent {
  staffMember: StaffMember = new StaffMember();

  saveUser() {
    console.log(this.staffMember);
  }
}
