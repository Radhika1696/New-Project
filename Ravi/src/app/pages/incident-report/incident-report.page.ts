import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.page.html',
  styleUrls: ['./incident-report.page.scss'],
})
export class IncidentReportPage implements OnInit {
  onRegisterForm: FormGroup
  submit: boolean;
  otp;
  constructor(public navCtrl: NavController,
    // public toastCtrl: ToastController,
    // public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private formbuilder: FormBuilder,
    private authservice: AuthService) { }

  ngOnInit() {
    this.onRegisterForm = this.formbuilder.group({
      'otp': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],

    })

  }

  add() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.otp) {
      this.onRegisterForm.controls['otp'].markAsTouched()
      this.submit = true;
    }
    if (!this.onRegisterForm.value.email) {
      this.onRegisterForm.controls['email'].markAsTouched()
      this.submit = true;
    }


    else {
      console.log(this.onRegisterForm.value);

      const user = {
        email: this.onRegisterForm.get('email').value,
        otp: this.onRegisterForm.get('otp').value,

      }

      this.authservice.OTP_Verification(user).subscribe((data) => {
        this.otp = data
        console.log('gafg', this.otp)

        if (this.otp.success) {

          this.presentToast(this.otp.success);

          this.navCtrl.navigateForward('/login')

        }

        else {
          this.presentalert(this.otp.error_msg);
        }


      })
    }
  }

  async presentalert(error_msg) {
    let alert = await this.alertCtrl.create({
      header: 'Caution',
      message: error_msg,
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

