import { Component, OnInit } from "@angular/core";
import {
    NavController,
    ActionSheetController,
    ToastController,
    ModalController,
    AlertController
} from "@ionic/angular";
import { TranslateProvider, HotelProvider } from "../../providers";
import { ActivatedRoute, Router } from "@angular/router";

import { ImagePage } from "./../modal/image/image.page";


import { environment } from "../../../environments/environment";

import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from "@angular/animations";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { log } from "util";

@Component({
    selector: "app-hotel-detail",
    templateUrl: "./hotel-detail.page.html",
    styleUrls: ["./hotel-detail.page.scss"],
    animations: [
        trigger("staggerIn", [
            transition("* => *", [
                query(
                    ":enter",
                    style({ opacity: 0, transform: `translate3d(0,10px,0)` }),
                    { optional: true }
                ),
                query(
                    ":enter",
                    stagger("300ms", [
                        animate(
                            "600ms",
                            style({
                                opacity: 1,
                                transform: `translate3d(0,0,0)`
                            })
                        )
                    ]),
                    { optional: true }
                )
            ])
        ])
    ]
})
export class HotelDetailPage implements OnInit {
    hotelLists: String = "cardlist";
    agmStyles: any[] = environment.agmStyles;
    hotels: any;
    addfamily;
    onRegisterForm: FormGroup;
    FamilyList: any;
    hotelfam_id:any;
    id;
    today;
    // public onRegisterForm: FormGroup;
    index
    data: any;
    abc
    constructor(
        public navCtrl: NavController,
        private translate: TranslateProvider,
        public hotelService: HotelProvider,
        private formbuilder: FormBuilder,
        private route: ActivatedRoute,
        private authservice: AuthService,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController,
    ) {
        this.onRegisterForm = this.formbuilder.group({
            first_name: ["", Validators.required],
            last_name: ["", Validators.required],
            dob: ["", Validators.required],
            mobile: ["", Validators.required]
        });
        console.log("1");
    }

    ngOnInit() {
        
    // this.today = new Date().toISOString();
    // this.today = new Date().toISOString();
    //     this.route.queryParams.subscribe(params => {
    //         console.log("para", params); // {order: "popular"}
    //        this.hotelfam_id=params.id;
    //         this.authservice.family_members_list().subscribe((res: any) => {
    //             this.FamilyList = res.family_members_list;
    //             console.log(res);
    
    //          if (this.FamilyList) {
    //                 const result =  this.FamilyList.filter(list => list.id==params.id);
    
                   
    //                 this.onRegisterForm.patchValue({
    //                     first_name: result[0].first_name,
    //                     last_name: result[0].last_name,
    //                     dob: result[0].dob,
    //                     mobile:result[0].mobile
    //                 });
    //             }
    //         });
    //     });
    //     console.log("2");
    
    
    }

   

    // edit() {

    //     this.authservice
    //         .editfamily(this.onRegisterForm.value, this.hotelfam_id)
    //         .subscribe((data:any) => {
    //             console.log('Segment changed', data);
                
    //                 this.addfamily = data;
    //                 console.log(this.addfamily)
                
    //                 if (this.addfamily.success) {
                     
    //                     this.presentToast(this.addfamily.success);
                    
    //                 this.navCtrl.navigateForward('/hotel-checkout');    
                    
    //                   }
                
    //                   else {
    //                     this.presentalert(this.addfamily.error);
    //                   }
    //                 })
            
    // }

    // segmentChanged(ev: any) {
    //   console.log('Segment changed', ev);
    // }

    async presentalert(error){
        let alert =await this.alertCtrl.create({
          header: 'Caution',
          message:error,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'ok',
              handler: () => {
                console.log('ok clicked');
              }
            }
          ]
        });
      await alert.present();
       }
              
     
              async presentToast(msg) {
                let toast = await this.toastCtrl.create({
                  message: msg,
                  duration: 1000,
                  position: 'bottom',
                  cssClass: "toast-scheme",
                });
                await toast.present();
              }
}
