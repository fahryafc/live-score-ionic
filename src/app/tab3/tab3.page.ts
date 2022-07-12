import { Component } from '@angular/core';
import { MATCH } from '../../assets/team';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public match = MATCH

  constructor() {}

}
