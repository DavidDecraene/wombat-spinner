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
export class SpinnerDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93b21iYXQtc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9zcGlubmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBRXRFLGlDQUdDOzs7SUFGQywrQkFBa0I7O0lBQ2xCLGdDQUFtQjs7QUFNckIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBNkIzQixZQUFvQixXQUE2QixFQUN2QyxnQkFBa0MsRUFDbEMsUUFBa0M7UUFGeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ3ZDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUE5QjVDLGFBQVEsR0FBRyxJQUFJLENBQUM7SUErQmhCLENBQUM7Ozs7SUF6QkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBR0QsSUFDSSxPQUFPLENBQUMsSUFBaUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FBRTtJQUN6RCxDQUFDOzs7O0lBT0QsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUM7O2NBQ3hFLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUNuRSxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBVjBCLFdBQVc7WUFBVSxnQkFBZ0I7WUFBRSx3QkFBd0I7OztzQkF1QnZGLEtBQUssU0FBQyxpQkFBaUI7c0JBVXZCLEtBQUssU0FBQyxVQUFVOzs7O0lBckJqQixvQ0FBZ0I7O0lBQ2hCLG9DQUFpQjs7SUFDakIsbUNBQWdCOztJQUNoQixvQ0FBc0I7O0lBQ3RCLHFDQUFtQzs7Ozs7SUF3QnZCLHVDQUFxQzs7Ozs7SUFDL0MsNENBQTBDOzs7OztJQUMxQyxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTcGluT3B0aW9ucyB7XG4gIHNwaW5JY29uPzogc3RyaW5nO1xuICBzcGluQ2xhc3M/OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3U3Bpbm5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBfbG9hZGluZyA9IHRydWU7XG4gIF9zcENsYXNzOiBzdHJpbmc7XG4gIF9zcEljb246IHN0cmluZztcbiAgX29wdGlvbnM6IFNwaW5PcHRpb25zO1xuICBjb21wb25lbnQ6IFNwaW5uZXJPdmVybGF5Q29tcG9uZW50O1xuXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cblxuICBASW5wdXQoJ3dTcGlubmVyT3B0aW9ucycpXG4gIHNldCBvcHRpb25zKG9wdHM6IFNwaW5PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdHM7XG4gICAgdGhpcy5zeW5jT3B0aW9ucygpO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogU3Bpbk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgQElucHV0KCd3U3Bpbm5lcicpXG4gIHNldCBsb2FkaW5nKHN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fbG9hZGluZyA9IHN0YXRlO1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkgeyB0aGlzLmNvbXBvbmVudC5sb2FkaW5nID0gc3RhdGU7IH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICB9XG5cbiAgc3luY09wdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudCkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyByZXR1cm47IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnNwaW5DbGFzcykge1xuICAgICAgdGhpcy5jb21wb25lbnQuc3BpbkNsYXNzID0gdGhpcy5vcHRpb25zLnNwaW5DbGFzcztcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zcGluSWNvbikge1xuICAgICAgdGhpcy5jb21wb25lbnQuaWNvbiA9IHRoaXMub3B0aW9ucy5zcGluSWNvbjtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShTcGlubmVyT3ZlcmxheUNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubG9hZGluZyA9IHRoaXMubG9hZGluZztcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuYm9keUlucHV0ID0gdGhpcy50ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICB0aGlzLnN5bmNPcHRpb25zKCk7XG4gIH1cbn1cbiJdfQ==