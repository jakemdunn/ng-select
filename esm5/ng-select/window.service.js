/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    WindowService.prototype.requestAnimationFrame = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return window.requestAnimationFrame(fn);
    };
    /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    WindowService.prototype.setTimeout = /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    function (handler, timeout) {
        return window.setTimeout(handler, timeout);
    };
    WindowService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ WindowService.ngInjectableDef = i0.defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
    return WindowService;
}());
export { WindowService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm5nLXNlbGVjdC93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBSXZDLDZDQUFxQjs7OztJQUFyQixVQUFzQixFQUFFO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7Ozs7SUFFRCxrQ0FBVTs7Ozs7SUFBVixVQUFXLE9BQWlDLEVBQUUsT0FBZTtRQUN6RCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlDOztnQkFSSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7d0JBRmxDOztTQUdhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dChoYW5kbGVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==