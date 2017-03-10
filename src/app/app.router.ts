import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { InsertarColaboradorComponent } from './colaboradores/insertar-colaborador/insertar-colaborador.component';
import { ConsultarColaboradorComponent } from './colaboradores/consultar-colaborador/consultar-colaborador.component';
import { ModificarColaboradorComponent } from './colaboradores/modificar-colaborador/modificar-colaborador.component';
import { EliminarColaboradorComponent } from './colaboradores/eliminar-colaborador/eliminar-colaborador.component';
//import { SalasComponent } from './salas/salas.component';

export const router : Routes = [
  {path: '', redirectTo:'#', pathMatch: 'full' },
  {path: 'insertarcolaborador', component: InsertarColaboradorComponent},
  {path: 'consultarcolaborador', component: ConsultarColaboradorComponent},
  {path: 'modificarcolaborador', component: ModificarColaboradorComponent},
  {path: 'eliminarcolaborador', component: EliminarColaboradorComponent}
//  {path: 'salas', component: SalasComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);