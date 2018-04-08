import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCaAaqs30Xo8nFEqAtuNsFGwbIPIL9Wvn0",
  authDomain: "hang-1e58b.firebaseapp.com",
  databaseURL: "https://hang-1e58b.firebaseio.com",
  projectId: "hang-1e58b",
  storageBucket: "",
  messagingSenderId: "30524394384"
};

export default class ConfigStore{

    constructor(){
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../images/logo.png')
        this.logo = require('../../images/logoLarge.png')
        this.addicon = require('../../images/Add.png')
        this.settingsicon = require('../../images/settings.png')
        this.swipeicon = require('../../images/swipechevron.png')
        this.mapBG = require('../../images/mapBG.png')
        this.boySymbol = require('../../images/boy.png')
        this.girlSymbol = require('../../images/girl.png')
        this.otherSymbol = require('../../images/other.png')
        //this.loginBG = require('../../images/splash.png')
    }

    get MapBG(){
      return this.mapBG
    }

    get BoySymbol(){
      return this.boySymbol
    }

    get GirlSymbol(){
      return this.girlSymbol
    }

    get OtherSymbol(){
      return this.otherSymbol
    }

    get LogoImage(){
      return this.logo
    }

    get addIcon(){
      return this.addicon
    }

    get swipeIcon(){
      return this.swipeicon
    }

    get settingsIcon(){
      return this.settingsicon
    }

    get SplashImg(){
        return this.splashImg
    }

    get SplashTime(){
        return this.splashTime
    }

    /*get LoginBG(){
        return this.loginBG
    }*/
}
