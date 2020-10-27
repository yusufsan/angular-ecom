import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface CardDet{
  cardHeader : string;
  Fees      : string;
  Duration  :string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {

  public menuBtName: Array<any> = [];
  public totalCardDet : Array<any> = [];
  public totAmt : number =0 ;
  public applnUrl :string;
  public cardDetils: Array<any> = 
  [ 
    { cardHeader: 'Angular',    image: '/assets/images/angular.png', courseName: 'Angular',   Duration: "2 Months",   Fees: 5000 },
    { cardHeader: 'Type Script', image: '/assets/images/ts.png',  courseName: 'Type_Script', Duration: "3 Weeks", Fees: 2000 },
    { cardHeader: 'Java Script', image: '/assets/images/js.jpg',     courseName: 'Java_Script', Duration: "1 Months", Fees: 3000 }
  ]

  
  displayedColumns: string[] = ['cardHeader', 'Fees', 'Duration' ,'quantity'];
  dataSource: MatTableDataSource<CardDet>;
  constructor() { }

  ngOnInit() {
    if (this.cardDetils) {
      this.menuBtName.push(this.cardDetils[0])
     
    }
    this.applnUrl = window.origin;
    this.dataSource = new MatTableDataSource(this.totalCardDet);
  }
  AddtoCard( row ){
  this.totalCardDet.push( row);
  this.totAmt = this.totAmt + Number(row.Fees); 
  this.dataSource = new MatTableDataSource(this.totalCardDet);
  let AddtoCardBtn  : any= document.querySelector('#' +row.courseName)
  AddtoCardBtn.disabled = true
  }
  submit(){
    window.open("https://www.thank-you-template.com/wp-content/uploads/2018/01/Depositphotos_143065529_m-2015.jpg")
  }
  firstArr() {
    if (this.menuBtName && this.cardDetils) {
      for (let i = 0; i < this.cardDetils.length; i++) {
        if (this.cardDetils[i].courseName == this.menuBtName[0].courseName) {
                  if (i > 0) {
            this.menuBtName = []
            this.menuBtName.push(this.cardDetils[i - 1])
            return false;
          }
        }
      }
    }
  }
  lastArr() {
    if (this.menuBtName && this.cardDetils) {
      let totalCardCount = this.cardDetils.length - 1
      for (let i = 0; i < this.cardDetils.length; i++) {
        if (this.cardDetils[i].courseName == this.menuBtName[0].courseName) {          
          if (totalCardCount != i) {
            this.menuBtName = []
            this.menuBtName.push(this.cardDetils[i + 1])
            return false;
          }
        }
      }
    }
  }
}
