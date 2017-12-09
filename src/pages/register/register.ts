import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NFC} from '@ionic-native/nfc';
import {Ndef} from '@ionic-native/nfc';
import{HTTP} from '@ionic-native/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
tag : Uint8Array;
rnummer: String;
name: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    if(this.nfc.enabled())
    {

      console.log("nfc is enabled!");
    }

    else
      console.log("nfc is not enabled :(");

      this.nfc.addTagDiscoveredListener(() => {
        console.log("added a TagDiscover listener")
        
      }, (err) => { 
        console.log(err);
      }).subscribe((event) => {
        console.log("Tag spotted!");
      });

    this.nfc.addNdefFormatableListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
       this.tag = event.tag.id;
       console.log("value: ");
       console.log(this.tag);
       console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
       console.log('dit is het R-Nummer: ', this.rnummer);
       console.log('dit is de naam: ', this.name);

       this.http.post('http://192.168.0.247:3000/tasks', 
       { 
         name : this.name,
         rnummer: this.rnummer
       }, 
       {
         headers: { 'Content-Type': 'application/json' }
       })
       .then(data => {
         console.log(data.data);
       }).catch(error => {
         console.log(error.status);
       });
    
    });

    //this.http.post("bardberry:4200", "hallo", "lol");
    /*this.http.get('http://ionic.io', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });*/

   
  }

}
