import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModificarColaboradorComponent } from './modificar-colaborador.component';

describe( 'ModificarColaboradorComponent', () => {
    let component: ModificarColaboradorComponent;
    let fixture: ComponentFixture<ModificarColaboradorComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [ModificarColaboradorComponent]
        })
            .compileComponents();
    }) );
    beforeEach(() => {
        fixture = TestBed.createComponent( ModificarColaboradorComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
}); 