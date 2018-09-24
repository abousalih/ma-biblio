import {Element} from "../models/Element";

export class ElementService{

  bookList:Element[]=[
    {
      titre:'Programmer en Java 8',
      description:[
        'Langue : Fr',
        'Nombre de page :500 pages',
        'Etat : Neuf'
      ],
      isLend:false
    },
    {
      titre:'Programmer en PHP',
      description:[
        'Langue : Fr',
        'Nombre de page :250 pages',
        'Etat : Utilisé'
      ],
      isLend:false
    },{
      titre:'Apprendre Angular',
      description:[
        'Langue : Fr',
        'Nombre de page :100 pages',
        'Etat : Neuf'
      ],
      isLend:true
    },
  ];
  cdList:Element[]=[
    {
      titre:'CD:Programmer en Java 8',
      description:[
        'Langue : Fr',
        'Durée : 1h',
        'Niveau : Débutant'
      ],
      isLend:false
    },
    {
      titre:'CD :Programmer en PHP',
      description:[
        'Langue : Fr',
        'Durée : 1h30',
        'Niveau : Médium'
      ],
      isLend:true
    },{
      titre:'CD :Apprendre Angular',
      description:[
        'Langue : Fr',
        'Durée : 2h',
        'Niveau : Avancé'
      ],
      isLend:true
    },
  ];

  toggleLendElement(isBook :boolean,index:number){
    if(isBook){
      this.bookList[index].isLend=!this.bookList[index].isLend;
    }else{
      this.cdList[index].isLend=!this.cdList[index].isLend;
    }
  }
}
