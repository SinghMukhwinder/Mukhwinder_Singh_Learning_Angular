import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mukhwinder-Singh-Learning-Angular';
  name: string = 'Mukhwinder Singh';
  programName: string = 'Computer Programming 2 Year';
}
