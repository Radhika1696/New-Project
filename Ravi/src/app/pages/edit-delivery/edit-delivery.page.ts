import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.page.html',
  styleUrls: ['./edit-delivery.page.scss'],
})
export class EditDeliveryPage implements OnInit {
 onRegisterForm: FormGroup;
 delivery_id;
 today;
 future_year;
 deliverylist;
 delivery_list;
 edit_delivery;
  constructor(public navCtrl: NavController,
        private translate: TranslateProvider,
        public hotelService: HotelProvider,
        private formbuilder: FormBuilder,
        private route: ActivatedRoute,
        private authservice: AuthService,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController) 
        { 
           this.onRegisterForm = this.formbuilder.group({
            delivery_details: ["", Validators.required],
            // block_id: ["", Validators.required],
            // flat_no: ["", Validators.required],
            delivery_date:["",Validators.required],
            delivery_time:["",Validators.required]
          
        });
        console.log("1");
        }

  ngOnInit() {
    this.today = new Date().toISOString();
    this.future_year = (new Date()).getFullYear() + 100;
    
  this.route.queryParams.subscribe(params =>{
    console.log("para",params.id);
    this.delivery_id=params.id;
    console.log(this.delivery_id)

    this.authservice.delivery_list().subscribe(data=>{
      this.deliverylist=data;
      this.delivery_list=this.deliverylist.deliveries_list;
      console.log(this.delivery_list);

      if (this.delivery_list) {
        const result =  this.delivery_list.filter(list => list.delivery_id==params.id);

       
        this.onRegisterForm.patchValue({
          delivery_details: result[0].delivery_details,
          delivery_date: result[0]. delivery_date,
          delivery_time:result[0].delivery_time
        });
    }
    })
  })
}

edit() 
    {this.authservice.edit_delivery(this.onRegisterForm.value,this.delivery_id)
      .subscribe((data:any) => {
          console.log('Segment changed', data);
          
              this.edit_delivery = data;
              console.log(this.edit_delivery)
          
              if (this.edit_delivery.success) {
                 
               this.presentToast(this.edit_delivery.success);
              this.navCtrl.navigateForward('/deliverylist');    
              
                }
          
                else {
                  this.presentalert(this.edit_delivery.error);
                }
              })
      
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
        

        async presentToast(success) {
          let toast = await this.toastCtrl.create({
            message: success,
            duration: 1000,
            position: 'bottom',
            cssClass: "toast-scheme",
          });
          await toast.present();
        }

}
