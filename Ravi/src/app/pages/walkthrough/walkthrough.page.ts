import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSlides, MenuController, ToastController, AlertController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { TranslateProvider } from '../../providers';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: String = 'ltr';
  guestList
  Guest_List
  visitors_approval
  visitor_id
  is_confirm
  is_reject


  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
   private menuCtrl:MenuController,
    private authservice: AuthService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {

    
  }






  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.getApprovalList();
  }

  getApprovalList(){
    this.authservice.guest_list().subscribe(data=>{
      this.guestList=data
        console.log(this.guestList)
      this.Guest_List=this.guestList.guest_list
      console.log(this.Guest_List)
       })
  }

  ionViewDidEnter(){ 
    this.getApprovalList();
  
}
confirm(visitors){
  console.log ('abc',{ queryParams: { id:visitors.id} })
  console.log ( visitors.id)
  this.visitor_id= visitors.id
  this.is_confirm=1;
  this.is_reject=0;
  this.authservice.allow_reject_visitor_list( this.visitor_id,this.is_confirm,this.is_reject).subscribe((data)=>{
     this.visitors_approval=data;
     console.log(this.visitors_approval)
    //  this.visitors_approval1=this.visitors_approval.data

     

     if (this.visitors_approval.success) {
       
      this.presentToast(this.visitors_approval.success);
      
    }
    else {
      this.presentalert(this.visitors_approval.error);
    }
    })
}

reject(visitors){
  console.log ('abc',{ queryParams: { id:visitors.id} })
  console.log ( visitors.id)
  this.visitor_id=visitors.id
  this.is_confirm=0;
  this.is_reject=1;
  this.authservice.allow_reject_visitor_list( this.visitor_id,this.is_confirm,this.is_reject).subscribe((data)=>{
     this.visitors_approval=data;
     console.log(this.visitors_approval)
    //  this.visitors_approval1=this.visitors_approval.data


     if (this.visitors_approval.success) {
       
      this.presentToast(this.visitors_approval.success);
      
    }
    else {
      this.presentalert(this.visitors_approval.error);
    }
    })
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

async presentalert(error){
  let alert =await this.alertCtrl.create({
    header: 'Caution',
    message: error,
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
}
