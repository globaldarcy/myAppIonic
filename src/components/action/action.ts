import { Component } from '@angular/core';

/**
 * Generated class for the ActionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'action',
  templateUrl: 'action.html'
})
export class ActionComponent {

  text: string;
  list = [];

  constructor() {
    console.log('Hello ActionComponent Component');
    this.text = 'Hello World';
    for (var i = 0; i < 10; i++) {
      this.list.push(`第${i}条数据!`);

    }
  }

}
