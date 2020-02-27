import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: Array<any> = [];
parking_info
parking
  last_name: string;
  first_name: string;
  contact: string;
  mobile: string;
  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotels: HotelProvider ,
    private authservice:AuthService,   
  ) { 



    console.log('ABC')
    this.authservice.viewparking().subscribe((data)=>{
      this.parking=data
      console.log(this.parking)
      this.parking_info=this.parking.parking_info
      console.log(this.parking_info)
    })
   
  }
  
  ngOnInit() {
    // this.getBookings();
   this.first_name=localStorage.getItem('first_name');
   this.last_name=localStorage.getItem('last_name');
   this.mobile=localStorage.getItem('mobile')
  
  }

  // getBookings() {
  //   this.hotels.getBookings()
  //     .then(data => { this.bookings = data; });
  // }




}
