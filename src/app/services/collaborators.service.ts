import { Injectable, OnInit } from '@angular/core';

import { CollaboratorsTable } from '../tables/collaborators.table';
import { Collaborator } from '../classes/collaborator';



@Injectable()
export class CollaboratorsService implements OnInit {

    collaborators: Collaborator[];
    collaboratorsTable: CollaboratorsTable = new CollaboratorsTable;

    constructor() {
    }

    ngOnInit() {
    }

    /*
    Returns an array with all the collaborators in the table
     */
    getAllCollaborators(): Collaborator[] {
        return this.collaborators = this.collaboratorsTable.colaboradores;
    }

    /*
    Returns a collaborator Object by its name
     */
    getCollaboratorByName( name: string ): Collaborator {
        let collaboratorsTemp: Collaborator[];
        collaboratorsTemp = this.collaboratorsTable.colaboradores;
        for ( let collaborator of collaboratorsTemp ) {
            if ( collaborator.name == name ) {
                return collaborator
            }
        }
        console.log( "colaborador no encontrado" );
        return null;
    }

    addCollaborator( collaborator: Collaborator ) {
        this.collaboratorsTable.colaboradores.push(collaborator);
        let indice: number =this.collaboratorsTable.colaboradores.length
        console.log(this.collaboratorsTable.colaboradores[indice -1].name);
        console.log(this.collaboratorsTable.colaboradores[indice -1].email);
    }    
    
    removeCollaborator( collaborator: Collaborator ) {
        console.log(this.collaboratorsTable.colaboradores.length);
        var pos = this.collaboratorsTable.colaboradores.indexOf(collaborator);
        this.collaboratorsTable.colaboradores.splice(pos, 1);
        console.log(this.collaboratorsTable.colaboradores.length);
    } 
    
    modifyCollaborator( collaborator: Collaborator ) {
//        Hace falta el id que le dé la base de datos porque es el único campo que seguro
//        no cambia, al no definirlo nosotros no podemos habernos equivocado al introducirlo.
//        Para trabajar ahora con tablas supondré que el nombre del colaborados nunca se modifica.
        var pos = this.collaboratorsTable.colaboradores.indexOf(collaborator);
        this.collaboratorsTable.colaboradores.push(collaborator);
        let indice: number =this.collaboratorsTable.colaboradores.length
        console.log(this.collaboratorsTable.colaboradores[indice -1].name);
        console.log(this.collaboratorsTable.colaboradores[indice -1].email);
    }
    
}