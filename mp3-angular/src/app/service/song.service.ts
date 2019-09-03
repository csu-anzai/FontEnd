import { Injectable } from '@angular/core';
import { ISong } from '../model/song.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: ISong[];
  public URL: string = 'http://localhost:3000/songs';

  constructor(private http: HttpClient) { }

  getAllSong(): Observable<ISong[]> {
    return this.http.get<ISong[]>(`${this.URL}`);
  }
  // getSong(id: number) : Observable<ISong>{
  //   return this.http.get<ISong>(`${this.URL}/${id}`);
  // }
  // addSong(song:ISong): Observable<ISong>{
  //   return this.http.post<ISong>(`${this.URL}`,song);
  // }
  // editSong(song:ISong):Observable<ISong>{
  //   return this.http.put<ISong>(`${this.URL}/${song.id}`,song)
  // }
  // deleteSong(id: number): Observable<ISong>{
  //   return this.http.delete<ISong>(`${this.URL}/${id}`);
  // }
}
