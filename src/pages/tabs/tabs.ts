import {Component} from "@angular/core";
import {BooksPage} from "../books/books";
import {CdsPage} from "../cds/cds";

@Component({
  selector:'page-tabs',
  templateUrl:'tabs.html'
})

export class TabsPage{

  booksPage=BooksPage;
  cdsPage=CdsPage;
}
