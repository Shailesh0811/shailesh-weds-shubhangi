import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FamilyMember {
  name: string;
  relation: string;
  icon: string;
}

interface FamilyGroup {
  side: string;
  label: string;
  color: string;
  icon: string;
  parents: FamilyMember[];
  members: FamilyMember[];
}

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {
  families: FamilyGroup[] = [
    {
      side: 'Groom\'s Family',
      label: 'Mohite Family',
      color: '#C9A84C',
      icon: 'fa-user-tie',
      parents: [
        { name: 'Sub Maj. Shivaji Kisan Mohite', relation: 'Father', icon: 'fa-user-tie' },
        { name: 'Mrs. Savita Shivaji Mohite', relation: 'Mother', icon: 'fa-user' },
      ],
      members: [
        { name: 'Miss. Monika Walke', relation: 'Sister', icon: 'fa-user' },
        { name: 'Mr. Sandeep Walke', relation: 'Brother in law', icon: 'fa-user-tie' },
        // { name: 'Mr. Suresh Mohite', relation: 'Uncle', icon: 'fa-user-tie' },
        // { name: 'Mrs. Lata Mohite', relation: 'Aunt', icon: 'fa-user' },
      ]
    },
    {
      side: 'Bride\'s Family',
      label: 'Pandit Family',
      color: '#E8738A',
      icon: 'fa-user-nurse',
      parents: [
        { name: 'Mr. Subhashrao Pandit Sir', relation: 'Father', icon: 'fa-user-tie' },
        { name: 'Mrs. Sangita Subhashrao Pandit', relation: 'Mother', icon: 'fa-user' },
      ],
      members: [
        { name: 'Miss. Sayli Pandit', relation: 'Sister', icon: 'fa-user' },
        { name: 'Miss. Khushi Pandit', relation: 'Sister', icon: 'fa-user' },
        // { name: 'Mr. Vinay Pandit', relation: 'Uncle', icon: 'fa-user-tie' },
        // { name: 'Mrs. Meena Pandit', relation: 'Aunt', icon: 'fa-user' },
      ]
    }
  ];
}
