import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsinfoPage } from "../newsinfo/newsinfo";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-news",
  templateUrl: "news.html"
})
export class NewsPage {
  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [111, 333, 444];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewsPage");
  }
  goInfo() {
    this.navCtrl.push(NewsinfoPage);
  }
}
