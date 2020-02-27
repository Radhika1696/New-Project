import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.page.html',
  styleUrls: ['./meeting-detail.page.scss'],
})
export class MeetingDetailPage implements OnInit {
  meeting_id;
  details;
  meeting_detail;
  constructor(private route: ActivatedRoute,
    private authservice: AuthService,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log("para",params.id);
      this.meeting_id=params.id
     console.log(this.meeting_id);
     

     this.authservice.metting_detail(this.meeting_id).subscribe((data)=>{
       this.details=data;
       this.meeting_detail=this.details.meeting_details
       console.log(this.meeting_detail);
       
     })
    })
  }

}
