import { Component } from '@angular/core';

@Component({
  selector: 'rf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rayforth-web';

  handleExecuteCode = (code: string) => {
    console.log('Execute: ', code);
  };
}
