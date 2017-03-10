import { Injectable } from '@angular/core';

@Injectable()
export class Collaborator {

    name: string;
    email: string;
    phoneExt: number;
    empCode: number;

    constructor(name, email, phoneExt, empCode) {  
        this.name = name;
        this.email = email;
        this.phoneExt = phoneExt;
        this.empCode = empCode;
    }

}
