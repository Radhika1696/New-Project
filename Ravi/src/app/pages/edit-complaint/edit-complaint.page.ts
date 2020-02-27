import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-edit-complaint',
  templateUrl: './edit-complaint.page.html',
  styleUrls: ['./edit-complaint.page.scss'],
})
export class EditComplaintPage implements OnInit {
  addfamily;
    onRegisterForm: FormGroup;
    FamilyList: any;
    hotelfam_id:any;
    complaint
    id
    edit_complaint
    ComplaintList
  constructor(  public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotelService: HotelProvider,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private authservice: AuthService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,)
     { 
      this.onRegisterForm = this.formbuilder.group({
        complaint_title: ["", Validators.required],
      //  date: ["", Validators.required],
       description: ["", Validators.required],
       priority: ["", Validators.required]
    });
    console.log("1");
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("para", params.id); // {order: "popular"}
     this.complaint=params.id;
     console.log(this.complaint);
    
     this.authservice.complaint_list().subscribe((res: any) => {
      this.ComplaintList = res.complaint_list;
      console.log("reload", this.ComplaintList);
 
       if (this.ComplaintList) {
              const result =  this.ComplaintList.filter(list => list.complaint_id==params.id);

             
              this.onRegisterForm.patchValue({
                  complaint_title: result[0].complaint_title,
                  // date: result[0].date,
                  description: result[0].description,
                 priority:result[0].priority
              });
          }
      });
    });


  }

  
  edit() {

    this.authservice
        .editcomplaint(this.onRegisterForm.value,  this.complaint)
        .subscribe((data:any) => {
            console.log('Segment changed', data);
            
                this.edit_complaint = data;
                console.log(this.edit_complaint)
            
                if (this.edit_complaint.success) {
                    let msg = "upadated successfully"
                    this.presentToast(msg);
                
                this.navCtrl.navigateForward('/messages');    
                
                  }
            
                  // else {
                  //   this.presentalert();
                  // }
                })
        
}

async presentalert(){
  let alert =await this.alertCtrl.create({
    header: 'Caution',
    message: 'Each field must be filled',
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
