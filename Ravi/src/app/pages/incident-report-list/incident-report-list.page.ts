import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-incident-report-list',
  templateUrl: './incident-report-list.page.html',
  styleUrls: ['./incident-report-list.page.scss'],
})
export class IncidentReportListPage implements OnInit {
  ReportList;
  report_list;
  delete_report_list;
  report_id;
  all_reportList;
  all_report_list
  constructor( 
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private authservice: AuthService,
    private alertCtrl: AlertController,)
     {

     }

  ngOnInit() {
    this.get_incident_report_List();
    this.reportList();
  }

reportList(){
  this.authservice.all_report_list().subscribe(data=>{
    this.all_reportList=data
    console.log(this.all_reportList)
    this.all_report_list=this.all_reportList.all_incident_list
    console.log(this.all_report_list)
  })
}



  get_incident_report_List() {
    this.authservice.view_report().subscribe((data) => {
        this.ReportList = data;
        console.log("reload", this.ReportList);
        this.report_list=this.ReportList.incident_report_list
        console.log(this.report_list)
    });
}


  add(){
    this.navCtrl.navigateForward('/incident-report')
  }

  ionViewDidEnter(){ 
    this.get_incident_report_List();
  }


delete(report){
  
  console.log ('abc',{ queryParams: { id:report.id} })
  console.log ( report.id)

   this.report_id=report.id //complaint_id
   console.log(this.report_id)

   this.authservice.delete_report(this.report_id).subscribe((data)=>{
       this.delete_report_list=data;
       console.log(this.delete_report_list);
       if (this.delete_report_list.data.success) {
         
          this.presentToast(this.delete_report_list.data.success);
      
      this.navCtrl.navigateForward('/incident-report-list');    
      
        }
        else {
          this.presentalert(this.delete_report_list.data.error);

        }
       this.ionViewDidEnter();
       
   })
}


async presentalert(error){
  let alert =await this.alertCtrl.create({
    header: 'Caution',
    message:error,
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