import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayComponent } from './play/play.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [{path:"" , component:NavbarComponent},
                       {path:"play", component:PlayComponent},
                        {path:"Video", component:VideoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
