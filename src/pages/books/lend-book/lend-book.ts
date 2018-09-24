import {Component, OnInit} from "@angular/core";
import {Element} from "../../../models/Element";
import {ElementService} from "../../../services/element.service";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector:'page-lend-Book',
  templateUrl:'lend-Book.html'
})

export class LendBookPage implements OnInit{

  index:number
  book:Element;

  constructor(private elementService:ElementService,
              private navParams:NavParams,
              private viewCtrl:ViewController){}

  ngOnInit(){
    this.index=this.navParams.get('index');
    this.book=this.elementService.bookList[this.index];
  }


  onDismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLendBook(){
    this.elementService.toggleLendElement(true,this.index);
  }


}
