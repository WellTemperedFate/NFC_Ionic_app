import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

/**
 * Generated class for the DatabaseDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-database-data',
  templateUrl: 'database-data.html',
})
export class DatabaseDataPage {
key: String = "name";
items: Array<any>;
index: Number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabaseDataPage');

    this.http.get('http://192.168.0.247:3000/tasks', {}, {})
    .then(data => {
    console.log(data.data);
    var items = JSON.parse(data.data);
    console.log(items);
    var nameArray = [];
    console.log("6e element: ", items[6]);
    console.log("6e element de naam: ", items[6].name);

    for(var i = 0; i<items.length; i++)
    {
      console.log("Naam: ", items[i].name);
      console.log("R-nummer: ", items[i].rnummer);
      console.log("TagId: ", items[i].tagid);
    }
    /*items.array.forEach(element => {
      console.log(element[]);
      nameArray.push(element['name']);
    });*/
     // console.log(data.data); // data received by server
     // this.items = JSON.parse(data['name']);
     // console.log(this.items);
     // console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });

    //this.http.get('http://192.168.0.247:3000/tasks').map(res => ())

  }

}
