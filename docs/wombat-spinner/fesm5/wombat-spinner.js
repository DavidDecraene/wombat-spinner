import { Component, Input, HostBinding, ContentChild, TemplateRef, Directive, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerOverlayComponent = /** @class */ (function () {
    function SpinnerOverlayComponent() {
        this.loading = true;
        this.spinClass = '';
        this.icon = 'fas fa-circle-notch fa-spin fa-5x';
    }
    Object.defineProperty(SpinnerOverlayComponent.prototype, "bodyTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bodyTemplate;
        },
        set: /**
         * @param {?} tmpl
         * @return {?}
         */
        function (tmpl) {
            this._bodyTemplate = tmpl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerOverlayComponent.prototype, "bodyInput", {
        set: /**
         * @param {?} tmpl
         * @return {?}
         */
        function (tmpl) {
            if (tmpl) {
                this.bodyTemplate = tmpl;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerOverlayComponent.prototype, "bodyContent", {
        set: /**
         * @param {?} tmpl
         * @return {?}
         */
        function (tmpl) {
            if (tmpl) {
                this.bodyTemplate = tmpl;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerOverlayComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SpinnerOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'w-spinner-overlay',
                    template: "<div *ngIf=\"loading; else bodyTemplate\" class=\"spinner-overlay\">\n  <div class=\"spin-panel\">\n    <em [class]=\"icon\"></em>\n  </div>\n</div>\n",
                    styles: [":host{display:block;position:relative;height:100%;width:100%}:host .spinner-overlay{position:absolute;background-color:rgba(220,220,220,.3);width:100%;min-height:120px;border-radius:5px;z-index:500;height:100%}:host .spinner-overlay .spin-panel{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin-top:25px}"]
                }] }
    ];
    /** @nocollapse */
    SpinnerOverlayComponent.ctorParameters = function () { return []; };
    SpinnerOverlayComponent.propDecorators = {
        loading: [{ type: Input }],
        spinClass: [{ type: HostBinding, args: ['class',] }, { type: Input }],
        icon: [{ type: Input }],
        bodyInput: [{ type: Input, args: ['body',] }],
        bodyContent: [{ type: ContentChild, args: [TemplateRef, { static: false },] }]
    };
    return SpinnerOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerDirective = /** @class */ (function () {
    function SpinnerDirective(templateRef, viewContainerRef, resolver) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this._loading = true;
    }
    Object.defineProperty(SpinnerDirective.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (state === undefined) {
                return;
            }
            this._loading = state;
            if (this.component) {
                this.component.loading = state;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerDirective.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} opts
         * @return {?}
         */
        function (opts) {
            this._options = opts;
            this.syncOptions();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerDirective.prototype.syncOptions = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    SpinnerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(SpinnerOverlayComponent);
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        componentRef.instance.loading = this.loading;
        componentRef.instance.bodyInput = this.templateRef;
        this.component = componentRef.instance;
        this.syncOptions();
    };
    SpinnerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[wSpinner]'
                },] }
    ];
    /** @nocollapse */
    SpinnerDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    SpinnerDirective.propDecorators = {
        options: [{ type: Input, args: ['wSpinnerOptions',] }],
        loading: [{ type: Input, args: ['wSpinner',] }]
    };
    return SpinnerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// CommonModule to enable ngIf
var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
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
    SpinnerModule.ctorParameters = function () { return []; };
    return SpinnerModule;
}());

export { SpinnerDirective, SpinnerModule, SpinnerOverlayComponent };
//# sourceMappingURL=wombat-spinner.js.map
