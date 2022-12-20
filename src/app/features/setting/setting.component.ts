import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../shared/services/storage.service";
import { Router } from "@angular/router";
import { User } from "../../core/models";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"]
})
export class SettingComponent implements OnInit {

  user!: User | null;
  settingFrm!: FormGroup;

  constructor(private storage: StorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.settingForm();
    this.getUserDetail();

  }

  logout() {
    this.storage.removeItemLocaLStorage('user');
    this.router.navigate(['sign-in'])
  }

  handleUpdateSetting() {
    this.getUserDetail();
    this.storage.setItemLocalStorage("user", this.settingFrm.value);
    this.router.navigate([""]);
  }

  getUserDetail() {
    this.user = this.storage.getItemLocalStorage("user");
    this.settingFrm.setValue({
      email: this.user?.email,
      bio: this.settingFrm.value.bio,
      name: this.user?.username,
      password: this.user?.password
    });
  }

  settingForm() {
    this.settingFrm = new FormGroup({
      email: new FormControl("", {
        validators: Validators.required
      }),
      bio: new FormControl("", {}),
      name: new FormControl("", {
        validators: Validators.required
      }),
      password: new FormControl("", {
        validators: Validators.required
      })

    });

  }
}
