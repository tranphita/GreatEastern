import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('teams') teams!: ElementRef;
  @HostBinding('style.--numberto1') numberto1: Number | undefined;
  @HostBinding('style.--numberto2') numberto2: Number | undefined;
  @HostBinding('style.--numberto3') numberto3: Number | undefined;
  @HostBinding('style.--numberto4') numberto4: Number | undefined;
  @HostBinding('style.--numberto5') numberto5: Number | undefined;
  @HostBinding('style.--numberto6') numberto6: Number | undefined;

  emp: any;
  clients: any;
  activeTab = 'grid';
  selectedTeam = '';

  employees = [
    { name: "Brianna", age: "25" },
    { name: "Axle", age: "29" },
    { name: "David", age: "22" },
    { name: "Brooklyn", age: "23" },
    { name: "Camila", age: "24" },
    { name: "Abigail", age: "25" },
    { name: "Charlotte", age: "28" }
  ];

  Pies = [
    { id: "pie1", value: 32 },
    { id: "pie2", value: 49 },
    { id: "pie3", value: 49 },
    { id: "pie4", value: 89 },
    { id: "pie5", value: 75 },
    { id: "pie6", value: 50 },
  ];

  constructor() {
    this.emp = this.employees
      .reduce((acc: any[], curr) => {
        const idx = acc.findIndex(e => e.alphabet === curr.name[0]);
        if (idx === -1) {
          acc.push({ alphabet: curr.name[0], record: [curr] });
        } else {
          acc[idx].record.push(curr);
          acc[idx].record.sort((r1: { name: number; }, r2: { name: number; }) => (r1.name > r2.name ? 1 : -1));
        }
        return acc;
      }, [])
      .sort((e1, e2) => (e1.alphabet > e2.alphabet ? 1 : -1));


    this.clients = [
      { name: "grid", value: "group 1" },
      { name: "grid1", value: "group 2" },
      { name: "grid2", value: "group 3" }
    ];

    this.numberto1 = this.Pies[0].value;
    this.numberto2 = this.Pies[1].value;
    this.numberto3 = this.Pies[2].value;
    this.numberto4 = this.Pies[3].value;
    this.numberto5 = this.Pies[4].value;
    this.numberto6 = this.Pies[5].value;

  }

  list(activeTab: string) {
    this.activeTab = activeTab;
  }

  onSelected(e: any): void {
    this.activeTab = e.target.value;
    this.selectedTeam = this.teams.nativeElement.value;
  }

}
