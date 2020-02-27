import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public contactForm: FormGroup;
  submit;

  constructor(   public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalController: ModalController) {   }

  ngOnInit() {

  
      this.contactForm = this.formBuilder.group({
        'name': [null, Validators.compose([
          Validators.required
        ])],
        'email': [null, Validators.compose([
          Validators.required
        ])],
        'msg': [null, Validators.compose([
          Validators.required
        ])],
        'subject': [null, Validators.compose([
          Validators.required
        ])],
  
      })
}
async send() {

  console.log(this.contactForm.value)
  if (!this.contactForm.value.name) {
    this.contactForm.controls['name'].markAsTouched()
    this.submit = true;
  }

  if (!this.contactForm.value.email) {
    this.contactForm.controls['email'].markAsTouched()
    this.submit = true;
  }

  if (!this.contactForm.value.msg) {
    this.contactForm.controls['msg'].markAsTouched()
    this.submit = true;
  }

  if (!this.contactForm.value.subject) {
    this.contactForm.controls['subject'].markAsTouched()
    this.submit = true;
  }
  else {
    console.log(this.contactForm.value)
}
}

}
