import {ValidatorFn, AbstractControl} from "@angular/forms";

export class ZonesValidator {
    static plage(valeurMinimum: number, valeurMaximum: number): ValidatorFn{
        // Sous ANGULAR dans les validateurs pour indiquer un succès retourner NULL autrement retourner une clé json
        return(c: AbstractControl): {[key: string]: boolean} | null => {
            if (c.value >= valeurMinimum && c.value <=valeurMaximum) {
                return null;
            }
            return {'plageInvalide': true}; 
        };

    }

}