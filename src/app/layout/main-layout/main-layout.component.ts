import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.showAndHideSideBarMenu();
  }

  showAndHideSideBarMenu() {
    $(function () {
      // Toggel side menu
      $('#sidebar-collapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
      });
    });
  }
}
