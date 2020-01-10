import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  showCamera: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    /*private qrScanner: QRScanner*/) {
  }
/*
  ngOnInit() {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        console.log('We are authorized. Scanning...');

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
*/
  toggleCamera() {
    this.showCamera = !this.showCamera;
  }


}
