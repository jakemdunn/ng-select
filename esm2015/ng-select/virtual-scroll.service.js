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
export class VirtualScrollService {
    /**
     * @param {?} d
     * @param {?} dropdownEl
     * @param {?} bufferAmount
     * @return {?}
     */
    calculateItems(d, dropdownEl, bufferAmount) {
        /** @type {?} */
        const scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        /** @type {?} */
        const scrollTop = Math.max(0, dropdownEl.scrollTop);
        /** @type {?} */
        const indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        /** @type {?} */
        let end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        /** @type {?} */
        const maxStartEnd = end;
        /** @type {?} */
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        /** @type {?} */
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        let topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
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
    }
    /**
     * @param {?} itemsLength
     * @param {?} index
     * @param {?} panelEl
     * @param {?} contentEl
     * @return {?}
     */
    calculateDimensions(itemsLength, index, panelEl, contentEl) {
        /** @type {?} */
        const panelRect = panelEl.getBoundingClientRect();
        /** @type {?} */
        const itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        /** @type {?} */
        const itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    }
}
VirtualScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ VirtualScrollService.ngInjectableDef = i0.defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L3ZpcnR1YWwtc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CM0MsTUFBTTs7Ozs7OztJQUVGLGNBQWMsQ0FBQyxDQUFrQixFQUFFLFVBQXVCLEVBQUUsWUFBb0I7O1FBQzVFLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQ3ZDOztRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7O1FBQ2xFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRXJGLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQzs7UUFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztRQUU3RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDcEcsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxZQUFZLENBQUM7UUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDcEIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVuQyxPQUFPO1lBQ0gsVUFBVSxFQUFFLFVBQVU7WUFDdEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUE7S0FDSjs7Ozs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLEtBQWEsRUFBRSxPQUFvQixFQUFFLFNBQXNCOztRQUNoRyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFDbEQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3hCLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQzs7UUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFaEYsT0FBTztZQUNILFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSztZQUMxQixVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDNUIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQzFCLFdBQVcsRUFBRSxRQUFRLENBQUMsTUFBTTtZQUM1QixXQUFXLEVBQUUsV0FBVztTQUMzQixDQUFDO0tBQ0w7OztZQW5ESixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtc0RpbWVuc2lvbnMge1xyXG4gICAgaXRlbXNMZW5ndGg6IG51bWJlcjtcclxuICAgIHZpZXdXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld0hlaWdodDogbnVtYmVyO1xyXG4gICAgY2hpbGRXaWR0aDogbnVtYmVyO1xyXG4gICAgY2hpbGRIZWlnaHQ6IG51bWJlcjtcclxuICAgIGl0ZW1zUGVyQ29sOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XHJcbiAgICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcclxuICAgIHRvcFBhZGRpbmc6IG51bWJlcjtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFZpcnR1YWxTY3JvbGxTZXJ2aWNlIHtcclxuXHJcbiAgICBjYWxjdWxhdGVJdGVtcyhkOiBJdGVtc0RpbWVuc2lvbnMsIGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50LCBidWZmZXJBbW91bnQ6IG51bWJlcik6IEl0ZW1zUmFuZ2VSZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGQuY2hpbGRIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xyXG4gICAgICAgIGlmIChkcm9wZG93bkVsLnNjcm9sbFRvcCA+IHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBkcm9wZG93bkVsLnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIGRyb3Bkb3duRWwuc2Nyb2xsVG9wKTtcclxuICAgICAgICBjb25zdCBpbmRleEJ5U2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC8gc2Nyb2xsSGVpZ2h0ICogZC5pdGVtc0xlbmd0aDtcclxuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJDb2wgKyAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0RW5kID0gZW5kO1xyXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sIC0gMSk7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gTWF0aC5taW4obWF4U3RhcnQsIE1hdGguZmxvb3IoaW5kZXhCeVNjcm9sbFRvcCkpO1xyXG5cclxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuY2hpbGRIZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihzdGFydCwgYnVmZmVyQW1vdW50KSk7XHJcbiAgICAgICAgdG9wUGFkZGluZyA9ICFpc05hTih0b3BQYWRkaW5nKSA/IHRvcFBhZGRpbmcgOiAwO1xyXG4gICAgICAgIHN0YXJ0ID0gIWlzTmFOKHN0YXJ0KSA/IHN0YXJ0IDogLTE7XHJcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcclxuICAgICAgICBzdGFydCAtPSBidWZmZXJBbW91bnQ7XHJcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCk7XHJcbiAgICAgICAgZW5kICs9IGJ1ZmZlckFtb3VudDtcclxuICAgICAgICBlbmQgPSBNYXRoLm1pbihkLml0ZW1zTGVuZ3RoLCBlbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3BQYWRkaW5nOiB0b3BQYWRkaW5nLFxyXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQ6IGVuZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEaW1lbnNpb25zKGl0ZW1zTGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIsIHBhbmVsRWw6IEhUTUxFbGVtZW50LCBjb250ZW50RWw6IEhUTUxFbGVtZW50KTogSXRlbXNEaW1lbnNpb25zIHtcclxuICAgICAgICBjb25zdCBwYW5lbFJlY3QgPSBwYW5lbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1SZWN0ID0gY29udGVudEVsLmNoaWxkcmVuW2luZGV4XSA/IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaXRlbXNQZXJDb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsUmVjdC5oZWlnaHQgLyBpdGVtUmVjdC5oZWlnaHQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXRlbXNMZW5ndGg6IGl0ZW1zTGVuZ3RoLFxyXG4gICAgICAgICAgICB2aWV3V2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgdmlld0hlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgY2hpbGRXaWR0aDogaXRlbVJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGNoaWxkSGVpZ2h0OiBpdGVtUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyQ29sOiBpdGVtc1BlckNvbCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==