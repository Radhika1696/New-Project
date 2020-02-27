import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AlertController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart_data;
  current_cart;
  hide = false;
  total_price;
  price
  sum
  msg
  place_order
  user_id
  addr
  constructor(public authservice: AuthService, public toastCtrl: ToastController,
    private alertCtrl: AlertController,public navCtrl:NavController ) { }

  ngOnInit() {
    this.cart_list();
  }
  cart_list() {
    this.authservice.current_cart().subscribe((data) => {
      this.cart_data = data
      this.current_cart = this.cart_data.data
      console.log(this.current_cart);


      for (let i = 0; i < this.current_cart.length; i++) {
        this.user_id = this.current_cart[i].user_id;
        console.log(this.user_id);
      }

      this.sum = 0;
      // let sum = 0;
      for (let d of this.current_cart) {
        this.sum = this.sum - (- d.amount);
      }
      console.log(this.sum);
      // if(this.current_cart){
      //   this.hide=true
      //   this.msg= 'Flour List are not  available in the cart!'
      // }
    })
  }

  order() {
    this.authservice.place_order(this.addr).subscribe((data) => {
      this.place_order = data;
      console.log(this.place_order);

      if (this.place_order.success) {
        this.presentToast(this.place_order.success);
        this.navCtrl.navigateForward('orders')
      //   this.hide=true
      // this.msg= 'Flour List are not  available in the cart!'
      }
      else {
        this.presentalert(this.place_order.error);
      }
    })
  }

  async presentalert(error) {
    let alert = await this.alertCtrl.create({
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
