import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashbord : boolean=true;
datalogs : boolean=false;
about : boolean=false;




  sensors= [
    "dht22",
    "ultrasonic",
    "gas",
    "capacitive",
    "flame",
    "light",
    "raindrop",
    "sound",
    "halleffect"
  ]

  dht22= [
    {
      "id": 1,
      "humidity": "34.5",
      "temperature": "32.5",
      "date": "5/14/2023",
      "time": "9:54 AM"
    },
    {
      "id": 2,
      "humidity": "48.2000007629",
      "temperature": "31.2999992371",
      "date": "05/15/2023",
      "time": "4:37 PM"
    },
    {
      "id": 3,
      "humidity": "47.2999992371",
      "temperature": "31.6000003815",
      "date": "05/14/2023",
      "time": "4:37 PM"
    },
    {
      "id": 4,
      "humidity": "47.2000007629",
      "temperature": "31.6000003815",
      "date": "03/14/2023",
      "time": "5:37 PM"
    },
    {
      "id": 5,
      "humidity": "47.0999984741",
      "temperature": "31.5",
      "date": "03/14/2023",
      "time": "6:37 PM"
    },
    {
      "id": 6,
      "humidity": "40.09589820122047",
      "temperature": "30.132552911654457",
      "date": "03/16/2023",
      "time": "2:05 AM"
    },
    {
      "id": 7,
      "humidity": "40.32932329762175",
      "temperature": "70.794211029303593",
      "date": "03/16/2023",
      "time": "2:05 AM"
    },
    {
      "id": 8,
      "humidity": "40.31360087822803",
      "temperature": "30.299252758942824",
      "date": "03/16/2023",
      "time": "2:05 AM"
    },
    {
      "id": 9,
      "humidity": "40.128999349186714",
      "temperature": "30.293352018242846",
      "date": "03/16/2023",
      "time": "2:05 AM"
    }
  ]
  circuit= [
    {
      "id": 1,
      "name": "vague",
      "etat": "0",
      "date": "6/14/2023",
      "time": "9:54 AM"
    },
    {
      "id": "2",
      "name": "eau",
      "etat": "1",
      "date": "6/18/2023",
      "time": "8:54 AM"
    },
    {
      "id": "3",
      "name": "integration",
      "etat": "0",
      "date": "6/20/2023",
      "time": "11:54 AM"
    },
    {
      "id": "4",
      "name": "cms",
      "etat": "1",
      "date": "6/22/2023",
      "time": "10:54 AM"
    },

  ]
constructor() {}

  ngOnInit(): void {


  }
  activedashbord(){
    this.datalogs=false;
    this.about=false;
    this.dashbord=true;

  }
  activedatalogs(){
    this.dashbord=false;
    this.about=false;
    this.datalogs=true;

  }
  activeabout(){
    this.dashbord=false;
    this.datalogs=false;
    this.about=true;
  }


}
