import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TextComponent } from './text.component';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    PageNotFoundComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
          path: 'text',
          component: TextComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: '',
        redirectTo: '/text',
        pathMatch: 'full'
      },
      {
          path: '**',
          component: PageNotFoundComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
