import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NplistPage } from '../nplist/nplist';
import { ItineraryPage } from '../itinerary/itinerary';

/**
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }

  toNationalParkList(){
    this.navCtrl.push(NplistPage);
  }

  toShoppingCart(){
    this.navCtrl.push(ItineraryPage);
  }
}
