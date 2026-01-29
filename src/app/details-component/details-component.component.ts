import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details-component works!
    </p>
  `,
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent {

}
