import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShazamService } from '../../services/shazam.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent {
  isLoading = true;
  data$: Observable<any> | undefined;
  error = false;

  constructor(private shazamCoreService: ShazamService) {
    this.shazamCoreService.getTopCharts().subscribe(
      (data) => {
        this.data$ = of(data);
        this.isLoading = false;
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
