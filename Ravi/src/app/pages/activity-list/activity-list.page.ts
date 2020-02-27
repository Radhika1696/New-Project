import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, ActivitiesService } from '../../providers';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.page.html',
  styleUrls: ['./activity-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class ActivityListPage implements OnInit {
  trips: any;
  numDays: Number = 3;
  noticeList;
  notice_List;
  constructor(
    public navCtrl: NavController, 
    public tripsService: ActivitiesService,
    private authservice:AuthService
  ) {
    this.authservice.view_notice().subscribe(data => {
      this.noticeList = data;
     this.notice_List= this.noticeList.notice_data;
       console.log( this.notice_List)
  });
    
   }

  ngOnInit() {
    this.trips = this.tripsService.getAll();
  }

  detail(notice){
    console.log(notice.id)
    this.navCtrl.navigateForward('activity-detail',{queryParams:{id:notice.id}})
  }
}
