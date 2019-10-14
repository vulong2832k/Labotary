import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingModule } from 'ng-starrating'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3cartComponent } from './bai3cart/bai3cart.component';
import { Bai3Component } from './bai3/bai3.component';
import { NavHeaderBai3Component } from './nav-header-bai3/nav-header-bai3.component';
import { NavChangeBaitapComponent } from './nav-change-baitap/nav-change-baitap.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai4productComponent } from './bai4product/bai4product.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';
import { Lap05Component } from './lap05/lap05.component';
import { HttpClientModule} from '@angular/common/http';
import { Lap06Component } from './lap06/lap06.component';
import { Detaillap06Component } from './detaillap06/detaillap06.component';
import { NavHeaderLap06Component } from './nav-header-lap06/nav-header-lap06.component';
import { Lap07Component } from './lap07/lap07.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai2Component,
    Bai3cartComponent,
    Bai3Component,
    NavHeaderBai3Component,
    NavChangeBaitapComponent,
    Bai5Component,
    Bai4Component,
    Bai4productComponent,
    TrangchuComponent,
    Lap05Component,
    AppComponent,
    Lap06Component,
    Detaillap06Component,
    NavHeaderLap06Component,
    Lap07Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RatingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
