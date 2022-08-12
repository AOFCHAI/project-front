import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = undefined;
  isLogin: Boolean = false;
  lists: any;

  public userName: any;
  public userFirst: any;

  constructor(
    private permissionsService: NgxPermissionsService,
    private router: Router,
  ) {
  
  }

  ngOnInit(): void {
    // this.setIdle();
    this.initRolePermission();
  }

  logOut() {
    sessionStorage.removeItem('userdt_role');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userFirst');
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    });
  }

  initRolePermission() {
    const userdt_role = sessionStorage.getItem('userdt_role');
    const role: string = (userdt_role != null && userdt_role != undefined) ? userdt_role : '';
    this.isLogin = role ? true : false;
    this.permissionsService.addPermission(role);
    this.userName = sessionStorage.getItem('userName');
    this.userFirst = sessionStorage.getItem('userFirst');
  }

  title = 'project-v1';
}
