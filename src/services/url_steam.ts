export class url_steam {
  static steam_api_url: string =
  'https://steam-ish.test-02.drosalys.net/api/';
  // static digimonLevelUrl: string = url_digi_api.digiminUrl + '/level/';
  static urlAccountPaginate: string =
    url_steam.steam_api_url + 'account?page=%s&limit=%s';
  static urlGame: string =
    'https://steam-ish.test-02.drosalys.net/api/game?limit=40';
}
