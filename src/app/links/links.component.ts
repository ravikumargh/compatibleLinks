import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as platform from 'platform';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public browserLinks = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.browserLinks = data;
    });
  }

  ngOnInit(): void {
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/links.json");
  }
  public onGoToPage(browserLink){
    browserLink.browsers.forEach(function (browser) {
      if (browser.name == platform.name && browser.isSupported) {
        console.log(browser);
        window.open(browserLink.url, '_blank').focus();
      }
  });
  }
}
