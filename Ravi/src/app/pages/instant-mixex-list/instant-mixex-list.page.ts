import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-instant-mixex-list',
  templateUrl: './instant-mixex-list.page.html',
  styleUrls: ['./instant-mixex-list.page.scss'],
})
export class InstantMixexListPage implements OnInit {


  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
    
  }

  ngOnInit() {}
  
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      // exp: '',
    })
  }
 
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  // removeSkill(i:number) {
  //   this.skills.removeAt(i);
  // }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 

 
 

