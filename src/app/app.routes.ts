import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ModuloPComponent } from './menu/modulo-p/modulo-p.component';
import { ModuloSComponent } from './menu/modulo-s/modulo-s.component';

export const routes: Routes = [
  // Redirección para la raíz ('') al '1'
  { path: '', redirectTo: '/1', pathMatch: 'full' },

  // Ruta principal con el componente MenuComponent como contenedor
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '1', component: ModuloPComponent }, // Ruta para ModuloPComponent
      { path: '2', component: ModuloSComponent }  // Ruta para ModuloSComponent
    ]
  },

  // Redirección para cualquier otra ruta inválida a '/1'
  { path: '**', redirectTo: '/1', pathMatch: 'full' }
];

