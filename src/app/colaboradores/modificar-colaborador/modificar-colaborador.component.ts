import { Component, OnInit } from '@angular/core';
import { CollaboratorsService } from '../../services/collaborators.service';
import { Collaborator } from '../../classes/collaborator';
import { NgForm } from '@angular/forms'

import { CollaboratorsTable } from '../../tables/collaborators.table';

@Component( {
    selector: 'app-colaboradores',
    templateUrl: './modificar-colaborador.component.html'
})




export class ModificarColaboradorComponent implements OnInit {
    
    collaboratorsTable: CollaboratorsTable = new CollaboratorsTable;

    constructor(private colabService : CollaboratorsService) { }

    ngOnInit() { }

    modificarColaborador( formulario: NgForm ) {
        var collaborator : Collaborator = {
            name: formulario.value.name,
            email: formulario.value.correo,
            phoneExt: formulario.value.extension,
            empCode: formulario.value.codemple
        }
    
        var id = this.collaboratorsTable.colaboradores.indexOf(collaborator); 

        this.colabService.modifyCollaborator(collaborator);
        
    }
}
