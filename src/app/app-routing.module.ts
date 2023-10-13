import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProtectedComponentComponent } from './protected-component/protected-component.component';
import { PublicComponentComponent } from './public-component/public-component.component';
import { AuthGuard } from './shared/authguard.guard';

const routes: Routes = [
    {
        path: 'protected',
        component: ProtectedComponentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'public',
        component: PublicComponentComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
