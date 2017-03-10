import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CollaboratorsService} from './services/collaborators.service';

import { AppComponent } from './app.component';
import { InsertarColaboradorComponent } from './colaboradores/insertar-colaborador/insertar-colaborador.component';
import { ConsultarColaboradorComponent } from './colaboradores/consultar-colaborador/consultar-colaborador.component';
import { ModificarColaboradorComponent } from './colaboradores/modificar-colaborador/modificar-colaborador.component';
import { EliminarColaboradorComponent } from './colaboradores/eliminar-colaborador/eliminar-colaborador.component';
//import { SalasComponent } from './salas/salas.component';
import { routes } from './app.router';
//import { AngularFireModule } from 'angularfire2'; 

 
export const firebaseConfig = {
    apiKey: "AIzaSyAA8bFaZ_T3MUssMnrKwQJ9Bytnib3lvPg",
    authDomain: "takeaseat-1f612.firebaseapp.com",
    databaseURL: "https://takeaseat-1f612.firebaseio.com",
    storageBucket: "takeaseat-1f612.appspot.com",
    messagingSenderId: "407184731113"
}; 

@NgModule( {
    declarations: [
        AppComponent,
        InsertarColaboradorComponent,ConsultarColaboradorComponent,ModificarColaboradorComponent,EliminarColaboradorComponent
//        SalasComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    providers: [CollaboratorsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
