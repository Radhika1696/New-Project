import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, WeatherService } from '../../providers';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";


@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.page.html',
  styleUrls: ['./local-weather.page.scss'],
})
export class LocalWeatherPage implements OnInit {

  onRegisterForm: FormGroup;
  flat_no;
  block_id;
  recurring_service;
  location: {
    state: string,
    city: string
  }

  submit: boolean;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    private weatherService: WeatherService,
    private storage: Storage,
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {

    this.flat_no=localStorage.getItem('flat_no');
    this.block_id=localStorage.getItem('block_id')

    this.onRegisterForm = this.formbuilder.group({
      'service_type': [null, Validators.compose([
        Validators.required
      ])],

      'service_name': [null, Validators.compose([
        Validators.required
      ])],

      'service_frequency': [null, Validators.compose([
        Validators.required
      ])],

      'provider_name': [null, Validators.compose([
        Validators.required
      ])],


      'mobile': [null, Validators.compose([
        Validators.required, Validators.pattern('[6-9]\\d{9}')
      ])],

      'address': [null, Validators.compose([
        Validators.required
      ])],

      'service_time':[null,Validators.compose([
        Validators.required
      ])]

    })

  }

  add(){
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.service_type) {
      this.onRegisterForm.controls['service_type'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.service_name) {
      this.onRegisterForm.controls['service_name'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.service_frequency) {
      this.onRegisterForm.controls['service_frequency'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.provider_name) {
      this.onRegisterForm.controls['provider_name'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.mobile) {
      this.onRegisterForm.controls['mobile'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.address) {
      this.onRegisterForm.controls['address'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.service_time) {
      this.onRegisterForm.controls['service_time'].markAsTouched()
      this.submit = true;
    }
    
    
    else {
      console.log(this.onRegisterForm.value)
    }

    const user={
      service_type: this.onRegisterForm.get('service_type').value,
      service_name: this.onRegisterForm.get('service_name').value,
      service_frequency: this.onRegisterForm.get('service_frequency').value,
      provider_name: this.onRegisterForm.get('provider_name').value,
      mobile: this.onRegisterForm.get('mobile').value,
      address: this.onRegisterForm.get('address').value,
      service_time: this.onRegisterForm.get('service_time').value
    }

    this.authservice.add_recurringservice(user).subscribe((data)=>{
      this.recurring_service=data;
      console.log(this.recurring_service);

      if (this.recurring_service.success) {
       
        this.presentToast(this.recurring_service.success);
        this.navCtrl.navigateForward('recurring-service-list');   
      }
      else {
        this.presentalert(this.recurring_service.error);
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
