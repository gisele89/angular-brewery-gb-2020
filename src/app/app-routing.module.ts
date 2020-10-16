import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AmsterdamClothesComponent } from './amsterdam-clothes/amsterdam-clothes.component';
import { AmsterdamContactComponent } from './amsterdam-contact/amsterdam-contact.component';

const routes: Routes = [
  {path: '',
redirectTo: 'clothes',
pathMatch: 'full',
},
{path: 'clothes',
component: AmsterdamClothesComponent
},
{path: 'contact',
component: AmsterdamContactComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
