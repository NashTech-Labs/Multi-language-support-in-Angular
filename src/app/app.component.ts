import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-language-support';

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en')
  }

  setLanguage(event: any){
    event.target.value === 'english' ? this.translate.use('en'): this.translate.use('fr');
  }
}
