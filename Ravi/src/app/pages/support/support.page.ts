import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  contact_list;
  contact_lists
  constructor(   private authservice: AuthService,) {
    this.authservice.view_emergency_list().subscribe((data)=>{
      this.contact_list=data;
      console.log(this.contact_list);
      this.contact_lists=this.contact_list.notice_data;
      console.log(this.contact_lists);
      
      
    })
   }

  ngOnInit() {
  }

}
