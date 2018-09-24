import {Component, OnInit} from "@angular/core";
import {Element} from "../../../models/Element";
import {NavParams, ViewController} from "ionic-angular";
import {ElementService} from "../../../services/element.service";

@Component({
  selector:'page-lend-cd',
  templateUrl:'lend-cd.html'
})

export class LendCdPage implements OnInit{

  index:number
  cd:Element;

  constructor(private elementService:ElementService,
    private navParams:NavParams,
    private viewCtrl:ViewController){}

  ngOnInit(){
    this.index=this.navParams.get('index');
    this.cd=this.elementService.cdList[this.index];
  }


  onDismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLendCd(){
    this.elementService.toggleLendElement(false,this.index);
  }


}
