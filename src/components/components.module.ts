import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ActionComponent } from './action/action';
import { UserlistComponent } from './userlist/userlist';
@NgModule({
	declarations: [
    ActionComponent,
    UserlistComponent
  ],
	imports: [BrowserModule],
	exports: [
    ActionComponent,
    UserlistComponent
  ]
})
export class ComponentsModule {}
