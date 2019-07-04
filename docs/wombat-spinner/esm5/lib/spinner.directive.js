/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SpinnerOverlayComponent } from './spinner-overlay.component';
/**
 * @record
 */
export function SpinOptions() { }
if (false) {
    /** @type {?|undefined} */
    SpinOptions.prototype.spinIcon;
    /** @type {?|undefined} */
    SpinOptions.prototype.spinClass;
}
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
export { SpinnerDirective };
if (false) {
    /** @type {?} */
    SpinnerDirective.prototype._loading;
    /** @type {?} */
    SpinnerDirective.prototype._spClass;
    /** @type {?} */
    SpinnerDirective.prototype._spIcon;
    /** @type {?} */
    SpinnerDirective.prototype._options;
    /** @type {?} */
    SpinnerDirective.prototype.component;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b21iYXQtc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9zcGlubmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXRFLGlDQUdDOzs7SUFGQywrQkFBa0I7O0lBQ2xCLGdDQUFtQjs7QUFHckI7SUFnQ0UsMEJBQW9CLFdBQTZCLEVBQ3ZDLGdCQUFrQyxFQUNsQyxRQUFrQztRQUZ4QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDdkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQTlCNUMsYUFBUSxHQUFHLElBQUksQ0FBQztJQStCaEIsQ0FBQztJQXpCRCxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBYUQsVUFDWSxLQUFjO1lBQ3hCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUFFO1FBQ3pELENBQUM7OztPQWxCQTtJQUdELHNCQUNJLHFDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFSRCxVQUNZLElBQWlCO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7OztJQWtCRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUM7O1lBQ3hFLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUNuRSxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFWMEIsV0FBVztnQkFBVSxnQkFBZ0I7Z0JBQUUsd0JBQXdCOzs7MEJBdUJ2RixLQUFLLFNBQUMsaUJBQWlCOzBCQVV2QixLQUFLLFNBQUMsVUFBVTs7SUErQm5CLHVCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FyRFksZ0JBQWdCOzs7SUFDM0Isb0NBQWdCOztJQUNoQixvQ0FBaUI7O0lBQ2pCLG1DQUFnQjs7SUFDaEIsb0NBQXNCOztJQUN0QixxQ0FBbUM7Ozs7O0lBd0J2Qix1Q0FBcUM7Ozs7O0lBQy9DLDRDQUEwQzs7Ozs7SUFDMUMsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbk9wdGlvbnMge1xuICBzcGluSWNvbj86IHN0cmluZztcbiAgc3BpbkNsYXNzPzogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd1NwaW5uZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgX2xvYWRpbmcgPSB0cnVlO1xuICBfc3BDbGFzczogc3RyaW5nO1xuICBfc3BJY29uOiBzdHJpbmc7XG4gIF9vcHRpb25zOiBTcGluT3B0aW9ucztcbiAgY29tcG9uZW50OiBTcGlubmVyT3ZlcmxheUNvbXBvbmVudDtcblxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG5cbiAgQElucHV0KCd3U3Bpbm5lck9wdGlvbnMnKVxuICBzZXQgb3B0aW9ucyhvcHRzOiBTcGluT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRzO1xuICAgIHRoaXMuc3luY09wdGlvbnMoKTtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IFNwaW5PcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgnd1NwaW5uZXInKVxuICBzZXQgbG9hZGluZyhzdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX2xvYWRpbmcgPSBzdGF0ZTtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHsgdGhpcy5jb21wb25lbnQubG9hZGluZyA9IHN0YXRlOyB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgfVxuXG4gIHN5bmNPcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5jb21wb25lbnQpIHsgcmV0dXJuOyB9XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zcGluQ2xhc3MpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LnNwaW5DbGFzcyA9IHRoaXMub3B0aW9ucy5zcGluQ2xhc3M7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3Bpbkljb24pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50Lmljb24gPSB0aGlzLm9wdGlvbnMuc3Bpbkljb247XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoU3Bpbm5lck92ZXJsYXlDb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmc7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmJvZHlJbnB1dCA9IHRoaXMudGVtcGxhdGVSZWY7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICB9XG59XG4iXX0=