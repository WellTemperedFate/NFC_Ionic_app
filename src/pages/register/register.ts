import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NFC} from '@ionic-native/nfc';
import {Ndef} from '@ionic-native/nfc';
import{HTTP} from '@ionic-native/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
tag : Uint8Array;
rnummer: String;
name: String;
showSymbol: Boolean = false;
test: String;
ip: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef, private http: HTTP) {
    
  }

  //Sends the post data to the server!
  SendPostData(){
    this.http.post(this.ip.toString(),  //http://10.207.7.31:3000/tasks
    { 
      name : this.name,
      rnummer: this.rnummer,
      tagid: this.tag
    }, 
    {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(data => {
      console.log(data.data);
      alert("Data has been successfully posted! :D");
    }).catch(error => {
      console.log(error.status);
      alert("Failed to make post request :(");
    });

    //console.log("button Clicked");
  }


  //Event handler for when the page is loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    if(this.nfc.enabled())
    {
      console.log("nfc is enabled!");
      this.nfc.addTagDiscoveredListener(() => {
        console.log("added a TagDiscover listener");
        
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
      this.tag = null;
      console.log('received ndef message. the tag contains: ', event.tag);
       this.tag = event.tag.id;
       if(this.tag != null)
       {
         this.showSymbol = true;
       }

       else
       {
          this.showSymbol = false;
       }
       console.log("value: ");
       console.log(this.tag);
       console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
       console.log('dit is het R-Nummer: ', this.rnummer);
       console.log('dit is de naam: ', this.name);    
    });
    }

    else
      console.log("nfc is not enabled :(");

     
    
   
  }

}
