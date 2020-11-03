import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL: string = '/api';

    constructor(private http: HttpClient) {}

    ngOnInit(): void{
      this.http.get('https://3000-a948bd2d-07a8-49a9-a0d2-5c4fd361c06c.ws-eu01.gitpod.io/api').subscribe(data => {
      this.results = data['results'];
      });
    }
}
