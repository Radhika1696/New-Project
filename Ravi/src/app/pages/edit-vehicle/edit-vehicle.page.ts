import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../providers/message/message.service';
import { AuthService } from '../../auth.service';
import { ThrowStmt } from '@angular/compiler';
import { ToastController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage implements OnInit {
  onRegisterForm: FormGroup;
  vehicles_list;
  vehicle_list;
  vehicle_id;
  edit_vehicle;
  vehiclelist;
  id;
  submit: boolean;
  constructor(
    public messageService: MessageService,
    private formbuilder:FormBuilder,
    private route: ActivatedRoute,
    private authservice: AuthService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public navCtrl: NavController,) 
    {   
      this.onRegisterForm = this.formbuilder.group({    
        vehicle_name: ["", Validators.required],
        vehicle_type: ["", Validators.required],
        vehicle_no: ["", Validators.required],
    
    
  });
  console.log("1");
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log("para",params.id);
      this.id=params.id
      console.log(this.id);
      
      

      this.authservice.vehicle_list().subscribe((data)=>{
       this.vehicles_list=data
        console.log(this.vehicles_list);
        this.vehiclelist=this.vehicles_list.vehicle_list
        console.log(this.vehiclelist);
        
  
        if(this.vehiclelist){
          const result = this.vehiclelist.filter(list=> list.id==params.id)
 
          this.onRegisterForm.patchValue({
            vehicle_name: result[0].vehicle_name,
            vehicle_type: result[0].vehicle_type,
            vehicle_no:result[0].vehicle_no,
         
          })
        }

      })
    })
 
  }

  edit(){
    this.authservice.edit_vehicle_list(this.onRegisterForm.value,this.id).subscribe((data)=>{
      this.edit_vehicle=data;
      console.log(this.edit_vehicle);

      if(this.edit_vehicle.success){
        this.presentToast(this.edit_vehicle.success);
        this.navCtrl.navigateForward('/vehicle-list');    
      }
      else {
                    this.presentalert(this.edit_vehicle.error);
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
