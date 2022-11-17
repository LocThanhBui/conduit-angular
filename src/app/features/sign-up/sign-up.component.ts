import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../shared/services/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {

  signUpFrm!: FormGroup;
  errorMessage: string = "";

  constructor(private storage: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signUp();
  }

  signUp() {
    this.signUpFrm = new FormGroup({
      username: new FormControl("", {
        validators: Validators.required
      }),
      email: new FormControl("", {
        validators: Validators.required
      }),
      password: new FormControl("", {
        validators: Validators.required
      })
    });
  }

  handleSignUp() {
    this.signUpFrm.markAllAsTouched();
    if (this.signUpFrm.invalid) {
      if (!this.signUpFrm.value.username) {
        this.errorMessage = "This username is required";
      }
      if (!this.signUpFrm.value.email) {
        this.errorMessage = "This email field is required";
      }
      if (!this.signUpFrm.value.password) {
        this.errorMessage = "This password field is required";
      }
      return;
    }

    this.storage.setItemLocalStorage("user", this.signUpFrm.value);
    this.router.navigate(["/sign-in"]);
  }

}
