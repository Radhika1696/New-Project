import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../auth.service";
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  carshop: any;
  vendor_id
  service_list_detail
  carID: any = this.route.snapshot.paramMap.get('id');
  // carSegment: string = 'details';
  onRegisterForm: FormGroup;
  service_list: any;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public cars: CarsService,
    public route: ActivatedRoute,
    public router: Router,
   
    private formbuilder: FormBuilder,
    private authservice: AuthService
  ) { 
   console.log('abc')
   this.route
   .queryParams
   .subscribe(params => {  
    
     this.vendor_id =params.vendor_id;
     console.log('abc', this.vendor_id );})

     this.route.queryParams.subscribe(params =>{
       this.vendor_id=params.vendor_id;
       console.log('radhika',this.vendor_id)
   
    this.authservice.servicelistcategorydetail(this.vendor_id).subscribe((data:any)=>{
      this.service_list_detail=data.vendor_details
      console.log(  this.service_list_detail)
      // this.service_list=this.service_list.service_category_dtls
      // console.log(this.service_list)
      
    })
  })
  }

  ngOnInit() {
   
  }

 

}
