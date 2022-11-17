import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../../../shared/services/storage.service";
import { User } from "../../models";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  user!: User | null;

  constructor(
    private router: Router,
    private storage: StorageService
  ) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.user = this.storage.getItemLocalStorage("user");
  }


}
