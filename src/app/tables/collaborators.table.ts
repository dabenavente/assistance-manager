import { Injectable } from '@angular/core';
import { Collaborator } from '../classes/collaborator';

@Injectable()
export class CollaboratorsTable {

colaboradores : Collaborator [] = [
    new Collaborator( "Clark Kent","clark.kent@soprasteria.com","91101", "000101"),
    new Collaborator("Diana Prince","diana.prince@soprasteria.com", "91102", "000102"),
    new Collaborator("John Jones", "john.jones@soprasteria.com", "91103", "000103"),
    new Collaborator("Francisco Ramon", "francisco.ramon@soprasteria.com", "91201", "000201"),
    new Collaborator( "Caitlin Snow", "caitlin.snow@soprasteria.com", "91202", "000202"),
    new Collaborator("Harrison Wells", "harrison.wells@soprasteria.com", "91203", "000203"),
    new Collaborator("Barry Allen", "barry.allen@soprasteria.com", "91204", "000204"),
    new Collaborator("Felicity Smoak", "felicity.smoak@soprasteria.com", "91301", "000301"),
    new Collaborator("John Diggle", "john.diggle@soprasteria.com", "91302", "000302"),
    new Collaborator("Roy Harper", "roy.harper@soprasteria.com", "91303", "000303"),
    new Collaborator("Rip Hunter", "rip.hunter@soprasteria.com", "91401", "000401"),
    new Collaborator("Sarah Lance", "sara.lance@soprasteria.com", "91402", "000402"),
    new Collaborator("Martin Stein", "martin.stein@soprasteria.com", "91403", "000403"),
    new Collaborator("Jefferson Jackson", "jefferson.jackson@soprasteria.com", "91404", "000404"),
    new Collaborator("Mick Rory","mick.rory@soprasteria.com", "91405", "000405"),
    new Collaborator("Leonard Snart", "leonard.snart@soprasteria.com", "91406", "000406")
];

constructor(){

}

}
