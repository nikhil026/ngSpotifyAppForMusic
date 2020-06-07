import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {
   private searchUrl: string;
   private artistUrl: string;
   private albumsUrl: string;
   private albumUrl: string;
  
   constructor(private _http: Http) {
   }
   private token: string = `Bearer BQAhxtA_N7ZJiavX6Hmes-8-u9o3TwpO2FCbdFfmUT5cjwFkbUr5xvJsykkWTrQxxukPytWPbodckRj82MfCtNRDaz9r6DbphW0kfGvn9HB3LXiVT6yS2Wvnz9kFkDBzrvXtFtYJrfISnwU0b7OdRPE9OSQqXis2skM`;
      private httpOptions = {
      headers: new Headers({
        'Content-Type':  'application/json',
        'Authorization': this.token
      })
    };
  
   searchMusic(str: string, type = 'artist') {
      
  
      this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
      return this._http.get(this.searchUrl, this.httpOptions)
         .map(res => res.json());
   }
   getArtist(id: string) {
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this._http.get(this.artistUrl, this.httpOptions)
         .map(res => res.json());
   }
   getAlbums(artistId: string) {
      this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this._http.get(this.albumsUrl,  this.httpOptions)
         .map(res => res.json());
   }
   getAlbum(id: string) {
      this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this._http.get(this.albumUrl, this.httpOptions)
         .map(res => res.json());
   }

}
