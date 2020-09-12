import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MenuController } from '@ionic/angular';
import { MsalService, BroadcastService } from "@azure/msal-angular";
import { InteractionRequiredAuthError, AuthError } from 'msal';
const graphMeEndpoint = "https://graph.microsoft.com/v1.0/me/"; 
@Component({
  selector: "app-inicio", 
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
  
})
export class InicioPage implements OnInit {
  profile;
  videos = [
    {
      video: "pkOnxCx7Joo",
    },
    {
      video: "pluwgjW8tdI",
    },
    {
      video: "q57PQUHKTeQ",
    },
    {
      video: "hPuATh06caU",
    },
    {
      video: "JG1wfNUTzCc",
    },
  ];

  darkMode: boolean = true;
  
  constructor(
    public menuCtrl: MenuController, 
    public http: HttpClient, 
    private authService: MsalService,
  ) {}

  ngOnInit() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.getProfile(); 
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    
  }
  getProfile() {
    this.http.get(graphMeEndpoint)
      .subscribe({
        next: (profile) => {
          this.profile = profile;
        },
        error: (err: AuthError) => {
          // If there is an interaction required error,
          // call one of the interactive methods and then make the request again.
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
