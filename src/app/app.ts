import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './partials/main-header/main-header';
import { Footer } from './partials/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Laboration3');
}
