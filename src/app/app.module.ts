import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

const appRoute:  Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    HomeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
