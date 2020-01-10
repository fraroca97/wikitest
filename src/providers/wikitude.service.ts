import { Injectable } from '@angular/core';
declare var cordova: any;

/*
  Generated class for the WikitudeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WikitudeService {
  wikitudePlugin;
  canUseThisARExperience: boolean = false;
  // pluginIsLoaded: boolean = false;
  // Options:  '2d_tracking', 'image_tracking', 'geo'
  requiredFeatures = ['image_tracking'];
  startupConfiguration = {
    'camera_position': 'back'
  };

  constructor() {}

  initializeService() {
    console.log('Trying to load the wikitude plugin');
    this.wikitudePlugin =
      cordova.require("com.wikitude.phonegap.wikitudeplugin.WikitudePlugin");

    // This is the Francisco's trial key
    this.wikitudePlugin._sdkKey = 'VE595todo5/F99Gh7wTiZD5TD6rPagiXUdQn+h00zt7zJ9dXHuSYxFnuf26FUQMlm09GI56gQ+ZmwtuCojSpT4Ku9xP2n2abWfV2BSH22bsYGLiDA047ln9+wTDFm9nidONzDSoO29eTedyCay1Ey4Za3ael3fAh0V2HKFVZ2/lTYWx0ZWRfXx274t2hVPq/Ms2Qekiqlad49cRQtkjVYAHyVFlLbYKDUNOiUEMYNmpBCJB3tVGvF77/9qeA5AaYnPhnfOPg81fprMFad6wHeWXYOefxm1+KtjAcDzM7EFwLHAekLAicPG715IAVLyOIJPm9sPrW5SzQpBrIt2s2wXbnBxMWvD1yZA3bzHsA+TJCi2CTeEqO8x0OSA3AgBcu8CxzTvM7eIpHG1G8VDIrQBnpc1vTX617gUkP1tlOQBiJYn08VT9CLX24m7zaxYEjwHzVLYcLsgYux1yHK0seF7tjQHd101r6ARgC70LP6bOONrFl3tU5ZMwwNy4j2LuoDfaL+KEDkiugxZA/0o9XsJH+adPPQf7ly6Tcg+ogdqbvoQZWeYo5R9hRg40iUNrKM2zBERJ+DVlxM/H1IV/MsBCy3gSLXw6GJTsFlQcuRKZQTs9T9opAfA171s7dSg4a0Iq+UyrykA3I44yuuMuIS3uUjaOLmy4s7smoZXCdpK2SOXTvbVqDvcjFnwnwZ4R77s05OVAQWCbwMG13UFde0HcDf/gwj/eQSNHpNKZUd8ZV3SghgnG8aypEkX6UU4DNTUgF0Lkr2ns3xaTpYp9JAA==';

    this.wikitudePlugin.isDeviceSupported(
      this.onDeviceSupported,
      this.onDeviceNotSupported,
      this.requiredFeatures);
  }

  showARTestExperience() {
    const requiredFeatures = ['image_tracking'];
    const arExperienceUrl = 'www/assets/experience/world/01_ImageTracking_0_pacho/index.html';
    if (this.canUseThisARExperience) {
      this.wikitudePlugin.setJSONObjectReceivedCallback(this.onExperience1Response);
      this.wikitudePlugin.loadARchitectWorld(
        (loadedURL) => {
          console.log('Now you are in the AR experience');
        },
        () => {
          console.log('Something went wrong, but i\'m not sure what\'s wrong :|');
        },
        arExperienceUrl,
        requiredFeatures,
        this.startupConfiguration
      );
    }
  }

  showARExperience1() {
    const requiredFeatures = ['image_tracking'];
    const arExperienceUrl = 'www/assets/experience/world/01_ImageTracking_3_Interactivity/index.html';
    if (this.canUseThisARExperience) {
      this.wikitudePlugin.setJSONObjectReceivedCallback(this.onExperience1Response);
      this.wikitudePlugin.loadARchitectWorld(
        (loadedURL) => {
          console.log('Now you are in the AR experience');
        },
        () => {
          console.log('Something went wrong, but i\'m not sure what\'s wrong :|');
        },
        arExperienceUrl,
        requiredFeatures,
        this.startupConfiguration
      );
    }
  }

  showARExperience2() {
    const requiredFeatures = ['2d_tracking'];
    const arExperienceUrl = 'www/assets/experience/world/01_ImageTracking_3_Interactivity/index.html';
    if (this.canUseThisARExperience) {
      this.wikitudePlugin.setJSONObjectReceivedCallback(this.onExperience1Response);
      this.wikitudePlugin.loadARchitectWorld(
        (loadedURL) => {
          console.log('Now you are in the AR experience');
        },
        () => {
          console.log('Something went wrong, but i\'m not sure what\'s wrong :|');
        },
        arExperienceUrl,
        requiredFeatures,
        this.startupConfiguration
      );
    }
  }

  onExperience1Response(response) {
    console.log(response);
  }

  onDeviceSupported = () => {
    this.canUseThisARExperience = true;
    console.log('Device is supported');
  }

  onDeviceNotSupported(errorMessage) {
    console.log(`Not supported\n${errorMessage}`);
  }

}
