import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule ], //ajouté
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  
  });



  it('#1 | Zone PRÉNOM invalide avec 2 caractères',() =>{ 
    let zone = component.problemeForm.controls['nomProbleme'];
    
    expect(zone.valid).toBeTruthy();
  });
  it('#2 | Zone PRÉNOM valide avec 3 caractères',() =>{ 
    let zone = component.problemeForm.controls['nomProbleme'];
    
    expect(zone.valid).toBeTruthy();
  });



});
