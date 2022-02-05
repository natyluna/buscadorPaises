import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit() {
    //suscribo a los cambios de la url
   /*  this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id);

        //trar info
        this.paisService.getPais(id).subscribe(pais=>{
          console.log(pais);
        });
      }); */

      //otra forma

      this.activatedRoute.params
      .pipe(
        //resive el valor y retorna nuevo obs. tap:imprime en consola
        switchMap(({id})=> this.paisService.getPais(id)), tap(console.log)
      )
      .subscribe(pais=> this.pais =pais[0]);
  }

}
