import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PrivateGuard } from './guards/private-form.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    title: 'Login'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [PrivateGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    title: 'Login'
  },
  {
    path: 'resumo-livros/:id',
    loadChildren: () => import('./resumo-livros/resumo-livros.module').then( m => m.ResumoLivrosPageModule),
    canActivate: [AuthGuard],
    title: 'Livros dos aliançados'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuard],
    title: 'Inicio'
  },
  {
    path: 'pg-vivendo-em-alianca',
    loadChildren: () => import('./pg-vivendo-em-alianca/pg-vivendo-em-alianca.module').then( m => m.PgVivendoEmAliancaPageModule),
    canActivate: [AuthGuard],
    title: 'Vivendo em aliança'
  },
  {
    path: 'pg-biblioteca-aliancados',
    loadChildren: () => import('./pg-biblioteca-aliancados/pg-biblioteca-aliancados.module').then( m => m.PgBibliotecaAliancadosPageModule),
    canActivate: [AuthGuard],
    title: 'Biblioteca dos aliança'
  },
  {
    path: 'pdf-modal',
    loadChildren: () => import('./pdf-modal/pdf-modal.module').then( m => m.PdfModalPageModule),
    canActivate: [AuthGuard],
    title: 'Baixando PDF'
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule),
    title: 'NÃO EXISTE!'
  },
  {
    path: '**',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    title: 'Login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
