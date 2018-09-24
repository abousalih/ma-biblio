import {Component} from "@angular/core";
import {Element} from "../../models/Element";
import {MenuController, ModalController} from "ionic-angular";
import {ElementService} from "../../services/element.service";
import {LendBookPage} from "../books/lend-book/lend-book";
import {LendCdPage} from "./lend-cd/lend-cd";

@Component({
  selector:'page-cds',
  templateUrl:'cds.html'
})

export class CdsPage{

  cdList:Element[];

  constructor(private elemntService:ElementService,
              private modalCtrl:ModalController,
              private menuCtrl:MenuController){}

  ionViewWillEnter(){
    this.cdList=this.elemntService.cdList.slice();
  }

  onLoadCd(index:number){
    let modal=this.modalCtrl.create(LendCdPage,{index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
