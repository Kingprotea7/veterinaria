import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-modulo-p',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule],
  templateUrl: './modulo-p.component.html',
  styleUrl: './modulo-p.component.css'
})
export class ModuloPComponent {

}
