import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.page.html',
  styleUrls: ['./meeting-list.page.scss'],
})
export class MeetingListPage implements OnInit {
  meeting_list;
  view_meeting_list;
  constructor(  public navCtrl: NavController, 
    private authservice: AuthService)
   {
     this.authservice.view_meeting_list().subscribe((data)=>{
       this.meeting_list=data
       console.log(this.meeting_list);
       this.view_meeting_list=this.meeting_list.meeting_data
       console.log(this.view_meeting_list);
       
       
     })
   }

  ngOnInit() {
  }

  detail(meeting){
    console.log("meeting",meeting.id);
    this.navCtrl.navigateForward('meeting-detail',{queryParams:{id:meeting.id}})
  }
  
}
