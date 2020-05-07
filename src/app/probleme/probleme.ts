HttpClientInMemoryWebApiModule .forRoot(ProblemeData, { delay: 1000 })
import { catchError, tap } from 'rxjs/operators';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProblemeData } from './probleme-data';

export interface ICategorie {
    id: number;
    descriptionTypeProbleme: string;
}

