import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { ModuloPComponent } from "./modulo-p/modulo-p.component";
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, SidebarModule, ButtonModule, CardModule, ModuloPComponent,RouterOutlet,ToastModule,SplitButtonModule,IconFieldModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
save(arg0: string) {
throw new Error('Method not implemented.');
}
sidebarVisible:boolean= false;
items: MenuItem[]|undefined;


ngOnInit(): void {
this.items=[{label:"Salir"}]

}
}
