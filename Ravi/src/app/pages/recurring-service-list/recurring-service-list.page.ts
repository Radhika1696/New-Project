import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { AuthService } from '../../auth.service'


@Component({
  selector: 'app-recurring-service-list',
  templateUrl: './recurring-service-list.page.html',
  styleUrls: ['./recurring-service-list.page.scss'],
})
export class RecurringServiceListPage implements OnInit {
  re_service_list;
  service_list;
  delete_recurring_service;
  recurring_id;
  constructor(public navCtrl: NavController, 
    private authservice: AuthService,
    
  public toastCtrl: ToastController,
  private alertCtrl: AlertController,

    ) {}

  ngOnInit() {
    this.recurrint_service_list();
  }

  recurrint_service_list(){
    this.authservice.recurring_service_list().subscribe((data)=>{
      this.service_list=data;
      console.log(this.re_service_list);
      this.re_service_list=this.service_list.recurring_services_list
      console.log(this.re_service_list);
      
      
    })

    
  }

  ionViewDidEnter(){ 
    this.recurrint_service_list();
  }

  add(){
    this.navCtrl.navigateForward('/local-weather')
  }

  edit(service){
   this.navCtrl.navigateForward('edit-recurring-service',{queryParams:{id:service.recurring_id}})
   console.log(service.recurring_id);
   
  }

  delete(service){
  console.log("abc",{queryParams:{id:service.recurring_id}})
this.recurring_id=service.recurring_id;
console.log(this.recurring_id);

this.authservice.delete_recurring_service_list(this.recurring_id).subscribe((data)=>{
  this.delete_recurring_service=data;
  console.log(this.delete_recurring_service);
  if (this.delete_recurring_service.data.success) {
       
    this.presentToast(this.delete_recurring_service.data.success);
    
  }
  else {
    this.presentalert(this.delete_recurring_service.data.error);
  }
  this.ionViewDidEnter();
  
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
