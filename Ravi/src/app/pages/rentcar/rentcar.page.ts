import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../auth.service';
import { LocationPage } from './../modal/location/location.page';
import { EditProfilePage } from '../edit-profile/edit-profile.page';
@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.page.html',
  styleUrls: ['./rentcar.page.scss'],
})
export class RentcarPage implements OnInit {
  toppings: any;
  owner_profile
first_name
last_name
email
gender
mobile
pan_no
adhar_no
dob
profile_photo
  t
  search: any = {
    pickup: 'Rio de Janeiro, Brazil',
    dropOff: 'Same as pickup',
    from: new Date().toISOString(),
    to: new Date().toISOString()
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private authservice:AuthService,
    private storage: Storage,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    ) {

      this.authservice.ownerprofile().subscribe((data)=>{
        this.owner_profile=data
        console.log('gafg',this.owner_profile)
        this.owner_profile=this.owner_profile.owner_data
        console.log(this.owner_profile)
      })
    }
  
      //  edit(){
      
      // this.authservice.editownerprofile(this.first_name,this.last_name,this.gender,this.email,this.mobile,this.dob,this.pan_no,this.adhar_no,this.profile_photo).subscribe((data)=>{
      //   this.owner_profile=data
      //   console.log('gafg',this.owner_profile)
      //   // this.owner_profile=this.owner_profile.owner_data
      //   // console.log(this.owner_profile)
      // })
    
 
      //  }
     

 
  ngOnInit() {
    // this.storage.get('pickup').then((val) => {
    //   // console.log(val)
    //   if (val === null) {
    //     this.search.pickup = 'Rio de Janeiro, Brazil';
    //   } else {
    //     this.search.pickup = val;
    //   }
    //   // this.search.pickup = val;
    //   console.log(this.search.pickup);
    // }).catch((err) => {
    //   console.log(err);
    // });

    // this.storage.get('dropOff').then((val) => {
    //   if (val === null) {
    //     this.search.dropOff = 'Same as pickup';
    //   } else {
    //     this.search.dropOff = val;
    //   }
    //   // this.search.dropOff = val;
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  sendData(){
    if(this.owner_profile==1){
      let msg = "profile updated successfully"

      this.presentToast(msg);
    }
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

  // async choosePlace(fromto: string) {
  //   const modal = await this.modalCtrl.create({
  //     component: LocationPage,
  //     componentProps: { fromto: fromto, search: this.search }
  //   });
  //   return await modal.present();
  // }

  // doSearch() {
  //   this.navCtrl.navigateForward('cars-list');
  // }

 

