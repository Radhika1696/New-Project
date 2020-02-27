import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.page.html',
  styleUrls: ['./vehicle-list.page.scss'],
})
export class VehicleListPage implements OnInit {
  vehicle_list;
vehicles_list;
vehicle_id;
delete_vehicle_list;
  constructor( public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router,
    private authservice:AuthService ,
    
  public toastCtrl: ToastController,
  private alertCtrl: AlertController,
  
  ) { }

  ngOnInit() {
    // this. get_vehicleList();
  }

  idli(){
    this.navCtrl.navigateForward('/hotel-list')
  }
  // get_vehicleList(){
  //     this.authservice.vehicle_list().subscribe((data)=>{
  //       this.vehicle_list=data;
  //       console.log(this.vehicle_list);
  //       this.vehicles_list=this.vehicle_list.vehicle_list
  //       console.log( this.vehicles_list);
        
        
  //     })

}

// ionViewDidEnter(){ 
//   this. get_vehicleList();
// }

//   add(){
//     this.navCtrl.navigateForward('add-vehicle')
//   }

//   edit(vehicle){
//     console.log("veh",vehicle.id);
//     this.navCtrl.navigateForward("edit-vehicle",{queryParams:{id:vehicle.id}})
//   }


//   parking(){
//     this.navCtrl.navigateForward('booking-list')
//   }

//   delete(vehicle){
//     console.log("vehicle",vehicle.id);
//     this.vehicle_id=vehicle.id,
//     console.log(this.vehicle_id);
    
//     this.authservice.delete_vehicle_list(this.vehicle_id).subscribe((data)=>{
//       this.delete_vehicle_list=data;
//       console.log(this.delete_vehicle_list);
//       if (this.delete_vehicle_list.data.success) {
       
//         this.presentToast(this.delete_vehicle_list.data.success);
        
//       }
//       else {
//         this.presentalert(this.delete_vehicle_list.data.error);
//       }
//       this.ionViewDidEnter();
//     })
// }

// async presentToast(success) {
//   let toast = await this.toastCtrl.create({
//     message: success,
//     duration: 1000,
//     position: 'bottom',
//     cssClass: "toast-scheme",
//   });
//   await toast.present();
// }

// async presentalert(error){
//   let alert =await this.alertCtrl.create({
//     header: 'Caution',
//     message: error,
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


