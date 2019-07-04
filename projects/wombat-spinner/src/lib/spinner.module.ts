import { NgModule } from '@angular/core';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
import { SpinnerDirective } from './spinner.directive';
import { CommonModule } from '@angular/common';

// CommonModule to enable ngIf
@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
    ],
    declarations: [
      SpinnerOverlayComponent, SpinnerDirective
    ],
    exports: [
      SpinnerOverlayComponent, SpinnerDirective
    ], entryComponents: [
      SpinnerOverlayComponent
    ]
})
export class SpinnerModule {
    constructor() {
    }
}
