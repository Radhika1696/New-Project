import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.page.html',
  styleUrls: ['./deliverylist.page.scss'],
})
export class DeliverylistPage implements OnInit {
  deliverylist
  delivery_list;
  delivery_id;
  deletedelivery_list
  constructor(  public navCtrl: NavController, 
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private translate: TranslateProvider,
    private authservice: AuthService) {}

  ngOnInit() {
    this.get_delivery_list();
  }



get_delivery_list(){
  this.authservice.delivery_list().subscribe(data=>{
    this.deliverylist=data;
    this.delivery_list=this.deliverylist.deliveries_list;
    console.log(this.delivery_list);
  })
}

ionViewDidLoad(){ 
  this.get_delivery_list();
}

add(){
  this.navCtrl.navigateForward('adddelivery')
}

edit(delivery){
  console.log("edit-elivery",delivery.delivery_id)
  this.navCtrl.navigateForward('edit-delivery',{queryParams:{id:delivery.delivery_id}})
}

delete(delivery){
  
  console.log ('abc',{ queryParams: { id:delivery.delivery_id} })
  console.log ( delivery.delivery_id)
   

this.delivery_id=delivery.delivery_id;
console.log(this.delivery_id);

this.authservice.delete_delivery(this.delivery_id).subscribe((data)=>{
  this.deletedelivery_list=data;
  console.log(this.deletedelivery_list);

  if (this.deletedelivery_list.data.success) {
       
    this.presentToast(this.deletedelivery_list.data.success);
    
  }
  else {
    this.presentalert(this.deletedelivery_list.data.error_msg);
  }

  this.ionViewDidLoad();
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
