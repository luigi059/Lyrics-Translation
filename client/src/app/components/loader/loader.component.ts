import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Input() title: string = 'Loading';

  constructor(private sanitizer: DomSanitizer) {}
  getLoaderSrc(): any {
    const loaderUrl = '../../../assets/loader.svg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(loaderUrl);
  }
}
