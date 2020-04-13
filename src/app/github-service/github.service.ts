import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = 'loginsysy';
  private client_id = '947832f574acc343dbb6';
  private client_secret = '1bddd92a680acc96651ef71e00471b600e4250ab';

  constructor(private http: HttpClient) {
    console.log("Github service started");
  }
  getUser() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  getRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
      this.username +
      "/repos" +
      "?client_id=" +
      this.client_id +
      "&client_secret=" +
      this.client_secret
    );
  }
  updateUsername(username: any) {
    this.username = username;
  }
}
