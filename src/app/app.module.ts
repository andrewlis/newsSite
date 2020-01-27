import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PoliticsComponent } from './politics/politics.component';
import { SocietyComponent } from './society/society.component';
import { EconomyComponent } from './economy/economy.component';
import { InTheWorldComponent } from './in-the-world/in-the-world.component';
import { AccidentsComponent } from './accidents/accidents.component';
import { SportComponent } from './sport/sport.component';
import { ScienceComponent } from './science/science.component';
import { TourismComponent } from './tourism/tourism.component';
import { ColumnLeftComponent } from './main/content/column-left/column-left.component';
import { ColumnCenterComponent } from './main/content/column-center/column-center.component';
import { ColumnRightComponent } from './main/content/column-right/column-right.component';
import { ColumnBottomComponent } from './main/content/column-bottom/column-bottom.component';


const Pages: Routes = [
  {path: "", component:MainComponent},
  {path: "politics", component:PoliticsComponent},
  {path: "society", component:SocietyComponent},
  {path: "economy", component:EconomyComponent},
  {path: "in-the-world", component:InTheWorldComponent},
  {path: "accidents", component:AccidentsComponent},
  {path: "sport", component:SportComponent},
  {path: "science", component:ScienceComponent},
  {path: "tourism", component:TourismComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PoliticsComponent,
    SocietyComponent,
    EconomyComponent,
    InTheWorldComponent,
    AccidentsComponent,
    SportComponent,
    ScienceComponent,
    TourismComponent,
    ColumnLeftComponent,
    ColumnCenterComponent,
    ColumnRightComponent,
    ColumnBottomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Pages)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
