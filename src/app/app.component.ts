import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
  title = 'veterinaria';
  loading: boolean = false;
}
