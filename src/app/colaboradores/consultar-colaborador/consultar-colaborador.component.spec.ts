import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConsultarColaboradorComponent } from './consultar-colaborador.component';

describe( 'ConsultarColaboradorComponent', () => {
    let component: ConsultarColaboradorComponent;
    let fixture: ComponentFixture<ConsultarColaboradorComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [ConsultarColaboradorComponent]
        })
            .compileComponents();
    }) );
    beforeEach(() => {
        fixture = TestBed.createComponent( ConsultarColaboradorComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
}); 