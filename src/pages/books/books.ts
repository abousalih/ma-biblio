import {Component} from "@angular/core";
import {Element} from "../../models/Element";
import {ElementService} from "../../services/element.service";
import {MenuController, ModalController} from "ionic-angular";
import {LendBookPage} from "./lend-book/lend-book";

@Component({
  selector:'page-books',
  templateUrl:'books.html'
})

export class BooksPage{

  bookList:Element[];

  constructor(private elemntService:ElementService,
              private modalCtrl:ModalController,
              private menuCtrl:MenuController){}

  ionViewWillEnter(){
    this.bookList=this.elemntService.bookList.slice();
  }

  onLoadBook(index:number){
    let modal=this.modalCtrl.create(LendBookPage,{index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }



}
