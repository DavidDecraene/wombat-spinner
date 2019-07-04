import { TemplateRef, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
export interface SpinOptions {
    spinIcon?: string;
    spinClass?: string;
}
export declare class SpinnerDirective implements OnInit {
    private templateRef;
    private viewContainerRef;
    private resolver;
    _loading: boolean;
    _spClass: string;
    _spIcon: string;
    _options: SpinOptions;
    component: SpinnerOverlayComponent;
    loading: boolean;
    options: SpinOptions;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    syncOptions(): void;
    ngOnInit(): void;
}
