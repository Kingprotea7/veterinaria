import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-doctores',
  standalone: true,
  imports: [TabViewModule,TableModule,FieldsetModule,RouterLink,TabMenuModule,MenubarModule],
  templateUrl: './doctores.component.html',
  styleUrl: './doctores.component.css'
})
export class DoctoresComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {

    this.items = [
      {
        label: 'Acción 1',
        icon: 'pi pi-fw pi-plus',
        route: '/accion1'
      },
      {
        label: 'Acción 2',
        icon: 'pi pi-fw pi-pencil',
        route: '/accion2'
      },
      {
        label: 'Acción 3',
        icon: 'pi pi-fw pi-trash',
        command: () => {
          this.router.navigate(['/accion3']);
        }
      }
    ];
  }

  navigateToHome() {
    this.router.navigate(['/menu']);
  }
  doctors: any[] = [
    { name: 'Dr. Juan Pérez', country: 'Mexico', company: 'Clinica Vida', representative: 'María González' },
    { name: 'Dr. Carlos Sánchez', country: 'Chile', company: 'Salud Total', representative: 'Jorge Fernández' },
    { name: 'Dr. Laura Gómez', country: 'Argentina', company: 'Médicos Unidos', representative: 'Lucía Torres' },
    { name: 'Dr. Ana López', country: 'Colombia', company: 'Clinica Los Andes', representative: 'Pablo Rivas' },
    { name: 'Dr. Pedro Ramírez', country: 'Peru', company: 'Salud Bienestar', representative: 'Andrea Muñoz' },
    { name: 'Dr. María Torres', country: 'España', company: 'Clínica Salud', representative: 'Felipe Martínez' },
  ];
}
