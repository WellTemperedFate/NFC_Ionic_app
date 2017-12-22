import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

/**
 * Generated class for the WritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-write',
  templateUrl: 'write.html',
})
export class WritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef) {
  }
  tag : Uint8Array;
  status: String;
  input: String;



  ionViewDidLoad() {
    console.log('ionViewDidLoad WritePage');
    
    if(this.nfc.enabled())
    {
      console.log("nfc is enabled!");
    }

    else
      console.log("nfc is not enabled :(");
    
        
      }

      writeNFC()
      {
        if(this.input != "" && this.input != null && this.nfc.enabled())
        {
        this.status = "approach a tag!";
        this.nfc.addNdefListener(()=>{
          console.log("Event listener for tag discovery added successfully");
        },(error)=>{
          console.log(error);
        }).subscribe((data) => {
          if(data != null)
          {  
            
            console.log(data.tag);
            var some_value = data.tag.ndefMessage[0]["payload"];
            console.log(data.tag.ndefMessage[0]);
            var string_value = this.nfc.bytesToString(some_value);
            console.log(string_value);
            var record = this.ndef.textRecord(this.input.toString());
            console.log(record);

            this.nfc.write([record]).then(()=>{
              console.log("write succeeded!");
              alert("writing succeeded!");
            }).catch(err=>{
              console.log(err);
            });
          }
          else
            console.log("No input given, so that won't work :(");
        });
      }

      else
        this.status = "please enter an input first";
      }

      changeStatus()
      {
        if(this.input != null && this.input != "")
          this.status = "click the button to continue";

        else
          this.status = "Waiting for input";
      }
  }

