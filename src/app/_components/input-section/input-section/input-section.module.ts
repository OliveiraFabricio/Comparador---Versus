import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputSectionComponent } from './input-section.component';

@NgModule({
  declarations: [InputSectionComponent],
  exports: [InputSectionComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputSectionModule {}
