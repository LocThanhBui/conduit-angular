import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../../core/models";

@Injectable({
  providedIn: "root"
})
export class StorageService {



  constructor() {
  }

  // setInfoUser(username: User) {
  //   this.infoUser.next(username);
  // }

  getItemLocalStorage<T = string>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data) as T;
  }

  setItemLocalStorage(key: string, data: unknown) {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data as string);
    }
  }

  removeItemLocaLStorage(key: string) {
    localStorage.removeItem(key);
  }
}
