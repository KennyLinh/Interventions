import { ZonesValidator } from "./valider-zones.component";
import { AbstractControl } from '@angular/forms';

describe('Zones Validator',() =>{
    it('valeur valide 1 pour la plage entre 1 et 5',()=>{
        // Préparer une variable pour manipuler le validateur
        let validator = ZonesValidator.plage(1,5);
        let control = { value:1 }; 
        // Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        // Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull();
    

    });
    it('valeur invalide 6 pour la plage entre 1 et 5',()=>{
        // Préparer une variable pour manipuler le validateur
        let validator = ZonesValidator.plage(1,5);
        let control = { value:6 }; 
        // Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        // Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['plageInvalide']).toBe(true);
    });

    it('valeur invalide 10 pour la plage entre 10 et 20',()=>{
        // Préparer une variable pour manipuler le validateur
        let validator = ZonesValidator.plage(10,20);
        let control = { value:10 }; 
        // Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        // Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull(); 
    });

    it('valeur null 6 pour la plage entre 1 et 5',()=>{
        // Préparer une variable pour manipuler le validateur
        let validator = ZonesValidator.plage(1,5);
        let control = { value:null }; 
        // Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        // Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['plageInvalide']).toBe(true);
    });
});