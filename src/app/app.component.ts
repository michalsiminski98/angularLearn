import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2021-01-02',
      done: false,
    },
    {
      name: 'Sprzątanie',
      deadline: '2020-03-02',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze',
        date: new Date(),
      };
    }, 500);
  }
}
