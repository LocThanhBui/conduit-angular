import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../shared/services/storage.service";
import { User } from "../../core/models";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {

  signInFrm!: FormGroup;
  errorMessage: string = "";
  user!: User | null;


  constructor(private storage: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signIn();
  }

  handleSignIn() {
    this.user = this.storage.getItemLocalStorage("user");
    const { email, password } = this.signInFrm.value;

    if (this.signInFrm.invalid) {
      if (!email) {
        this.errorMessage = "This email field is required";
      }else {
        this.errorMessage = "This password field is required";
      }
      return;
    }
    if (this.user?.email !== email || this.user?.password !== password) {
      this.errorMessage = "email or password invalid";
      return;
    } else {
      this.router.navigate(["/"]);
    }

  }

  signIn() {
    this.signInFrm = new FormGroup({
      email: new FormControl("", {
        validators: Validators.required
      }),
      password: new FormControl("", {
        validators: Validators.required
      })
    });
  }
}
