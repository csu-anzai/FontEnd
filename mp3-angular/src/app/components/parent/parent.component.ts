import { Component, OnInit } from '@angular/core';
import { ISong } from 'src/app/model/song.module';
import { IPlaylist } from 'src/app/model/playlist.module';
import { SongService } from 'src/app/service/song.service';
import { PlaylistService } from 'src/app/service/playlist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  constructor(  ) { }

  ngOnInit() {

  }

}
