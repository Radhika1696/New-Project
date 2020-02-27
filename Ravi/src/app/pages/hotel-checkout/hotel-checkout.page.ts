import { Component, OnInit } from "@angular/core";
import {
    NavController,
    ToastController,
    LoadingController,
    AlertController
} from "@ionic/angular";
import { TranslateProvider, HotelProvider } from "../../providers";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../auth.service";
import { log } from "util";

@Component({
    selector: "app-hotel-checkout",
    templateUrl: "./hotel-checkout.page.html",
    styleUrls: ["./hotel-checkout.page.scss"]
})
export class HotelCheckoutPage implements OnInit {
    Family_id;
    delete_family_list;
    hotel: any;
    hotelID: string;
    room: any;
    roomID: any;
    paymethods: string = "creditcard";
    // number of nights
    public nights = 7;
    // number of guests
    public guests = 3;
    // date from
    public dateFrom = new Date();
    // date to
    public dateTo = new Date();
    FamilyList: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        private authservice: AuthService,
        private alertCtrl: AlertController,
       
    ) {
        
    }

    ngOnInit() {
      
        // this.getFamilyList();
        
    }
    // getFamilyList() {
    //     this.authservice.family_members_list().subscribe((res: any) => {
    //         this.FamilyList = res.family_members_list;
    //         console.log("reload", this.FamilyList);
    //     });
    // }

    add(){
        this.navCtrl.navigateForward('/hotel-list');
    }

    ionViewDidEnter(){ 
        //  this.getFamilyList();
    }

    // edit(Family){
    //     console.log("TCL: HotelCheckoutPage -> edit -> Family", Family)
    //     this.navCtrl.navigateForward('/hotel-detail',{ queryParams: { id: Family.id}})
    // }

    // delete(Family){
  
    //     console.log ('abc',{ queryParams: { id:Family.id} })
    //     console.log ( Family.id)
      
    //      this.Family_id=Family.id //complaint_id
    //      console.log(this.Family_id)
      
    //      this.authservice.delete_family_list(this.Family_id).subscribe((data)=>{
    //          this.delete_family_list=data;
    //          console.log(this.delete_family_list);
    //          if (this.delete_family_list.data.success) {
               
    //             this.presentToast(this.delete_family_list.data.success);
            
    //         this.navCtrl.navigateForward('/hotel-checkout');    
            
    //           }
    //           else {
    //             this.presentalert(this.delete_family_list.data.error);
    //           }
    //          this.ionViewDidEnter();
             
    //      })
    //   }
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
      async presentToast(success) {
        let toast = await this.toastCtrl.create({
          message: success,
          duration: 1000,
          position: 'bottom',
          cssClass: "toast-scheme",
        });
        await toast.present();
      }
    // ngAfterViewChecked(){
    //     this.getFamilyList();
    // }
}
