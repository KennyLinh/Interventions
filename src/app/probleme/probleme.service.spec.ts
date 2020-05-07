import { TestBed } from '@angular/core/testing';

import { CategorieService } from './probleme.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemeComponent } from './probleme.component';
import { HttpClientModule } from '@angular/common/http';

describe('CategorieService', () => {
  let service: CategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule ], //ajouté
      declarations: [ ProblemeComponent ],
      providers:[CategorieService]
    });

    service = TestBed.inject(CategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 

 

  
});
