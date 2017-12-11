import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

/**
 * Generated class for the WritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write',
  templateUrl: 'write.html',
})
export class WritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef) {
  }
  tag : Uint8Array;
  showSymbol: Boolean = false;
  status: String;
  input: String;
  writeReady: Boolean = false;


  ionViewDidLoad() {
    console.log('ionViewDidLoad WritePage');

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
        this.status = "Tag was placed, ready to write";
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
         this.writeReady = true;
       }

       else
       {
          this.showSymbol = false;
       }
       console.log("value: ");
       console.log(this.tag);
       console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id)); 
    });

  
  }

  writeNFC(){
    if(this.writeReady == true)
      {
        this.nfc.write(this.ndef.textRecord(this.input.toString()));
        this.writeReady = false;
        this.showSymbol = true;
        alert("Message has been written");
      }

    else
      alert("please place a tag before trying to write!");
  }
}

