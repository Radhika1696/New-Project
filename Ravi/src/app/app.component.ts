import { Component } from '@angular/core';

import { Platform, NavController, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateProvider } from './providers/translate/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { Pages } from './interfaces/pages';
import { ToastController } from '@ionic/angular';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { Router } from '@angular/router';
/**
 * Main Wrap App Component with starting methods
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  owner_id
  token
  rootPage
  first_name
  last_name
  society_id
  email
  /**
   * Creates an Array instance with <Pages> interface that receives all menu list.
   *
   * @type {Array<Pages>}
   * @memberof AppComponent
   */
  public appPages: Array<Pages>;
  currentUser: any;
  SignupPage: any;
  router: any;
  subscription: any;
  backButtonSubscription;
  routerOutlet
  LoginPage: any;
  /**
   * Creates an instance of AppComponent.
   * @param {Platform} platform
   * @param {SplashScreen} splashScreen
   * @param {StatusBar} statusBar
   * @param {TranslateProvider} translate
   * @param {TranslateService} translateService
   * @param {NavController} navCtrl
   * @param {AuthService} authservice
   * @memberof AppComponent
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateProvider,
    public alertCtrl: AlertController,
    // public menuCtrl: MenuController,
    private translateService: TranslateService,
    private toastCtrl: ToastController,public altCtrl : AlertController,
    public navCtrl: NavController,private authservice : AuthService,public menu: MenuController,
    // private router: Router
  ) {
    //  this.navCtrl.navigateRoot('/home');
    // console.log(this.email);
    // this.rootPage =  HomePage;
    // this.isUserHere();
    // this.token = localStorage.getItem("token");
    // this.society_id = localStorage.getItem("society_id");
    // this.owner_id = localStorage.getItem("owner_id");
    // this.first_name=localStorage.getItem('first_name');
    //   this.last_name=localStorage.getItem('last_name');
    //   this.email=localStorage.getItem('email');
    // console.log(this.email)
   


    // if(!this.email){
    //   this.rootPage = LoginPage; 
    // }else{
    //   this.rootPage =  HomePage;
    // }

//     if (localStorage.getItem("email") === null)
// {
// this.navCtrl.navigateRoot('/login');
// }
// else
// {
// this.navCtrl.navigateRoot('/home');
// }


    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
   

       {
        title: 'Cart',
        url: '/cart',
        direct: 'forward',
        icon: 'cart'
      },

      {
        title: 'My Orders',
        url: 'orders',
        direct: 'forward',
        icon: 'md-basket'
      },
          {
        title: 'About Us',
       url: '/about',
        direct: 'forward',
        icon: 'ios-folder'
      },
      {
        title: 'Contact',
       url:'/contact',
        direct: 'forward',
        icon: 'call'
      },
  
    ];

    this.initializeApp();

  }
  
  // ionViewWillEnter() {
  //   this.menu.enable(true);
  // }

//   ionViewDidEnter(){
//     this.subscription = this.platform.backButton.subscribe(()=>{
//         navigator['app'].exitApp();
//     });
// }

// ionViewWillLeave(){
//     this.subscription.unsubscribe();
// }

  ngOnInit() {
   
    // this.first_name=localStorage.getItem('first_name');
    // this.last_name=localStorage.getItem('last_name');
    // this.email=localStorage.getItem('email')
  
  }

 

 
      // {
      //   title: 'View Owner Profile',
      //   url: '/rentcar',
      //   direct: 'forward',
      //   icon: 'book'
      // },
      // {
      //     title: 'Edit Owner Profile',
      //     url: '/edit-profile',
      //     direct: 'forward',
      //     icon: 'contact'
      //   },
   
      // {
      //   title: 'Details',
      //   url: '/car-detail',
      //   direct: 'forward',
      //   icon: 'car'
      // },
      //  {
      //   title: 'Allow/Reject Visitors',
      //  url: '/walkthrough',
      //   direct: 'forward',
      //   icon: 'person'
      // },
      // {
      //   title: 'Family Member Info',
      //   url: '/activity-detail',
      //   direct: 'forward',
      //   icon: 'person'
      // },
      // {
      //   title: 'Edit Family Member details',
      //   url: '/hotel-detail',
      //   direct: 'forward',
      //   icon: 'person'
      // },
      // {
      //   title: 'Logout',
      //   url: '/login',
      //   direct: 'forward',
      //   icon: 'log-out'
      // },
      // {
      //   title: 'View Parking',
      //   url: '/booking-list',
      //   direct: 'forward',
      //   icon: 'car'
      // }
  

  // async isUserHere() {
  //   this.owner_id = localStorage.getItem("owner_id");
  //   console.log(this.owner_id)

  //   const userId = await storage.get({key: 'owner_id'});
  //   if (this.owner_id.value) {
  //      return true;
  //   } else {
  //      this.router.navigateByUrl('/login');
  //      return false;
  //   }
  // }
/**
 * Method that starts all Cordova and Factories
 *
 * @memberof AppComponent
 */
initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);

      // console.log(this.owner_id)
   
      // if (localStorage.getItem("owner_id") === null)
      // {
      // this.navCtrl.navigateRoot('/login');
      // }
      // else
      // {
      // this.navCtrl.navigateRoot('/home');
      // }
      
  //     this.platform.backButton.subscribe(async () => {
  //       if (this.router.isActive('/home', true) && this.router.url === '/home') {
  //         navigator['app'].exitApp();
  //       }
  // });

      // this.owner_id = JSON.parse(localStorage.getItem('owner_id'));
      // this.rootPage = this.owner_id
      //               ? this.appPages
      //               : this.LoginPage;


      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    }).catch(() => {
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    });
  }
  /**
   * Navigate to Edit Profile Page
   *
   * @memberof AppComponent
   */
  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }
 
/**
 * Logout Method
 *
 * @memberof AppComponent
 */
logout() {
  console.log('hii')
  localStorage.removeItem('first_name');
  localStorage.removeItem('last_name');
  localStorage.removeItem('email');
  localStorage.removeItem('mobile');
  localStorage.removeItem('owner_id');
  localStorage.removeItem('society_id');
  localStorage.removeItem('User');
  localStorage.removeItem('contact');
  localStorage.removeItem('LastName');
  localStorage.removeItem('token');
  // localStorage.removeItem('');

  this.menu.enable(false);
  localStorage.clear();

    this.navCtrl.navigateRoot('/login');
    

    
  }
}
