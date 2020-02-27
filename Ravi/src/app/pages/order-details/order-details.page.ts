import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  category
  order_id;
  details;
  item_details;
  summary_details;
  hotelSegment: string = 'details';
  constructor(public route: ActivatedRoute, public router: Router,public authservice: AuthService, public toastCtrl: ToastController,
    private alertCtrl: AlertController,public navCtrl:NavController) {

      this.order_id = this.route.snapshot.paramMap.get('order_id');
   }

  ngOnInit() {
    var segment = document.querySelector('ion-segment');
    var slides = document.querySelector('ion-slides');
  
    segment.addEventListener('ionChange', (ev) => onSegmentChange(ev));
    slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev));
  
    // On Segment change slide to the matching slide
    function onSegmentChange(ev) {
      slideTo(ev.detail.value);
    }
  
    function slideTo(index) {
      slides.slideTo(index);
    }
  
    // On Slide change update segment to the matching value
    async function onSlideDidChange(ev) {
      var index = await slides.getActiveIndex();
      clickSegment(index);
    }
  
    function clickSegment(index) {
      segment.value = index;
    }

      
      this.authservice.order_details_summary(this.order_id).subscribe((data)=>{
        this.details=data;
        this.summary_details=this.details.order_detail
        console.log(this.summary_details);
        
      })

      this.authservice.order_details_item(this.order_id).subscribe((data)=>{
        this.details=data;
        this.item_details=this.details.data
        console.log(this.item_details);
        
      })
  }
// orders(){
//   this.navCtrl.navigateForward('orders');
// }

// segmentChanged(ev: any) {
//   console.log('Segment changed', ev);
// }
segmentChanged(event) {
  this.category = event;
}

// <code right>
// private segmentChanged(segment: any) {
//   console.log('Tab changed:' + JSON.stringify(segment))
//   }


}
