import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController, Platform, IonRouterOutlet } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  user_data
  user_name
  err
  password
  login_user
  rootPage
  data1
  submit;
  user;
  subscription: any;
  backButtonSubscription;
  routerOutlet
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router,

    private authservice: AuthService, private altCtrl: AlertController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }


  ngOnInit() {


    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }



  onSubmit() {

    if (!this.onLoginForm.value.email) {
      this.onLoginForm.controls['email'].markAsTouched()
      this.submit = true;
    }
    if (!this.onLoginForm.value.password) {
      this.onLoginForm.controls['password'].markAsTouched()
      this.submit = true;

    } else {
      console.log(this.onLoginForm.value)

    const user = {
      email: this.onLoginForm.value.email,
      password: this.onLoginForm.value.password
    }

    this.authservice.login(user).subscribe((data) => {
      this.user = data;
      this.login_user=this.user.result
      this.user_data=this.login_user.user_data
      console.log(this.user_data)

      if (this.login_user.success) {
        localStorage.setItem("id",this.user_data.id);
        localStorage.setItem("token",this.user_data.token);
        console.log(localStorage.getItem('id'));
        this.navCtrl.navigateRoot('/home');

      }

      else {
        this.presentalert();
      }
    })
  }
  }


  register() {
    this.navCtrl.navigateRoot('/register')
  }

  async presentalert() {
    let alert = await this.alertCtrl.create({
      header: 'Caution',
      message: 'Invalid Username or password',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // },
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
