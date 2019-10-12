import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { USerAuthService } from "../shared/user.auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Component({
    template: `<div>
    <h1>Edit Your Profile </h1>
    <hr>
    <div class="col-md-4">
      <form autocomplete="off" novalidate [formGroup]="profileForm" (ngSubmit)="saveProfile(profileForm.value)">
        <div class="form-group" [ngClass]="{'error':profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched }">
          <label for="firstName">First Name:</label>
          <em *ngIf="!validateFirstName() && profileForm.controls.firstName.errors.required">Required</em>
          <em *ngIf="!validateFirstName() && profileForm.controls.firstName.errors.pattern">Must start with a letter</em>
          <input id="firstName" formControlName="firstName" type="text" class="form-control" placeholder="First Name..." />
        </div>
        <div class="form-group" [ngClass]="{'error':profileForm.controls.lastName.invalid && profileForm.controls.lastName.touched }">
          <label for="lastName">Last Name:</label>
          <em *ngIf="!validateLastName()">Required</em>
          <input id="lastName" formControlName="lastName" type="text" class="form-control" placeholder="Last Name..." />
        </div>
  
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default">Cancel</button>
         <button (click)="logout()" type="button" style="float:right" class="btn btn-warning">Logout</button>
      </form>
    </div>
  </div>`,
    styles: [`
    em{
        float:right;padding-left:10px; color:#e05c65
    }
    .error input{
        background-color:#e3c3c5;
    }
    .error ::-webkit-input-placeholder{color:#999}
    .error ::-moz-input-placeholder{color:#999}
    .error ::-o-input-placeholder{color:#999}
    .error ::-ms-input-placeholder{color:#999}
    `]
})

export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    private firstName;
    private lastName;

    constructor(private auth: USerAuthService, private router: Router, private toastr: ToastrService) { }

    ngOnInit() {
        this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })

    }

    saveProfile(data) {
        if (this.profileForm.valid) {
            console.log('success');
            this.auth.updateCurrentUser(data.firstName, data.lastName).subscribe(() => {
                this.toastr.success('Profile Details Updated!')
                // this.toastr.success('Hello world!', 'Toastr fun!');
                this.router.navigate(['/events']);
            })
        }

    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched
    }

    cancelEdit() {
        this.router.navigate(['/events']);

    }
    logout = () => {
        this.auth.logout().subscribe(() => {
            this.router.navigate([''])
        })
    }
}