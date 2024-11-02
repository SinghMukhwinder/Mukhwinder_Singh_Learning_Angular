import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SmartphoneService} from "../Services/smartphone.service";
import {ActivatedRoute, Router} from "@angular/router";
import {smartphones} from "../Shared/mockSmartphone";
import {NgIf} from "@angular/common";
import {Smartphone} from "../Shared/Models/Smartphones";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  smartphoneForm: FormGroup;
  error: string | null= null;

  constructor(
    private smartphoneService: SmartphoneService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute

  )
  {
    this.smartphoneForm = this.fb.group({
      id:[smartphoneService.generateNewId()],
      serialNumber: ['', Validators.required],
      brand: ['', Validators.required],
      model: [''],
      storage:[''],
      isAvailable: [false],
      image: ['']
    });
  }
  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     if(id){
       this.smartphoneService.getSmartphoneById(id).subscribe( smartphones =>{
           if (smartphones){
             this.smartphoneForm.patchValue(smartphones);
           }});
     }
  }


  onSubmit(): void{
    if(this.smartphoneForm.valid){
      const newSmartphone: Smartphone = this.smartphoneForm.value;
      if (newSmartphone.id){
        this.smartphoneService.updateSmartphone(newSmartphone).subscribe(() => this.router.navigate(['/smartphones']));
      } else
        newSmartphone.id = this.smartphoneService.generateNewId();
        this.smartphoneService.addSmartphone(newSmartphone).subscribe(() => this.router.navigate(['/smartphones']));
      }
    }
}
