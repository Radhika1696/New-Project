import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  user_id
  order_list
  my_order_list
  constructor(public route: ActivatedRoute, public router: Router,public authservice: AuthService, public toastCtrl: ToastController,
    private alertCtrl: AlertController,public navCtrl:NavController) {

    // this.user_id = this.route.snapshot.paramMap.get('user_id');
    this.authservice.my_order_list().subscribe((data)=>{
      this.order_list=data;
      this.my_order_list=this.order_list.data
      console.log(this.my_order_list);
      
    })

   }

  ngOnInit() {
  }




  details(order_id){
    this.navCtrl.navigateForward(`order-details/${order_id}`);
  }
}
