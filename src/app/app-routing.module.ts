import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bai1Component } from "./bai1/bai1.component";
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai3cartComponent } from './bai3cart/bai3cart.component';
import { Lap05Component } from'./lap05/lap05.component';
import { Lap06Component } from './lap06/lap06.component';
import { Lap07Component } from './lap07/lap07.component';
const routes: Routes = [
  { path: 'bai1', component: Bai1Component},
  { path: 'bai2', component: Bai2Component},
  { path: 'bai3', component: Bai3Component},
  { path: 'bai4', component: Bai4Component},
  { path: 'bai5', component: Bai5Component},
  { path: 'bai3/Cart', component: Bai3cartComponent},
  { path: 'lap05', component: Lap05Component },
  { path: 'lap06', component: Lap06Component },
  { path: 'lap07', component: Lap07Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
