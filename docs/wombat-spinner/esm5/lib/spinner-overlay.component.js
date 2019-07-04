/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, TemplateRef, ContentChild } from '@angular/core';
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
export { SpinnerOverlayComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3dvbWJhdC1zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXItb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHO0lBeUNFO1FBakNBLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFJZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsU0FBSSxHQUFHLG1DQUFtQyxDQUFDO0lBMEIzQixDQUFDO0lBdEJqQixzQkFBSSxpREFBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQWlCLElBQXNCO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7OztPQUpBO0lBTUQsc0JBQ0ksOENBQVM7Ozs7O1FBRGIsVUFDYyxJQUFzQjtZQUNsQyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksZ0RBQVc7Ozs7O1FBRGYsVUFDZ0IsSUFBc0I7WUFDcEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUlELDBDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isa0tBQStDOztpQkFFaEQ7Ozs7OzBCQUdFLEtBQUs7NEJBR0wsV0FBVyxTQUFDLE9BQU8sY0FDbkIsS0FBSzt1QkFHTCxLQUFLOzRCQWFMLEtBQUssU0FBQyxNQUFNOzhCQU9aLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQVk5Qyw4QkFBQztDQUFBLEFBOUNELElBOENDO1NBekNZLHVCQUF1Qjs7O0lBRWxDLDBDQUNlOztJQUVmLDRDQUVlOztJQUVmLHVDQUMyQzs7SUFFM0MsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3LXNwaW5uZXItb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgbG9hZGluZyA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIEBJbnB1dCgpXG4gIHNwaW5DbGFzcyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIGljb24gPSAnZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluIGZhLTV4JztcblxuICBfYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBib2R5VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlUZW1wbGF0ZTtcbiAgfVxuXG4gIHNldCBib2R5VGVtcGxhdGUodG1wbDogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX2JvZHlUZW1wbGF0ZSA9IHRtcGw7XG4gIH1cblxuICBASW5wdXQoJ2JvZHknKVxuICBzZXQgYm9keUlucHV0KHRtcGw6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodG1wbCkge1xuICAgICAgdGhpcy5ib2R5VGVtcGxhdGUgPSB0bXBsO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgYm9keUNvbnRlbnQodG1wbDogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh0bXBsKSB7XG4gICAgICB0aGlzLmJvZHlUZW1wbGF0ZSA9IHRtcGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=