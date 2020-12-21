import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastDate = new Date();

  appareils: any[];





  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  onAllume() {
    this.appareilService.switchOnAll();
  }

  onEteint() {
    this.appareilService.switchOffAll();
  }


  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

}
