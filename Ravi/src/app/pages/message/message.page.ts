import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from '../../providers/message/message.service';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../../auth.service';
import { NavController, ToastController, AlertController} from '@ionic/angular';
import { TranslateProvider } from '../../providers';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  // message: any;
  // messageID: any = this.route.snapshot.paramMap.get('id');
  onRegisterForm:FormGroup
  submit: boolean;
  addcomplaint
  constructor(
    public navCtrl: NavController,
    // public toastCtrl: ToastController,
    // public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formbuilder: FormBuilder,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.onRegisterForm = this.formbuilder.group({
      'complaint_title': [null, Validators.compose([
        Validators.required
      ])],
      'description': [null, Validators.compose([
        Validators.required
      ])],
     
      'priority': [null, Validators.compose([
        Validators.required
      ])],
     
    

    })
  }

  add() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.complaint_title) {
      this.onRegisterForm.controls['complaint_title'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.description) {
      this.onRegisterForm.controls['description'].markAsTouched()
      this.submit = true;
    }


    if (!this.onRegisterForm.value.priority) {
      this.onRegisterForm.controls['priority'].markAsTouched()
      this.submit = true;
    }

    else {
      console.log(this.onRegisterForm.value)
    }

    
    const user = {
     complaint_title: this.onRegisterForm.get('complaint_title').value,
     description: this.onRegisterForm.get('description').value,
      priority: this.onRegisterForm.get('priority').value,
    

    }


    // console.log("hii", user)
    // this.test = user.society_name
    // console.log(this.test)
    // this.society_name = this.test.society_name
    // console.log(this.society_name)

  this.authservice.Addcomplaint(user).subscribe((data)=>{
    this.addcomplaint=data
    console.log('gafg',this.addcomplaint)
   
  if (this.addcomplaint.success) {
                    let msg = "Added successfully"
                    this.presentToast(msg);
                
              this.navCtrl.navigateForward('/messages')
                
                  }

                 else {
                    this.presentalert();
                  }

    // this.navCtrl.navigateForward('/messages')
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
