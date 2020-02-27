import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, AlertController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { Storage } from '@ionic/storage';

import { LocationPage } from './../modal/location/location.page';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  event_id;
  eventdetails;
  events_data;
  search: any = {
    dropOff: 'Rio de Janeiro, Brazil',
    to: new Date().toISOString()
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage,
    private route: ActivatedRoute,
    private authservice: AuthService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log("para",params.id);
      this.event_id=params.id;
      console.log(this.event_id)
  
  
      this.authservice.event_details(this.event_id).subscribe(data=>{
        this.eventdetails=data;
        this.events_data=this.eventdetails.event_data;
        console.log(this.events_data);

      })
    })



    // this.storage.get('dropOff').then((val) => {
    //   if (val === null) {
    //     this.search.dropOff = 'Rio de Janeiro, Brazil';
    //   } else {
    //     this.search.dropOff = val;
    //   }
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  // async choosePlace(fromto: string) {
  //   const modal = await this.modalCtrl.create({
  //     component: LocationPage,
  //     componentProps: { fromto: fromto, search: this.search }
  //   });
  //   return await modal.present();
  // }

  // doSearch() {
  //   this.navCtrl.navigateForward('activity-list');
  // }

}
