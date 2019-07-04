import { Directive, Input, TemplateRef, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SpinnerOverlayComponent } from './spinner-overlay.component';

export interface SpinOptions {
  spinIcon?: string;
  spinClass?: string;
}

@Directive({
  selector: '[wSpinner]'
})
export class SpinnerDirective implements OnInit {
  _loading = true;
  _spClass: string;
  _spIcon: string;
  _options: SpinOptions;
  component: SpinnerOverlayComponent;

  get loading(): boolean {
    return this._loading;
  }


  @Input('wSpinnerOptions')
  set options(opts: SpinOptions) {
    this._options = opts;
    this.syncOptions();
  }

  get options(): SpinOptions {
    return this._options;
  }

  @Input('wSpinner')
  set loading(state: boolean) {
    if (state === undefined) { return; }
    this._loading = state;
    if (this.component) { this.component.loading = state; }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {
  }

  syncOptions() {
    if (!this.component) { return; }
    if (!this.options) { return; }
    if (this.options.spinClass) {
      this.component.spinClass = this.options.spinClass;
    }
    if (this.options.spinIcon) {
      this.component.icon = this.options.spinIcon;
    }
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(SpinnerOverlayComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.instance.loading = this.loading;
    componentRef.instance.bodyInput = this.templateRef;
    this.component = componentRef.instance;
    this.syncOptions();
  }
}
