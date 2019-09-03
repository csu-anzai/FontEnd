import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlaylist } from '../model/playlist.module';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  public playlist: IPlaylist[];
  public API : string ='http://localhost:3000/playlists';

  constructor(private http : HttpClient) {}
 
  getAllPlaylist(): Observable<IPlaylist[]>{
    return this.http.get<IPlaylist[]>(`${this.API}`);
  }
  // getPlaylist(id: number) : Observable<IPlaylist>{
  //   return this.http.get<IPlaylist>(`${this.API}/${id}`);
  // }
  // addPlaylist(playlist:IPlaylist): Observable<IPlaylist>{
  //   return this.http.post<IPlaylist>(`${this.API}`,playlist);
  // }
  // editPlaylist(playlist:IPlaylist):Observable<IPlaylist>{
  //   return this.http.put<IPlaylist>(`${this.API}/${playlist.id}`,playlist)
  // }
  // deletePlaylist(id: number): Observable<IPlaylist>{
  //   return this.http.delete<IPlaylist>(`${this.API}/${id}`);
  // }
}
