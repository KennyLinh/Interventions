import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { longueurMinimum } from '../shared/longueur-minimum/longueur-minimum.component';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    
        this.problemeForm = this.fb.group({
          nomProbleme: ['', [longueurMinimum.longueurMinimum(3), Validators.required]],
          //  nom: ['', [longueurMinimum.longueurMinimum(3), Validators.required, Validators.maxLength(50)]]
        });
    
    }
  save(){}
}
