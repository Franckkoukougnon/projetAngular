import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastDate = new Date();

  appareils: any[];





  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
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


