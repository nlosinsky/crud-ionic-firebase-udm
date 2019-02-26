import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.shoppingList$ = this.shoppingListService
      .getShoppingList()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
  }

}
