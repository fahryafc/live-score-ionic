import { Component } from '@angular/core';
import {MATCH} from '../../assets/schedule';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  public match = MATCH

}
