import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
interface City {
  name: string;
  code: string;
}
interface Branch {
  name: string;
  code:string
}

@Component({
  selector: 'app-bidspayable-list-page',
  standalone: true,
  imports: [ButtonModule,BreadcrumbModule, BadgeModule, MenuModule,DropdownModule,FormsModule,CalendarModule],
  templateUrl: './bidspayable-list-page.component.html',
  styleUrl: './bidspayable-list-page.component.css',
  providers:[DatePipe]
})
export class BidspayableListPageComponent {
  items: MenuItem[];
  currentDate: string| undefined;
  currentTime: string | undefined;
  intervalId: any;
  today: number = Date.now();
selectedBranch: Branch| any;
 
  constructor() {
    this.items = [
      { label: 'BP-SDV_199', url: '#' },
      { label: 'Property Verification Request', url: '#' }
    ];
    
  }
  date: Date | undefined;
  cities: City[] | any;
  Branches: Branch[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.Branches=[
         
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'}

        ];
    }

  clickFunction(){
    alert("that was awesome")
  }
}