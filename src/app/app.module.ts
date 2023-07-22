import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationComponent } from './presentation/presentation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {GalleryModule} from 'ng-gallery';
import {LightboxModule} from 'ng-gallery/lightbox';
import { CertificationsComponent } from './certifications/certifications.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FooterComponent } from './footer/footer.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillPillComponent } from './skill-pill/skill-pill.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    FooterComponent,
    SkillCardComponent,
    CertificationCardComponent,
    ProjectCardComponent,
    SkillPillComponent,
    ArticlesComponent,
    ArticleComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        GalleryModule,
        LightboxModule,
      NgxPageScrollModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
