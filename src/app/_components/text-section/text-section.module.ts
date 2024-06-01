import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TextSectionComponent } from './text-section.component';

@NgModule({
  declarations: [TextSectionComponent],
  exports: [TextSectionComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextSectionModule {}
