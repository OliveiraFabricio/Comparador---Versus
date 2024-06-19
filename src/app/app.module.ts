import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { InputSectionComponent } from './_components/input-section/input-section/input-section.component';
import { TextSectionComponent } from './_components/text-section/text-section.component';
import { NavBarModule } from './_components/navbar/navbar.module';
import { TextSectionModule } from './_components/text-section/text-section.module';
import { InputSectionModule } from './_components/input-section/input-section/input-section.module';

// Todo: adiciona módulo para cada componente
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    TextSectionModule,
    InputSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
