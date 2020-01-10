import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WikitudeService } from '../../providers/wikitude.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private wikitudeService: WikitudeService) {
  }

  showARTestExperience() {
    this.wikitudeService.showARTestExperience();
  }

  showARExperience1() {
    this.wikitudeService.showARExperience1();
  }

  showARExperience2() {
    this.wikitudeService.showARExperience2();
  }
}
