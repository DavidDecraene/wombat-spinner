import { Component, Input, HostBinding, ContentChild, TemplateRef, Directive, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerOverlayComponent {
    constructor() {
        this.loading = true;
        this.spinClass = '';
        this.icon = 'fas fa-circle-notch fa-spin fa-5x';
    }
    /**
     * @return {?}
     */
    get bodyTemplate() {
        return this._bodyTemplate;
    }
    /**
     * @param {?} tmpl
     * @return {?}
     */
    set bodyTemplate(tmpl) {
        this._bodyTemplate = tmpl;
    }
    /**
     * @param {?} tmpl
     * @return {?}
     */
    set bodyInput(tmpl) {
        if (tmpl) {
            this.bodyTemplate = tmpl;
        }
    }
    /**
     * @param {?} tmpl
     * @return {?}
     */
    set bodyContent(tmpl) {
        if (tmpl) {
            this.bodyTemplate = tmpl;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SpinnerOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'w-spinner-overlay',
                template: "<div *ngIf=\"loading; else bodyTemplate\" class=\"spinner-overlay\">\n  <div class=\"spin-panel\">\n    <em [class]=\"icon\"></em>\n  </div>\n</div>\n",
                styles: [":host{display:block;position:relative;height:100%;width:100%}:host .spinner-overlay{position:absolute;background-color:rgba(220,220,220,.3);width:100%;min-height:120px;border-radius:5px;z-index:500;height:100%}:host .spinner-overlay .spin-panel{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin-top:25px}"]
            }] }
];
/** @nocollapse */
SpinnerOverlayComponent.ctorParameters = () => [];
SpinnerOverlayComponent.propDecorators = {
    loading: [{ type: Input }],
    spinClass: [{ type: HostBinding, args: ['class',] }, { type: Input }],
    icon: [{ type: Input }],
    bodyInput: [{ type: Input, args: ['body',] }],
    bodyContent: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} resolver
     */
    constructor(templateRef, viewContainerRef, resolver) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this._loading = true;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    set options(opts) {
        this._options = opts;
        this.syncOptions();
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    set loading(state) {
        if (state === undefined) {
            return;
        }
        this._loading = state;
        if (this.component) {
            this.component.loading = state;
        }
    }
    /**
     * @return {?}
     */
    syncOptions() {
        if (!this.component) {
            return;
        }
        if (!this.options) {
            return;
        }
        if (this.options.spinClass) {
            this.component.spinClass = this.options.spinClass;
        }
        if (this.options.spinIcon) {
            this.component.icon = this.options.spinIcon;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(SpinnerOverlayComponent);
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        componentRef.instance.loading = this.loading;
        componentRef.instance.bodyInput = this.templateRef;
        this.component = componentRef.instance;
        this.syncOptions();
    }
}
SpinnerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[wSpinner]'
            },] }
];
/** @nocollapse */
SpinnerDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
SpinnerDirective.propDecorators = {
    options: [{ type: Input, args: ['wSpinnerOptions',] }],
    loading: [{ type: Input, args: ['wSpinner',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// CommonModule to enable ngIf
class SpinnerModule {
    constructor() {
    }
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [
                    SpinnerOverlayComponent, SpinnerDirective
                ],
                exports: [
                    SpinnerOverlayComponent, SpinnerDirective
                ], entryComponents: [
                    SpinnerOverlayComponent
                ]
            },] }
];
/** @nocollapse */
SpinnerModule.ctorParameters = () => [];

export { SpinnerDirective, SpinnerModule, SpinnerOverlayComponent };
//# sourceMappingURL=wombat-spinner.js.map
