/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function ItemsDimensions() { }
/** @type {?} */
ItemsDimensions.prototype.itemsLength;
/** @type {?} */
ItemsDimensions.prototype.viewWidth;
/** @type {?} */
ItemsDimensions.prototype.viewHeight;
/** @type {?} */
ItemsDimensions.prototype.childWidth;
/** @type {?} */
ItemsDimensions.prototype.childHeight;
/** @type {?} */
ItemsDimensions.prototype.itemsPerCol;
/**
 * @record
 */
export function ItemsRangeResult() { }
/** @type {?} */
ItemsRangeResult.prototype.scrollHeight;
/** @type {?} */
ItemsRangeResult.prototype.topPadding;
/** @type {?} */
ItemsRangeResult.prototype.start;
/** @type {?} */
ItemsRangeResult.prototype.end;
var VirtualScrollService = /** @class */ (function () {
    function VirtualScrollService() {
    }
    /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    VirtualScrollService.prototype.calculateItems = /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    function (d, dropdownEl, bufferAmount) {
        /** @type {?} */
        var scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        /** @type {?} */
        var scrollTop = Math.max(0, dropdownEl.scrollTop);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        /** @type {?} */
        var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    VirtualScrollService.prototype.calculateDimensions = /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    function (itemsLength, index, panelEl, contentEl) {
        /** @type {?} */
        var panelRect = panelEl.getBoundingClientRect();
        /** @type {?} */
        var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        /** @type {?} */
        var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    };
    VirtualScrollService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ VirtualScrollService.ngInjectableDef = i0.defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
    return VirtualScrollService;
}());
export { VirtualScrollService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L3ZpcnR1YWwtc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCdkMsNkNBQWM7Ozs7OztJQUFkLFVBQWUsQ0FBa0IsRUFBRSxVQUF1QixFQUFFLFlBQW9COztRQUM1RSxJQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksRUFBRTtZQUNyQyxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUN2Qzs7UUFFRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBQ3BELElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDOztRQUNsRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVyRixJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7O1FBQ3hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUM5RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs7UUFFN0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixLQUFLLElBQUksWUFBWSxDQUFDO1FBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixHQUFHLElBQUksWUFBWSxDQUFDO1FBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkMsT0FBTztZQUNILFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFlBQVksRUFBRSxZQUFZO1lBQzFCLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLEdBQUc7U0FDWCxDQUFBO0tBQ0o7Ozs7Ozs7O0lBRUQsa0RBQW1COzs7Ozs7O0lBQW5CLFVBQW9CLFdBQW1CLEVBQUUsS0FBYSxFQUFFLE9BQW9CLEVBQUUsU0FBc0I7O1FBQ2hHLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUNsRCxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdGLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztZQUN0QixNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDeEIsR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDOztRQUNGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVoRixPQUFPO1lBQ0gsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQzFCLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM1QixVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUs7WUFDMUIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQzVCLFdBQVcsRUFBRSxXQUFXO1NBQzNCLENBQUM7S0FDTDs7Z0JBbkRKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsrQkFsQmxDOztTQW1CYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1zRGltZW5zaW9ucyB7XHJcbiAgICBpdGVtc0xlbmd0aDogbnVtYmVyO1xyXG4gICAgdmlld1dpZHRoOiBudW1iZXI7XHJcbiAgICB2aWV3SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjaGlsZFdpZHRoOiBudW1iZXI7XHJcbiAgICBjaGlsZEhlaWdodDogbnVtYmVyO1xyXG4gICAgaXRlbXNQZXJDb2w6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtc1JhbmdlUmVzdWx0IHtcclxuICAgIHNjcm9sbEhlaWdodDogbnVtYmVyO1xyXG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGVuZDogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbFNlcnZpY2Uge1xyXG5cclxuICAgIGNhbGN1bGF0ZUl0ZW1zKGQ6IEl0ZW1zRGltZW5zaW9ucywgZHJvcGRvd25FbDogSFRNTEVsZW1lbnQsIGJ1ZmZlckFtb3VudDogbnVtYmVyKTogSXRlbXNSYW5nZVJlc3VsdCB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5jaGlsZEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duRWwuc2Nyb2xsVG9wID4gc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZHJvcGRvd25FbC5zY3JvbGxUb3ApO1xyXG4gICAgICAgIGNvbnN0IGluZGV4QnlTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xyXG4gICAgICAgIGxldCBlbmQgPSBNYXRoLm1pbihkLml0ZW1zTGVuZ3RoLCBNYXRoLmNlaWwoaW5kZXhCeVNjcm9sbFRvcCkgKyAoZC5pdGVtc1BlckNvbCArIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XHJcbiAgICAgICAgY29uc3QgbWF4U3RhcnQgPSBNYXRoLm1heCgwLCBtYXhTdGFydEVuZCAtIGQuaXRlbXNQZXJDb2wgLSAxKTtcclxuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1pbihtYXhTdGFydCwgTWF0aC5mbG9vcihpbmRleEJ5U2Nyb2xsVG9wKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3BQYWRkaW5nID0gZC5jaGlsZEhlaWdodCAqIE1hdGguY2VpbChzdGFydCkgLSAoZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKHN0YXJ0LCBidWZmZXJBbW91bnQpKTtcclxuICAgICAgICB0b3BQYWRkaW5nID0gIWlzTmFOKHRvcFBhZGRpbmcpID8gdG9wUGFkZGluZyA6IDA7XHJcbiAgICAgICAgc3RhcnQgPSAhaXNOYU4oc3RhcnQpID8gc3RhcnQgOiAtMTtcclxuICAgICAgICBlbmQgPSAhaXNOYU4oZW5kKSA/IGVuZCA6IC0xO1xyXG4gICAgICAgIHN0YXJ0IC09IGJ1ZmZlckFtb3VudDtcclxuICAgICAgICBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcclxuICAgICAgICBlbmQgKz0gYnVmZmVyQW1vdW50O1xyXG4gICAgICAgIGVuZCA9IE1hdGgubWluKGQuaXRlbXNMZW5ndGgsIGVuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcFBhZGRpbmc6IHRvcFBhZGRpbmcsXHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbXNMZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlciwgcGFuZWxFbDogSFRNTEVsZW1lbnQsIGNvbnRlbnRFbDogSFRNTEVsZW1lbnQpOiBJdGVtc0RpbWVuc2lvbnMge1xyXG4gICAgICAgIGNvbnN0IHBhbmVsUmVjdCA9IHBhbmVsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaXRlbVJlY3QgPSBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdID8gY29udGVudEVsLmNoaWxkcmVuW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcclxuICAgICAgICAgICAgd2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlckNvbCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IocGFuZWxSZWN0LmhlaWdodCAvIGl0ZW1SZWN0LmhlaWdodCkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpdGVtc0xlbmd0aDogaXRlbXNMZW5ndGgsXHJcbiAgICAgICAgICAgIHZpZXdXaWR0aDogcGFuZWxSZWN0LndpZHRoLFxyXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICBjaGlsZFdpZHRoOiBpdGVtUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgY2hpbGRIZWlnaHQ6IGl0ZW1SZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgaXRlbXNQZXJDb2w6IGl0ZW1zUGVyQ29sLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19