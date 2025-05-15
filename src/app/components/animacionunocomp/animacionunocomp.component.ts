import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-animacionunocomp',
  templateUrl: './animacionunocomp.component.html',
  styleUrls: ['./animacionunocomp.component.scss'],
})
export class AnimacionunocompComponent  implements OnInit {

  constructor(    public storageService: StorageService
  ) { }

  ngOnInit() {}

}
