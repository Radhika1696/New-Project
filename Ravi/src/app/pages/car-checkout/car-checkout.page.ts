import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-car-checkout',
  templateUrl: './car-checkout.page.html',
  styleUrls: ['./car-checkout.page.scss'],
})
export class CarCheckoutPage implements OnInit {
  onRegisterForm: FormGroup;
  submit: boolean;
  addvisitors;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
   
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    public cars: CarsService,
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private alertCtrl: AlertController
  ) {
  //   this.onRegisterForm = this.formbuilder.group({
  //     visitor_name : ["", Validators.required],
  //     mobile : ["", Validators.required],
  //     person_meet : ["", Validators.required],
  //     date : ["", Validators.required],
  //     time:["", Validators.required]
  // });
  console.log("1");
  }

  ngOnInit() {
    this.onRegisterForm = this.formbuilder.group({
      'visitor_name': [null, Validators.compose([
        Validators.required
      ])],
      'person_meet': [null, Validators.compose([
        Validators.required
      ])],
     
      'mobile': [null, Validators.compose([
        Validators.required, Validators.pattern('[6-9]\\d{9}')
      ])],
     
      'date': [null, Validators.compose([
        Validators.required
      ])],

      'time': [null, Validators.compose([
        Validators.required
      ])],

      'purpose_of_visit': [null, Validators.compose([
        Validators.required
      ])],

    })
  }


 async add() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.visitor_name) {
      this.onRegisterForm.controls['visitor_name'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.person_meet) {
      this.onRegisterForm.controls['person_meet'].markAsTouched()
      this.submit = true;
    }


    if (!this.onRegisterForm.value.mobile) {
      this.onRegisterForm.controls['mobile'].markAsTouched()
      this.submit = true;
    }

  
    if (!this.onRegisterForm.value.date) {
      this.onRegisterForm.controls['date'].markAsTouched()
      this.submit = true;

    } 
    if (!this.onRegisterForm.value.time) {
      this.onRegisterForm.controls['time'].markAsTouched()
      this.submit = true;
    }
    
    if (!this.onRegisterForm.value.purpose_of_visit) {
      this.onRegisterForm.controls['purpose_of_visit'].markAsTouched()
      this.submit = true;
    }
    
    else {
      console.log(this.onRegisterForm.value)
    }


    
    
    const user = {
      visitor_name: this.onRegisterForm.get('visitor_name').value,
      person_meet: this.onRegisterForm.get('person_meet').value,
      mobile: this.onRegisterForm.get('mobile').value,
      date: this.onRegisterForm.get('date').value,
      time:this.onRegisterForm.get('time').value,
      purpose_of_visit:this.onRegisterForm.get('purpose_of_visit').value
     }
 
 
  
   this.authservice.Addvisitors(user).subscribe((data)=>{
     this.addvisitors=data
     console.log('gafg',this.addvisitors)
    
 
                 if (this.addvisitors.success) {
                     let msg = "Added successfully"
                     this.presentToast(msg);
                 
                 this.navCtrl.navigateForward('/favorites');    
                 
                   }
 
                  else {
                     this.presentalert();
                   }
 
 
   })
 }
 


async presentalert(){
  let alert =await this.alertCtrl.create({
    header: 'Caution',
    message: 'Each field must be required',
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





  // async makeBooking() {
  //   // send booking info
  //   const loader = await this.loadingCtrl.create({
  //     duration: 2000
  //   });

  //   loader.present();
  //   loader.onWillDismiss().then(async l => {
  //     const toast = await this.toastCtrl.create({
  //       showCloseButton: false,
  //       cssClass: 'bg-profile',
  //       message: 'your Car was successfuly Rent!',
  //       duration: 3000,
  //       position: 'bottom'
  //     });

  //     toast.present();

  //     setTimeout(() => {
  //       loader.dismiss();
  //       toast.present();
  //       // back to home page
  //       this.navCtrl.navigateForward('/home');
  //     }, 3000);
  //   });
  //   // end
  

  