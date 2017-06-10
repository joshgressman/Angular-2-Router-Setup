import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server.resolver';

const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
 ]},
 {path: 'servers', canActivateChild:[AuthGaurd], component: ServersComponent, children:[
   {path: ':id', component: ServerComponent, resolve: {server:ServerResolver}},
   {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGaurd]}
  ]},
  // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: '/not-found'} //WILD CARD Route, catches all unknown paths redirects if not a valid route
                                         //Must be the last route in the array of routes
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
