import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NFC} from '@ionic-native/nfc';
import {Ndef} from '@ionic-native/nfc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
