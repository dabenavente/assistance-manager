import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EliminarColaboradorComponent } from './eliminar-colaborador.component';

describe( 'EliminarColaboradorComponent', () => {
    let component: EliminarColaboradorComponent;
    let fixture: ComponentFixture<EliminarColaboradorComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [EliminarColaboradorComponent]
        })
            .compileComponents();
    }) );
    beforeEach(() => {
        fixture = TestBed.createComponent( EliminarColaboradorComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
}); 