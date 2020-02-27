import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateProvider, ActivitiesService } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  notice_details;
  notice_detail;
  notice_id;
  trip: any;
  tripID: any = this.route.snapshot.paramMap.get('id');

  adults: any = 1;
  children: any = 0;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public trips: ActivitiesService,
    public route: ActivatedRoute,
    public router: Router,
    public authservice:AuthService
  ) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params=>{
        console.log("para",params.id);
        this.notice_id=params.id;
        console.log(this.notice_id)

        this.authservice.notice_details(this.notice_id).subscribe(data=>{
          this.notice_detail=data
          this.notice_details=this.notice_detail.notice_data
          console.log(this.notice_details);
          
        })
      })
    // this.trip = this.trips.getItem(this.tripID);
  }

  // minus adult when click minus button
  // minusAdult() {
  //   this.adults--;
  // }

  // plusAdult() {
  //   this.adults++;
  // }

  // minusChildren() {
  //   this.children--;
  // }

  // plusChildren() {
  //   this.children++;
  // }

  // checkout(tripID: number) {
  //   this.navCtrl.navigateForward(`activity-checkout/${tripID}`);
  //   // this.router.navigate(['../../activity-checkout', { tripID: tripID }], { relativeTo: this.route });
  // }

}
