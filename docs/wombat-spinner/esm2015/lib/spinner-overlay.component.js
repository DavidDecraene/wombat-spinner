/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, TemplateRef, ContentChild } from '@angular/core';
export class SpinnerOverlayComponent {
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
if (false) {
    /** @type {?} */
    SpinnerOverlayComponent.prototype.loading;
    /** @type {?} */
    SpinnerOverlayComponent.prototype.spinClass;
    /** @type {?} */
    SpinnerOverlayComponent.prototype.icon;
    /** @type {?} */
    SpinnerOverlayComponent.prototype._bodyTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvbWJhdC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXItb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pHLE1BQU0sT0FBTyx1QkFBdUI7SUFvQ2xDO1FBakNBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFJZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsU0FBSSxHQUFHLG1DQUFtQyxDQUFDO0lBMEIzQixDQUFDOzs7O0lBdEJqQixJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFlBQVksQ0FBQyxJQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLElBQXNCO1FBQ2xDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLElBQXNCO1FBQ3BDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa0tBQStDOzthQUVoRDs7Ozs7c0JBR0UsS0FBSzt3QkFHTCxXQUFXLFNBQUMsT0FBTyxjQUNuQixLQUFLO21CQUdMLEtBQUs7d0JBYUwsS0FBSyxTQUFDLE1BQU07MEJBT1osWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUEzQjVDLDBDQUNlOztJQUVmLDRDQUVlOztJQUVmLHVDQUMyQzs7SUFFM0MsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3LXNwaW5uZXItb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgbG9hZGluZyA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIEBJbnB1dCgpXG4gIHNwaW5DbGFzcyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIGljb24gPSAnZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluIGZhLTV4JztcblxuICBfYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBib2R5VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlUZW1wbGF0ZTtcbiAgfVxuXG4gIHNldCBib2R5VGVtcGxhdGUodG1wbDogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX2JvZHlUZW1wbGF0ZSA9IHRtcGw7XG4gIH1cblxuICBASW5wdXQoJ2JvZHknKVxuICBzZXQgYm9keUlucHV0KHRtcGw6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodG1wbCkge1xuICAgICAgdGhpcy5ib2R5VGVtcGxhdGUgPSB0bXBsO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgYm9keUNvbnRlbnQodG1wbDogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh0bXBsKSB7XG4gICAgICB0aGlzLmJvZHlUZW1wbGF0ZSA9IHRtcGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=