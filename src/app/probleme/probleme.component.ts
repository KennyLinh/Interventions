import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { longueurMinimum } from '../shared/longueur-minimum/longueur-minimum.component';
import { CategorieService } from './probleme.service';
import { ICategorie } from './probleme';
import { ProblemeData } from './probleme-data';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  categoriesProblemes: ICategorie[];
  errorMessage: string;

  constructor(private fb: FormBuilder, private categories: CategorieService) { }

    ngOnInit(): void {
    
        this.problemeForm = this.fb.group({
          nomProbleme: ['', [longueurMinimum.longueurMinimum(3), Validators.required]],
          nom: ['', [longueurMinimum.longueurMinimum(3), Validators.required, Validators.maxLength(50)]],
          noTypeProbleme: ['', Validators.required],
          courrielGroup: this.fb.group({
           courriel: [{value: '', disabled: true}],
           courrielConfirmation: [{value: '', disabled: true}],
           }),
          telephone: [{value: '', disabled: true}]
          
          //cueillette: ['RamasseComptoir'],
          //datesGroup:this.fb.group({
            //dateCommande: [{value: '', disabled: true}]
          //})
        });
        this.categories.obtenirCategories()
        .subscribe(cat=> this.categoriesProblemes = cat,
                    error => this.errorMessage = <any>error);
    }
  save(){}

  appliquerNotifications(typeNotification: string): void {
    const courrielControl = this.problemeForm.get('courrielGroup.courriel');
    const courrielConfirmationnControl = this.problemeForm.get('courrielGroup.courrielConfirmation');   
    const courrielGroupControl = this.problemeForm.get('courrielGroup'); 
    const telephoneControl = this.problemeForm.get('telephone'); 
    

    // Tous remettre à zéro
    courrielControl.clearValidators();
    courrielControl.reset();  // Pour enlever les messages d'erreur si le controle contenait des données invaldides
    courrielControl.disable();  

    courrielConfirmationnControl.clearValidators();
    courrielConfirmationnControl.reset();    
    courrielConfirmationnControl.disable();

    courrielGroupControl.clearValidators();
    courrielGroupControl.reset();    
    courrielGroupControl.disable();

    telephoneControl.clearValidators();
    telephoneControl.reset();    
    telephoneControl.disable();


    if (typeNotification === 'MeNotifier') {   
      courrielControl.setValidators([Validators.required]);      
      courrielControl.enable();  
      courrielConfirmationnControl.setValidators([Validators.required]);              
      courrielConfirmationnControl.enable(); 
      telephoneControl.setValidators([Validators.required]);              
      telephoneControl.enable();  
            // Si le validateur est dans un autre fichier l'écire sous la forme suivante : 
            // ...Validators.compose([classeDuValidateur.NomDeLaMethode()])])
            courrielGroupControl.setValidators([Validators.required]);                       
      }   
      else
      {
        if(typeNotification === 'PasMeNotifier')
        {
          courrielControl.setValidators([Validators.required]);      
          courrielControl.disable();         
          courrielConfirmationnControl.setValidators([Validators.required]);              
          courrielConfirmationnControl.disable();  
          telephoneControl.setValidators([Validators.required]);              
          telephoneControl.disable();    
        }
      }
      courrielControl.updateValueAndValidity();   
      courrielConfirmationnControl.updateValueAndValidity(); 
      courrielGroupControl.updateValueAndValidity();   
      telephoneControl.updateValueAndValidity();        
  } 

  //gestionDate(typeCueillette: string): void {
    //const dateCommandeControl = this.problemeForm.get('datesGroup.dateCommande');
    //const dateExpeditionControl = this.problemeForm.get('datesGroup.dateExpedition');

    //dateCommandeControl.clearValidators();
    //dateCommandeControl.reset();
    //dateCommandeControl.disable();

    //dateExpeditionControl.clearValidators();
    //dateExpeditionControl.reset();
    //dateExpeditionControl.disable();

    //if (typeCueillette === 'ParLaPoste') {
      //dateCommandeControl.setValidators([Validators.required]);
      //dateCommandeControl.enable();
      //dateExpeditionControl.setValidators([Validators.required]);
      //dateExpeditionControl.enable();
    //}
    //dateCommandeControl.updateValueAndValidity();
    //dateExpeditionControl.updateValueAndValidity();

  //}
}
