import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.page.html',
  styleUrls: ['./edit-visitor.page.scss'],
})
export class EditVisitorPage implements OnInit {
  onRegisterForm: FormGroup;
  visitors
  visitor_list
  VisitorsList
  edit_visitor
  constructor(  public navCtrl: NavController,
        private translate: TranslateProvider,
        public hotelService: HotelProvider,
        private formbuilder: FormBuilder,
        private route: ActivatedRoute,
        private authservice: AuthService,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController) 

        {    this.onRegisterForm = this.formbuilder.group({
            visitor_name: ["", Validators.required],
            person_to_meet: ["", Validators.required],
            purpose_of_visit: ["", Validators.required],
            mobile: ["", Validators.required],
            visit_date: ["", Validators.required],
            visit_time: ["", Validators.required]
        });
       
        }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("para", params); // {order: "popular"}
     this.visitors=params.id;
     console.log(this.visitors);
   


    this.authservice.visitor_list().subscribe(data => {
      this.VisitorsList = data;
     this.visitor_list= this.VisitorsList.visitors_list;
       console.log( this.visitor_list)
    //  this.authservice.complaint_list().subscribe((res: any) => {
    //   this.ComplaintList = res.complaint_list;
    //   console.log("reload", this.ComplaintList);


 
       if (this.visitor_list) {
              const result =  this.visitor_list.filter(list => list.id==params.id);

              this.onRegisterForm.patchValue({
                visitor_name: result[0].visitor_name,
                person_to_meet: result[0].person_to_meet,
                purpose_of_visit: result[0].purpose_of_visit,
                mobile: result[0].mobile,
                visit_date: result[0].visit_date,
                visit_time: result[0].visit_time,

                 
              });
          }
      });
    });

  }


  edit() {

    this.authservice
        .editvisitor(this.onRegisterForm.value,this.visitors) // this.visitors=params.id;
        .subscribe((data:any) => {
            console.log('Segment changed', data);
            
                this.edit_visitor = data;
                console.log(this.edit_visitor)
            
                if (this.edit_visitor.success) {
                    let msg = "Visitor edited successfully"
                    this.presentToast(msg);
                
                this.navCtrl.navigateForward('/favorites');    
                
                  }
            
               
                })
        
}

// async presentalert(){
//   let alert =await this.alertCtrl.create({
//     header: 'Caution',
//     message: 'Each field must be filled',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: () => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'ok',
//         handler: () => {
//           console.log('ok clicked');
//         }
//       }
//     ]
//   });
// await alert.present();
//  }
        

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
