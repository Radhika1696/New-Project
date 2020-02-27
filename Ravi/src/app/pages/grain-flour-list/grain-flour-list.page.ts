import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-grain-flour-list',
  templateUrl: './grain-flour-list.page.html',
  styleUrls: ['./grain-flour-list.page.scss'],
})
export class GrainFlourListPage implements OnInit {

  form: FormGroup;
  packagesArray: FormArray;
  sampledata
  add_cart_data
  flour_list
  id
  price
  temp_quantity
  product_id
  quantity
  storageData
  category_id
  Flours_list
 amount
 numbers

 
  constructor(public navCtrl: NavController, private fb: FormBuilder,  private toastCtrl: ToastController,private alertCtrl: AlertController,
    public route: ActivatedRoute, public router: Router, public authservice: AuthService) {

      this.numbers = Array(100).fill(0).map((i)=>i);
      this.createEventForm();
  }

  createEventForm() {
    this.form = this.fb.group({
      
    })
  }
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
        this.category_id = params.id;

        this.authservice.flour_list(this.category_id).subscribe((data) => {
          this.Flours_list = data
          this.flour_list = this.Flours_list.data

          for(let flour of this.flour_list){
            this.addSection(flour)
          }

        })
      })

      this.form = new FormGroup({
        sections: new FormArray([
          //this.initSection(null),
        ]),
      });


  }

  addSection(packages) {
    const control = <FormArray>this.form.get('sections');
    control.push(this.initSection(packages));
  }
 

initSection(packages:any) {
  if (!packages) {
    var packages:any = {
      category_id :"",
      quantity : "",
      name : "",
      price:""
    }
  }
  return new FormGroup({
    category_id: new FormControl(packages.category_id),
    quantity: new FormControl(packages.quantity),
    name: new FormControl(packages.name),
    price:new FormControl(packages.price)
  });
}


getSections(form) {
  return form.controls.sections.controls;
}
  onEventSubmit() { }

  add(product_id) {
    console.log('ithe yetoy');
    var item = (<FormArray>this.form.get('sections')).at(product_id).value;
    console.log(item);
    this.sampledata = item;
    console.log(this.sampledata)
    this.quantity=this.sampledata.quantity
    console.log(this.quantity);
    this.category_id=this.sampledata.category_id
    console.log(this.category_id);
    this.price=this.sampledata.price
this.amount=this.price*this.quantity;
console.log(this.amount);



    this.authservice.add_cart(this.quantity,this.category_id,this.price,this.amount).subscribe((data)=>{
          this.add_cart_data=data;
          console.log(this.add_cart_data);

          
        if (this.add_cart_data.success) {
         
          this.presentToast(this.add_cart_data.success);
          
        }
        else {
          this.presentalert(this.add_cart_data.error_msg);
        }

          // if(this.add_cart_data.success){
          // //  console.log(this.add_cart_data.success);
          //   this.quantity="";
          // }
        })
  }

  async presentalert(error_msg) {
    let alert = await this.alertCtrl.create({
      header: 'Caution',
      message: error_msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ok',
          handler: () => {
            console.log('ok clicked');
          }
        }
      ]
    });
    await alert.present();

  }

  async presentToast(success) {
    let toast = await this.toastCtrl.create({
      message: success,
      duration: 1000,
      position: 'bottom',
      cssClass: "toast-scheme",
    });
    await toast.present();
  }
}
