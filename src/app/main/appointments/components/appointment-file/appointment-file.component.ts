import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'appointment-file',
  templateUrl: './appointment-file.component.html',
  styleUrls: ['./appointment-file.component.scss']
})
export class AppointmentFileComponent implements OnInit {

  constructor() { }
 @Input () file;
  ngOnInit(): void {
  }

}
