import { Component, OnInit } from '@angular/core';
import { CollaboratorsService } from '../../services/collaborators.service';
import { Collaborator } from '../../classes/collaborator';
import { NgForm } from '@angular/forms'

@Component( {
    selector: 'app-colaboradores',
    templateUrl: './eliminar-colaborador.component.html'
})




export class EliminarColaboradorComponent implements OnInit {


    constructor(private colabService : CollaboratorsService) { }

    ngOnInit() { }

    eliminarColaborador( formulario: NgForm ) {
        var collaborator : Collaborator = {
            name: formulario.value.name,
            email: formulario.value.correo,
            phoneExt: formulario.value.extension,
            empCode: formulario.value.codemple
        }

        this.colabService.removeCollaborator(collaborator);
        
    }
}
