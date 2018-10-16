import { Directive, TemplateRef, Injectable, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, EventEmitter, Output, ViewChild, NgZone, ViewEncapsulation, HostListener, Optional, Inject, forwardRef, ChangeDetectorRef, ContentChild, HostBinding, ContentChildren, InjectionToken, Attribute, NgModule, defineInjectable } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { takeUntil, startWith, tap, debounceTime, map, filter } from 'rxjs/operators';
import { Subject, fromEvent, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-option-tmp]' },] }
];
/** @nocollapse */
NgOptionTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgOptgroupTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
];
/** @nocollapse */
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-label-tmp]' },] }
];
/** @nocollapse */
NgLabelTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgMultiLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
];
/** @nocollapse */
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-header-tmp]' },] }
];
/** @nocollapse */
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-footer-tmp]' },] }
];
/** @nocollapse */
NgFooterTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgNotFoundTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
];
/** @nocollapse */
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgTypeToSearchTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
];
/** @nocollapse */
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgLoadingTextTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
];
/** @nocollapse */
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
class NgTagTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-tag-tmp]' },] }
];
/** @nocollapse */
NgTagTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ConsoleService {
    /**
     * @param {?} message
     * @return {?}
     */
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ ConsoleService.ngInjectableDef = defineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    const match = (a) => {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        /** @type {?} */
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ItemsList {
    /**
     * @param {?} _ngSelect
     * @param {?} _selectionModel
     */
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get filteredItems() {
        return this._filteredItems;
    }
    /**
     * @return {?}
     */
    get markedIndex() {
        return this._markedIndex;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectionModel.value;
    }
    /**
     * @return {?}
     */
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    /**
     * @return {?}
     */
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get lastSelectedItem() {
        return this.selectedItems[this.selectedItems.length - 1];
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this._items = items.map((item, index) => this.mapItem(item, index));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected && multiple) {
            this._hideSelected(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findItem(value) {
        /** @type {?} */
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = item => this._ngSelect.compareWith(item.value, value);
        }
        else if (this._ngSelect.bindValue) {
            findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
        }
        else {
            findBy = item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
        }
        return this._items.find(item => findBy(item));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        /** @type {?} */
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    /**
     * @return {?}
     */
    clearSelected() {
        this._selectionModel.clear();
        this._items.forEach((item) => {
            item.selected = false;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(item => {
            /** @type {?} */
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            /** @type {?} */
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                /** @type {?} */
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    /** @type {?} */
                    const head = this._items.find(x => x === last.parent);
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    /**
     * @return {?}
     */
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(x => !x.selected);
        }
        else {
            this._filteredItems = this._items;
        }
    }
    /**
     * @return {?}
     */
    unmarkItem() {
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    markNextItem() {
        this._stepToItem(+1);
    }
    /**
     * @return {?}
     */
    markPreviousItem() {
        this._stepToItem(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        const indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
        }
    }
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            let keys = key.split('.');
            /** @type {?} */
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    mapItem(item, index) {
        /** @type {?} */
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: newId()
        };
    }
    /**
     * @return {?}
     */
    mapSelectedItems() {
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            /** @type {?} */
            const value = this._ngSelect.bindValue ? selected.value[this._ngSelect.bindValue] : selected.value;
            /** @type {?} */
            const item = this.findItem(value);
            if (item && selected !== item) {
                this._selectionModel.unselect(selected, multiple);
                this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
            }
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            const parent = item.parent;
            /** @type {?} */
            const parentExists = this._filteredItems.find(x => x === parent);
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((a, b) => (a.index - b.index))];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter(x => x !== item);
        if (item.parent) {
            /** @type {?} */
            const children = item.parent.children;
            if (children.every(x => x.selected)) {
                this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
        }
    }
    /**
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    _defaultSearchFn(search, opt) {
        /** @type {?} */
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    /**
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    _groupBy(items, prop) {
        /** @type {?} */
        const isFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const groups = new Map();
        for (const item of items) {
            /** @type {?} */
            let key = isFn ? (/** @type {?} */ (prop))(item.value) : item.value[/** @type {?} */ (prop)];
            key = isDefined(key) ? key : undefined;
            /** @type {?} */
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _flatten(groups) {
        /** @type {?} */
        const isFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const items = [];
        /** @type {?} */
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup);
        /** @type {?} */
        let i = withoutGroup.length;
        for (const key of Array.from(groups.keys())) {
            if (!isDefined(key)) {
                continue;
            }
            /** @type {?} */
            const parent = {
                label: key,
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId()
            };
            /** @type {?} */
            const groupKey = isFn ? this._ngSelect.bindLabel : /** @type {?} */ (this._ngSelect.groupBy);
            /** @type {?} */
            const groupValue = this._ngSelect.groupValue || (() => ({ [groupKey]: key }));
            /** @type {?} */
            const children = groups.get(key).map(x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(x => x.value));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WindowService {
    /**
     * @param {?} fn
     * @return {?}
     */
    requestAnimationFrame(fn) {
        return window.requestAnimationFrame(fn);
    }
    /**
     * @param {?} handler
     * @param {?} timeout
     * @return {?}
     */
    setTimeout(handler, timeout) {
        return window.setTimeout(handler, timeout);
    }
}
WindowService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ WindowService.ngInjectableDef = defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VirtualScrollService {
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
/** @nocollapse */ VirtualScrollService.ngInjectableDef = defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
class NgDropdownPanelComponent {
    /**
     * @param {?} _renderer
     * @param {?} _zone
     * @param {?} _virtualScrollService
     * @param {?} _window
     * @param {?} _elementRef
     * @param {?} _document
     */
    constructor(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.update = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.outsideClick = new EventEmitter();
        this._destroy$ = new Subject();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = () => { };
        this._disposeDocumentResizeListener = () => { };
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._handleScroll();
        if (this._document) {
            merge(fromEvent(this._document, 'touchstart', { capture: true }), fromEvent(this._document, 'mousedown', { capture: true }))
                .pipe(takeUntil(this._destroy$))
                .subscribe(($event) => this._handleOutsideClick($event));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["items"]) {
            this._isScrolledToMarked = false;
            this._handleItemsChange(changes["items"]);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        this._destroy$.next();
        this._destroy$.complete();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._whenContentReady().then(() => {
            if (this.appendTo) {
                this._appendDropdown();
                this._handleDocumentResize();
            }
            this.updateDropdownPosition();
        });
    }
    /**
     * @return {?}
     */
    refresh() {
        return new Promise(resolve => {
            this._zone.runOutsideAngular(() => {
                this._window.requestAnimationFrame(() => {
                    this._updateItems().then(resolve);
                });
            });
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    scrollInto(item) {
        if (!item) {
            return;
        }
        /** @type {?} */
        const index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        /** @type {?} */
        const d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        /** @type {?} */
        const scrollEl = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            /** @type {?} */
            const contentEl = this.contentElementRef.nativeElement;
            /** @type {?} */
            const childrenHeight = Array.from(contentEl.children).slice(0, index).reduce((c, n) => c + n.clientHeight, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    }
    /**
     * @return {?}
     */
    scrollIntoTag() {
        /** @type {?} */
        const el = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    }
    /**
     * @return {?}
     */
    updateDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateAppendedDropdownPosition();
        }
        this._dropdown.style.opacity = '1';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleOutsideClick($event) {
        if (this._select.contains($event.target)) {
            return;
        }
        if (this._dropdown.contains($event.target)) {
            return;
        }
        if ($event.target && $event.target.shadowRoot && $event.path && $event.path[0] && this._select.contains($event.path[0])) {
            return;
        }
        this.outsideClick.emit();
    }
    /**
     * @return {?}
     */
    _handleScroll() {
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', () => {
            this.refresh();
            this._fireScrollToEnd();
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _handleItemsChange(items) {
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(() => {
            if (this.appendTo && this._currentPosition === 'top') {
                this._updateAppendedDropdownPosition();
            }
        });
    }
    /**
     * @return {?}
     */
    _updateItems() {
        NgZone.assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(() => {
                this.update.emit(this.items.slice());
                this._scrollToMarked();
            });
            return Promise.resolve();
        }
        /** @type {?} */
        const loop = (resolve) => {
            /** @type {?} */
            const d = this._calculateDimensions();
            /** @type {?} */
            const res = this._virtualScrollService.calculateItems(d, this.scrollElementRef.nativeElement, this.bufferAmount || 0);
            (/** @type {?} */ (this.paddingElementRef.nativeElement)).style.height = `${res.scrollHeight}px`;
            (/** @type {?} */ (this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
            if (res.start !== this._previousStart || res.end !== this._previousEnd) {
                this._zone.run(() => {
                    this.update.emit(this.items.slice(res.start, res.end));
                    this.scroll.emit({ start: res.start, end: res.end });
                });
                this._previousStart = res.start;
                this._previousEnd = res.end;
                if (this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (this._startupLoop === true) {
                this._startupLoop = false;
                this._scrollToMarked();
                resolve();
            }
        };
        return new Promise((resolve) => loop(resolve));
    }
    /**
     * @return {?}
     */
    _fireScrollToEnd() {
        if (this._scrollToEndFired) {
            return;
        }
        /** @type {?} */
        const scroll = this.scrollElementRef.nativeElement;
        /** @type {?} */
        const padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    }
    /**
     * @param {?=} index
     * @return {?}
     */
    _calculateDimensions(index = 0) {
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    }
    /**
     * @return {?}
     */
    _handleDocumentResize() {
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', () => {
            this._updateAppendedDropdownPosition();
        });
    }
    /**
     * @return {?}
     */
    _scrollToMarked() {
        if (this._isScrolledToMarked || !this.markedItem) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this.markedItem);
    }
    /**
     * @param {?} dropdownEl
     * @return {?}
     */
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        const offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        const height = selectRect.height;
        /** @type {?} */
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    /**
     * @return {?}
     */
    _appendDropdown() {
        /** @type {?} */
        const parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        parent.appendChild(this._dropdown);
    }
    /**
     * @return {?}
     */
    _updateAppendedDropdownPosition() {
        /** @type {?} */
        const parent = document.querySelector(this.appendTo) || document.body;
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const boundingRect = parent.getBoundingClientRect();
        /** @type {?} */
        const offsetTop = selectRect.top - boundingRect.top;
        /** @type {?} */
        const offsetLeft = selectRect.left - boundingRect.left;
        /** @type {?} */
        const topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
        this._dropdown.style.top = offsetTop + topDelta + 'px';
        this._dropdown.style.bottom = 'auto';
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = selectRect.width + 'px';
        this._dropdown.style.minWidth = selectRect.width + 'px';
    }
    /**
     * @return {?}
     */
    _whenContentReady() {
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        /** @type {?} */
        const ready = (resolve) => {
            /** @type {?} */
            const ngOption = this._dropdown.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            this._zone.runOutsideAngular(() => {
                setTimeout(() => ready(resolve), 5);
            });
        };
        return new Promise((resolve) => ready(resolve));
    }
}
NgDropdownPanelComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate"></ng-container>
        </div>
        <div  #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length > 0">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate"></ng-container>
        </div>
    `,
                styles: [".ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            }] }
];
/** @nocollapse */
NgDropdownPanelComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: VirtualScrollService },
    { type: WindowService },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: Input }],
    markedItem: [{ type: Input }],
    position: [{ type: Input }],
    appendTo: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    update: [{ type: Output }],
    scroll: [{ type: Output }],
    scrollToEnd: [{ type: Output }],
    outsideClick: [{ type: Output }],
    contentElementRef: [{ type: ViewChild, args: ['content', { read: ElementRef },] }],
    scrollElementRef: [{ type: ViewChild, args: ['scroll', { read: ElementRef },] }],
    paddingElementRef: [{ type: ViewChild, args: ['padding', { read: ElementRef },] }],
    handleMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new Subject();
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = this._isDisabled(value); }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
NgOptionComponent.ctorParameters = () => [
    { type: ElementRef }
];
NgOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const NG_SELECT_DEFAULT_CONFIG = new InjectionToken('ng-select-default-options');
/** @type {?} */
const SELECTION_MODEL_FACTORY = new InjectionToken('ng-select-selection-model');
class NgSelectComponent {
    /**
     * @param {?} classes
     * @param {?} tabIndex
     * @param {?} config
     * @param {?} newSelectionModel
     * @param {?} _elementRef
     * @param {?} _cd
     * @param {?} _console
     */
    constructor(classes, tabIndex, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.tabIndex = tabIndex;
        this._cd = _cd;
        this._console = _console;
        // inputs
        this.items = [];
        this.clearable = true;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.labelForId = null;
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this.openEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.addEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.disabled = false;
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this.selectedItemId = 0;
        this._defaultLabel = 'label';
        this._primitive = true;
        this._pressedKeys = [];
        this._destroy$ = new Subject();
        this._keyPress$ = new Subject();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this.clearItem = (item) => {
            /** @type {?} */
            const option = this.selectedItems.find(x => x.value === item);
            this.unselect(option);
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    /**
     * @return {?}
     */
    get filtered() { return !!this.filterValue && this.searchable; }
    ;
    /**
     * @return {?}
     */
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */
    get selectedValues() {
        return this.selectedItems.map(x => x.value);
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._handleKeyPresses();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
        if (changes["isOpen"]) {
            this._manualOpen = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.items && this.items.length === 0) {
            this._setItemsFromNgOptions();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    $event.preventDefault();
                    $event.stopPropagation();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        $event.stopPropagation();
        if (target.className === 'ng-clear') {
            this.handleClearClick();
            return;
        }
        if (target.className === 'ng-arrow-wrapper') {
            this.handleArrowClick();
            return;
        }
        if (target.className.includes('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    handleClearClick() {
        if (this.hasValue) {
            this.clearModel();
        }
        this._clearSearch();
        this.focus();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    }
    /**
     * @return {?}
     */
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focus();
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd) {
                this._clearSearch();
            }
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
            this._updateNgModel();
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.filterInput.nativeElement.focus();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */
    selectTag() {
        /** @type {?} */
        let tag;
        if (isFunction(this.addTag)) {
            tag = (/** @type {?} */ (this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : { [this.bindLabel]: this.filterValue };
        }
        /** @type {?} */
        const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
        if (isPromise(tag)) {
            tag.then(item => this.select(handleTag(item))).catch(() => { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
    }
    /**
     * @return {?}
     */
    get showAddTag() {
        if (!this.filterValue) {
            return false;
        }
        /** @type {?} */
        const term = this.filterValue.toLowerCase();
        return this.addTag &&
            (!this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term))) &&
            !this.loading;
    }
    /**
     * @return {?}
     */
    showNoItemsFound() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
            !this.showAddTag;
    }
    /**
     * @return {?}
     */
    showTypeToSearch() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.loading;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        this.filterValue = term;
        this.open();
        if (this._isTypeahead) {
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit(term);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */
    detectChanges() {
        if (!(/** @type {?} */ (this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    updateDropdownPosition() {
        if (this.dropdownPanel) {
            this.dropdownPanel.updateDropdownPosition();
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        /** @type {?} */
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
            this.itemsList.filter(this.filterValue);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    /**
     * @return {?}
     */
    _setItemsFromNgOptions() {
        /** @type {?} */
        const handleNgOptions = (options) => {
            this.items = options.map(option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };
        /** @type {?} */
        const handleOptionChange = () => {
            /** @type {?} */
            const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
            merge(...this.ngOptions.map(option => option.stateChange$))
                .pipe(takeUntil(changedOrDestroyed))
                .subscribe(option => {
                /** @type {?} */
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(startWith(this.ngOptions), takeUntil(this._destroy$), filter((items) => !!items.length))
            .subscribe(options => {
            this.bindLabel = this._defaultLabel;
            handleNgOptions(options);
            handleOptionChange();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isValidWriteValue(value) {
        if (!isDefined(value) ||
            (this.multiple && value === '') ||
            Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        const validateBinding = (item) => {
            if (isObject(item) && this.bindValue) {
                this._console.warn(`Binding object(${JSON.stringify(item)}) with bindValue is not allowed.`);
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(item => validateBinding(item));
        }
        else {
            return validateBinding(value);
        }
    }
    /**
     * @param {?} ngModel
     * @return {?}
     */
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        const select = (val) => {
            /** @type {?} */
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                const isValObject = isObject(val);
                /** @type {?} */
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            (/** @type {?} */ (ngModel)).forEach(item => select(item));
        }
        else {
            select(ngModel);
        }
    }
    /**
     * @return {?}
     */
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(takeUntil(this._destroy$), tap(letter => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join('')))
            .subscribe(term => {
            /** @type {?} */
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        });
    }
    /**
     * @return {?}
     */
    _updateNgModel() {
        /** @type {?} */
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                /** @type {?} */
                let resolvedValue = null;
                if (item.children) {
                    resolvedValue = item.value[/** @type {?} */ (this.groupBy)];
                }
                else {
                    resolvedValue = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(resolvedValue);
            }
            else {
                model.push(item.value);
            }
        }
        /** @type {?} */
        const selected = this.selectedItems.map(x => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _clearSearch() {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetFilteredItems();
    }
    /**
     * @return {?}
     */
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    }
    /**
     * @return {?}
     */
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleTab($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter === false) {
            return;
        }
        else {
            this.open();
        }
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    /**
     * @param {?} nextStep
     * @return {?}
     */
    _nextItemIsTag(nextStep) {
        /** @type {?} */
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @return {?}
     */
    _handleBackspace() {
        if (this.filterValue || !this.clearable || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    /**
     * @return {?}
     */
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.openOnEnter = this.openOnEnter !== undefined ? this.openOnEnter : config.openOnEnter;
    }
}
NgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select',
                template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\r\n    <div class=\"ng-value-container\">\r\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\r\n\r\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\r\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\r\n                <ng-template #defaultLabelTemplate>\r\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\r\n                    <span class=\"ng-value-label\">{{item.label}}</span>\r\n                </ng-template>\r\n\r\n                <ng-template\r\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\r\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\r\n                </ng-template>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\r\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\r\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\r\n        </ng-template>\r\n\r\n        <div class=\"ng-input\">\r\n            <input #filterInput\r\n                   type=\"text\"\r\n                   autocomplete=\"{{dropdownId}}\"\r\n                   [attr.id]=\"labelForId\"\r\n                   [attr.tabindex]=\"tabIndex\"\r\n                   [readOnly]=\"!searchable\"\r\n                   [disabled]=\"disabled\"\r\n                   [value]=\"filterValue ? filterValue : ''\"\r\n                   (input)=\"filter(filterInput.value)\"\r\n                   (focus)=\"onInputFocus($event)\"\r\n                   (blur)=\"onInputBlur($event)\"\r\n                   (change)=\"$event.stopPropagation()\"\r\n                   role=\"combobox\"\r\n                   [attr.aria-expanded]=\"isOpen\"\r\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\r\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-spinner-loader\" *ngIf=\"loading\"></div>\r\n\r\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\r\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\r\n    </span>\r\n\r\n    <span class=\"ng-arrow-wrapper\">\r\n        <span class=\"ng-arrow\"></span>\r\n    </span>\r\n</div>\r\n\r\n<ng-dropdown-panel *ngIf=\"isOpen\"\r\n    class=\"ng-dropdown-panel\"\r\n    [virtualScroll]=\"virtualScroll\"\r\n    [bufferAmount]=\"bufferAmount\"\r\n    [appendTo]=\"appendTo\"\r\n    [position]=\"dropdownPosition\"\r\n    [headerTemplate]=\"headerTemplate\"\r\n    [footerTemplate]=\"footerTemplate\"\r\n    [items]=\"itemsList.filteredItems\"\r\n    [markedItem]=\"itemsList.markedItem\"\r\n    (update)=\"viewPortItems = $event\"\r\n    (scroll)=\"scroll.emit($event)\"\r\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\r\n    (outsideClick)=\"close()\"\r\n    [class.ng-select-multiple]=\"multiple\"\r\n    [ngClass]=\"classes\"\r\n    [id]=\"dropdownId\">\r\n\r\n    <ng-container>\r\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\r\n                *ngFor=\"let item of viewPortItems\"\r\n                [class.ng-option-disabled]=\"item.disabled\"\r\n                [class.ng-option-selected]=\"item.selected\"\r\n                [class.ng-optgroup]=\"item.children\"\r\n                [class.ng-option]=\"!item.children\"\r\n                [class.ng-option-child]=\"!!item.parent\"\r\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\r\n                [attr.id]=\"item?.htmlId\">\r\n\r\n            <ng-template #defaultOptionTemplate>\r\n                <span class=\"ng-option-label\">{{item.label}}</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\r\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n\r\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\r\n            <ng-template #defaultTagTemplate>\r\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\r\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showNoItemsFound()\">\r\n        <ng-template #defaultNotFoundTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showTypeToSearch()\">\r\n        <ng-template #defaultTypeToSearchTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\r\n        <ng-template #defaultLoadingTextTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue  }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n</ng-dropdown-panel>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NgSelectComponent),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'listbox',
                    'class': 'ng-select',
                    '[class.ng-select-single]': '!multiple',
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}"]
            }] }
];
/** @nocollapse */
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['class',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NG_SELECT_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    items: [{ type: Input }],
    bindLabel: [{ type: Input }],
    bindValue: [{ type: Input }],
    clearable: [{ type: Input }],
    markFirst: [{ type: Input }],
    placeholder: [{ type: Input }],
    notFoundText: [{ type: Input }],
    typeToSearchText: [{ type: Input }],
    addTagText: [{ type: Input }],
    loadingText: [{ type: Input }],
    clearAllText: [{ type: Input }],
    dropdownPosition: [{ type: Input }],
    appendTo: [{ type: Input }],
    loading: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    hideSelected: [{ type: Input }],
    selectOnTab: [{ type: Input }],
    openOnEnter: [{ type: Input }],
    maxSelectedItems: [{ type: Input }],
    groupBy: [{ type: Input }],
    groupValue: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    selectableGroup: [{ type: Input }],
    selectableGroupAsModel: [{ type: Input }],
    searchFn: [{ type: Input }],
    labelForId: [{ type: Input }],
    typeahead: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-multiple',] }],
    addTag: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-taggable',] }],
    searchable: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-searchable',] }],
    isOpen: [{ type: Input }, { type: HostBinding, args: ['class.ng-select-opened',] }],
    compareWith: [{ type: Input }],
    clearSearchOnAdd: [{ type: Input }],
    blurEvent: [{ type: Output, args: ['blur',] }],
    focusEvent: [{ type: Output, args: ['focus',] }],
    changeEvent: [{ type: Output, args: ['change',] }],
    openEvent: [{ type: Output, args: ['open',] }],
    closeEvent: [{ type: Output, args: ['close',] }],
    searchEvent: [{ type: Output, args: ['search',] }],
    clearEvent: [{ type: Output, args: ['clear',] }],
    addEvent: [{ type: Output, args: ['add',] }],
    removeEvent: [{ type: Output, args: ['remove',] }],
    scroll: [{ type: Output, args: ['scroll',] }],
    scrollToEnd: [{ type: Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: ContentChild, args: [NgOptionTemplateDirective, { read: TemplateRef },] }],
    optgroupTemplate: [{ type: ContentChild, args: [NgOptgroupTemplateDirective, { read: TemplateRef },] }],
    labelTemplate: [{ type: ContentChild, args: [NgLabelTemplateDirective, { read: TemplateRef },] }],
    multiLabelTemplate: [{ type: ContentChild, args: [NgMultiLabelTemplateDirective, { read: TemplateRef },] }],
    headerTemplate: [{ type: ContentChild, args: [NgHeaderTemplateDirective, { read: TemplateRef },] }],
    footerTemplate: [{ type: ContentChild, args: [NgFooterTemplateDirective, { read: TemplateRef },] }],
    notFoundTemplate: [{ type: ContentChild, args: [NgNotFoundTemplateDirective, { read: TemplateRef },] }],
    typeToSearchTemplate: [{ type: ContentChild, args: [NgTypeToSearchTemplateDirective, { read: TemplateRef },] }],
    loadingTextTemplate: [{ type: ContentChild, args: [NgLoadingTextTemplateDirective, { read: TemplateRef },] }],
    tagTemplate: [{ type: ContentChild, args: [NgTagTemplateDirective, { read: TemplateRef },] }],
    dropdownPanel: [{ type: ViewChild, args: [forwardRef(() => NgDropdownPanelComponent),] }],
    ngOptions: [{ type: ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    disabled: [{ type: HostBinding, args: ['class.ng-select-disabled',] }],
    filtered: [{ type: HostBinding, args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgOptionHighlightDirective {
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
        const indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    /**
     * @return {?}
     */
    get value() {
        return this._selected;
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (groupAsModel || !item.children) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                const childrenCount = item.parent.children.length;
                /** @type {?} */
                const selectedCount = item.parent.children.filter(x => x.selected).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (!groupAsModel) {
                    this._selected = [...this._selected, ...item.children];
                }
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    unselect(item, multiple) {
        this._selected = this._selected.filter(x => x !== item);
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter(x => x !== item));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this._selected = [];
    }
    /**
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    _setChildrenSelectedState(children, selected) {
        children.forEach(x => x.selected = selected);
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    _removeChildren(parent) {
        this._selected = this._selected.filter(x => x.parent !== parent);
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    _removeParent(parent) {
        this._selected = this._selected.filter(x => x !== parent);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
const ɵ0 = DefaultSelectionModelFactory, ɵ1 = {
    notFoundText: 'No items found',
    typeToSearchText: 'Type to search',
    addTagText: 'Add item',
    loadingText: 'Loading...',
    clearAllText: 'Clear all',
    disableVirtualScroll: false
};
class NgSelectModule {
}
NgSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 },
                    {
                        provide: NG_SELECT_DEFAULT_CONFIG,
                        useValue: ɵ1
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgSelectComponent, NG_SELECT_DEFAULT_CONFIG, SELECTION_MODEL_FACTORY, NgSelectModule, ConsoleService as ɵr, NgDropdownPanelComponent as ɵn, NgOptionHighlightDirective as ɵs, NgOptionComponent as ɵq, NgFooterTemplateDirective as ɵi, NgHeaderTemplateDirective as ɵh, NgLabelTemplateDirective as ɵf, NgLoadingTextTemplateDirective as ɵl, NgMultiLabelTemplateDirective as ɵg, NgNotFoundTemplateDirective as ɵj, NgOptgroupTemplateDirective as ɵe, NgOptionTemplateDirective as ɵd, NgTagTemplateDirective as ɵm, NgTypeToSearchTemplateDirective as ɵk, DefaultSelectionModel as ɵc, DefaultSelectionModelFactory as ɵb, VirtualScrollService as ɵo, WindowService as ɵp };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctdGVtcGxhdGVzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbnNvbGUuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3ZhbHVlLXV0aWxzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VhcmNoLWhlbHBlci50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2lkLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaXRlbXMtbGlzdC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC50eXBlcy50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3dpbmRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmlydHVhbC1zY3JvbGwuc2VydmljZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9zZWxlY3Rpb24tbW9kZWwudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1vcHRpb24tdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGdyb3VwLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWxhYmVsLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW11bHRpLWxhYmVsLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctaGVhZGVyLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1mb290ZXItdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW5vdGZvdW5kLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXR5cGV0b3NlYXJjaC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbG9hZGluZ3RleHQtdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctdGFnLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlU2VydmljZSB7XHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBpc0RlZmluZWQodmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xyXG59XHJcbiIsImNvbnN0IGRpYWNyaXRpY3MgPSB7XHJcbiAgICAnXFx1MjRCNic6ICdBJyxcclxuICAgICdcXHVGRjIxJzogJ0EnLFxyXG4gICAgJ1xcdTAwQzAnOiAnQScsXHJcbiAgICAnXFx1MDBDMSc6ICdBJyxcclxuICAgICdcXHUwMEMyJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTYnOiAnQScsXHJcbiAgICAnXFx1MUVBNCc6ICdBJyxcclxuICAgICdcXHUxRUFBJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTgnOiAnQScsXHJcbiAgICAnXFx1MDBDMyc6ICdBJyxcclxuICAgICdcXHUwMTAwJzogJ0EnLFxyXG4gICAgJ1xcdTAxMDInOiAnQScsXHJcbiAgICAnXFx1MUVCMCc6ICdBJyxcclxuICAgICdcXHUxRUFFJzogJ0EnLFxyXG4gICAgJ1xcdTFFQjQnOiAnQScsXHJcbiAgICAnXFx1MUVCMic6ICdBJyxcclxuICAgICdcXHUwMjI2JzogJ0EnLFxyXG4gICAgJ1xcdTAxRTAnOiAnQScsXHJcbiAgICAnXFx1MDBDNCc6ICdBJyxcclxuICAgICdcXHUwMURFJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTInOiAnQScsXHJcbiAgICAnXFx1MDBDNSc6ICdBJyxcclxuICAgICdcXHUwMUZBJzogJ0EnLFxyXG4gICAgJ1xcdTAxQ0QnOiAnQScsXHJcbiAgICAnXFx1MDIwMCc6ICdBJyxcclxuICAgICdcXHUwMjAyJzogJ0EnLFxyXG4gICAgJ1xcdTFFQTAnOiAnQScsXHJcbiAgICAnXFx1MUVBQyc6ICdBJyxcclxuICAgICdcXHUxRUI2JzogJ0EnLFxyXG4gICAgJ1xcdTFFMDAnOiAnQScsXHJcbiAgICAnXFx1MDEwNCc6ICdBJyxcclxuICAgICdcXHUwMjNBJzogJ0EnLFxyXG4gICAgJ1xcdTJDNkYnOiAnQScsXHJcbiAgICAnXFx1QTczMic6ICdBQScsXHJcbiAgICAnXFx1MDBDNic6ICdBRScsXHJcbiAgICAnXFx1MDFGQyc6ICdBRScsXHJcbiAgICAnXFx1MDFFMic6ICdBRScsXHJcbiAgICAnXFx1QTczNCc6ICdBTycsXHJcbiAgICAnXFx1QTczNic6ICdBVScsXHJcbiAgICAnXFx1QTczOCc6ICdBVicsXHJcbiAgICAnXFx1QTczQSc6ICdBVicsXHJcbiAgICAnXFx1QTczQyc6ICdBWScsXHJcbiAgICAnXFx1MjRCNyc6ICdCJyxcclxuICAgICdcXHVGRjIyJzogJ0InLFxyXG4gICAgJ1xcdTFFMDInOiAnQicsXHJcbiAgICAnXFx1MUUwNCc6ICdCJyxcclxuICAgICdcXHUxRTA2JzogJ0InLFxyXG4gICAgJ1xcdTAyNDMnOiAnQicsXHJcbiAgICAnXFx1MDE4Mic6ICdCJyxcclxuICAgICdcXHUwMTgxJzogJ0InLFxyXG4gICAgJ1xcdTI0QjgnOiAnQycsXHJcbiAgICAnXFx1RkYyMyc6ICdDJyxcclxuICAgICdcXHUwMTA2JzogJ0MnLFxyXG4gICAgJ1xcdTAxMDgnOiAnQycsXHJcbiAgICAnXFx1MDEwQSc6ICdDJyxcclxuICAgICdcXHUwMTBDJzogJ0MnLFxyXG4gICAgJ1xcdTAwQzcnOiAnQycsXHJcbiAgICAnXFx1MUUwOCc6ICdDJyxcclxuICAgICdcXHUwMTg3JzogJ0MnLFxyXG4gICAgJ1xcdTAyM0InOiAnQycsXHJcbiAgICAnXFx1QTczRSc6ICdDJyxcclxuICAgICdcXHUyNEI5JzogJ0QnLFxyXG4gICAgJ1xcdUZGMjQnOiAnRCcsXHJcbiAgICAnXFx1MUUwQSc6ICdEJyxcclxuICAgICdcXHUwMTBFJzogJ0QnLFxyXG4gICAgJ1xcdTFFMEMnOiAnRCcsXHJcbiAgICAnXFx1MUUxMCc6ICdEJyxcclxuICAgICdcXHUxRTEyJzogJ0QnLFxyXG4gICAgJ1xcdTFFMEUnOiAnRCcsXHJcbiAgICAnXFx1MDExMCc6ICdEJyxcclxuICAgICdcXHUwMThCJzogJ0QnLFxyXG4gICAgJ1xcdTAxOEEnOiAnRCcsXHJcbiAgICAnXFx1MDE4OSc6ICdEJyxcclxuICAgICdcXHVBNzc5JzogJ0QnLFxyXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxyXG4gICAgJ1xcdTAxQzQnOiAnRFonLFxyXG4gICAgJ1xcdTAxRjInOiAnRHonLFxyXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxyXG4gICAgJ1xcdTI0QkEnOiAnRScsXHJcbiAgICAnXFx1RkYyNSc6ICdFJyxcclxuICAgICdcXHUwMEM4JzogJ0UnLFxyXG4gICAgJ1xcdTAwQzknOiAnRScsXHJcbiAgICAnXFx1MDBDQSc6ICdFJyxcclxuICAgICdcXHUxRUMwJzogJ0UnLFxyXG4gICAgJ1xcdTFFQkUnOiAnRScsXHJcbiAgICAnXFx1MUVDNCc6ICdFJyxcclxuICAgICdcXHUxRUMyJzogJ0UnLFxyXG4gICAgJ1xcdTFFQkMnOiAnRScsXHJcbiAgICAnXFx1MDExMic6ICdFJyxcclxuICAgICdcXHUxRTE0JzogJ0UnLFxyXG4gICAgJ1xcdTFFMTYnOiAnRScsXHJcbiAgICAnXFx1MDExNCc6ICdFJyxcclxuICAgICdcXHUwMTE2JzogJ0UnLFxyXG4gICAgJ1xcdTAwQ0InOiAnRScsXHJcbiAgICAnXFx1MUVCQSc6ICdFJyxcclxuICAgICdcXHUwMTFBJzogJ0UnLFxyXG4gICAgJ1xcdTAyMDQnOiAnRScsXHJcbiAgICAnXFx1MDIwNic6ICdFJyxcclxuICAgICdcXHUxRUI4JzogJ0UnLFxyXG4gICAgJ1xcdTFFQzYnOiAnRScsXHJcbiAgICAnXFx1MDIyOCc6ICdFJyxcclxuICAgICdcXHUxRTFDJzogJ0UnLFxyXG4gICAgJ1xcdTAxMTgnOiAnRScsXHJcbiAgICAnXFx1MUUxOCc6ICdFJyxcclxuICAgICdcXHUxRTFBJzogJ0UnLFxyXG4gICAgJ1xcdTAxOTAnOiAnRScsXHJcbiAgICAnXFx1MDE4RSc6ICdFJyxcclxuICAgICdcXHUyNEJCJzogJ0YnLFxyXG4gICAgJ1xcdUZGMjYnOiAnRicsXHJcbiAgICAnXFx1MUUxRSc6ICdGJyxcclxuICAgICdcXHUwMTkxJzogJ0YnLFxyXG4gICAgJ1xcdUE3N0InOiAnRicsXHJcbiAgICAnXFx1MjRCQyc6ICdHJyxcclxuICAgICdcXHVGRjI3JzogJ0cnLFxyXG4gICAgJ1xcdTAxRjQnOiAnRycsXHJcbiAgICAnXFx1MDExQyc6ICdHJyxcclxuICAgICdcXHUxRTIwJzogJ0cnLFxyXG4gICAgJ1xcdTAxMUUnOiAnRycsXHJcbiAgICAnXFx1MDEyMCc6ICdHJyxcclxuICAgICdcXHUwMUU2JzogJ0cnLFxyXG4gICAgJ1xcdTAxMjInOiAnRycsXHJcbiAgICAnXFx1MDFFNCc6ICdHJyxcclxuICAgICdcXHUwMTkzJzogJ0cnLFxyXG4gICAgJ1xcdUE3QTAnOiAnRycsXHJcbiAgICAnXFx1QTc3RCc6ICdHJyxcclxuICAgICdcXHVBNzdFJzogJ0cnLFxyXG4gICAgJ1xcdTI0QkQnOiAnSCcsXHJcbiAgICAnXFx1RkYyOCc6ICdIJyxcclxuICAgICdcXHUwMTI0JzogJ0gnLFxyXG4gICAgJ1xcdTFFMjInOiAnSCcsXHJcbiAgICAnXFx1MUUyNic6ICdIJyxcclxuICAgICdcXHUwMjFFJzogJ0gnLFxyXG4gICAgJ1xcdTFFMjQnOiAnSCcsXHJcbiAgICAnXFx1MUUyOCc6ICdIJyxcclxuICAgICdcXHUxRTJBJzogJ0gnLFxyXG4gICAgJ1xcdTAxMjYnOiAnSCcsXHJcbiAgICAnXFx1MkM2Nyc6ICdIJyxcclxuICAgICdcXHUyQzc1JzogJ0gnLFxyXG4gICAgJ1xcdUE3OEQnOiAnSCcsXHJcbiAgICAnXFx1MjRCRSc6ICdJJyxcclxuICAgICdcXHVGRjI5JzogJ0knLFxyXG4gICAgJ1xcdTAwQ0MnOiAnSScsXHJcbiAgICAnXFx1MDBDRCc6ICdJJyxcclxuICAgICdcXHUwMENFJzogJ0knLFxyXG4gICAgJ1xcdTAxMjgnOiAnSScsXHJcbiAgICAnXFx1MDEyQSc6ICdJJyxcclxuICAgICdcXHUwMTJDJzogJ0knLFxyXG4gICAgJ1xcdTAxMzAnOiAnSScsXHJcbiAgICAnXFx1MDBDRic6ICdJJyxcclxuICAgICdcXHUxRTJFJzogJ0knLFxyXG4gICAgJ1xcdTFFQzgnOiAnSScsXHJcbiAgICAnXFx1MDFDRic6ICdJJyxcclxuICAgICdcXHUwMjA4JzogJ0knLFxyXG4gICAgJ1xcdTAyMEEnOiAnSScsXHJcbiAgICAnXFx1MUVDQSc6ICdJJyxcclxuICAgICdcXHUwMTJFJzogJ0knLFxyXG4gICAgJ1xcdTFFMkMnOiAnSScsXHJcbiAgICAnXFx1MDE5Nyc6ICdJJyxcclxuICAgICdcXHUyNEJGJzogJ0onLFxyXG4gICAgJ1xcdUZGMkEnOiAnSicsXHJcbiAgICAnXFx1MDEzNCc6ICdKJyxcclxuICAgICdcXHUwMjQ4JzogJ0onLFxyXG4gICAgJ1xcdTI0QzAnOiAnSycsXHJcbiAgICAnXFx1RkYyQic6ICdLJyxcclxuICAgICdcXHUxRTMwJzogJ0snLFxyXG4gICAgJ1xcdTAxRTgnOiAnSycsXHJcbiAgICAnXFx1MUUzMic6ICdLJyxcclxuICAgICdcXHUwMTM2JzogJ0snLFxyXG4gICAgJ1xcdTFFMzQnOiAnSycsXHJcbiAgICAnXFx1MDE5OCc6ICdLJyxcclxuICAgICdcXHUyQzY5JzogJ0snLFxyXG4gICAgJ1xcdUE3NDAnOiAnSycsXHJcbiAgICAnXFx1QTc0Mic6ICdLJyxcclxuICAgICdcXHVBNzQ0JzogJ0snLFxyXG4gICAgJ1xcdUE3QTInOiAnSycsXHJcbiAgICAnXFx1MjRDMSc6ICdMJyxcclxuICAgICdcXHVGRjJDJzogJ0wnLFxyXG4gICAgJ1xcdTAxM0YnOiAnTCcsXHJcbiAgICAnXFx1MDEzOSc6ICdMJyxcclxuICAgICdcXHUwMTNEJzogJ0wnLFxyXG4gICAgJ1xcdTFFMzYnOiAnTCcsXHJcbiAgICAnXFx1MUUzOCc6ICdMJyxcclxuICAgICdcXHUwMTNCJzogJ0wnLFxyXG4gICAgJ1xcdTFFM0MnOiAnTCcsXHJcbiAgICAnXFx1MUUzQSc6ICdMJyxcclxuICAgICdcXHUwMTQxJzogJ0wnLFxyXG4gICAgJ1xcdTAyM0QnOiAnTCcsXHJcbiAgICAnXFx1MkM2Mic6ICdMJyxcclxuICAgICdcXHUyQzYwJzogJ0wnLFxyXG4gICAgJ1xcdUE3NDgnOiAnTCcsXHJcbiAgICAnXFx1QTc0Nic6ICdMJyxcclxuICAgICdcXHVBNzgwJzogJ0wnLFxyXG4gICAgJ1xcdTAxQzcnOiAnTEonLFxyXG4gICAgJ1xcdTAxQzgnOiAnTGonLFxyXG4gICAgJ1xcdTI0QzInOiAnTScsXHJcbiAgICAnXFx1RkYyRCc6ICdNJyxcclxuICAgICdcXHUxRTNFJzogJ00nLFxyXG4gICAgJ1xcdTFFNDAnOiAnTScsXHJcbiAgICAnXFx1MUU0Mic6ICdNJyxcclxuICAgICdcXHUyQzZFJzogJ00nLFxyXG4gICAgJ1xcdTAxOUMnOiAnTScsXHJcbiAgICAnXFx1MjRDMyc6ICdOJyxcclxuICAgICdcXHVGRjJFJzogJ04nLFxyXG4gICAgJ1xcdTAxRjgnOiAnTicsXHJcbiAgICAnXFx1MDE0Myc6ICdOJyxcclxuICAgICdcXHUwMEQxJzogJ04nLFxyXG4gICAgJ1xcdTFFNDQnOiAnTicsXHJcbiAgICAnXFx1MDE0Nyc6ICdOJyxcclxuICAgICdcXHUxRTQ2JzogJ04nLFxyXG4gICAgJ1xcdTAxNDUnOiAnTicsXHJcbiAgICAnXFx1MUU0QSc6ICdOJyxcclxuICAgICdcXHUxRTQ4JzogJ04nLFxyXG4gICAgJ1xcdTAyMjAnOiAnTicsXHJcbiAgICAnXFx1MDE5RCc6ICdOJyxcclxuICAgICdcXHVBNzkwJzogJ04nLFxyXG4gICAgJ1xcdUE3QTQnOiAnTicsXHJcbiAgICAnXFx1MDFDQSc6ICdOSicsXHJcbiAgICAnXFx1MDFDQic6ICdOaicsXHJcbiAgICAnXFx1MjRDNCc6ICdPJyxcclxuICAgICdcXHVGRjJGJzogJ08nLFxyXG4gICAgJ1xcdTAwRDInOiAnTycsXHJcbiAgICAnXFx1MDBEMyc6ICdPJyxcclxuICAgICdcXHUwMEQ0JzogJ08nLFxyXG4gICAgJ1xcdTFFRDInOiAnTycsXHJcbiAgICAnXFx1MUVEMCc6ICdPJyxcclxuICAgICdcXHUxRUQ2JzogJ08nLFxyXG4gICAgJ1xcdTFFRDQnOiAnTycsXHJcbiAgICAnXFx1MDBENSc6ICdPJyxcclxuICAgICdcXHUxRTRDJzogJ08nLFxyXG4gICAgJ1xcdTAyMkMnOiAnTycsXHJcbiAgICAnXFx1MUU0RSc6ICdPJyxcclxuICAgICdcXHUwMTRDJzogJ08nLFxyXG4gICAgJ1xcdTFFNTAnOiAnTycsXHJcbiAgICAnXFx1MUU1Mic6ICdPJyxcclxuICAgICdcXHUwMTRFJzogJ08nLFxyXG4gICAgJ1xcdTAyMkUnOiAnTycsXHJcbiAgICAnXFx1MDIzMCc6ICdPJyxcclxuICAgICdcXHUwMEQ2JzogJ08nLFxyXG4gICAgJ1xcdTAyMkEnOiAnTycsXHJcbiAgICAnXFx1MUVDRSc6ICdPJyxcclxuICAgICdcXHUwMTUwJzogJ08nLFxyXG4gICAgJ1xcdTAxRDEnOiAnTycsXHJcbiAgICAnXFx1MDIwQyc6ICdPJyxcclxuICAgICdcXHUwMjBFJzogJ08nLFxyXG4gICAgJ1xcdTAxQTAnOiAnTycsXHJcbiAgICAnXFx1MUVEQyc6ICdPJyxcclxuICAgICdcXHUxRURBJzogJ08nLFxyXG4gICAgJ1xcdTFFRTAnOiAnTycsXHJcbiAgICAnXFx1MUVERSc6ICdPJyxcclxuICAgICdcXHUxRUUyJzogJ08nLFxyXG4gICAgJ1xcdTFFQ0MnOiAnTycsXHJcbiAgICAnXFx1MUVEOCc6ICdPJyxcclxuICAgICdcXHUwMUVBJzogJ08nLFxyXG4gICAgJ1xcdTAxRUMnOiAnTycsXHJcbiAgICAnXFx1MDBEOCc6ICdPJyxcclxuICAgICdcXHUwMUZFJzogJ08nLFxyXG4gICAgJ1xcdTAxODYnOiAnTycsXHJcbiAgICAnXFx1MDE5Ric6ICdPJyxcclxuICAgICdcXHVBNzRBJzogJ08nLFxyXG4gICAgJ1xcdUE3NEMnOiAnTycsXHJcbiAgICAnXFx1MDFBMic6ICdPSScsXHJcbiAgICAnXFx1QTc0RSc6ICdPTycsXHJcbiAgICAnXFx1MDIyMic6ICdPVScsXHJcbiAgICAnXFx1MjRDNSc6ICdQJyxcclxuICAgICdcXHVGRjMwJzogJ1AnLFxyXG4gICAgJ1xcdTFFNTQnOiAnUCcsXHJcbiAgICAnXFx1MUU1Nic6ICdQJyxcclxuICAgICdcXHUwMUE0JzogJ1AnLFxyXG4gICAgJ1xcdTJDNjMnOiAnUCcsXHJcbiAgICAnXFx1QTc1MCc6ICdQJyxcclxuICAgICdcXHVBNzUyJzogJ1AnLFxyXG4gICAgJ1xcdUE3NTQnOiAnUCcsXHJcbiAgICAnXFx1MjRDNic6ICdRJyxcclxuICAgICdcXHVGRjMxJzogJ1EnLFxyXG4gICAgJ1xcdUE3NTYnOiAnUScsXHJcbiAgICAnXFx1QTc1OCc6ICdRJyxcclxuICAgICdcXHUwMjRBJzogJ1EnLFxyXG4gICAgJ1xcdTI0QzcnOiAnUicsXHJcbiAgICAnXFx1RkYzMic6ICdSJyxcclxuICAgICdcXHUwMTU0JzogJ1InLFxyXG4gICAgJ1xcdTFFNTgnOiAnUicsXHJcbiAgICAnXFx1MDE1OCc6ICdSJyxcclxuICAgICdcXHUwMjEwJzogJ1InLFxyXG4gICAgJ1xcdTAyMTInOiAnUicsXHJcbiAgICAnXFx1MUU1QSc6ICdSJyxcclxuICAgICdcXHUxRTVDJzogJ1InLFxyXG4gICAgJ1xcdTAxNTYnOiAnUicsXHJcbiAgICAnXFx1MUU1RSc6ICdSJyxcclxuICAgICdcXHUwMjRDJzogJ1InLFxyXG4gICAgJ1xcdTJDNjQnOiAnUicsXHJcbiAgICAnXFx1QTc1QSc6ICdSJyxcclxuICAgICdcXHVBN0E2JzogJ1InLFxyXG4gICAgJ1xcdUE3ODInOiAnUicsXHJcbiAgICAnXFx1MjRDOCc6ICdTJyxcclxuICAgICdcXHVGRjMzJzogJ1MnLFxyXG4gICAgJ1xcdTFFOUUnOiAnUycsXHJcbiAgICAnXFx1MDE1QSc6ICdTJyxcclxuICAgICdcXHUxRTY0JzogJ1MnLFxyXG4gICAgJ1xcdTAxNUMnOiAnUycsXHJcbiAgICAnXFx1MUU2MCc6ICdTJyxcclxuICAgICdcXHUwMTYwJzogJ1MnLFxyXG4gICAgJ1xcdTFFNjYnOiAnUycsXHJcbiAgICAnXFx1MUU2Mic6ICdTJyxcclxuICAgICdcXHUxRTY4JzogJ1MnLFxyXG4gICAgJ1xcdTAyMTgnOiAnUycsXHJcbiAgICAnXFx1MDE1RSc6ICdTJyxcclxuICAgICdcXHUyQzdFJzogJ1MnLFxyXG4gICAgJ1xcdUE3QTgnOiAnUycsXHJcbiAgICAnXFx1QTc4NCc6ICdTJyxcclxuICAgICdcXHUyNEM5JzogJ1QnLFxyXG4gICAgJ1xcdUZGMzQnOiAnVCcsXHJcbiAgICAnXFx1MUU2QSc6ICdUJyxcclxuICAgICdcXHUwMTY0JzogJ1QnLFxyXG4gICAgJ1xcdTFFNkMnOiAnVCcsXHJcbiAgICAnXFx1MDIxQSc6ICdUJyxcclxuICAgICdcXHUwMTYyJzogJ1QnLFxyXG4gICAgJ1xcdTFFNzAnOiAnVCcsXHJcbiAgICAnXFx1MUU2RSc6ICdUJyxcclxuICAgICdcXHUwMTY2JzogJ1QnLFxyXG4gICAgJ1xcdTAxQUMnOiAnVCcsXHJcbiAgICAnXFx1MDFBRSc6ICdUJyxcclxuICAgICdcXHUwMjNFJzogJ1QnLFxyXG4gICAgJ1xcdUE3ODYnOiAnVCcsXHJcbiAgICAnXFx1QTcyOCc6ICdUWicsXHJcbiAgICAnXFx1MjRDQSc6ICdVJyxcclxuICAgICdcXHVGRjM1JzogJ1UnLFxyXG4gICAgJ1xcdTAwRDknOiAnVScsXHJcbiAgICAnXFx1MDBEQSc6ICdVJyxcclxuICAgICdcXHUwMERCJzogJ1UnLFxyXG4gICAgJ1xcdTAxNjgnOiAnVScsXHJcbiAgICAnXFx1MUU3OCc6ICdVJyxcclxuICAgICdcXHUwMTZBJzogJ1UnLFxyXG4gICAgJ1xcdTFFN0EnOiAnVScsXHJcbiAgICAnXFx1MDE2Qyc6ICdVJyxcclxuICAgICdcXHUwMERDJzogJ1UnLFxyXG4gICAgJ1xcdTAxREInOiAnVScsXHJcbiAgICAnXFx1MDFENyc6ICdVJyxcclxuICAgICdcXHUwMUQ1JzogJ1UnLFxyXG4gICAgJ1xcdTAxRDknOiAnVScsXHJcbiAgICAnXFx1MUVFNic6ICdVJyxcclxuICAgICdcXHUwMTZFJzogJ1UnLFxyXG4gICAgJ1xcdTAxNzAnOiAnVScsXHJcbiAgICAnXFx1MDFEMyc6ICdVJyxcclxuICAgICdcXHUwMjE0JzogJ1UnLFxyXG4gICAgJ1xcdTAyMTYnOiAnVScsXHJcbiAgICAnXFx1MDFBRic6ICdVJyxcclxuICAgICdcXHUxRUVBJzogJ1UnLFxyXG4gICAgJ1xcdTFFRTgnOiAnVScsXHJcbiAgICAnXFx1MUVFRSc6ICdVJyxcclxuICAgICdcXHUxRUVDJzogJ1UnLFxyXG4gICAgJ1xcdTFFRjAnOiAnVScsXHJcbiAgICAnXFx1MUVFNCc6ICdVJyxcclxuICAgICdcXHUxRTcyJzogJ1UnLFxyXG4gICAgJ1xcdTAxNzInOiAnVScsXHJcbiAgICAnXFx1MUU3Nic6ICdVJyxcclxuICAgICdcXHUxRTc0JzogJ1UnLFxyXG4gICAgJ1xcdTAyNDQnOiAnVScsXHJcbiAgICAnXFx1MjRDQic6ICdWJyxcclxuICAgICdcXHVGRjM2JzogJ1YnLFxyXG4gICAgJ1xcdTFFN0MnOiAnVicsXHJcbiAgICAnXFx1MUU3RSc6ICdWJyxcclxuICAgICdcXHUwMUIyJzogJ1YnLFxyXG4gICAgJ1xcdUE3NUUnOiAnVicsXHJcbiAgICAnXFx1MDI0NSc6ICdWJyxcclxuICAgICdcXHVBNzYwJzogJ1ZZJyxcclxuICAgICdcXHUyNENDJzogJ1cnLFxyXG4gICAgJ1xcdUZGMzcnOiAnVycsXHJcbiAgICAnXFx1MUU4MCc6ICdXJyxcclxuICAgICdcXHUxRTgyJzogJ1cnLFxyXG4gICAgJ1xcdTAxNzQnOiAnVycsXHJcbiAgICAnXFx1MUU4Nic6ICdXJyxcclxuICAgICdcXHUxRTg0JzogJ1cnLFxyXG4gICAgJ1xcdTFFODgnOiAnVycsXHJcbiAgICAnXFx1MkM3Mic6ICdXJyxcclxuICAgICdcXHUyNENEJzogJ1gnLFxyXG4gICAgJ1xcdUZGMzgnOiAnWCcsXHJcbiAgICAnXFx1MUU4QSc6ICdYJyxcclxuICAgICdcXHUxRThDJzogJ1gnLFxyXG4gICAgJ1xcdTI0Q0UnOiAnWScsXHJcbiAgICAnXFx1RkYzOSc6ICdZJyxcclxuICAgICdcXHUxRUYyJzogJ1knLFxyXG4gICAgJ1xcdTAwREQnOiAnWScsXHJcbiAgICAnXFx1MDE3Nic6ICdZJyxcclxuICAgICdcXHUxRUY4JzogJ1knLFxyXG4gICAgJ1xcdTAyMzInOiAnWScsXHJcbiAgICAnXFx1MUU4RSc6ICdZJyxcclxuICAgICdcXHUwMTc4JzogJ1knLFxyXG4gICAgJ1xcdTFFRjYnOiAnWScsXHJcbiAgICAnXFx1MUVGNCc6ICdZJyxcclxuICAgICdcXHUwMUIzJzogJ1knLFxyXG4gICAgJ1xcdTAyNEUnOiAnWScsXHJcbiAgICAnXFx1MUVGRSc6ICdZJyxcclxuICAgICdcXHUyNENGJzogJ1onLFxyXG4gICAgJ1xcdUZGM0EnOiAnWicsXHJcbiAgICAnXFx1MDE3OSc6ICdaJyxcclxuICAgICdcXHUxRTkwJzogJ1onLFxyXG4gICAgJ1xcdTAxN0InOiAnWicsXHJcbiAgICAnXFx1MDE3RCc6ICdaJyxcclxuICAgICdcXHUxRTkyJzogJ1onLFxyXG4gICAgJ1xcdTFFOTQnOiAnWicsXHJcbiAgICAnXFx1MDFCNSc6ICdaJyxcclxuICAgICdcXHUwMjI0JzogJ1onLFxyXG4gICAgJ1xcdTJDN0YnOiAnWicsXHJcbiAgICAnXFx1MkM2Qic6ICdaJyxcclxuICAgICdcXHVBNzYyJzogJ1onLFxyXG4gICAgJ1xcdTI0RDAnOiAnYScsXHJcbiAgICAnXFx1RkY0MSc6ICdhJyxcclxuICAgICdcXHUxRTlBJzogJ2EnLFxyXG4gICAgJ1xcdTAwRTAnOiAnYScsXHJcbiAgICAnXFx1MDBFMSc6ICdhJyxcclxuICAgICdcXHUwMEUyJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTcnOiAnYScsXHJcbiAgICAnXFx1MUVBNSc6ICdhJyxcclxuICAgICdcXHUxRUFCJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTknOiAnYScsXHJcbiAgICAnXFx1MDBFMyc6ICdhJyxcclxuICAgICdcXHUwMTAxJzogJ2EnLFxyXG4gICAgJ1xcdTAxMDMnOiAnYScsXHJcbiAgICAnXFx1MUVCMSc6ICdhJyxcclxuICAgICdcXHUxRUFGJzogJ2EnLFxyXG4gICAgJ1xcdTFFQjUnOiAnYScsXHJcbiAgICAnXFx1MUVCMyc6ICdhJyxcclxuICAgICdcXHUwMjI3JzogJ2EnLFxyXG4gICAgJ1xcdTAxRTEnOiAnYScsXHJcbiAgICAnXFx1MDBFNCc6ICdhJyxcclxuICAgICdcXHUwMURGJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTMnOiAnYScsXHJcbiAgICAnXFx1MDBFNSc6ICdhJyxcclxuICAgICdcXHUwMUZCJzogJ2EnLFxyXG4gICAgJ1xcdTAxQ0UnOiAnYScsXHJcbiAgICAnXFx1MDIwMSc6ICdhJyxcclxuICAgICdcXHUwMjAzJzogJ2EnLFxyXG4gICAgJ1xcdTFFQTEnOiAnYScsXHJcbiAgICAnXFx1MUVBRCc6ICdhJyxcclxuICAgICdcXHUxRUI3JzogJ2EnLFxyXG4gICAgJ1xcdTFFMDEnOiAnYScsXHJcbiAgICAnXFx1MDEwNSc6ICdhJyxcclxuICAgICdcXHUyQzY1JzogJ2EnLFxyXG4gICAgJ1xcdTAyNTAnOiAnYScsXHJcbiAgICAnXFx1QTczMyc6ICdhYScsXHJcbiAgICAnXFx1MDBFNic6ICdhZScsXHJcbiAgICAnXFx1MDFGRCc6ICdhZScsXHJcbiAgICAnXFx1MDFFMyc6ICdhZScsXHJcbiAgICAnXFx1QTczNSc6ICdhbycsXHJcbiAgICAnXFx1QTczNyc6ICdhdScsXHJcbiAgICAnXFx1QTczOSc6ICdhdicsXHJcbiAgICAnXFx1QTczQic6ICdhdicsXHJcbiAgICAnXFx1QTczRCc6ICdheScsXHJcbiAgICAnXFx1MjREMSc6ICdiJyxcclxuICAgICdcXHVGRjQyJzogJ2InLFxyXG4gICAgJ1xcdTFFMDMnOiAnYicsXHJcbiAgICAnXFx1MUUwNSc6ICdiJyxcclxuICAgICdcXHUxRTA3JzogJ2InLFxyXG4gICAgJ1xcdTAxODAnOiAnYicsXHJcbiAgICAnXFx1MDE4Myc6ICdiJyxcclxuICAgICdcXHUwMjUzJzogJ2InLFxyXG4gICAgJ1xcdTI0RDInOiAnYycsXHJcbiAgICAnXFx1RkY0Myc6ICdjJyxcclxuICAgICdcXHUwMTA3JzogJ2MnLFxyXG4gICAgJ1xcdTAxMDknOiAnYycsXHJcbiAgICAnXFx1MDEwQic6ICdjJyxcclxuICAgICdcXHUwMTBEJzogJ2MnLFxyXG4gICAgJ1xcdTAwRTcnOiAnYycsXHJcbiAgICAnXFx1MUUwOSc6ICdjJyxcclxuICAgICdcXHUwMTg4JzogJ2MnLFxyXG4gICAgJ1xcdTAyM0MnOiAnYycsXHJcbiAgICAnXFx1QTczRic6ICdjJyxcclxuICAgICdcXHUyMTg0JzogJ2MnLFxyXG4gICAgJ1xcdTI0RDMnOiAnZCcsXHJcbiAgICAnXFx1RkY0NCc6ICdkJyxcclxuICAgICdcXHUxRTBCJzogJ2QnLFxyXG4gICAgJ1xcdTAxMEYnOiAnZCcsXHJcbiAgICAnXFx1MUUwRCc6ICdkJyxcclxuICAgICdcXHUxRTExJzogJ2QnLFxyXG4gICAgJ1xcdTFFMTMnOiAnZCcsXHJcbiAgICAnXFx1MUUwRic6ICdkJyxcclxuICAgICdcXHUwMTExJzogJ2QnLFxyXG4gICAgJ1xcdTAxOEMnOiAnZCcsXHJcbiAgICAnXFx1MDI1Nic6ICdkJyxcclxuICAgICdcXHUwMjU3JzogJ2QnLFxyXG4gICAgJ1xcdUE3N0EnOiAnZCcsXHJcbiAgICAnXFx1MDFGMyc6ICdkeicsXHJcbiAgICAnXFx1MDFDNic6ICdkeicsXHJcbiAgICAnXFx1MjRENCc6ICdlJyxcclxuICAgICdcXHVGRjQ1JzogJ2UnLFxyXG4gICAgJ1xcdTAwRTgnOiAnZScsXHJcbiAgICAnXFx1MDBFOSc6ICdlJyxcclxuICAgICdcXHUwMEVBJzogJ2UnLFxyXG4gICAgJ1xcdTFFQzEnOiAnZScsXHJcbiAgICAnXFx1MUVCRic6ICdlJyxcclxuICAgICdcXHUxRUM1JzogJ2UnLFxyXG4gICAgJ1xcdTFFQzMnOiAnZScsXHJcbiAgICAnXFx1MUVCRCc6ICdlJyxcclxuICAgICdcXHUwMTEzJzogJ2UnLFxyXG4gICAgJ1xcdTFFMTUnOiAnZScsXHJcbiAgICAnXFx1MUUxNyc6ICdlJyxcclxuICAgICdcXHUwMTE1JzogJ2UnLFxyXG4gICAgJ1xcdTAxMTcnOiAnZScsXHJcbiAgICAnXFx1MDBFQic6ICdlJyxcclxuICAgICdcXHUxRUJCJzogJ2UnLFxyXG4gICAgJ1xcdTAxMUInOiAnZScsXHJcbiAgICAnXFx1MDIwNSc6ICdlJyxcclxuICAgICdcXHUwMjA3JzogJ2UnLFxyXG4gICAgJ1xcdTFFQjknOiAnZScsXHJcbiAgICAnXFx1MUVDNyc6ICdlJyxcclxuICAgICdcXHUwMjI5JzogJ2UnLFxyXG4gICAgJ1xcdTFFMUQnOiAnZScsXHJcbiAgICAnXFx1MDExOSc6ICdlJyxcclxuICAgICdcXHUxRTE5JzogJ2UnLFxyXG4gICAgJ1xcdTFFMUInOiAnZScsXHJcbiAgICAnXFx1MDI0Nyc6ICdlJyxcclxuICAgICdcXHUwMjVCJzogJ2UnLFxyXG4gICAgJ1xcdTAxREQnOiAnZScsXHJcbiAgICAnXFx1MjRENSc6ICdmJyxcclxuICAgICdcXHVGRjQ2JzogJ2YnLFxyXG4gICAgJ1xcdTFFMUYnOiAnZicsXHJcbiAgICAnXFx1MDE5Mic6ICdmJyxcclxuICAgICdcXHVBNzdDJzogJ2YnLFxyXG4gICAgJ1xcdTI0RDYnOiAnZycsXHJcbiAgICAnXFx1RkY0Nyc6ICdnJyxcclxuICAgICdcXHUwMUY1JzogJ2cnLFxyXG4gICAgJ1xcdTAxMUQnOiAnZycsXHJcbiAgICAnXFx1MUUyMSc6ICdnJyxcclxuICAgICdcXHUwMTFGJzogJ2cnLFxyXG4gICAgJ1xcdTAxMjEnOiAnZycsXHJcbiAgICAnXFx1MDFFNyc6ICdnJyxcclxuICAgICdcXHUwMTIzJzogJ2cnLFxyXG4gICAgJ1xcdTAxRTUnOiAnZycsXHJcbiAgICAnXFx1MDI2MCc6ICdnJyxcclxuICAgICdcXHVBN0ExJzogJ2cnLFxyXG4gICAgJ1xcdTFENzknOiAnZycsXHJcbiAgICAnXFx1QTc3Ric6ICdnJyxcclxuICAgICdcXHUyNEQ3JzogJ2gnLFxyXG4gICAgJ1xcdUZGNDgnOiAnaCcsXHJcbiAgICAnXFx1MDEyNSc6ICdoJyxcclxuICAgICdcXHUxRTIzJzogJ2gnLFxyXG4gICAgJ1xcdTFFMjcnOiAnaCcsXHJcbiAgICAnXFx1MDIxRic6ICdoJyxcclxuICAgICdcXHUxRTI1JzogJ2gnLFxyXG4gICAgJ1xcdTFFMjknOiAnaCcsXHJcbiAgICAnXFx1MUUyQic6ICdoJyxcclxuICAgICdcXHUxRTk2JzogJ2gnLFxyXG4gICAgJ1xcdTAxMjcnOiAnaCcsXHJcbiAgICAnXFx1MkM2OCc6ICdoJyxcclxuICAgICdcXHUyQzc2JzogJ2gnLFxyXG4gICAgJ1xcdTAyNjUnOiAnaCcsXHJcbiAgICAnXFx1MDE5NSc6ICdodicsXHJcbiAgICAnXFx1MjREOCc6ICdpJyxcclxuICAgICdcXHVGRjQ5JzogJ2knLFxyXG4gICAgJ1xcdTAwRUMnOiAnaScsXHJcbiAgICAnXFx1MDBFRCc6ICdpJyxcclxuICAgICdcXHUwMEVFJzogJ2knLFxyXG4gICAgJ1xcdTAxMjknOiAnaScsXHJcbiAgICAnXFx1MDEyQic6ICdpJyxcclxuICAgICdcXHUwMTJEJzogJ2knLFxyXG4gICAgJ1xcdTAwRUYnOiAnaScsXHJcbiAgICAnXFx1MUUyRic6ICdpJyxcclxuICAgICdcXHUxRUM5JzogJ2knLFxyXG4gICAgJ1xcdTAxRDAnOiAnaScsXHJcbiAgICAnXFx1MDIwOSc6ICdpJyxcclxuICAgICdcXHUwMjBCJzogJ2knLFxyXG4gICAgJ1xcdTFFQ0InOiAnaScsXHJcbiAgICAnXFx1MDEyRic6ICdpJyxcclxuICAgICdcXHUxRTJEJzogJ2knLFxyXG4gICAgJ1xcdTAyNjgnOiAnaScsXHJcbiAgICAnXFx1MDEzMSc6ICdpJyxcclxuICAgICdcXHUyNEQ5JzogJ2onLFxyXG4gICAgJ1xcdUZGNEEnOiAnaicsXHJcbiAgICAnXFx1MDEzNSc6ICdqJyxcclxuICAgICdcXHUwMUYwJzogJ2onLFxyXG4gICAgJ1xcdTAyNDknOiAnaicsXHJcbiAgICAnXFx1MjREQSc6ICdrJyxcclxuICAgICdcXHVGRjRCJzogJ2snLFxyXG4gICAgJ1xcdTFFMzEnOiAnaycsXHJcbiAgICAnXFx1MDFFOSc6ICdrJyxcclxuICAgICdcXHUxRTMzJzogJ2snLFxyXG4gICAgJ1xcdTAxMzcnOiAnaycsXHJcbiAgICAnXFx1MUUzNSc6ICdrJyxcclxuICAgICdcXHUwMTk5JzogJ2snLFxyXG4gICAgJ1xcdTJDNkEnOiAnaycsXHJcbiAgICAnXFx1QTc0MSc6ICdrJyxcclxuICAgICdcXHVBNzQzJzogJ2snLFxyXG4gICAgJ1xcdUE3NDUnOiAnaycsXHJcbiAgICAnXFx1QTdBMyc6ICdrJyxcclxuICAgICdcXHUyNERCJzogJ2wnLFxyXG4gICAgJ1xcdUZGNEMnOiAnbCcsXHJcbiAgICAnXFx1MDE0MCc6ICdsJyxcclxuICAgICdcXHUwMTNBJzogJ2wnLFxyXG4gICAgJ1xcdTAxM0UnOiAnbCcsXHJcbiAgICAnXFx1MUUzNyc6ICdsJyxcclxuICAgICdcXHUxRTM5JzogJ2wnLFxyXG4gICAgJ1xcdTAxM0MnOiAnbCcsXHJcbiAgICAnXFx1MUUzRCc6ICdsJyxcclxuICAgICdcXHUxRTNCJzogJ2wnLFxyXG4gICAgJ1xcdTAxN0YnOiAnbCcsXHJcbiAgICAnXFx1MDE0Mic6ICdsJyxcclxuICAgICdcXHUwMTlBJzogJ2wnLFxyXG4gICAgJ1xcdTAyNkInOiAnbCcsXHJcbiAgICAnXFx1MkM2MSc6ICdsJyxcclxuICAgICdcXHVBNzQ5JzogJ2wnLFxyXG4gICAgJ1xcdUE3ODEnOiAnbCcsXHJcbiAgICAnXFx1QTc0Nyc6ICdsJyxcclxuICAgICdcXHUwMUM5JzogJ2xqJyxcclxuICAgICdcXHUyNERDJzogJ20nLFxyXG4gICAgJ1xcdUZGNEQnOiAnbScsXHJcbiAgICAnXFx1MUUzRic6ICdtJyxcclxuICAgICdcXHUxRTQxJzogJ20nLFxyXG4gICAgJ1xcdTFFNDMnOiAnbScsXHJcbiAgICAnXFx1MDI3MSc6ICdtJyxcclxuICAgICdcXHUwMjZGJzogJ20nLFxyXG4gICAgJ1xcdTI0REQnOiAnbicsXHJcbiAgICAnXFx1RkY0RSc6ICduJyxcclxuICAgICdcXHUwMUY5JzogJ24nLFxyXG4gICAgJ1xcdTAxNDQnOiAnbicsXHJcbiAgICAnXFx1MDBGMSc6ICduJyxcclxuICAgICdcXHUxRTQ1JzogJ24nLFxyXG4gICAgJ1xcdTAxNDgnOiAnbicsXHJcbiAgICAnXFx1MUU0Nyc6ICduJyxcclxuICAgICdcXHUwMTQ2JzogJ24nLFxyXG4gICAgJ1xcdTFFNEInOiAnbicsXHJcbiAgICAnXFx1MUU0OSc6ICduJyxcclxuICAgICdcXHUwMTlFJzogJ24nLFxyXG4gICAgJ1xcdTAyNzInOiAnbicsXHJcbiAgICAnXFx1MDE0OSc6ICduJyxcclxuICAgICdcXHVBNzkxJzogJ24nLFxyXG4gICAgJ1xcdUE3QTUnOiAnbicsXHJcbiAgICAnXFx1MDFDQyc6ICduaicsXHJcbiAgICAnXFx1MjRERSc6ICdvJyxcclxuICAgICdcXHVGRjRGJzogJ28nLFxyXG4gICAgJ1xcdTAwRjInOiAnbycsXHJcbiAgICAnXFx1MDBGMyc6ICdvJyxcclxuICAgICdcXHUwMEY0JzogJ28nLFxyXG4gICAgJ1xcdTFFRDMnOiAnbycsXHJcbiAgICAnXFx1MUVEMSc6ICdvJyxcclxuICAgICdcXHUxRUQ3JzogJ28nLFxyXG4gICAgJ1xcdTFFRDUnOiAnbycsXHJcbiAgICAnXFx1MDBGNSc6ICdvJyxcclxuICAgICdcXHUxRTREJzogJ28nLFxyXG4gICAgJ1xcdTAyMkQnOiAnbycsXHJcbiAgICAnXFx1MUU0Ric6ICdvJyxcclxuICAgICdcXHUwMTREJzogJ28nLFxyXG4gICAgJ1xcdTFFNTEnOiAnbycsXHJcbiAgICAnXFx1MUU1Myc6ICdvJyxcclxuICAgICdcXHUwMTRGJzogJ28nLFxyXG4gICAgJ1xcdTAyMkYnOiAnbycsXHJcbiAgICAnXFx1MDIzMSc6ICdvJyxcclxuICAgICdcXHUwMEY2JzogJ28nLFxyXG4gICAgJ1xcdTAyMkInOiAnbycsXHJcbiAgICAnXFx1MUVDRic6ICdvJyxcclxuICAgICdcXHUwMTUxJzogJ28nLFxyXG4gICAgJ1xcdTAxRDInOiAnbycsXHJcbiAgICAnXFx1MDIwRCc6ICdvJyxcclxuICAgICdcXHUwMjBGJzogJ28nLFxyXG4gICAgJ1xcdTAxQTEnOiAnbycsXHJcbiAgICAnXFx1MUVERCc6ICdvJyxcclxuICAgICdcXHUxRURCJzogJ28nLFxyXG4gICAgJ1xcdTFFRTEnOiAnbycsXHJcbiAgICAnXFx1MUVERic6ICdvJyxcclxuICAgICdcXHUxRUUzJzogJ28nLFxyXG4gICAgJ1xcdTFFQ0QnOiAnbycsXHJcbiAgICAnXFx1MUVEOSc6ICdvJyxcclxuICAgICdcXHUwMUVCJzogJ28nLFxyXG4gICAgJ1xcdTAxRUQnOiAnbycsXHJcbiAgICAnXFx1MDBGOCc6ICdvJyxcclxuICAgICdcXHUwMUZGJzogJ28nLFxyXG4gICAgJ1xcdTAyNTQnOiAnbycsXHJcbiAgICAnXFx1QTc0Qic6ICdvJyxcclxuICAgICdcXHVBNzREJzogJ28nLFxyXG4gICAgJ1xcdTAyNzUnOiAnbycsXHJcbiAgICAnXFx1MDFBMyc6ICdvaScsXHJcbiAgICAnXFx1MDIyMyc6ICdvdScsXHJcbiAgICAnXFx1QTc0Ric6ICdvbycsXHJcbiAgICAnXFx1MjRERic6ICdwJyxcclxuICAgICdcXHVGRjUwJzogJ3AnLFxyXG4gICAgJ1xcdTFFNTUnOiAncCcsXHJcbiAgICAnXFx1MUU1Nyc6ICdwJyxcclxuICAgICdcXHUwMUE1JzogJ3AnLFxyXG4gICAgJ1xcdTFEN0QnOiAncCcsXHJcbiAgICAnXFx1QTc1MSc6ICdwJyxcclxuICAgICdcXHVBNzUzJzogJ3AnLFxyXG4gICAgJ1xcdUE3NTUnOiAncCcsXHJcbiAgICAnXFx1MjRFMCc6ICdxJyxcclxuICAgICdcXHVGRjUxJzogJ3EnLFxyXG4gICAgJ1xcdTAyNEInOiAncScsXHJcbiAgICAnXFx1QTc1Nyc6ICdxJyxcclxuICAgICdcXHVBNzU5JzogJ3EnLFxyXG4gICAgJ1xcdTI0RTEnOiAncicsXHJcbiAgICAnXFx1RkY1Mic6ICdyJyxcclxuICAgICdcXHUwMTU1JzogJ3InLFxyXG4gICAgJ1xcdTFFNTknOiAncicsXHJcbiAgICAnXFx1MDE1OSc6ICdyJyxcclxuICAgICdcXHUwMjExJzogJ3InLFxyXG4gICAgJ1xcdTAyMTMnOiAncicsXHJcbiAgICAnXFx1MUU1Qic6ICdyJyxcclxuICAgICdcXHUxRTVEJzogJ3InLFxyXG4gICAgJ1xcdTAxNTcnOiAncicsXHJcbiAgICAnXFx1MUU1Ric6ICdyJyxcclxuICAgICdcXHUwMjREJzogJ3InLFxyXG4gICAgJ1xcdTAyN0QnOiAncicsXHJcbiAgICAnXFx1QTc1Qic6ICdyJyxcclxuICAgICdcXHVBN0E3JzogJ3InLFxyXG4gICAgJ1xcdUE3ODMnOiAncicsXHJcbiAgICAnXFx1MjRFMic6ICdzJyxcclxuICAgICdcXHVGRjUzJzogJ3MnLFxyXG4gICAgJ1xcdTAwREYnOiAncycsXHJcbiAgICAnXFx1MDE1Qic6ICdzJyxcclxuICAgICdcXHUxRTY1JzogJ3MnLFxyXG4gICAgJ1xcdTAxNUQnOiAncycsXHJcbiAgICAnXFx1MUU2MSc6ICdzJyxcclxuICAgICdcXHUwMTYxJzogJ3MnLFxyXG4gICAgJ1xcdTFFNjcnOiAncycsXHJcbiAgICAnXFx1MUU2Myc6ICdzJyxcclxuICAgICdcXHUxRTY5JzogJ3MnLFxyXG4gICAgJ1xcdTAyMTknOiAncycsXHJcbiAgICAnXFx1MDE1Ric6ICdzJyxcclxuICAgICdcXHUwMjNGJzogJ3MnLFxyXG4gICAgJ1xcdUE3QTknOiAncycsXHJcbiAgICAnXFx1QTc4NSc6ICdzJyxcclxuICAgICdcXHUxRTlCJzogJ3MnLFxyXG4gICAgJ1xcdTI0RTMnOiAndCcsXHJcbiAgICAnXFx1RkY1NCc6ICd0JyxcclxuICAgICdcXHUxRTZCJzogJ3QnLFxyXG4gICAgJ1xcdTFFOTcnOiAndCcsXHJcbiAgICAnXFx1MDE2NSc6ICd0JyxcclxuICAgICdcXHUxRTZEJzogJ3QnLFxyXG4gICAgJ1xcdTAyMUInOiAndCcsXHJcbiAgICAnXFx1MDE2Myc6ICd0JyxcclxuICAgICdcXHUxRTcxJzogJ3QnLFxyXG4gICAgJ1xcdTFFNkYnOiAndCcsXHJcbiAgICAnXFx1MDE2Nyc6ICd0JyxcclxuICAgICdcXHUwMUFEJzogJ3QnLFxyXG4gICAgJ1xcdTAyODgnOiAndCcsXHJcbiAgICAnXFx1MkM2Nic6ICd0JyxcclxuICAgICdcXHVBNzg3JzogJ3QnLFxyXG4gICAgJ1xcdUE3MjknOiAndHonLFxyXG4gICAgJ1xcdTI0RTQnOiAndScsXHJcbiAgICAnXFx1RkY1NSc6ICd1JyxcclxuICAgICdcXHUwMEY5JzogJ3UnLFxyXG4gICAgJ1xcdTAwRkEnOiAndScsXHJcbiAgICAnXFx1MDBGQic6ICd1JyxcclxuICAgICdcXHUwMTY5JzogJ3UnLFxyXG4gICAgJ1xcdTFFNzknOiAndScsXHJcbiAgICAnXFx1MDE2Qic6ICd1JyxcclxuICAgICdcXHUxRTdCJzogJ3UnLFxyXG4gICAgJ1xcdTAxNkQnOiAndScsXHJcbiAgICAnXFx1MDBGQyc6ICd1JyxcclxuICAgICdcXHUwMURDJzogJ3UnLFxyXG4gICAgJ1xcdTAxRDgnOiAndScsXHJcbiAgICAnXFx1MDFENic6ICd1JyxcclxuICAgICdcXHUwMURBJzogJ3UnLFxyXG4gICAgJ1xcdTFFRTcnOiAndScsXHJcbiAgICAnXFx1MDE2Ric6ICd1JyxcclxuICAgICdcXHUwMTcxJzogJ3UnLFxyXG4gICAgJ1xcdTAxRDQnOiAndScsXHJcbiAgICAnXFx1MDIxNSc6ICd1JyxcclxuICAgICdcXHUwMjE3JzogJ3UnLFxyXG4gICAgJ1xcdTAxQjAnOiAndScsXHJcbiAgICAnXFx1MUVFQic6ICd1JyxcclxuICAgICdcXHUxRUU5JzogJ3UnLFxyXG4gICAgJ1xcdTFFRUYnOiAndScsXHJcbiAgICAnXFx1MUVFRCc6ICd1JyxcclxuICAgICdcXHUxRUYxJzogJ3UnLFxyXG4gICAgJ1xcdTFFRTUnOiAndScsXHJcbiAgICAnXFx1MUU3Myc6ICd1JyxcclxuICAgICdcXHUwMTczJzogJ3UnLFxyXG4gICAgJ1xcdTFFNzcnOiAndScsXHJcbiAgICAnXFx1MUU3NSc6ICd1JyxcclxuICAgICdcXHUwMjg5JzogJ3UnLFxyXG4gICAgJ1xcdTI0RTUnOiAndicsXHJcbiAgICAnXFx1RkY1Nic6ICd2JyxcclxuICAgICdcXHUxRTdEJzogJ3YnLFxyXG4gICAgJ1xcdTFFN0YnOiAndicsXHJcbiAgICAnXFx1MDI4Qic6ICd2JyxcclxuICAgICdcXHVBNzVGJzogJ3YnLFxyXG4gICAgJ1xcdTAyOEMnOiAndicsXHJcbiAgICAnXFx1QTc2MSc6ICd2eScsXHJcbiAgICAnXFx1MjRFNic6ICd3JyxcclxuICAgICdcXHVGRjU3JzogJ3cnLFxyXG4gICAgJ1xcdTFFODEnOiAndycsXHJcbiAgICAnXFx1MUU4Myc6ICd3JyxcclxuICAgICdcXHUwMTc1JzogJ3cnLFxyXG4gICAgJ1xcdTFFODcnOiAndycsXHJcbiAgICAnXFx1MUU4NSc6ICd3JyxcclxuICAgICdcXHUxRTk4JzogJ3cnLFxyXG4gICAgJ1xcdTFFODknOiAndycsXHJcbiAgICAnXFx1MkM3Myc6ICd3JyxcclxuICAgICdcXHUyNEU3JzogJ3gnLFxyXG4gICAgJ1xcdUZGNTgnOiAneCcsXHJcbiAgICAnXFx1MUU4Qic6ICd4JyxcclxuICAgICdcXHUxRThEJzogJ3gnLFxyXG4gICAgJ1xcdTI0RTgnOiAneScsXHJcbiAgICAnXFx1RkY1OSc6ICd5JyxcclxuICAgICdcXHUxRUYzJzogJ3knLFxyXG4gICAgJ1xcdTAwRkQnOiAneScsXHJcbiAgICAnXFx1MDE3Nyc6ICd5JyxcclxuICAgICdcXHUxRUY5JzogJ3knLFxyXG4gICAgJ1xcdTAyMzMnOiAneScsXHJcbiAgICAnXFx1MUU4Ric6ICd5JyxcclxuICAgICdcXHUwMEZGJzogJ3knLFxyXG4gICAgJ1xcdTFFRjcnOiAneScsXHJcbiAgICAnXFx1MUU5OSc6ICd5JyxcclxuICAgICdcXHUxRUY1JzogJ3knLFxyXG4gICAgJ1xcdTAxQjQnOiAneScsXHJcbiAgICAnXFx1MDI0Ric6ICd5JyxcclxuICAgICdcXHUxRUZGJzogJ3knLFxyXG4gICAgJ1xcdTI0RTknOiAneicsXHJcbiAgICAnXFx1RkY1QSc6ICd6JyxcclxuICAgICdcXHUwMTdBJzogJ3onLFxyXG4gICAgJ1xcdTFFOTEnOiAneicsXHJcbiAgICAnXFx1MDE3Qyc6ICd6JyxcclxuICAgICdcXHUwMTdFJzogJ3onLFxyXG4gICAgJ1xcdTFFOTMnOiAneicsXHJcbiAgICAnXFx1MUU5NSc6ICd6JyxcclxuICAgICdcXHUwMUI2JzogJ3onLFxyXG4gICAgJ1xcdTAyMjUnOiAneicsXHJcbiAgICAnXFx1MDI0MCc6ICd6JyxcclxuICAgICdcXHUyQzZDJzogJ3onLFxyXG4gICAgJ1xcdUE3NjMnOiAneicsXHJcbiAgICAnXFx1MDM4Nic6ICdcXHUwMzkxJyxcclxuICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxyXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXHJcbiAgICAnXFx1MDM4QSc6ICdcXHUwMzk5JyxcclxuICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxyXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXHJcbiAgICAnXFx1MDM4RSc6ICdcXHUwM0E1JyxcclxuICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxyXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXHJcbiAgICAnXFx1MDNBQyc6ICdcXHUwM0IxJyxcclxuICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxyXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXHJcbiAgICAnXFx1MDNBRic6ICdcXHUwM0I5JyxcclxuICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxyXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXHJcbiAgICAnXFx1MDNDQyc6ICdcXHUwM0JGJyxcclxuICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxyXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXHJcbiAgICAnXFx1MDNCMCc6ICdcXHUwM0M1JyxcclxuICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxyXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFNwZWNpYWxDaGFycyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF0Y2ggPSAoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gZGlhY3JpdGljc1thXSB8fCBhO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xyXG4gICAgLy8gRmlyc3QgY2hhcmFjdGVyIGlzIGFuICdhJywgaXQncyBnb29kIHByYWN0aWNlIHRvIHRhZyBpZCB0byBiZWdpbiB3aXRoIGEgbGV0dGVyXHJcbiAgICByZXR1cm4gJ2F4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3hdL2csIGZ1bmN0aW9uIChfKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcclxuICAgICAgICBjb25zdCB2YWwgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcbmltcG9ydCAqIGFzIHNlYXJjaEhlbHBlciBmcm9tICcuL3NlYXJjaC1oZWxwZXInO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcclxuaW1wb3J0IHsgbmV3SWQgfSBmcm9tICcuL2lkJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XHJcblxyXG50eXBlIE9wdGlvbkdyb3VwcyA9IE1hcDxzdHJpbmcsIE5nT3B0aW9uW10+O1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1zTGlzdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JvdXBzOiBPcHRpb25Hcm91cHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfbmdTZWxlY3Q6IE5nU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIHByaXZhdGUgX3NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1zOiBOZ09wdGlvbltdID0gW107XHJcblxyXG4gICAgZ2V0IGl0ZW1zKCk6IE5nT3B0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maWx0ZXJlZEl0ZW1zOiBOZ09wdGlvbltdID0gW107XHJcblxyXG4gICAgZ2V0IGZpbHRlcmVkSXRlbXMoKTogTmdPcHRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFya2VkSW5kZXggPSAtMTtcclxuXHJcbiAgICBnZXQgbWFya2VkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYXJrZWRJdGVtKCk6IE5nT3B0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRJdGVtc1t0aGlzLl9tYXJrZWRJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vSXRlbXNUb1NlbGVjdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWF4SXRlbXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmdTZWxlY3QubXVsdGlwbGUgJiYgdGhpcy5fbmdTZWxlY3QubWF4U2VsZWN0ZWRJdGVtcyA8PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXN0U2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5tYXBJdGVtKGl0ZW0sIGluZGV4KSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzID0gdGhpcy5fZ3JvdXBCeSh0aGlzLl9pdGVtcywgdGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gdGhpcy5fZmxhdHRlbih0aGlzLl9ncm91cHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzLnNldCh1bmRlZmluZWQsIHRoaXMuX2l0ZW1zKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2l0ZW1zXTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCB8fCB0aGlzLm1heEl0ZW1zU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlO1xyXG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgbXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZVNlbGVjdGVkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIGlmICghaXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnVuc2VsZWN0KGl0ZW0sIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIGlzRGVmaW5lZChpdGVtLmluZGV4KSAmJiB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U2VsZWN0ZWQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRJdGVtKHZhbHVlOiBhbnkpOiBOZ09wdGlvbiB7XHJcbiAgICAgICAgbGV0IGZpbmRCeTogKGl0ZW06IE5nT3B0aW9uKSA9PiBib29sZWFuO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aCkge1xyXG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+IHRoaXMuX25nU2VsZWN0LmNvbXBhcmVXaXRoKGl0ZW0udmFsdWUsIHZhbHVlKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gIWl0ZW0uY2hpbGRyZW4gJiYgdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0udmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkgPT09IHZhbHVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgIWl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5sYWJlbCAmJiBpdGVtLmxhYmVsID09PSB0aGlzLnJlc29sdmVOZXN0ZWQodmFsdWUsIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmZpbmQoaXRlbSA9PiBmaW5kQnkoaXRlbSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5tYXBJdGVtKGl0ZW0sIHRoaXMuX2l0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaChvcHRpb24pO1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTZWxlY3RlZCgpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtLm1hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5TGFiZWwodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0ZXJtKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMoaXRlbS5sYWJlbCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnN1YnN0cigwLCB0ZXJtLmxlbmd0aCkgPT09IHRlcm07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyZWRJdGVtcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gW107XHJcbiAgICAgICAgdGVybSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gdGVybSA6IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0ZXJtKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gfHwgdGhpcy5fZGVmYXVsdFNlYXJjaEZuO1xyXG4gICAgICAgIGNvbnN0IGhpZGVTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZDtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLl9ncm91cHMua2V5cygpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2dyb3Vwcy5nZXQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVTZWxlY3RlZCAmJiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgfHwgaXRlbS5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKHRlcm0sIHNlYXJjaEl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdGNoZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbGFzdF0gPSBtYXRjaGVkSXRlbXMuc2xpY2UoLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3QucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZCA9IHRoaXMuX2l0ZW1zLmZpbmQoeCA9PiB4ID09PSBsYXN0LnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGhlYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKC4uLm1hdGNoZWRJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRGaWx0ZXJlZEl0ZW1zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcih4ID0+ICF4LnNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5faXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubWFya0l0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrTmV4dEl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcFRvSXRlbSgrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1ByZXZpb3VzSXRlbSgpIHtcclxuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrSXRlbShpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtTZWxlY3RlZE9yRGVmYXVsdChtYXJrRGVmYXVsdD86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleE9mTGFzdFNlbGVjdGVkID0gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkID8gLTEgOiB0aGlzLl9maWx0ZXJlZEl0ZW1zLmluZGV4T2YodGhpcy5sYXN0U2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRJdGVtICYmIGluZGV4T2ZMYXN0U2VsZWN0ZWQgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IGluZGV4T2ZMYXN0U2VsZWN0ZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBtYXJrRGVmYXVsdCA/IHRoaXMuZmlsdGVyZWRJdGVtcy5maW5kSW5kZXgoeCA9PiAheC5kaXNhYmxlZCkgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzb2x2ZU5lc3RlZChvcHRpb246IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltrZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb247XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtrZXlzW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcEl0ZW0oaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogTmdPcHRpb24ge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXNEZWZpbmVkKGl0ZW0uJG5nT3B0aW9uTGFiZWwpID8gaXRlbS4kbmdPcHRpb25MYWJlbCA6IHRoaXMucmVzb2x2ZU5lc3RlZChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNEZWZpbmVkKGl0ZW0uJG5nT3B0aW9uVmFsdWUpID8gaXRlbS4kbmdPcHRpb25WYWx1ZSA6IGl0ZW07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICBsYWJlbDogaXNEZWZpbmVkKGxhYmVsKSA/IGxhYmVsLnRvU3RyaW5nKCkgOiAnJyxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcclxuICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBTZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fbmdTZWxlY3QubXVsdGlwbGU7XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUgPyBzZWxlY3RlZC52YWx1ZVt0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWVdIDogc2VsZWN0ZWQudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbmRJdGVtKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgc2VsZWN0ZWQgIT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnVuc2VsZWN0KHNlbGVjdGVkLCBtdWx0aXBsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QoaXRlbSwgbXVsdGlwbGUsIHRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cEFzTW9kZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoeCkgPT09IC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd1NlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudDtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50RXhpc3RzID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maW5kKHggPT4geCA9PT0gcGFyZW50KTtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnRFeGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFsuLi50aGlzLl9maWx0ZXJlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IChhLmluZGV4IC0gYi5pbmRleCkpXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oaWRlU2VsZWN0ZWQoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtLnBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmV2ZXJ5KHggPT4geC5zZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmZpbHRlcih4ID0+IHggIT09IGl0ZW0ucGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbHRlcih4ID0+IHgucGFyZW50ICE9PSBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNlYXJjaEZuKHNlYXJjaDogc3RyaW5nLCBvcHQ6IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMob3B0LmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBsYWJlbC5pbmRleE9mKHNlYXJjaCkgPiAtMVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE5leHRJdGVtSW5kZXgoc3RlcHM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzdGVwcyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA9PT0gdGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA/IDAgOiAodGhpcy5fbWFya2VkSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA8PSAwKSA/ICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDEpIDogKHRoaXMuX21hcmtlZEluZGV4IC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RlcFRvSXRlbShzdGVwczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwIHx8IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZXZlcnkoeCA9PiB4LmRpc2FibGVkKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IHRoaXMuX2dldE5leHRJdGVtSW5kZXgoc3RlcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmtlZEl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RlcFRvSXRlbShzdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dyb3VwQnkoaXRlbXM6IE5nT3B0aW9uW10sIHByb3A6IHN0cmluZyB8IEZ1bmN0aW9uKTogT3B0aW9uR3JvdXBzIHtcclxuICAgICAgICBjb25zdCBpc0ZuID0gaXNGdW5jdGlvbih0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcclxuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgTmdPcHRpb25bXT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGlzRm4gPyAoPEZ1bmN0aW9uPnByb3ApKGl0ZW0udmFsdWUpIDogaXRlbS52YWx1ZVs8c3RyaW5nPnByb3BdO1xyXG4gICAgICAgICAgICBrZXkgPSBpc0RlZmluZWQoa2V5KSA/IGtleSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdyb3Vwcy5zZXQoa2V5LCBbaXRlbV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBncm91cHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmxhdHRlbihncm91cHM6IE9wdGlvbkdyb3Vwcykge1xyXG4gICAgICAgIGNvbnN0IGlzRm4gPSBpc0Z1bmN0aW9uKHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgY29uc3Qgd2l0aG91dEdyb3VwID0gZ3JvdXBzLmdldCh1bmRlZmluZWQpIHx8IFtdO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goLi4ud2l0aG91dEdyb3VwKTtcclxuICAgICAgICBsZXQgaSA9IHdpdGhvdXRHcm91cC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbShncm91cHMua2V5cygpKSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQ6IE5nT3B0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGtleSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaSsrLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXAsXHJcbiAgICAgICAgICAgICAgICBodG1sSWQ6IG5ld0lkKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBLZXkgPSBpc0ZuID8gdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsIDogPHN0cmluZz50aGlzLl9uZ1NlbGVjdC5ncm91cEJ5O1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFZhbHVlID0gdGhpcy5fbmdTZWxlY3QuZ3JvdXBWYWx1ZSB8fCAoKCkgPT4gKHsgW2dyb3VwS2V5XToga2V5IH0pKTtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBncm91cHMuZ2V0KGtleSkubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgeC5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB4LmNoaWxkcmVuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgeC5pbmRleCA9IGkrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgICAgIHBhcmVudC52YWx1ZSA9IGdyb3VwVmFsdWUoa2V5LCBjaGlsZHJlbi5tYXAoeCA9PiB4LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCguLi5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIE5nT3B0aW9uIHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBhbnk7XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGh0bWxJZD86IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIG1hcmtlZD86IGJvb2xlYW47XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nIHwgT2JqZWN0O1xyXG4gICAgcGFyZW50PzogTmdPcHRpb247XHJcbiAgICBjaGlsZHJlbj86IE5nT3B0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleUNvZGUge1xyXG4gICAgVGFiID0gOSxcclxuICAgIEVudGVyID0gMTMsXHJcbiAgICBFc2MgPSAyNyxcclxuICAgIFNwYWNlID0gMzIsXHJcbiAgICBBcnJvd1VwID0gMzgsXHJcbiAgICBBcnJvd0Rvd24gPSA0MCxcclxuICAgIEJhY2tzcGFjZSA9IDhcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZ1NlbGVjdENvbmZpZyB7XHJcbiAgICBvcGVuT25FbnRlcj86IGJvb2xlYW47XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIG5vdEZvdW5kVGV4dD86IHN0cmluZztcclxuICAgIHR5cGVUb1NlYXJjaFRleHQ/OiBzdHJpbmc7XHJcbiAgICBhZGRUYWdUZXh0Pzogc3RyaW5nO1xyXG4gICAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XHJcbiAgICBjbGVhckFsbFRleHQ/OiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2Uge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoaGFuZGxlcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCB0aW1lb3V0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1zRGltZW5zaW9ucyB7XHJcbiAgICBpdGVtc0xlbmd0aDogbnVtYmVyO1xyXG4gICAgdmlld1dpZHRoOiBudW1iZXI7XHJcbiAgICB2aWV3SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjaGlsZFdpZHRoOiBudW1iZXI7XHJcbiAgICBjaGlsZEhlaWdodDogbnVtYmVyO1xyXG4gICAgaXRlbXNQZXJDb2w6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtc1JhbmdlUmVzdWx0IHtcclxuICAgIHNjcm9sbEhlaWdodDogbnVtYmVyO1xyXG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGVuZDogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbFNlcnZpY2Uge1xyXG5cclxuICAgIGNhbGN1bGF0ZUl0ZW1zKGQ6IEl0ZW1zRGltZW5zaW9ucywgZHJvcGRvd25FbDogSFRNTEVsZW1lbnQsIGJ1ZmZlckFtb3VudDogbnVtYmVyKTogSXRlbXNSYW5nZVJlc3VsdCB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5jaGlsZEhlaWdodCAqIGQuaXRlbXNMZW5ndGg7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duRWwuc2Nyb2xsVG9wID4gc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZHJvcGRvd25FbC5zY3JvbGxUb3ApO1xyXG4gICAgICAgIGNvbnN0IGluZGV4QnlTY3JvbGxUb3AgPSBzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xyXG4gICAgICAgIGxldCBlbmQgPSBNYXRoLm1pbihkLml0ZW1zTGVuZ3RoLCBNYXRoLmNlaWwoaW5kZXhCeVNjcm9sbFRvcCkgKyAoZC5pdGVtc1BlckNvbCArIDEpKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XHJcbiAgICAgICAgY29uc3QgbWF4U3RhcnQgPSBNYXRoLm1heCgwLCBtYXhTdGFydEVuZCAtIGQuaXRlbXNQZXJDb2wgLSAxKTtcclxuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1pbihtYXhTdGFydCwgTWF0aC5mbG9vcihpbmRleEJ5U2Nyb2xsVG9wKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3BQYWRkaW5nID0gZC5jaGlsZEhlaWdodCAqIE1hdGguY2VpbChzdGFydCkgLSAoZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKHN0YXJ0LCBidWZmZXJBbW91bnQpKTtcclxuICAgICAgICB0b3BQYWRkaW5nID0gIWlzTmFOKHRvcFBhZGRpbmcpID8gdG9wUGFkZGluZyA6IDA7XHJcbiAgICAgICAgc3RhcnQgPSAhaXNOYU4oc3RhcnQpID8gc3RhcnQgOiAtMTtcclxuICAgICAgICBlbmQgPSAhaXNOYU4oZW5kKSA/IGVuZCA6IC0xO1xyXG4gICAgICAgIHN0YXJ0IC09IGJ1ZmZlckFtb3VudDtcclxuICAgICAgICBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcclxuICAgICAgICBlbmQgKz0gYnVmZmVyQW1vdW50O1xyXG4gICAgICAgIGVuZCA9IE1hdGgubWluKGQuaXRlbXNMZW5ndGgsIGVuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcFBhZGRpbmc6IHRvcFBhZGRpbmcsXHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbXNMZW5ndGg6IG51bWJlciwgaW5kZXg6IG51bWJlciwgcGFuZWxFbDogSFRNTEVsZW1lbnQsIGNvbnRlbnRFbDogSFRNTEVsZW1lbnQpOiBJdGVtc0RpbWVuc2lvbnMge1xyXG4gICAgICAgIGNvbnN0IHBhbmVsUmVjdCA9IHBhbmVsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaXRlbVJlY3QgPSBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdID8gY29udGVudEVsLmNoaWxkcmVuW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcclxuICAgICAgICAgICAgd2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBpdGVtc1BlckNvbCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IocGFuZWxSZWN0LmhlaWdodCAvIGl0ZW1SZWN0LmhlaWdodCkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpdGVtc0xlbmd0aDogaXRlbXNMZW5ndGgsXHJcbiAgICAgICAgICAgIHZpZXdXaWR0aDogcGFuZWxSZWN0LndpZHRoLFxyXG4gICAgICAgICAgICB2aWV3SGVpZ2h0OiBwYW5lbFJlY3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICBjaGlsZFdpZHRoOiBpdGVtUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgY2hpbGRIZWlnaHQ6IGl0ZW1SZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgaXRlbXNQZXJDb2w6IGl0ZW1zUGVyQ29sLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIFJlbmRlcmVyMixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE91dHB1dCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBBZnRlckNvbnRlbnRJbml0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBJbmplY3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcbmltcG9ydCB7IERyb3Bkb3duUG9zaXRpb24gfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5jb25zdCBUT1BfQ1NTX0NMQVNTID0gJ25nLXNlbGVjdC10b3AnO1xyXG5jb25zdCBCT1RUT01fQ1NTX0NMQVNTID0gJ25nLXNlbGVjdC1ib3R0b20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBzZWxlY3RvcjogJ25nLWRyb3Bkb3duLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJoZWFkZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgICNzY3JvbGwgY2xhc3M9XCJuZy1kcm9wZG93bi1wYW5lbC1pdGVtcyBzY3JvbGwtaG9zdFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICNwYWRkaW5nIFtjbGFzcy50b3RhbC1wYWRkaW5nXT1cInZpcnR1YWxTY3JvbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAjY29udGVudCBbY2xhc3Muc2Nyb2xsYWJsZS1jb250ZW50XT1cInZpcnR1YWxTY3JvbGwgJiYgaXRlbXMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZm9vdGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5nLWRyb3Bkb3duLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgaXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcclxuICAgIEBJbnB1dCgpIG1hcmtlZEl0ZW06IE5nT3B0aW9uO1xyXG4gICAgQElucHV0KCkgcG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XHJcbiAgICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYnVmZmVyQW1vdW50ID0gNDtcclxuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgQE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcclxuICAgIEBPdXRwdXQoKSBvdXRzaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb250ZW50RWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzY3JvbGxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgncGFkZGluZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwYWRkaW5nRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kcm9wZG93bjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9zZWxlY3Q6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNTdGFydDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNFbmQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3N0YXJ0dXBMb29wID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2lzU2Nyb2xsZWRUb01hcmtlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gKCkgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlydHVhbFNjcm9sbFNlcnZpY2U6IFZpcnR1YWxTY3JvbGxTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3dpbmRvdzogV2luZG93U2VydmljZSxcclxuICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9kcm9wZG93biA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3QgPSB0aGlzLl9kcm9wZG93bi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZVNjcm9sbCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xyXG4gICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB7IGNhcHR1cmU6IHRydWUgfSksXHJcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdtb3VzZWRvd24nLCB7IGNhcHR1cmU6IHRydWUgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCRldmVudCkgPT4gdGhpcy5faGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUl0ZW1zQ2hhbmdlKGNoYW5nZXMuaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2Ryb3Bkb3duLnBhcmVudE5vZGUsIHRoaXMuX2Ryb3Bkb3duKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3doZW5Db250ZW50UmVhZHkoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVEb2N1bWVudFJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1zKCkudGhlbihyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG8oaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKHRoaXMudmlydHVhbFNjcm9sbCA/IDAgOiBpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsRWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBNYXRoLmZsb29yKGQudmlld0hlaWdodCAvIGQuY2hpbGRIZWlnaHQpIC0gMTtcclxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IChpbmRleCAqIGQuY2hpbGRIZWlnaHQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudEVsOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5IZWlnaHQgPSBBcnJheS5mcm9tKGNvbnRlbnRFbC5jaGlsZHJlbikuc2xpY2UoMCwgaW5kZXgpLnJlZHVjZSgoYywgbikgPT4gYyArIG4uY2xpZW50SGVpZ2h0LCAwKTtcclxuICAgICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gY2hpbGRyZW5IZWlnaHQgLSAoZC5jaGlsZEhlaWdodCAqIE1hdGgubWluKGluZGV4LCBidWZmZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1RhZygpIHtcclxuICAgICAgICBjb25zdCBlbDogRWxlbWVudCA9IHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZC5jaGlsZEhlaWdodCAqIChkLml0ZW1zTGVuZ3RoICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50UG9zaXRpb24odGhpcy5fZHJvcGRvd24pO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2Ryb3Bkb3duLCBUT1BfQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIFRPUF9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9zZWxlY3QsIEJPVFRPTV9DU1NfQ0xBU1MpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcm9wZG93biwgVE9QX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5jb250YWlucygkZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJvcGRvd24uY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQgJiYgJGV2ZW50LnRhcmdldC5zaGFkb3dSb290ICYmICRldmVudC5wYXRoICYmICRldmVudC5wYXRoWzBdICYmIHRoaXMuX3NlbGVjdC5jb250YWlucygkZXZlbnQucGF0aFswXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9maXJlU2Nyb2xsVG9FbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVJdGVtc0NoYW5nZShpdGVtczogeyBwcmV2aW91c1ZhbHVlOiBOZ09wdGlvbltdLCBjdXJyZW50VmFsdWU6IE5nT3B0aW9uW10gfSkge1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXJ0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzRW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChpdGVtcyAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLnByZXZpb3VzVmFsdWUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAoaXRlbXMucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLnByZXZpb3VzVmFsdWUubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5jdXJyZW50VmFsdWUgfHwgW107XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvICYmIHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSXRlbXMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgTmdab25lLmFzc2VydE5vdEluQW5ndWxhclpvbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnZpcnR1YWxTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxvb3AgPSAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVJdGVtcyhkLCB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idWZmZXJBbW91bnQgfHwgMCk7XHJcblxyXG4gICAgICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMucGFkZGluZ0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc3R5bGUuaGVpZ2h0ID0gYCR7cmVzLnNjcm9sbEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgcmVzLnRvcFBhZGRpbmcgKyAncHgpJztcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhcnQgIT09IHRoaXMuX3ByZXZpb3VzU3RhcnQgfHwgcmVzLmVuZCAhPT0gdGhpcy5fcHJldmlvdXNFbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuaXRlbXMuc2xpY2UocmVzLnN0YXJ0LCByZXMuZW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwuZW1pdCh7IHN0YXJ0OiByZXMuc3RhcnQsIGVuZDogcmVzLmVuZCB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdGFydCA9IHJlcy5zdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzRW5kID0gcmVzLmVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb29wKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0dXBMb29wID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsb29wKHJlc29sdmUpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpcmVTY3JvbGxUb0VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNjcm9sbDogSFRNTEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBwYWRkaW5nOiBIVE1MRWxlbWVudCA9IHRoaXMudmlydHVhbFNjcm9sbCA/XHJcbiAgICAgICAgICAgIHRoaXMucGFkZGluZ0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbC5zY3JvbGxUb3AgKyB0aGlzLl9kcm9wZG93bi5jbGllbnRIZWlnaHQgPj0gcGFkZGluZy5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VuZC5lbWl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxjdWxhdGVEaW1lbnNpb25zKGluZGV4ID0gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVEaW1lbnNpb25zKFxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlRG9jdW1lbnRSZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcGVuZFRvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbFRvTWFya2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgfHwgIXRoaXMubWFya2VkSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvKHRoaXMubWFya2VkSXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuX3NlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdFJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNlbGVjdFJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGhlaWdodCArIGRyb3Bkb3duSGVpZ2h0ID4gc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3RvcCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBlbmREcm9wZG93bigpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYXBwZW5kVG8gc2VsZWN0b3IgJHt0aGlzLmFwcGVuZFRvfSBkaWQgbm90IGZvdW5kIGFueSBwYXJlbnQgZWxlbWVudGApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLl9kcm9wZG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5hcHBlbmRUbykgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCAtIGJvdW5kaW5nUmVjdC50b3A7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHNlbGVjdFJlY3QubGVmdCAtIGJvdW5kaW5nUmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHRvcERlbHRhID0gdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAnYm90dG9tJyA/IHNlbGVjdFJlY3QuaGVpZ2h0IDogLXRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS50b3AgPSBvZmZzZXRUb3AgKyB0b3BEZWx0YSArICdweCc7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS53aWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLm1pbldpZHRoID0gc2VsZWN0UmVjdC53aWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2hlbkNvbnRlbnRSZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWFkeSA9IChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5nT3B0aW9uID0gdGhpcy5fZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLm5nLW9wdGlvbicpO1xyXG4gICAgICAgICAgICBpZiAobmdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZHkocmVzb2x2ZSksIDUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVhZHkocmVzb2x2ZSkpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctb3B0aW9uJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdGhpcy5faXNEaXNhYmxlZCh2YWx1ZSkgfVxyXG5cclxuICAgIHJlYWRvbmx5IHN0YXRlQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PHsgdmFsdWU6IGFueSwgZGlzYWJsZWQ6IGJvb2xlYW4gfT4oKTtcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlJC5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuX2Rpc2FibGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgVGVtcGxhdGVSZWYsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIEhvc3RCaW5kaW5nLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgSW5qZWN0LFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIEluamVjdGlvblRva2VuLFxyXG4gICAgQXR0cmlidXRlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBzdGFydFdpdGgsIHRhcCwgZGVib3VuY2VUaW1lLCBtYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzRnVuY3Rpb24sIGlzUHJvbWlzZSwgaXNPYmplY3QgfSBmcm9tICcuL3ZhbHVlLXV0aWxzJztcclxuaW1wb3J0IHsgSXRlbXNMaXN0IH0gZnJvbSAnLi9pdGVtcy1saXN0JztcclxuaW1wb3J0IHsgTmdPcHRpb24sIEtleUNvZGUsIE5nU2VsZWN0Q29uZmlnIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xyXG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xyXG5pbXBvcnQgeyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5HX1NFTEVDVF9ERUZBVUxUX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ1NlbGVjdENvbmZpZz4oJ25nLXNlbGVjdC1kZWZhdWx0LW9wdGlvbnMnKTtcclxuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZID0gbmV3IEluamVjdGlvblRva2VuPE5nU2VsZWN0Q29uZmlnPignbmctc2VsZWN0LXNlbGVjdGlvbi1tb2RlbCcpO1xyXG5leHBvcnQgdHlwZSBEcm9wZG93blBvc2l0aW9uID0gJ2JvdHRvbScgfCAndG9wJyB8ICdhdXRvJztcclxuZXhwb3J0IHR5cGUgQWRkVGFnRm4gPSAoKHRlcm06IHN0cmluZykgPT4gYW55IHwgUHJvbWlzZTxhbnk+KTtcclxuZXhwb3J0IHR5cGUgQ29tcGFyZVdpdGhGbiA9IChhOiBhbnksIGI6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25nLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9uZy1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHByb3ZpZGVyczogW3tcclxuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ1NlbGVjdENvbXBvbmVudCksXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1dLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdyb2xlJzogJ2xpc3Rib3gnLFxyXG4gICAgICAgICdjbGFzcyc6ICduZy1zZWxlY3QnLFxyXG4gICAgICAgICdbY2xhc3Mubmctc2VsZWN0LXNpbmdsZV0nOiAnIW11bHRpcGxlJyxcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgICAvLyBpbnB1dHNcclxuICAgIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgYmluZExhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNsZWFyYWJsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBtYXJrRmlyc3QgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdHlwZVRvU2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYWRkVGFnVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNsZWFyQWxsVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZHJvcGRvd25Qb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbiA9ICdhdXRvJztcclxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBjbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGhpZGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2VsZWN0T25UYWIgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG9wZW5PbkVudGVyOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgbWF4U2VsZWN0ZWRJdGVtczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgZ3JvdXBCeTogc3RyaW5nIHwgRnVuY3Rpb247XHJcbiAgICBASW5wdXQoKSBncm91cFZhbHVlOiBGdW5jdGlvbjtcclxuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudCA9IDQ7XHJcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXAgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cEFzTW9kZWwgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc2VhcmNoRm4gPSBudWxsO1xyXG5cclxuICAgIEBJbnB1dCgpIGxhYmVsRm9ySWQgPSBudWxsO1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtdHlwZWFoZWFkJykgdHlwZWFoZWFkOiBTdWJqZWN0PHN0cmluZz47XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1tdWx0aXBsZScpIG11bHRpcGxlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10YWdnYWJsZScpIGFkZFRhZzogYm9vbGVhbiB8IEFkZFRhZ0ZuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1zZWFyY2hhYmxlJykgc2VhcmNoYWJsZSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1vcGVuZWQnKSBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNvbXBhcmVXaXRoKCkgeyByZXR1cm4gdGhpcy5fY29tcGFyZVdpdGg7IH1cclxuICAgIHNldCBjb21wYXJlV2l0aChmbjogQ29tcGFyZVdpdGhGbikge1xyXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2Bjb21wYXJlV2l0aGAgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgY2xlYXJTZWFyY2hPbkFkZCgpIHsgcmV0dXJuIGlzRGVmaW5lZCh0aGlzLl9jbGVhclNlYXJjaE9uQWRkKSA/IHRoaXMuX2NsZWFyU2VhcmNoT25BZGQgOiB0aGlzLmNsb3NlT25TZWxlY3Q7IH07XHJcbiAgICBzZXQgY2xlYXJTZWFyY2hPbkFkZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoT25BZGQgPSB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb3V0cHV0IGV2ZW50c1xyXG4gICAgQE91dHB1dCgnYmx1cicpIGJsdXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2ZvY3VzJykgZm9jdXNFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgnb3BlbicpIG9wZW5FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2Nsb3NlJykgY2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ3NlYXJjaCcpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgnY2xlYXInKSBjbGVhckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgnYWRkJykgYWRkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdyZW1vdmUnKSByZW1vdmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ3Njcm9sbCcpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PigpO1xyXG4gICAgQE91dHB1dCgnc2Nyb2xsVG9FbmQnKSBzY3JvbGxUb0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PigpO1xyXG5cclxuICAgIC8vIGN1c3RvbSB0ZW1wbGF0ZXNcclxuICAgIEBDb250ZW50Q2hpbGQoTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG9wdGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBtdWx0aUxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBub3RGb3VuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHR5cGVUb1NlYXJjaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1RleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0YWdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gTmdEcm9wZG93blBhbmVsQ29tcG9uZW50KSkgZHJvcGRvd25QYW5lbDogTmdEcm9wZG93blBhbmVsQ29tcG9uZW50O1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBuZ09wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWRpc2FibGVkJykgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWZpbHRlcmVkJykgZ2V0IGZpbHRlcmVkKCkgeyByZXR1cm4gISF0aGlzLmZpbHRlclZhbHVlICYmIHRoaXMuc2VhcmNoYWJsZSB9O1xyXG5cclxuICAgIGl0ZW1zTGlzdDogSXRlbXNMaXN0O1xyXG4gICAgdmlld1BvcnRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG4gICAgZmlsdGVyVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBkcm9wZG93bklkID0gbmV3SWQoKTtcclxuICAgIHNlbGVjdGVkSXRlbUlkID0gMDtcclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgZm9jdXNlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9kZWZhdWx0TGFiZWwgPSAnbGFiZWwnO1xyXG4gICAgcHJpdmF0ZSBfcHJpbWl0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX21hbnVhbE9wZW46IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9wcmVzc2VkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2NvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuO1xyXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2hPbkFkZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9rZXlQcmVzcyQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBOZ09wdGlvbikgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xyXG5cclxuICAgIGNsZWFySXRlbSA9IChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZCh4ID0+IHgudmFsdWUgPT09IGl0ZW0pO1xyXG4gICAgICAgIHRoaXMudW5zZWxlY3Qob3B0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEF0dHJpYnV0ZSgnY2xhc3MnKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nLFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgcHVibGljIHRhYkluZGV4OiBzdHJpbmcsXHJcbiAgICAgICAgQEluamVjdChOR19TRUxFQ1RfREVGQVVMVF9DT05GSUcpIGNvbmZpZzogTmdTZWxlY3RDb25maWcsXHJcbiAgICAgICAgQEluamVjdChTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSkgbmV3U2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsRmFjdG9yeSxcclxuICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29uc29sZTogQ29uc29sZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QgPSBuZXcgSXRlbXNMaXN0KHRoaXMsIG5ld1NlbGVjdGlvbk1vZGVsKCkpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKTogTmdPcHRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMaXN0LnNlbGVjdGVkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGVkVmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKHggPT4geC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc1ZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVLZXlQcmVzc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SXRlbXMoY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWUgfHwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFudWFsT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBoYW5kbGVLZXlEb3duKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChLZXlDb2RlWyRldmVudC53aGljaF0pIHtcclxuICAgICAgICAgICAgc3dpdGNoICgkZXZlbnQud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5BcnJvd0Rvd246XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dEb3duKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dVcDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd1VwKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuU3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3BhY2UoJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRlcigkZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlRhYjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUYWIoJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2M6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5CYWNrc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQmFja3NwYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCRldmVudC5rZXkgJiYgJGV2ZW50LmtleS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnbmctY2xlYXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJDbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnbmctYXJyb3ctd3JhcHBlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCduZy12YWx1ZS1pY29uJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBcnJvd0NsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsZWFyQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhck1vZGVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyRXZlbnQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTW9kZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsZWFyYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlV3JpdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNPcGVuIHx8IHRoaXMuaXRlbXNMaXN0Lm1heEl0ZW1zU2VsZWN0ZWQgfHwgdGhpcy5fbWFudWFsT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmFkZFRhZyAmJiB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcclxuICAgICAgICB0aGlzLm9wZW5FdmVudC5lbWl0KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XHJcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSXRlbShpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIGlmICghaXRlbSB8fCBpdGVtLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgaXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaE9uQWRkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhclNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudC5lbWl0KGl0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QgfHwgdGhpcy5pdGVtc0xpc3Qubm9JdGVtc1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC51bnNlbGVjdChpdGVtKTtcclxuICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQuZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RUYWcoKSB7XHJcbiAgICAgICAgbGV0IHRhZztcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLmFkZFRhZykpIHtcclxuICAgICAgICAgICAgdGFnID0gKDxBZGRUYWdGbj50aGlzLmFkZFRhZykodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFnID0gdGhpcy5fcHJpbWl0aXZlID8gdGhpcy5maWx0ZXJWYWx1ZSA6IHsgW3RoaXMuYmluZExhYmVsXTogdGhpcy5maWx0ZXJWYWx1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGFnID0gKGl0ZW0pID0+IHRoaXMuX2lzVHlwZWFoZWFkIHx8ICF0aGlzLmlzT3BlbiA/IHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0oaXRlbSwgbnVsbCkgOiB0aGlzLml0ZW1zTGlzdC5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpc1Byb21pc2UodGFnKSkge1xyXG4gICAgICAgICAgICB0YWcudGhlbihpdGVtID0+IHRoaXMuc2VsZWN0KGhhbmRsZVRhZyhpdGVtKSkpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoaGFuZGxlVGFnKHRhZykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2xlYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJhYmxlICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuZmlsdGVyVmFsdWUpICYmICF0aGlzLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaG93QWRkVGFnKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJlxyXG4gICAgICAgICAgICAoIXRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMuc29tZSh4ID0+IHgubGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gdGVybSkgJiZcclxuICAgICAgICAgICAgICAgICghdGhpcy5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5pc09wZW4gfHwgIXRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKHggPT4geC5sYWJlbC50b0xvd2VyQ2FzZSgpID09PSB0ZXJtKSkpICYmXHJcbiAgICAgICAgICAgICF0aGlzLmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd05vSXRlbXNGb3VuZCgpIHtcclxuICAgICAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIHJldHVybiAoKGVtcHR5ICYmICF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5sb2FkaW5nKSB8fFxyXG4gICAgICAgICAgICAoZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgdGhpcy5maWx0ZXJWYWx1ZSAmJiAhdGhpcy5sb2FkaW5nKSkgJiZcclxuICAgICAgICAgICAgIXRoaXMuc2hvd0FkZFRhZztcclxuICAgIH1cclxuXHJcbiAgICBzaG93VHlwZVRvU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5ICYmIHRoaXMuX2lzVHlwZWFoZWFkICYmICF0aGlzLmZpbHRlclZhbHVlICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0ZXJtO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQubmV4dCh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KHRlcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRGb2N1cygkZXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Qmx1cigkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmctc2VsZWN0LWZvY3VzZWQnKTtcclxuICAgICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtSG92ZXIoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKCEoPGFueT50aGlzLl9jZCkuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wZG93blBhbmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC51cGRhdGVEcm9wZG93blBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xyXG4gICAgICAgIHRoaXMuYmluZExhYmVsID0gdGhpcy5iaW5kTGFiZWwgfHwgdGhpcy5fZGVmYXVsdExhYmVsO1xyXG4gICAgICAgIHRoaXMuX3ByaW1pdGl2ZSA9IGlzRGVmaW5lZChmaXJzdEl0ZW0pID8gIWlzT2JqZWN0KGZpcnN0SXRlbSkgOiB0aGlzLl9wcmltaXRpdmU7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc09wZW4gJiYgaXNEZWZpbmVkKHRoaXMuZmlsdGVyVmFsdWUpICYmICF0aGlzLl9pc1R5cGVhaGVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5maWx0ZXIodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCB8fCB0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrU2VsZWN0ZWRPckRlZmF1bHQodGhpcy5tYXJrRmlyc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRJdGVtc0Zyb21OZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlTmdPcHRpb25zID0gKG9wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG9wdGlvbnMubWFwKG9wdGlvbiA9PiAoe1xyXG4gICAgICAgICAgICAgICAgJG5nT3B0aW9uVmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICRuZ09wdGlvbkxhYmVsOiBvcHRpb24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZXRJdGVtcyh0aGlzLml0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcFNlbGVjdGVkSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVPcHRpb25DaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWRPckRlc3Ryb3llZCA9IG1lcmdlKHRoaXMubmdPcHRpb25zLmNoYW5nZXMsIHRoaXMuX2Rlc3Ryb3kkKTtcclxuICAgICAgICAgICAgbWVyZ2UoLi4udGhpcy5uZ09wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc3RhdGVDaGFuZ2UkKSlcclxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbChjaGFuZ2VkT3JEZXN0cm95ZWQpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbShvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzYWJsZWQgPSBvcHRpb24uZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm5nT3B0aW9ucy5jaGFuZ2VzXHJcbiAgICAgICAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLm5nT3B0aW9ucyksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksIGZpbHRlcigoaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+KSA9PiAhIWl0ZW1zLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUob3B0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuX2RlZmF1bHRMYWJlbDtcclxuICAgICAgICAgICAgICAgIGhhbmRsZU5nT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZU9wdGlvbkNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1ZhbGlkV3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLm11bHRpcGxlICYmIHZhbHVlID09PSAnJykgfHxcclxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlQmluZGluZyA9IChpdGVtOiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pICYmIHRoaXMuYmluZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYEJpbmRpbmcgb2JqZWN0KCR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9KSB3aXRoIGJpbmRWYWx1ZSBpcyBub3QgYWxsb3dlZC5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oJ011bHRpcGxlIHNlbGVjdCBuZ01vZGVsIHNob3VsZCBiZSBhcnJheS4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiB2YWxpZGF0ZUJpbmRpbmcoaXRlbSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUJpbmRpbmcodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVXcml0ZVZhbHVlKG5nTW9kZWw6IGFueSB8IGFueVtdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkV3JpdGVWYWx1ZShuZ01vZGVsKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNMaXN0LmZpbmRJdGVtKHZhbCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbE9iamVjdCA9IGlzT2JqZWN0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ByaW1pdGl2ZSA9ICFpc1ZhbE9iamVjdCAmJiAhdGhpcy5iaW5kVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzVmFsT2JqZWN0IHx8IGlzUHJpbWl0aXZlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKHZhbCwgbnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmJpbmRMYWJlbF06IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmJpbmRWYWx1ZV06IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0oaXRlbSwgbnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgKDxhbnlbXT5uZ01vZGVsKS5mb3JFYWNoKGl0ZW0gPT4gc2VsZWN0KGl0ZW0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QobmdNb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUtleVByZXNzZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9rZXlQcmVzcyRcclxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSxcclxuICAgICAgICAgICAgICAgIHRhcChsZXR0ZXIgPT4gdGhpcy5fcHJlc3NlZEtleXMucHVzaChsZXR0ZXIpKSxcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmxlbmd0aCA+IDApLFxyXG4gICAgICAgICAgICAgICAgbWFwKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmpvaW4oJycpKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh0ZXJtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kQnlMYWJlbCh0ZXJtKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkS2V5cyA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVOZ01vZGVsKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuc2VsZWN0ZWRJdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iaW5kVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IGl0ZW0udmFsdWVbPHN0cmluZz50aGlzLmdyb3VwQnldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlID0gdGhpcy5pdGVtc0xpc3QucmVzb2x2ZU5lc3RlZChpdGVtLnZhbHVlLCB0aGlzLmJpbmRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5wdXNoKHJlc29sdmVkVmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaChpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKHggPT4geC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UobW9kZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKGlzRGVmaW5lZChtb2RlbFswXSkgPyBtb2RlbFswXSA6IG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUV2ZW50LmVtaXQoc2VsZWN0ZWRbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xlYXJTZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnJlc2V0RmlsdGVyZWRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbFRvTWFya2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbFRvVGFnKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvVGFnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlVGFiKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RPblRhYikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUVudGVyKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUl0ZW0odGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5PbkVudGVyID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVTcGFjZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUFycm93RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbmV4dEl0ZW1Jc1RhZygrMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb1RhZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtOZXh0SXRlbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVBcnJvd1VwKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX25leHRJdGVtSXNUYWcoLTEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrUHJldmlvdXNJdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX25leHRJdGVtSXNUYWcobmV4dFN0ZXA6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEluZGV4ICsgbmV4dFN0ZXA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVGFnICYmIHRoaXMuZmlsdGVyVmFsdWVcclxuICAgICAgICAgICAgJiYgdGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbVxyXG4gICAgICAgICAgICAmJiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPT09IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUJhY2tzcGFjZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSB8fCAhdGhpcy5jbGVhcmFibGUgfHwgIXRoaXMuaGFzVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5sYXN0U2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBfaXNUeXBlYWhlYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZWFoZWFkICYmIHRoaXMudHlwZWFoZWFkLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZzogTmdTZWxlY3RDb25maWcpIHtcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCBjb25maWcucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgdGhpcy5ub3RGb3VuZFRleHQgPSB0aGlzLm5vdEZvdW5kVGV4dCB8fCBjb25maWcubm90Rm91bmRUZXh0O1xyXG4gICAgICAgIHRoaXMudHlwZVRvU2VhcmNoVGV4dCA9IHRoaXMudHlwZVRvU2VhcmNoVGV4dCB8fCBjb25maWcudHlwZVRvU2VhcmNoVGV4dDtcclxuICAgICAgICB0aGlzLmFkZFRhZ1RleHQgPSB0aGlzLmFkZFRhZ1RleHQgfHwgY29uZmlnLmFkZFRhZ1RleHQ7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCA9IHRoaXMubG9hZGluZ1RleHQgfHwgY29uZmlnLmxvYWRpbmdUZXh0O1xyXG4gICAgICAgIHRoaXMuY2xlYXJBbGxUZXh0ID0gdGhpcy5jbGVhckFsbFRleHQgfHwgY29uZmlnLmNsZWFyQWxsVGV4dDtcclxuICAgICAgICB0aGlzLm9wZW5PbkVudGVyID0gdGhpcy5vcGVuT25FbnRlciAhPT0gdW5kZWZpbmVkID8gdGhpcy5vcGVuT25FbnRlciA6IGNvbmZpZy5vcGVuT25FbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcclxuaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNEZWZpbmVkIH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW25nT3B0aW9uSGlnaGxpZ2h0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoJ25nT3B0aW9uSGlnaGxpZ2h0JykgdGVybTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0TGFiZWwoKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsO1xyXG4gICAgICAgIGlmICghdGhpcy50ZXJtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZUZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGxhYmVsKVxyXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAuaW5kZXhPZihzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGhpcy50ZXJtKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBpZiAoaW5kZXhPZlRlcm0gPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwoXHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdWJzdHJpbmcoMCwgaW5kZXhPZlRlcm0pXHJcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodGVkXCI+JHtsYWJlbC5zdWJzdHIoaW5kZXhPZlRlcm0sIHRoaXMudGVybS5sZW5ndGgpfTwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICArIGxhYmVsLnN1YnN0cmluZyhpbmRleE9mVGVybSArIHRoaXMudGVybS5sZW5ndGgsIGxhYmVsLmxlbmd0aCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IF9jYW5IaWdobGlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZCh0aGlzLnRlcm0pICYmIGlzRGVmaW5lZCh0aGlzLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRJbm5lckh0bWwoaHRtbCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCBodG1sKTtcclxuICAgIH1cclxufSAgIFxyXG4iLCJpbXBvcnQgeyBOZ09wdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdGlvbk1vZGVsRmFjdG9yeSA9ICgpID0+IFNlbGVjdGlvbk1vZGVsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkoKSB7XHJcbiAgICByZXR1cm4gbmV3IERlZmF1bHRTZWxlY3Rpb25Nb2RlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbk1vZGVsIHtcclxuICAgIHZhbHVlOiBOZ09wdGlvbltdO1xyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgc2VsZWN0YWJsZUdyb3VwQXNNb2RlbDogYm9vbGVhbik7XHJcbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4pO1xyXG4gICAgY2xlYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRTZWxlY3Rpb25Nb2RlbCBpbXBsZW1lbnRzIFNlbGVjdGlvbk1vZGVsIHtcclxuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBOZ09wdGlvbltdID0gW107XHJcblxyXG4gICAgZ2V0IHZhbHVlKCk6IE5nT3B0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuLCBncm91cEFzTW9kZWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZ3JvdXBBc01vZGVsIHx8ICFpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBpdGVtLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4uZmlsdGVyKHggPT4geC5zZWxlY3RlZCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgPSBjaGlsZHJlbkNvdW50ID09PSBzZWxlY3RlZENvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cEFzTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IFsuLi50aGlzLl9zZWxlY3RlZCwgLi4uaXRlbS5jaGlsZHJlbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtLnBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVBhcmVudChpdGVtLnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtLnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKC4uLmNoaWxkcmVuLmZpbHRlcih4ID0+IHggIT09IGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGl0ZW0uY2hpbGRyZW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGNoaWxkcmVuOiBOZ09wdGlvbltdLCBzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goeCA9PiB4LnNlbGVjdGVkID0gc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZUNoaWxkcmVuKHBhcmVudDogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHgucGFyZW50ICE9PSBwYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4ICE9PSBwYXJlbnQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTkdfU0VMRUNUX0RFRkFVTFRfQ09ORklHLCBOZ1NlbGVjdENvbXBvbmVudCwgU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkgfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSwgdXNlVmFsdWU6IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1NFTEVDVF9ERUZBVUxUX0NPTkZJRyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIG5vdEZvdW5kVGV4dDogJ05vIGl0ZW1zIGZvdW5kJyxcclxuICAgICAgICAgICAgICAgIHR5cGVUb1NlYXJjaFRleHQ6ICdUeXBlIHRvIHNlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICBhZGRUYWdUZXh0OiAnQWRkIGl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICAgICAgICAgIGNsZWFyQWxsVGV4dDogJ0NsZWFyIGFsbCcsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVmlydHVhbFNjcm9sbDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsic2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFJSSxZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O1lBRnRCLFdBQVc7Ozs7OztJQVMzQixZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7O1lBUHhCLFdBQVc7Ozs7OztJQWMzQixZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzs7O1lBWnJCLFdBQVc7Ozs7OztJQW1CM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztZQWpCM0IsV0FBVzs7Ozs7O0lBd0IzQixZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O1lBdEJ0QixXQUFXOzs7Ozs7SUE2QjNCLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7WUEzQnRCLFdBQVc7Ozs7OztJQWtDM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7OztZQWhDeEIsV0FBVzs7Ozs7O0lBdUMzQixZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGckQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFOzs7O1lBckM1QixXQUFXOzs7Ozs7SUE0QzNCLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZyRCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7WUExQzNCLFdBQVc7Ozs7OztJQWlEM0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7O1lBRnJELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7Ozs7WUEvQ25CLFdBQVc7Ozs7Ozs7QUNBL0I7Ozs7O0lBSUksSUFBSSxDQUFDLE9BQWU7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN4Qjs7O1lBSkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7O0FDRmxDLG1CQUEwQixLQUFVO0lBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0NBQ2hEOzs7OztBQUVELGtCQUF5QixLQUFVO0lBQy9CLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4RDs7Ozs7QUFFRCxtQkFBMEIsS0FBVTtJQUNoQyxPQUFPLEtBQUssWUFBWSxPQUFPLENBQUM7Q0FDbkM7Ozs7O0FBRUQsb0JBQTJCLEtBQVU7SUFDakMsT0FBTyxLQUFLLFlBQVksUUFBUSxDQUFDO0NBQ3BDOzs7Ozs7O0FDZEQsTUFBTSxVQUFVLEdBQUc7SUFDZixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEsRUFBRSxHQUFHO0lBQ2IsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFFBQVEs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