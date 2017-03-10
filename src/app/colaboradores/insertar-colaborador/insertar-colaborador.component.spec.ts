import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsertarColaboradorComponent } from './insertar-colaborador.component';

describe( 'InsertarColaboradorComponent', () => {
    let component: InsertarColaboradorComponent;
    let fixture: ComponentFixture<InsertarColaboradorComponent>;

    beforeEach( async(() => {
        TestBed.configureTestingModule( {
            declarations: [InsertarColaboradorComponent]
        })
            .compileComponents();
    }) );
    beforeEach(() => {
        fixture = TestBed.createComponent( InsertarColaboradorComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    });
}); 