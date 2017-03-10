import { Component, OnInit } from '@angular/core';
import { CollaboratorsService } from '../../services/collaborators.service';
import { Collaborator } from '../../classes/collaborator';
import { NgForm } from '@angular/forms'

@Component( {
    selector: 'app-colaboradores',
    templateUrl: './insertar-colaborador.component.html'
})




export class InsertarColaboradorComponent implements OnInit {


    constructor(private colabService : CollaboratorsService) { }

    ngOnInit() { }

    insertarColaborador( formulario: NgForm ) {
        var collaborator : Collaborator = {
            name: formulario.value.name,
            email: formulario.value.correo,
            phoneExt: formulario.value.extension,
            empCode: formulario.value.codemple
        }

        this.colabService.addCollaborator(collaborator);
        
    }

}
