import { Component, OnInit } from '@angular/core';
import { url_steam } from 'src/services/url_steam';
import { ClientSteamService } from 'src/services/api-steam-http.service';
import { items } from 'src/models/Steam';
import { PageSteam } from 'src/models/Page';
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-steam-api',
  templateUrl: './steam-api.component.html',
  styleUrls: ['./steam-api.component.scss']
})
export class SteamApiComponent implements OnInit {

  arrayCount: PageSteam<items>|undefined;
  constructor(private _httpService:  ClientSteamService) { }

  ngOnInit(): void {
    this.getCountSteam();
  }

  getCountSteam(page: number = 1, itemsPerPage: number = 20): void {
    this._httpService.getRequest<PageSteam<items>>(sprintf(url_steam.urlAccountPaginate, page, itemsPerPage))
      .subscribe((jsonResponse) => {
        this.arrayCount = jsonResponse;
        console.log(sprintf(url_steam.urlAccountPaginate, page, itemsPerPage))
      }
    );
 

  }
}
