/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as searchHelper from './search-helper';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { isDefined } from './value-utils';
export class NgOptionHighlightDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    /**
     * @return {?}
     */
    _highlightLabel() {
        /** @type {?} */
        const label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        /** @type {?} */
        const indexOfTerm = searchHelper.stripSpecialChars(label)
            .toLowerCase()
            .indexOf(searchHelper.stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + `<span class="highlighted">${label.substr(indexOfTerm, this.term.length)}</span>`
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    }
    /**
     * @return {?}
     */
    get _canHighlight() {
        return isDefined(this.term) && isDefined(this.label);
    }
    /**
     * @param {?} html
     * @return {?}
     */
    _setInnerHtml(html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    }
}
NgOptionHighlightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngOptionHighlight]'
            },] }
];
/** @nocollapse */
NgOptionHighlightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NgOptionHighlightDirective.propDecorators = {
    term: [{ type: Input, args: ['ngOptionHighlight',] }]
};
if (false) {
    /** @type {?} */
    NgOptionHighlightDirective.prototype.term;
    /** @type {?} */
    NgOptionHighlightDirective.prototype.element;
    /** @type {?} */
    NgOptionHighlightDirective.prototype.label;
    /** @type {?} */
    NgOptionHighlightDirective.prototype.elementRef;
    /** @type {?} */
    NgOptionHighlightDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC8iLCJzb3VyY2VzIjpbIm5nLXNlbGVjdC9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLFlBQVksTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLMUMsTUFBTTs7Ozs7SUFPRixZQUNZLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDaEQ7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtLQUNKOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtLQUNKOzs7O0lBRU8sZUFBZTs7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsT0FBTztTQUNWOztRQUVELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7YUFDcEQsV0FBVyxFQUFFO2FBQ2IsT0FBTyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUNkLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztrQkFDN0IsNkJBQTZCLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7a0JBQ2pGLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCOzs7OztRQUdPLGFBQWE7UUFDckIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUdqRCxhQUFhLENBQUMsSUFBSTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7WUF0RG5GLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7O1lBVEcsVUFBVTtZQUdWLFNBQVM7OzttQkFTUixLQUFLLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ09wdGlvbkhpZ2hsaWdodF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduZ09wdGlvbkhpZ2hsaWdodCcpIHRlcm06IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZ2hsaWdodExhYmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcclxuICAgICAgICBpZiAoIXRoaXMudGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleE9mVGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhsYWJlbClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRoaXMudGVybSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKGluZGV4T2ZUZXJtID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKFxyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZUZXJtKVxyXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRlZFwiPiR7bGFiZWwuc3Vic3RyKGluZGV4T2ZUZXJtLCB0aGlzLnRlcm0ubGVuZ3RoKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKyBsYWJlbC5zdWJzdHJpbmcoaW5kZXhPZlRlcm0gKyB0aGlzLnRlcm0ubGVuZ3RoLCBsYWJlbC5sZW5ndGgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQodGhpcy50ZXJtKSAmJiBpc0RlZmluZWQodGhpcy5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SW5uZXJIdG1sKGh0bWwpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgaHRtbCk7XHJcbiAgICB9XHJcbn0gICBcclxuIl19