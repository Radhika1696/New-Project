import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {
  favorites: Array<any> = [];
  VisitorsList
  visitor_list
  delete_visitor_list
  visitor_id
  is_confirm
  is_reject
  visitors_approval
  visitors_approval1
  guestList;
  Guest_List;
  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotels: HotelProvider,
    private authservice: AuthService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {

    // this.authservice.guest_list().subscribe(data=>{
    //   this.guestList=data
    //   console.log(this.guestList)
    //   this.Guest_List=this.guestList.guest_list
    //   console.log(this.Guest_List)
    // })
   }

  ngOnInit() {
    this.getVisitorsList(); 

  }

  getVisitorsList() {
    this.authservice.visitor_list().subscribe(data => {
        this.VisitorsList = data;
       this.visitor_list= this.VisitorsList.visitors_list;
         console.log( this.visitor_list)
    });
}

  // deleteItem(favorite) {
  //   this.hotels.unfavorite(favorite)
  //     .then(() => {
  //       this.getFavorites();
  //     })
  //     .catch(error => alert(JSON.stringify(error)));
  // }

  // getFavorites() {
  //   this.hotels.getFavorites()
  //     .then(data => { this.favorites = data; });
  // }

  ionViewDidEnter(){ 
    this.getVisitorsList();
  
}

  add(){
    this.navCtrl.navigateForward('car-checkout')
  }

  // allow(){
  //   this.navCtrl.navigateForward('/walkthrough')
  // }

  // edit(){
  // this.navCtrl.navigateForward("edit-visitor")
  // }

  edit(visitor){
    console.log("TCL: HotelCheckoutPage -> edit -> visitor", visitor)
    this.navCtrl.navigateForward('/edit-visitor',{ queryParams: { id: visitor.id}})
}

delete(visitor){
  
  console.log ('abc',{ queryParams: { id:visitor.id} })
  console.log ( visitor.id)
     // {order: "popular"}
   //  this.complaint=params.id;
   //  console.log(this.complaint);
   this.visitor_id=visitor.id  //complaint_id
   console.log(this.visitor_id)

   this.authservice.deletevisitor(this.visitor_id).subscribe((data) => {
     this.delete_visitor_list =data
     console.log("reload", this.delete_visitor_list);

     
     if (this.delete_visitor_list.data.success) {
       
      this.presentToast(this.delete_visitor_list.data.success);
      
    }
    else {
      this.presentalert(this.delete_visitor_list.data.error);
    }
    this.ionViewDidEnter();
    
 });

}


// confirm(){
//   console.log ('abc',{ queryParams: { id:visitor.id} })
//   console.log ( visitor.id)
//   this.visitor_id= visitor.id
//   this.is_confirm=1;
//   this.is_reject=0;
//   this.authservice.allow_reject_visitor_list(this.is_confirm,this.is_reject).subscribe((data)=>{
//      this.visitors_approval=data;
//      console.log(this.visitors_approval)
//      this.visitors_approval1=this.visitors_approval.data

     

//      if (this.visitors_approval.success) {
       
//       this.presentToast(this.visitors_approval.success);
      
//     }
//     else {
//       this.presentalert(this.visitors_approval.error);
//     }
//     })
// }

// reject(){
//   console.log ('abc',{ queryParams: { id:visitor.id} })
//   console.log ( visitor.id)
//   this.visitor_id=visitor.id
//   this.is_confirm=0;
//   this.is_reject=1;
//   this.authservice.allow_reject_visitor_list(this.is_confirm,this.is_reject).subscribe((data)=>{
//      this.visitors_approval=data;
//      console.log(this.visitors_approval)
//      this.visitors_approval1=this.visitors_approval.data


//      if (this.visitors_approval.success) {
       
//       this.presentToast(this.visitors_approval.success);
      
//     }
//     else {
//       this.presentalert(this.visitors_approval.error);
//     }
//     })
// }

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
