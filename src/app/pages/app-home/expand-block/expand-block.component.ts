import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-block',
  templateUrl: './expand-block.component.html',
  styleUrls: ['./expand-block.component.scss']
})
export class ExpandBlockComponent implements OnInit {

  constructor() { }

  items = [
    {
      time: '1 AM',
      temperature: 13
    },
    {
      time: '2 AM',
      temperature: 13
    },
    {
      time: ' 3AM',
      temperature: 13
    },
    {
      time: '4 AM',
      temperature: 13
    },
    {
      time: '5 AM',
      temperature: 13
    },
    {
      time: '6 AM',
      temperature: 13
    },
    {
      time: '7 AM',
      temperature: 13
    },
    {
      time: '8 AM',
      temperature: 13
    },
    {
      time: '9 AM',
      temperature: 13
    },
    {
      time: '10 AM',
      temperature: 13
    },
    {
      time: '11 AM',
      temperature: 13
    },
    {
      time: '12 AM',
      temperature: 13
    },
    {
      time: '1 PM',
      temperature: 13
    },
  ]
  ngOnInit(): void {
  }

}
