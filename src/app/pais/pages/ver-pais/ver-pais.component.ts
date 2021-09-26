import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // ! - puede ser nulo

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params 
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ), // recibe un observable y regresa un observable
        tap( console.log ) // recibe el producto del observablo y lo mete en console.log
        ) 
      .subscribe( pais => { 
        this.pais = pais;
      })
    /* this.activatedRoute.params
      .subscribe( ({id}) => {
        this.paisService.getPaisPorAlpha( id )
          .subscribe( pais => {
            console.log(pais);
          })
      }) */
  }

}
