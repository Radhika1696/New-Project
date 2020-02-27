import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, AlertController, } from '@ionic/angular';
import { AuthService } from '../../auth.service'
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public onRegisterForm: FormGroup;
  submit;
  register_user




  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private toastCtrl: ToastController,

    private alertCtrl: AlertController,
    private modalController: ModalController

  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],

      'email': [null, Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      'contact': [null, Validators.compose([
        Validators.required, Validators.pattern('[6-9]\\d{9}')
      ])],

      'no_of_members': [null, Validators.compose([
        Validators.required
      ])],
      'occupation': [null, Validators.compose([
        Validators.required
      ])],

      'password': [null, Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(6)
      ])],
      'confirm_password': [null, Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm_password') });


  }

  async signUp() {
    console.log(this.onRegisterForm.value)
    if (!this.onRegisterForm.value.name) {
      this.onRegisterForm.controls['name'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.email) {
      this.onRegisterForm.controls['email'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.contact) {
      this.onRegisterForm.controls['contact'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.no_of_members) {
      this.onRegisterForm.controls['no_of_members'].markAsTouched()
      this.submit = true;
    }

    if (!this.onRegisterForm.value.occupation) {
      this.onRegisterForm.controls['occupation'].markAsTouched()
      this.submit = true;
    }


    if (!this.onRegisterForm.value.password) {
      this.onRegisterForm.controls['password'].markAsTouched()
      this.submit = true;

    }
    if (!this.onRegisterForm.value.confirm_password) {
      this.onRegisterForm.controls['confirm_password'].markAsTouched()
      this.submit = true;

    } else {
      console.log(this.onRegisterForm.value)


      const user = {
        name: this.onRegisterForm.get('name').value,
        contact: this.onRegisterForm.get('contact').value,
        email: this.onRegisterForm.get('email').value,
        no_of_members: this.onRegisterForm.get('no_of_members').value,
        occupation: this.onRegisterForm.get('occupation').value,
        password: this.onRegisterForm.get('password').value,
      }

      this.authservice.signUp(user).subscribe((data) => {
        this.register_user = data;
        console.log(this.register_user)


        if (this.register_user.success) {
          let msg = "Registered successfully"
          this.presentToast(msg);
          this.navCtrl.navigateRoot('/incident-report');
        }
        else {
          this.presentalert(this.register_user.error_msg);
        }
      })
    }
  }

  register(){
    this.navCtrl.navigateForward('login');
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

  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'bottom',
      cssClass: "toast-scheme",
    });
    await toast.present();
  }

  matchingPasswords(password, confirm_password) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm_password].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }

}

