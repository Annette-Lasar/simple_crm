import { StaffMemberData } from '../interfaces/staff-member-data.interface';

export class StaffMember {
  firstName: string = '';
  lastName: string = '';
  birthDate?: Date;
  eMailAddress: string = '';
  street?: string = '';
  zipCode?: number = undefined;
  city?: string = '';

  constructor(obj?: StaffMemberData) {
    if (obj) {
      this.firstName = obj.firstName || '';  
      this.lastName = obj.lastName || '';
      this.birthDate = obj.birthDate ?? undefined;  
      this.eMailAddress = obj.eMailAddress || '';
      this.street = obj.street || '';
      this.zipCode = obj.zipCode ?? undefined;
      this.city = obj.city || '';
    }
  }
}
