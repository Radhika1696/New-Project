import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
// import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { ImagePicker,ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  fileUrl: any = null;
  respData: any;
owner_profile
first_name
last_name
gender
email
mobile
dob
pan_no
ownerprofile
adhar_no
profile
profile_photo
images:any=[];
onRegisterForm: FormGroup;

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    // private camera: Camera,
    private imagePicker: ImagePicker,
   
    private formbuilder: FormBuilder,
        private authservice: AuthService,

  public file : File,
    public actionSheetController: ActionSheetController,
   
    ) {
      this.onRegisterForm = this.formbuilder.group({
        first_name: ["", Validators.required],
        last_name: ["", Validators.required],
        // gender: ["", Validators.required],
        // email: ["", Validators.required],
        mobile :["", Validators.required],
        dob: ["", Validators.required],
        // pan_no: ["", Validators.required],
        // adhar_no: ["", Validators.required]
    });
    console.log("1");
     }

  
  ngOnInit() {
    console.log("2");

    this.authservice.ownerprofile().subscribe((res: any) => {
        this.ownerprofile = res.editprofile;
        console.log(res);
        if (this.ownerprofile) {
            this.onRegisterForm.patchValue({
              first_name: this.ownerprofile[0].first_name,
              last_name: this.ownerprofile[0].last_name,
              // gender: this.ownerprofile[0].gender,
              // email: this.ownerprofile[0].email,
              mobile:this.ownerprofile[0].mobile,
              dob:this.ownerprofile[0].dob,
              // pan_no:this.ownerprofile[0].pan_no,
              // adhar_no:this.ownerprofile[0].adhar_no
            });
        }
    });
  }

  edit() {
    this.authservice
        .editprofile(this.onRegisterForm.value, this.ownerprofile[0].id)
        .subscribe(data => {
            this.profile = data;
        });
}


//Camera
  takephoto(){
    var options:ImagePickerOptions={
      maximumImagesCount:1,
      width:100,
      height:100, 
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let file = results[i].substring(results[i]
        .lastIndexof('/')+1);
        let path = results[i].substring(0,results[i].lastIndexof
        .lastIndexof('/')+1);
        this.file.readAsDataURL(path,file).then((toBase64String)=>{
          this.images.push(toBase64String);
        })
          // console.log('Image URI: ' + results[i]);
      }
   
    })
    // this.navCtrl.navigateForward('edit-profile');
  }
  



async sendData() {
  // send booking info
  const loader = await this.loadingCtrl.create({
    duration: 2000
  });

  loader.present();
  loader.onWillDismiss().then(async l => {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'bg-profile',
      message: 'Your Data was Edited!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
    this.navCtrl.navigateForward('/home');
  });
  
}

}

 


