import { Component, OnInit } from '@angular/core';
import { ClientSteamService } from 'src/services/api-steam-http.service';
import { Game } from 'src/models/Game';
import { url_steam } from 'src/services/url_steam';
import { PageSteam } from 'src/models/Page';
@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss'],
})
export class GameIndexComponent implements OnInit {
  arrayGames: PageSteam<Game>|undefined;
  constructor(private _httpService: ClientSteamService) {}

  ngOnInit(): void {
    this.getCountSteam();
  }
  //<SteamIshRequest<Account>>
  getCountSteam(url: string = url_steam.urlGame): void {
    this._httpService.getRequest<PageSteam<Game>>(url).subscribe((jsonResponse) => {
      this.arrayGames = jsonResponse;
      console.log(this.arrayGames)
      //console.log(sprintf(url_steam.urlAccountPaginate, this.currentPage));
    });
  }
}
