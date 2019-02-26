import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ToastService } from '../../services/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListService: ShoppingListService,
    private toast: ToastService
  ) {}

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

  saveItem(item: Item) {
    this.shoppingListService.editItem(item).then(res => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeItem(item: Item) {
    this.shoppingListService.removeItem(item).then(res => {
      this.toast.show(`${item.name} deleted!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

}
