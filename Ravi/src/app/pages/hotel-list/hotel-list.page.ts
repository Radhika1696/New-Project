import { Component, OnInit } from '@angular/core';

import { NavController, MenuController, LoadingController, ToastController, AlertController, } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
// import { AuthService } from '../../auth.service'
import { environment } from '../../../environments/environment';

import {
  trigger,
  style,
  animate,
  transition,
  query,

  stagger
} from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.page.html',
  styleUrls: ['./hotel-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class HotelListPage implements OnInit {
  hotelLists: String = 'cardlist';
  agmStyles: any[] = environment.agmStyles;
  hotels: any;
  addfamily
  submit
  today;
  future_year;

  // public onRegisterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotelService: HotelProvider,
    private formbuilder:FormBuilder,
    private authservice : AuthService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    // public datepicker:DatePicker
   
  ) {
    // this.hotels = this.hotelService.getAll();
  }

  ngOnInit() {

  
  }



  
  // async presentalert(){
  //   let alert =await this.alertCtrl.create({
  //     header: 'Caution',
  //     message: 'Each field must be required',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'ok',
  //         handler: () => {
  //           console.log('ok clicked');
  //         }
  //       }
  //     ]
  //   });
  // await alert.present();
  //  }
        

  //       async presentToast(msg) {
  //         let toast = await this.toastCtrl.create({
  //           message: msg,
  //           duration: 1000,
  //           position: 'bottom',
  //           cssClass: "toast-scheme",
  //         });
  //         await toast.present();
  //       }

       

}
