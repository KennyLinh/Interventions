import { ValidatorFn, AbstractControl } from '@angular/forms';

export class longueurMinimum {

    static longueurMinimum(longueur: number): ValidatorFn{
        // Sous ANGULAR dans les validateurs pour indiquer un succès retourner NULL autrement retourner une clé valeur JSON
        return (valeurControle: AbstractControl): { [key: string]: boolean  } | null => {
            
            if (valeurControle.value == null || valeurControle.value == '' || valeurControle.value.trim().length == 0 ) {
                return {'nbreCaracteresInsuffisants': true};
            } 
            else if (valeurControle.value.trim().length >= longueur) {
                return null;
            } 
            else if (valeurControle.value.trim().length < longueur) {
                return {'nbreCaracteresInsuffisants': true};
            }
        };
    }
}
