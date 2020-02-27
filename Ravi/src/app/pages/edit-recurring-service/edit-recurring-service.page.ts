import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recurring-service',
  templateUrl: './edit-recurring-service.page.html',
  styleUrls: ['./edit-recurring-service.page.scss'],
})
export class EditRecurringServicePage implements OnInit {
  onRegisterForm;
  recurring_id;
  recurring_service_list;
  recurring_list;
  edit_service;
  constructor(   private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private authservice: AuthService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    ) 
    
    {        this.onRegisterForm = this.formbuilder.group({
      provider_name: ["", Validators.required],
      service_name: ["", Validators.required],
      service_type: ["", Validators.required],
      service_frequency:["",Validators.required],
      mobile:["",Validators.required],
      address:["",Validators.required],
      service_time:["",Validators.required]
    
  });
 }

  ngOnInit() { 
      this.route.queryParams.subscribe(params =>{
    console.log("para",params);
    this.recurring_id=params.id;
    console.log(this.recurring_id);

     this.authservice.recurring_service_list().subscribe((data)=>{
       this.recurring_service_list=data;
       console.log(this.recurring_service_list);
       this.recurring_list=this.recurring_service_list.recurring_services_list
       console.log(this.recurring_list);

       if(this.recurring_list){
         const result = this.recurring_list.filter(list=> list.recurring_id==params.id)

         this.onRegisterForm.patchValue({
          provider_name: result[0].provider_name,
          service_name: result[0].service_name,
          service_type:result[0].service_type,
          service_frequency:result[0].service_frequency,
          mobile:result[0].mobile,
          address:result[0].address,
          service_time:result[0].service_time
         })
       }

     })
    
    })
   
  }


  edit(){this.authservice.edit_recurring_service(this.onRegisterForm.value,this.recurring_id).subscribe((data:any) => {
        console.log('Segment changed', data);
        
            this.edit_service = data;
            console.log(this.edit_service)
        
            if (this.edit_service.success) {
               
             this.presentToast(this.edit_service.success);
            this.navCtrl.navigateForward('/recurring-service-list');    
            
              }
        
              else {
                this.presentalert(this.edit_service.error);
              }
            })
    
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

