import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  version!: string;

  ngOnInit(): void {
    this.version = environment.APP_VERSION;
  }
}
