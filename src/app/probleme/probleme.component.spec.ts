import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CategorieService } from './probleme.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule ], //ajouté
      declarations: [ ProblemeComponent ],
      providers:[CategorieService]
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
    zone.setValue('a'.repeat(2));
    expect(zone.valid).toBeFalsy();
  });

  it('#2 | Zone PRÉNOM valide avec 3 caractères',() =>{ 
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });
    
  it('#3 | Zone PRÉNOM valide avec 200 caractères',() =>{ 
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('a'.repeat(200));
    expect(zone.valid).toBeTruthy();

  });




  it('#4 | Zone PRÉNOM invalide avec aucune valeur', () => {
    let zone = component.problemeForm.controls['nomProbleme'];
    expect(zone.valid).toBeFalsy();
  });

  it('#5 | Zone PRÉNOM invalide avec 10 espaces', () => {
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue(' '.repeat(10));
    expect(zone.valid).toBeFalsy();
  }); 
  
  it('#6 | Zone PRÉNOM invalide avec 2 espaces et 1 caractère ', () => {
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('  a');
    expect(zone.valid).toBeFalsy();
  }); 

  //it('Zone DATE COMMANDE est désactivé si ramasser au comptoir ', () => {
   //component.gestionDate('RamasseComptoir');
   //let zone = component.problemeForm.get('datesGroup.dateCommande');
   //expect(zone.status).toEqual('DISABLED');
    //}); 

    //it('Zone DATE COMMANDE est activée si ParLaPoste ', () => {
      //component.gestionDate('ParLaPoste');
      //let zone = component.problemeForm.get('datesGroup.dateCommande');
      //expect(zone.status).toEqual('DISABLED');
       //}); 

       //it('Zone DATE COMMANDE est invalide sans valeur si ParLaPoste ', () => {
        //component.gestionDate('ParLaPoste');

        //let errors = {};
        //let zone = component.problePasMeNotifiermeForm.get('datesGroup.dateCommande');
        //zone.setValue('');
        //errors = zone.errors || {};
        //expect(errors['required']).toBeTruthy();;
        // }); 

          it('#15 | Zone TELEPHONE est désactivée quand ne pas me notifier ', () => {
              component.appliquerNotifications('PasMeNotifier');
              let zone = component.problemeForm.get('telephone');
              expect(zone.status).toEqual('DISABLED');
          });

          it('#16 | Zone TELEPHONE est vide quand ne pas me notifier ', () => {

              component.appliquerNotifications('PasMeNotifier');
              let zone = component.problemeForm.controls['telephone'];
              expect(zone.valid).toBeFalsy();

              

          });

          it('#17 | Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () => {
              component.appliquerNotifications('PasMeNotifier');
              let zone = component.problemeForm.get('courrielGroup.courriel');
              expect(zone.status).toEqual('DISABLED');       
          });

          it('#18 | Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () => {
            component.appliquerNotifications('PasMeNotifier');
            let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
            expect(zone.status).toEqual('DISABLED'); 
              });
       
});