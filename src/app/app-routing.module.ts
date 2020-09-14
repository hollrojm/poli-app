import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

/* import { google();}  // Google's Maven repository */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate:[MsalGuard ],
  },
  
  {
    path: '',
    redirectTo: 'clases',
    pathMatch: 'full'
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'contactenos',
    pathMatch: 'full'
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./contactenos/contactenos.module').then( m => m.ContactenosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'crear-cuenta',
    pathMatch: 'full'
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'perfil-usuario',
    pathMatch: 'full'
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'quienes-somos',
    pathMatch: 'full'
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'simulador-clases',
    pathMatch: 'full'
  },
  {
    path: 'simulador-clases',
    loadChildren: () => import('./simulador-clases/simulador-clases.module').then( m => m.SimuladorClasesPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'ejercicios',
    pathMatch: 'full'
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('./ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule) ,
    canActivate:[AuthGuard] 
  },
  
{
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'olvido-pass',
    loadChildren: () => import('./olvido-pass/olvido-pass.module').then( m => m.OlvidoPassPageModule) ,
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'Actualizar',
    pathMatch: 'full'
  },
  {
    path: 'actualizar-usu',
    loadChildren: () => import('./actualizar-usu/actualizar-usu.module').then( m => m.ActualizarUsuPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule) ,
   canActivate:[AuthGuard] 
  },
  {
    path: 'subir-videos',
    loadChildren: () => import('./subir-videos/subir-videos.module').then( m => m.SubirVideosPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: 'ver-notas',
    loadChildren: () => import('./ver-notas/ver-notas.module').then( m => m.VerNotasPageModule),
    canActivate:[AuthGuard] 
  },
  {
    path: 'subir-notas',
    loadChildren: () => import('./subir-notas/subir-notas.module').then( m => m.SubirNotasPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: 'mis-videos',
    loadChildren: () => import('./mis-videos/mis-videos.module').then( m => m.MisVideosPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: 'progreso-est',
    loadChildren: () => import('./progreso-est/progreso-est.module').then( m => m.ProgresoEstPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: '',
    redirectTo: 'Registro',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule) ,
    canActivate:[AuthGuard] 
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate:[AuthGuard] 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
/* classpath 'com.google.gms:google-services:4.3.3'; */
