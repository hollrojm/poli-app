import { AuthService } from './../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from './../shared/user.interface';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(
    private authSvs: AuthService,
     private router: Router, 
     private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  cerrar() {
   console.log('salir');
   this.afAuth.signOut;
   this.router.navigateByUrl('/login');
  }
}
