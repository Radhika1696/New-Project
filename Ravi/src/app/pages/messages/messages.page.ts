import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../providers/message/message.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages: Array<any> = [];
  ComplaintList
  abc: any;
  delete_complaint
  constructor(public messageService: MessageService,
    private authservice: AuthService,
    private router: Router,
   
  public toastCtrl: ToastController,
  private alertCtrl: AlertController,
    private route: ActivatedRoute,
  
    public navCtrl: NavController) { }

  ngOnInit() {
  
    this.complaintList();
   
  }

  complaintList() {
    this.authservice.complaint_list().subscribe((res: any) => {
        this.ComplaintList = res.complaint_list;
        console.log("reload", this.ComplaintList);
    });
}

  // deleteItem(message) {
  //   this.messageService.delMessage(message);
  // }

  // getMessages() {
  //   this.messages = this.messageService.getMessages();
  // }
  ionViewDidEnter(){ 
    this.complaintList();
}
  
  edit(complaint){
    console.log("TCL: HotelCheckoutPage -> edit -> ComplaintList", complaint)
    this.navCtrl.navigateForward('edit-complaint',{ queryParams: { id: complaint.complaint_id}})
}

  add(){
    this.navCtrl.navigateForward('message')
  }

  delete(complaint){
  
   console.log ('abc',{ queryParams: { id: complaint.complaint_id} })
   console.log ( complaint.complaint_id)
      // {order: "popular"}
    //  this.complaint=params.id;
    //  console.log(this.complaint);
    this.abc=complaint.complaint_id  //complaint_id
    console.log(this.abc)

    this.authservice.deletecomplaint(this.abc).subscribe((data) => {
      this.delete_complaint =data
      console.log("reload", this.delete_complaint);

      if (this.delete_complaint.data.success) {
       
        this.presentToast(this.delete_complaint.data.success);
        
      }
      else {
        this.presentalert(this.delete_complaint.data.error);
      }
     this.ionViewDidEnter();
     
  });
 
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
