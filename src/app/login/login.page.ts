import { Component, OnInit } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { InteractionRequiredAuthError, AuthError } from 'msal';
import { AuthService } from '../service/auth.service';
import { profile } from 'console';
const graphMeEndpoint = "https://graph.microsoft.com/v1.0/me/"; 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  profile;
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private authService: MsalService,
    public cambio: Router,
    public http: HttpClient,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.getProfile();
  }
  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        console.log('User->', user);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['administrador']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
     this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
      this.getProfile();
      this.cambio.navigate(['/inicio']); 
    } 
    
    else {
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
     this.getProfile();
      this.cambio.navigate(['/inicio']); 

    }
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  getProfile() {
    this.http.get(graphMeEndpoint)
      .subscribe({
        next: (profile) => {
          this.profile = profile;
        },
        error: (err: AuthError) => {
          //Si hay un error de interacción requerida,
          // llamar a uno de los métodos interactivos y luego realizar la solicitud nuevamente.
          if (InteractionRequiredAuthError.isInteractionRequiredError(err.errorCode)) {
            this.authService.acquireTokenPopup({
              scopes: this.authService.getScopesForEndpoint(graphMeEndpoint)
            })
              .then(() => {
                this.http.get(graphMeEndpoint)
                  .toPromise()
                  .then(profile => {
                    this.profile = profile;
                  });
              });
          }
        }
      });
  }  
}

