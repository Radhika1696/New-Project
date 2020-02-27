import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MessageService } from '../../providers/message/message.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-adddelivery',
  templateUrl: './adddelivery.page.html',
  styleUrls: ['./adddelivery.page.scss'],
})
export class AdddeliveryPage implements OnInit {
  onRegisterForm: FormGroup;
  submit: boolean;
  flat_no;
  today;
  future_year
  block_id;
  add_delivery_details
  constructor( public route: ActivatedRoute,
    public messageService: MessageService,
    private formbuilder:FormBuilder,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private authservice : AuthService) { }

  ngOnInit() {
    this.today = new Date().toISOString();
    this.future_year = (new Date()).getFullYear() + 100;

    this.flat_no=localStorage.getItem('flat_no');
    this.block_id=localStorage.getItem('block_id')

    this.onRegisterForm = this.formbuilder.group({
      'delivery_details': [null, Validators.compose([
        Validators.required
      ])],

      // 'flat_no': [null, Validators.compose([
      //   Validators.required
      // ])],

      // 'block_id': [null, Validators.compose([
      //   Validators.required
      // ])],
     
     
      'delivery_date': [null, Validators.compose([
        Validators.required
      ])],

      'delivery_time': [null, Validators.compose([
        Validators.required
      ])],

    })
  }

  add() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.delivery_details) {
      this.onRegisterForm.controls['delivery_details'].markAsTouched()
      this.submit = true;
    }

    // if (!this.onRegisterForm.value.flat_no) {
    //   this.onRegisterForm.controls['flat_no'].markAsTouched()
    //   this.submit = true;
    // }
  
    // if (!this.onRegisterForm.value.block_id) {
    //   this.onRegisterForm.controls['block_id'].markAsTouched()
    //   this.submit = true;
    // }
    if (!this.onRegisterForm.value.delivery_date) {
      this.onRegisterForm.controls['delivery_date'].markAsTouched()
      this.submit = true;

    } 
    if (!this.onRegisterForm.value.delivery_time) {
      this.onRegisterForm.controls['delivery_time'].markAsTouched()
      this.submit = true;
    }
    
    
    
    else {
      console.log(this.onRegisterForm.value)
    }

    
    
    const user = {
      delivery_details: this.onRegisterForm.get('delivery_details').value,
      delivery_date: this.onRegisterForm.get('delivery_date').value,
      delivery_time: this.onRegisterForm.get('delivery_time').value,
      // flat_no :this.onRegisterForm.get('flat_no').value,
      // block_id:this.onRegisterForm.get('block_id').value,
    
     }
 
 
  
   this.authservice.Add_delivery(user).subscribe((data)=>{
     this.add_delivery_details=data
     console.log('gafg',this.add_delivery_details)
    
 
                  if (this.add_delivery_details.success) {
       
                    this.presentToast(this.add_delivery_details.success);
                    this.navCtrl.navigateForward('/deliverylist');   
                  }
                  else {
                    this.presentalert(this.add_delivery_details.error);
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
