import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class ShoppingListService {

  private shoppingListRef = this.db.list<Item>('shopping-list');

  constructor(
    private db: AngularFireDatabase
  ) {}

  getShoppingList() {
    return this.shoppingListRef;
  }

  addItem(item: Item) {
    return this.shoppingListRef.push(item);
  }

  editItem({key, ...data}: Item) {
    return this.shoppingListRef.update(key, data);
  }

  removeItem(item: Item) {
    return this.shoppingListRef.remove(item.key);
  }
}
