import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MenuController } from '@ionic/angular';
import { MsalService, BroadcastService } from "@azure/msal-angular";
import { InteractionRequiredAuthError, AuthError } from 'msal';
import { DomSanitizer } from '@angular/platform-browser';

const graphMeEndpoint = "https://graph.microsoft.com/v1.0/me/";
const graphEndpoint = "https://graph.microsoft.com/v1.0/me/photo/$value"; 
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})

export class PerfilUsuarioPage implements OnInit {
  profile;
  profileImg;
  constructor(
    public http: HttpClient,
    private authService: MsalService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getProfileImg();
  }
  getProfile() {
    this.http.get(graphMeEndpoint).subscribe({
      next: (profile) => {
        this.profile = profile;
      },
      error: (err: AuthError) => {
        // Si hay un error de interacción requerida,
        // llamar a uno de los métodos interactivos y luego realizar la solicitud nuevamente.
        if (
          InteractionRequiredAuthError.isInteractionRequiredError(err.errorCode)
        ) {
          this.authService
            .acquireTokenPopup({
              scopes: this.authService.getScopesForEndpoint(graphMeEndpoint),
            })
            .then(() => {
              this.http
                .get(graphMeEndpoint)
                .toPromise()
                .then((profile) => {
                  this.profile = profile;
                });
            });
        }
      },
    });
  }
  getProfileImg() {
    this.http
      .get(graphEndpoint, {
        headers: { "Content-Type": "image/*" },
        responseType: "arraybuffer",
      })
      .toPromise()
      .then(
        (data) => {
          const TYPED_ARRAY = new Uint8Array(data);
          // convierte la matriz escrita en una cadena de caracteres
          const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);

          //convierte una cadena de caracteres a base64 String
          let base64String = btoa(STRING_CHAR);

          //desinfectar la URL que se pasa como un valor a la imagen src atributo

          this.profileImg = this.sanitizer.bypassSecurityTrustUrl(
            "data:image/*;base64, " + base64String
          );

          console.log(this.profileImg);
        },
        (err) => {
          this.profileImg = "../assets/images/avatar-enfermeria.JPG";
        }
      );
  }
}
