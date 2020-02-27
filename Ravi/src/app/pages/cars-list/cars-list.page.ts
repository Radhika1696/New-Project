import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { AuthService } from "../../auth.service";
import { CarDetailPage } from '../car-detail/car-detail.page';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
 
} from '@angular/animations';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class CarsListPage implements OnInit {

  shops: any;
  numDays: number = 3;
  service_list
  servicecat 
  service_cat_id
  servicecatlist
  hide=false;

  constructor(
    public navCtrl: NavController, 
    public carsService: CarsService,
    private translate: TranslateProvider,
    private authservice: AuthService
  ) {
    this.authservice.servicelist().subscribe((data)=>{
      this.service_list=data
      console.log( this.service_list)
      this.service_list=this.service_list.service_category_dtls
      console.log(this.service_list)
      
    })
   

  // this.authservice.servicelistcategory(this.service_cat_id).subscribe((data)=>{
  //   this.servicecat =data
  //   console.log( this.servicecat)
  
  // })
  
   }

  ngOnInit() {
    
  }

 
 

  // detail(vendor_id){
  //   this.navCtrl.navigateForward(CarDetailPage,{vendor_id})
  // }

 
  checkValue(event){
  
    console.log(event.detail.value)
    this.service_cat_id = event.detail.value
    this.authservice.servicelistcategory(this.service_cat_id).subscribe((data)=>{
        this.servicecat =data
        console.log( this.servicecat)
        this.servicecatlist=this.servicecat.vendor_list
        console.log(this.servicecatlist)
      })

    
  }

  detail(vendor_id) {
    console.log(vendor_id)
    this.navCtrl.navigateForward('/car-detail', {queryParams :{vendor_id:vendor_id }})
  } 

  // add(){
  //   this.navCtrl.navigateForward('local-weather')
  // }
}
