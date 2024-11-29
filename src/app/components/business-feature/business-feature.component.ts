import { Component } from '@angular/core';

@Component({
  selector: 'app-business-feature',
  standalone: true,
  imports: [],
  templateUrl: './business-feature.component.html',
  styleUrl: './business-feature.component.css',
})
export class BusinessFeatureComponent {
  hideButton(event: Event): void {
    console.log('event received!!');
    const button = event.target as HTMLElement;
    if (button) {
      button.style.display = 'none';
    }
  }
}
