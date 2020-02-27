import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../providers/message/message.service';
import { AuthService } from '../../auth.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  onRegisterForm: FormGroup;
  add_vehicle;
  submit: boolean;
  constructor( public route: ActivatedRoute,
    public messageService: MessageService,
    private formbuilder:FormBuilder,
    private authservice : AuthService,
    public navCtrl: NavController,
    private alertCtrl:AlertController,
    private toastCtrl: ToastController) { }

  ngOnInit() { 
    this.onRegisterForm = this.formbuilder.group({
    'vehicle_name': [null, Validators.compose([
      Validators.required
    ])],
   
    'vehicle_type': [null, Validators.compose([
      Validators.required
    ])],

    'vehicle_no': [null, Validators.compose([
      Validators.required
    ])],

  })
  }

 async add() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.vehicle_name) {
      this.onRegisterForm.controls['vehicle_name'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.vehicle_type) {
      this.onRegisterForm.controls['vehicle_type'].markAsTouched()
      this.submit = true;
    } 

    if (!this.onRegisterForm.value.vehicle_no) {
      this.onRegisterForm.controls['vehicle_no'].markAsTouched()
      this.submit = true;
    }

    
     
    else {
      console.log(this.onRegisterForm.value)
    }

    const user={
      vehicle_type:this.onRegisterForm.get('vehicle_type').value,
      vehicle_no:this.onRegisterForm.get('vehicle_no').value,
      vehicle_name:this.onRegisterForm.get('vehicle_name').value
    }

    this.authservice.Add_vehicle(user).subscribe((data)=>{
      this.add_vehicle=data;
      console.log(this.add_vehicle);

     
      if (this.add_vehicle.success) {
       
        this.presentToast(this.add_vehicle.success);
        this.navCtrl.navigateForward('/vehicle-list');   
      }
      else {
        this.presentalert(this.add_vehicle.error);
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
// async presentalert(error){
//   let alert =await this.alertCtrl.create({
//     header: 'Caution',
//     message:error,
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
      

      // async presentToast(success) {
      //   let toast = await this.toastCtrl.create({
      //     message: success,
      //     duration: 1000,
      //     position: 'bottom',
      //     cssClass: "toast-scheme",
      //   });
      //   await toast.present();
      // }


}



