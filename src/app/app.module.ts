import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tile/tile.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TileComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
