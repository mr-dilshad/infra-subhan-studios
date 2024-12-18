import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TopBannerComponent } from '../../components/top-banner/top-banner.component';
import { BusinessFeatureComponent } from '../../components/business-feature/business-feature.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { ChooseUsComponent } from '../../components/choose-us/choose-us.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TeamComponent } from '../../components/team/team.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ToolbarComponent,
    NavbarComponent,
    TopBannerComponent,
    BusinessFeatureComponent,
    AboutUsComponent,
    OurServicesComponent,
    ChooseUsComponent,
    ProjectsComponent,
    TeamComponent,
    AppointmentComponent,
    TestimonialComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
