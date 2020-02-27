import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController, Platform } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
// import { CarsListPage } from './cars-list.page';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  openMenu: Boolean = false;
  searchQuery: String = '';
  items: string[];
  showItems: Boolean = false;
  rooms: any;
  adults: any;
  subscribe: any;
  childs: any = 0;
  children: number;
  hotellocation: string;

  agmStyles: any[] = environment.agmStyles;
  id
  token
  flour_type
  rootPage
  first_name
  last_name
  society_id
  email
  mobile
  subscription
  profile_photo


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    public hotels: HotelProvider,
    private route: ActivatedRoute,
    private platform: Platform,
    private authservice: AuthService
  ) {

    this.token = localStorage.getItem("token");
    this.id = localStorage.getItem('id');

    this.authservice.Flour_type().subscribe((data)=>{
      this.flour_type=data
      this.flour_type=this.flour_type.data
      console.log(this.flour_type);
    })



  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }


  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }



  ngOnInit() {


    if (localStorage.getItem("id") === null) {
      this.navCtrl.navigateRoot('/login');
    }

    // this.route.queryParams

    //   .subscribe(params => {
    //     console.log("params",params); // {order: "popular"}

    //     // this.order = params.order;
    //     // console.log(this.order); // popular
    //   });

  }

  logout() {
    this.navCtrl.navigateRoot('login');
  }

  register() {
    this.navCtrl.navigateForward('register');
  }

  view(id) {
    console.log(id)
    this.navCtrl.navigateForward('/grain-flour-list', {queryParams :{id:id }})
    console.log(id);
    
  } 

}
