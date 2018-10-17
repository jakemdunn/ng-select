(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@ng-select/ng-select', ['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/forms'], factory) :
    (factory((global['ng-select'] = global['ng-select'] || {}, global['ng-select']['ng-select'] = {}),global.ng.core,global.ng.common,global.rxjs.operators,global.rxjs,global.ng.forms));
}(this, (function (exports,i0,common,operators,rxjs,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionTemplateDirective = /** @class */ (function () {
        function NgOptionTemplateDirective(template) {
            this.template = template;
        }
        NgOptionTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-option-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptionTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptionTemplateDirective;
    }());
    var NgOptgroupTemplateDirective = /** @class */ (function () {
        function NgOptgroupTemplateDirective(template) {
            this.template = template;
        }
        NgOptgroupTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptgroupTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptgroupTemplateDirective;
    }());
    var NgLabelTemplateDirective = /** @class */ (function () {
        function NgLabelTemplateDirective(template) {
            this.template = template;
        }
        NgLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLabelTemplateDirective;
    }());
    var NgMultiLabelTemplateDirective = /** @class */ (function () {
        function NgMultiLabelTemplateDirective(template) {
            this.template = template;
        }
        NgMultiLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgMultiLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgMultiLabelTemplateDirective;
    }());
    var NgHeaderTemplateDirective = /** @class */ (function () {
        function NgHeaderTemplateDirective(template) {
            this.template = template;
        }
        NgHeaderTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-header-tmp]' },] }
        ];
        /** @nocollapse */
        NgHeaderTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgHeaderTemplateDirective;
    }());
    var NgFooterTemplateDirective = /** @class */ (function () {
        function NgFooterTemplateDirective(template) {
            this.template = template;
        }
        NgFooterTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-footer-tmp]' },] }
        ];
        /** @nocollapse */
        NgFooterTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgFooterTemplateDirective;
    }());
    var NgNotFoundTemplateDirective = /** @class */ (function () {
        function NgNotFoundTemplateDirective(template) {
            this.template = template;
        }
        NgNotFoundTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
        ];
        /** @nocollapse */
        NgNotFoundTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgNotFoundTemplateDirective;
    }());
    var NgTypeToSearchTemplateDirective = /** @class */ (function () {
        function NgTypeToSearchTemplateDirective(template) {
            this.template = template;
        }
        NgTypeToSearchTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
        ];
        /** @nocollapse */
        NgTypeToSearchTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTypeToSearchTemplateDirective;
    }());
    var NgLoadingTextTemplateDirective = /** @class */ (function () {
        function NgLoadingTextTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingTextTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingTextTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLoadingTextTemplateDirective;
    }());
    var NgTagTemplateDirective = /** @class */ (function () {
        function NgTagTemplateDirective(template) {
            this.template = template;
        }
        NgTagTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-tag-tmp]' },] }
        ];
        /** @nocollapse */
        NgTagTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTagTemplateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConsoleService = /** @class */ (function () {
        function ConsoleService() {
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleService.prototype.warn = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                console.warn(message);
            };
        ConsoleService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConsoleService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
        return ConsoleService;
    }());

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
    var diacritics = {
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
        var match = function (a) {
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
            var val = Math.random() * 16 | 0;
            return val.toString(16);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ItemsList = /** @class */ (function () {
        function ItemsList(_ngSelect, _selectionModel) {
            this._ngSelect = _ngSelect;
            this._selectionModel = _selectionModel;
            this._items = [];
            this._filteredItems = [];
            this._markedIndex = -1;
        }
        Object.defineProperty(ItemsList.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "filteredItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._markedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectionModel.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedItem", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems[this._markedIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems[this.selectedItems.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} items
         * @return {?}
         */
        ItemsList.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
                if (this._ngSelect.groupBy) {
                    this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
                    this._items = this._flatten(this._groups);
                }
                else {
                    this._groups = new Map();
                    this._groups.set(undefined, this._items);
                }
                this._filteredItems = __spread(this._items);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.selected || this.maxItemsSelected) {
                    return;
                }
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                if (!multiple) {
                    this.clearSelected();
                }
                this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
                if (this._ngSelect.hideSelected && multiple) {
                    this._hideSelected(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item.selected) {
                    return;
                }
                this._selectionModel.unselect(item, this._ngSelect.multiple);
                if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
                    this._showSelected(item);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ItemsList.prototype.findItem = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                /** @type {?} */
                var findBy;
                if (this._ngSelect.compareWith) {
                    findBy = function (item) { return _this._ngSelect.compareWith(item.value, value); };
                }
                else if (this._ngSelect.bindValue) {
                    findBy = function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; };
                }
                else {
                    findBy = function (item) {
                        return item.value === value ||
                            !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel);
                    };
                }
                return this._items.find(function (item) { return findBy(item); });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.addItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var option = this.mapItem(item, this._items.length);
                this._items.push(option);
                this._filteredItems.push(option);
                return option;
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.clearSelected = /**
         * @return {?}
         */
            function () {
                this._selectionModel.clear();
                this._items.forEach(function (item) {
                    item.selected = false;
                    item.marked = false;
                });
                if (this._ngSelect.hideSelected) {
                    this.resetFilteredItems();
                }
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.findByLabel = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                term = stripSpecialChars(term).toLocaleLowerCase();
                return this.filteredItems.find(function (item) {
                    /** @type {?} */
                    var label = stripSpecialChars(item.label).toLocaleLowerCase();
                    return label.substr(0, term.length) === term;
                });
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                var e_1, _a;
                if (!term) {
                    this.resetFilteredItems();
                    return;
                }
                this._filteredItems = [];
                term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
                /** @type {?} */
                var match = this._ngSelect.searchFn || this._defaultSearchFn;
                /** @type {?} */
                var hideSelected = this._ngSelect.hideSelected;
                var _loop_1 = function (key) {
                    var e_2, _a, _b;
                    /** @type {?} */
                    var matchedItems = [];
                    try {
                        for (var _c = __values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                                continue;
                            }
                            /** @type {?} */
                            var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                            if (match(term, searchItem)) {
                                matchedItems.push(item);
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    if (matchedItems.length > 0) {
                        var _e = __read(matchedItems.slice(-1), 1), last_1 = _e[0];
                        if (last_1.parent) {
                            /** @type {?} */
                            var head = this_1._items.find(function (x) { return x === last_1.parent; });
                            this_1._filteredItems.push(head);
                        }
                        (_b = this_1._filteredItems).push.apply(_b, __spread(matchedItems));
                    }
                };
                var this_1 = this;
                try {
                    for (var _b = __values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_1(key);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.resetFilteredItems = /**
         * @return {?}
         */
            function () {
                if (this._filteredItems.length === this._items.length) {
                    return;
                }
                if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
                    this._filteredItems = this._items.filter(function (x) { return !x.selected; });
                }
                else {
                    this._filteredItems = this._items;
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.unmarkItem = /**
         * @return {?}
         */
            function () {
                this._markedIndex = -1;
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markNextItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(+1);
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markPreviousItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(-1);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.markItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._markedIndex = this._filteredItems.indexOf(item);
            };
        /**
         * @param {?=} markDefault
         * @return {?}
         */
        ItemsList.prototype.markSelectedOrDefault = /**
         * @param {?=} markDefault
         * @return {?}
         */
            function (markDefault) {
                if (this._filteredItems.length === 0) {
                    return;
                }
                /** @type {?} */
                var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
                if (this.lastSelectedItem && indexOfLastSelected > -1) {
                    this._markedIndex = indexOfLastSelected;
                }
                else {
                    this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
                }
            };
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
        ItemsList.prototype.resolveNested = /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
            function (option, key) {
                if (!isObject(option)) {
                    return option;
                }
                if (key.indexOf('.') === -1) {
                    return option[key];
                }
                else {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var value = option;
                    for (var i = 0, len = keys.length; i < len; ++i) {
                        if (value == null) {
                            return null;
                        }
                        value = value[keys[i]];
                    }
                    return value;
                }
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        ItemsList.prototype.mapItem = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                /** @type {?} */
                var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
                /** @type {?} */
                var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
                return {
                    index: index,
                    label: isDefined(label) ? label.toString() : '',
                    value: value,
                    disabled: item.disabled,
                    htmlId: newId()
                };
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.mapSelectedItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var e_3, _a;
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var selected = _c.value;
                        /** @type {?} */
                        var value = this._ngSelect.bindValue ? selected.value[this._ngSelect.bindValue] : selected.value;
                        /** @type {?} */
                        var item = this.findItem(value);
                        if (item && selected !== item) {
                            this._selectionModel.unselect(selected, multiple);
                            this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                if (this._ngSelect.hideSelected) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return _this.selectedItems.indexOf(x) === -1; });
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._showSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var e_4, _a;
                this._filteredItems.push(item);
                if (item.parent) {
                    /** @type {?} */
                    var parent_1 = item.parent;
                    /** @type {?} */
                    var parentExists = this._filteredItems.find(function (x) { return x === parent_1; });
                    if (!parentExists) {
                        this._filteredItems.push(parent_1);
                    }
                }
                else if (item.children) {
                    try {
                        for (var _b = __values(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var child = _c.value;
                            child.selected = false;
                            this._filteredItems.push(child);
                        }
                    }
                    catch (e_4_1) {
                        e_4 = { error: e_4_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_4)
                                throw e_4.error;
                        }
                    }
                }
                this._filteredItems = __spread(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._hideSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
                if (item.parent) {
                    /** @type {?} */
                    var children = item.parent.children;
                    if (children.every(function (x) { return x.selected; })) {
                        this._filteredItems = this._filteredItems.filter(function (x) { return x !== item.parent; });
                    }
                }
                else if (item.children) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return x.parent !== item; });
                }
            };
        /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
        ItemsList.prototype._defaultSearchFn = /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
            function (search, opt) {
                /** @type {?} */
                var label = stripSpecialChars(opt.label).toLocaleLowerCase();
                return label.indexOf(search) > -1;
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._getNextItemIndex = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (steps > 0) {
                    return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
                }
                return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._stepToItem = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
                    return;
                }
                this._markedIndex = this._getNextItemIndex(steps);
                if (this.markedItem.disabled) {
                    this._stepToItem(steps);
                }
            };
        /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
        ItemsList.prototype._groupBy = /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
            function (items, prop) {
                var e_5, _a;
                /** @type {?} */
                var isFn = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var groups = new Map();
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        /** @type {?} */
                        var key = isFn ? ( /** @type {?} */(prop))(item.value) : item.value[ /** @type {?} */(prop)];
                        key = isDefined(key) ? key : undefined;
                        /** @type {?} */
                        var group = groups.get(key);
                        if (group) {
                            group.push(item);
                        }
                        else {
                            groups.set(key, [item]);
                        }
                    }
                }
                catch (e_5_1) {
                    e_5 = { error: e_5_1 };
                }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                            _a.call(items_1);
                    }
                    finally {
                        if (e_5)
                            throw e_5.error;
                    }
                }
                return groups;
            };
        /**
         * @param {?} groups
         * @return {?}
         */
        ItemsList.prototype._flatten = /**
         * @param {?} groups
         * @return {?}
         */
            function (groups) {
                var e_6, _a;
                /** @type {?} */
                var isFn = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var items = [];
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, __spread(withoutGroup));
                /** @type {?} */
                var i = withoutGroup.length;
                var _loop_2 = function (key) {
                    if (!isDefined(key)) {
                        return "continue";
                    }
                    /** @type {?} */
                    var parent_2 = {
                        label: key,
                        children: undefined,
                        parent: null,
                        index: i++,
                        disabled: !this_2._ngSelect.selectableGroup,
                        htmlId: newId()
                    };
                    /** @type {?} */
                    var groupKey = isFn ? this_2._ngSelect.bindLabel : /** @type {?} */ (this_2._ngSelect.groupBy);
                    /** @type {?} */
                    var groupValue = this_2._ngSelect.groupValue || (function () {
                        var _a;
                        return (_a = {}, _a[groupKey] = key, _a);
                    });
                    /** @type {?} */
                    var children = groups.get(key).map(function (x) {
                        x.parent = parent_2;
                        x.children = undefined;
                        x.index = i++;
                        return x;
                    });
                    parent_2.children = children;
                    parent_2.value = groupValue(key, children.map(function (x) { return x.value; }));
                    items.push(parent_2);
                    items.push.apply(items, __spread(children));
                };
                var this_2 = this;
                try {
                    for (var _b = __values(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_2(key);
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
                return items;
            };
        return ItemsList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var KeyCode = {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ WindowService.ngInjectableDef = i0.defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
        return WindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ VirtualScrollService.ngInjectableDef = i0.defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
        return VirtualScrollService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */
    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    var NgDropdownPanelComponent = /** @class */ (function () {
        function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
            this._renderer = _renderer;
            this._zone = _zone;
            this._virtualScrollService = _virtualScrollService;
            this._window = _window;
            this._document = _document;
            this.items = [];
            this.position = 'auto';
            this.bufferAmount = 4;
            this.virtualScroll = false;
            this.update = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.outsideClick = new i0.EventEmitter();
            this._destroy$ = new rxjs.Subject();
            this._startupLoop = true;
            this._isScrolledToMarked = false;
            this._scrollToEndFired = false;
            this._disposeScrollListener = function () { };
            this._disposeDocumentResizeListener = function () { };
            this._dropdown = _elementRef.nativeElement;
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
                if (target.tagName === 'INPUT') {
                    return;
                }
                $event.preventDefault();
                $event.stopPropagation();
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._select = this._dropdown.parentElement;
                this._handleScroll();
                if (this._document) {
                    rxjs.merge(rxjs.fromEvent(this._document, 'touchstart', { capture: true }), rxjs.fromEvent(this._document, 'mousedown', { capture: true }))
                        .pipe(operators.takeUntil(this._destroy$))
                        .subscribe(function ($event) { return _this._handleOutsideClick($event); });
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["items"]) {
                    this._isScrolledToMarked = false;
                    this._handleItemsChange(changes["items"]);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._disposeDocumentResizeListener();
                this._disposeScrollListener();
                this._destroy$.next();
                this._destroy$.complete();
                if (this.appendTo) {
                    this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._whenContentReady().then(function () {
                    if (_this.appendTo) {
                        _this._appendDropdown();
                        _this._handleDocumentResize();
                    }
                    _this.updateDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(function (resolve) {
                    _this._zone.runOutsideAngular(function () {
                        _this._window.requestAnimationFrame(function () {
                            _this._updateItems().then(resolve);
                        });
                    });
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollInto = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return;
                }
                /** @type {?} */
                var index = this.items.indexOf(item);
                if (index < 0 || index >= this.items.length) {
                    return;
                }
                /** @type {?} */
                var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
                /** @type {?} */
                var scrollEl = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
                if (this.virtualScroll) {
                    scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
                }
                else {
                    /** @type {?} */
                    var contentEl = this.contentElementRef.nativeElement;
                    /** @type {?} */
                    var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
                    scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollIntoTag = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var d = this._calculateDimensions();
                el.scrollTop = d.childHeight * (d.itemsLength + 1);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleOutsideClick = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleScroll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
                    _this.refresh();
                    _this._fireScrollToEnd();
                });
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleItemsChange = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._scrollToEndFired = false;
                this._previousStart = undefined;
                this._previousEnd = undefined;
                if (items !== undefined && items.previousValue === undefined ||
                    (items.previousValue !== undefined && items.previousValue.length === 0)) {
                    this._startupLoop = true;
                }
                this.items = items.currentValue || [];
                this.refresh().then(function () {
                    if (_this.appendTo && _this._currentPosition === 'top') {
                        _this._updateAppendedDropdownPosition();
                    }
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                i0.NgZone.assertNotInAngularZone();
                if (!this.virtualScroll) {
                    this._zone.run(function () {
                        _this.update.emit(_this.items.slice());
                        _this._scrollToMarked();
                    });
                    return Promise.resolve();
                }
                /** @type {?} */
                var loop = function (resolve) {
                    /** @type {?} */
                    var d = _this._calculateDimensions();
                    /** @type {?} */
                    var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
                    ( /** @type {?} */(_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
                    ( /** @type {?} */(_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
                    if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                        _this._zone.run(function () {
                            _this.update.emit(_this.items.slice(res.start, res.end));
                            _this.scroll.emit({ start: res.start, end: res.end });
                        });
                        _this._previousStart = res.start;
                        _this._previousEnd = res.end;
                        if (_this._startupLoop === true) {
                            loop(resolve);
                        }
                    }
                    else if (_this._startupLoop === true) {
                        _this._startupLoop = false;
                        _this._scrollToMarked();
                        resolve();
                    }
                };
                return new Promise(function (resolve) { return loop(resolve); });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
         * @return {?}
         */
            function () {
                if (this._scrollToEndFired) {
                    return;
                }
                /** @type {?} */
                var scroll = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var padding = this.virtualScroll ?
                    this.paddingElementRef.nativeElement :
                    this.contentElementRef.nativeElement;
                if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
                    this.scrollToEnd.emit();
                    this._scrollToEndFired = true;
                }
            };
        /**
         * @param {?=} index
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateDimensions = /**
         * @param {?=} index
         * @return {?}
         */
            function (index) {
                if (index === void 0) {
                    index = 0;
                }
                return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleDocumentResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.appendTo) {
                    return;
                }
                this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
                    _this._updateAppendedDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (this._isScrolledToMarked || !this.markedItem) {
                    return;
                }
                this._isScrolledToMarked = true;
                this.scrollInto(this.markedItem);
            };
        /**
         * @param {?} dropdownEl
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
         * @param {?} dropdownEl
         * @return {?}
         */
            function (dropdownEl) {
                if (this.position !== 'auto') {
                    return this.position;
                }
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                /** @type {?} */
                var offsetTop = selectRect.top + window.pageYOffset;
                /** @type {?} */
                var height = selectRect.height;
                /** @type {?} */
                var dropdownHeight = dropdownEl.getBoundingClientRect().height;
                if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
                    return 'top';
                }
                else {
                    return 'bottom';
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._appendDropdown = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo);
                if (!parent) {
                    throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
                }
                parent.appendChild(this._dropdown);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo) || document.body;
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var boundingRect = parent.getBoundingClientRect();
                /** @type {?} */
                var offsetTop = selectRect.top - boundingRect.top;
                /** @type {?} */
                var offsetLeft = selectRect.left - boundingRect.left;
                /** @type {?} */
                var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
                this._dropdown.style.top = offsetTop + topDelta + 'px';
                this._dropdown.style.bottom = 'auto';
                this._dropdown.style.left = offsetLeft + 'px';
                this._dropdown.style.width = selectRect.width + 'px';
                this._dropdown.style.minWidth = selectRect.width + 'px';
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._whenContentReady = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.items.length === 0) {
                    return Promise.resolve();
                }
                /** @type {?} */
                var ready = function (resolve) {
                    /** @type {?} */
                    var ngOption = _this._dropdown.querySelector('.ng-option');
                    if (ngOption) {
                        resolve();
                        return;
                    }
                    _this._zone.runOutsideAngular(function () {
                        setTimeout(function () { return ready(resolve); }, 5);
                    });
                };
                return new Promise(function (resolve) { return ready(resolve); });
            };
        NgDropdownPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'ng-dropdown-panel',
                        template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\"></ng-container>\n        </div>\n        <div  #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\"></ng-container>\n        </div>\n    ",
                        styles: [".ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                    }] }
        ];
        /** @nocollapse */
        NgDropdownPanelComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.NgZone },
                { type: VirtualScrollService },
                { type: WindowService },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        NgDropdownPanelComponent.propDecorators = {
            items: [{ type: i0.Input }],
            markedItem: [{ type: i0.Input }],
            position: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            headerTemplate: [{ type: i0.Input }],
            footerTemplate: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
            scroll: [{ type: i0.Output }],
            scrollToEnd: [{ type: i0.Output }],
            outsideClick: [{ type: i0.Output }],
            contentElementRef: [{ type: i0.ViewChild, args: ['content', { read: i0.ElementRef },] }],
            scrollElementRef: [{ type: i0.ViewChild, args: ['scroll', { read: i0.ElementRef },] }],
            paddingElementRef: [{ type: i0.ViewChild, args: ['padding', { read: i0.ElementRef },] }],
            handleMousedown: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }]
        };
        return NgDropdownPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionComponent = /** @class */ (function () {
        function NgOptionComponent(elementRef) {
            this.elementRef = elementRef;
            this.stateChange$ = new rxjs.Subject();
            this._disabled = false;
        }
        Object.defineProperty(NgOptionComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._disabled = this._isDisabled(value); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgOptionComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["disabled"]) {
                    this.stateChange$.next({
                        value: this.value,
                        disabled: this._disabled
                    });
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgOptionComponent.prototype._isDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value != null && "" + value !== 'false';
            };
        NgOptionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-option',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NgOptionComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgOptionComponent.propDecorators = {
            value: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return NgOptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NG_SELECT_DEFAULT_CONFIG = new i0.InjectionToken('ng-select-default-options');
    /** @type {?} */
    var SELECTION_MODEL_FACTORY = new i0.InjectionToken('ng-select-selection-model');
    var NgSelectComponent = /** @class */ (function () {
        function NgSelectComponent(classes, tabIndex, config, newSelectionModel, _elementRef, _cd, _console) {
            var _this = this;
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
            this.blurEvent = new i0.EventEmitter();
            this.focusEvent = new i0.EventEmitter();
            this.changeEvent = new i0.EventEmitter();
            this.openEvent = new i0.EventEmitter();
            this.closeEvent = new i0.EventEmitter();
            this.searchEvent = new i0.EventEmitter();
            this.clearEvent = new i0.EventEmitter();
            this.addEvent = new i0.EventEmitter();
            this.removeEvent = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.disabled = false;
            this.viewPortItems = [];
            this.filterValue = null;
            this.dropdownId = newId();
            this.selectedItemId = 0;
            this._defaultLabel = 'label';
            this._primitive = true;
            this._pressedKeys = [];
            this._destroy$ = new rxjs.Subject();
            this._keyPress$ = new rxjs.Subject();
            this._onChange = function (_) { };
            this._onTouched = function () { };
            this.clearItem = function (item) {
                /** @type {?} */
                var option = _this.selectedItems.find(function (x) { return x.value === item; });
                _this.unselect(option);
            };
            this._mergeGlobalConfig(config);
            this.itemsList = new ItemsList(this, newSelectionModel());
            this.element = _elementRef.nativeElement;
        }
        Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
            get: /**
             * @return {?}
             */ function () { return this._compareWith; },
            set: /**
             * @param {?} fn
             * @return {?}
             */ function (fn) {
                if (!isFunction(fn)) {
                    throw Error('`compareWith` must be a function.');
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
            get: /**
             * @return {?}
             */ function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._clearSearchOnAdd = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "filtered", {
            get: /**
             * @return {?}
             */ function () { return !!this.filterValue && this.searchable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this.itemsList.selectedItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.map(function (x) { return x.value; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._handleKeyPresses();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["multiple"]) {
                    this.itemsList.clearSelected();
                }
                if (changes["items"]) {
                    this._setItems(changes["items"].currentValue || []);
                }
                if (changes["isOpen"]) {
                    this._manualOpen = true;
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.items && this.items.length === 0) {
                    this._setItemsFromNgOptions();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroy$.next();
                this._destroy$.complete();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleKeyDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
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
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleArrowClick = /**
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleClearClick = /**
         * @return {?}
         */
            function () {
                if (this.hasValue) {
                    this.clearModel();
                }
                this._clearSearch();
                this.focus();
                if (this._isTypeahead) {
                    this.typeahead.next(null);
                }
                this.clearEvent.emit();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.clearModel = /**
         * @return {?}
         */
            function () {
                if (!this.clearable) {
                    return;
                }
                this.itemsList.clearSelected();
                this._updateNgModel();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.itemsList.clearSelected();
                this._handleWriteValue(value);
                this._cd.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen) {
                    this.open();
                }
                else {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.open = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || this._manualOpen) {
                    return;
                }
                this.isOpen = false;
                this._clearSearch();
                this._onTouched();
                this.closeEvent.emit();
                this._cd.markForCheck();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.toggleItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item || item.disabled || this.disabled) {
                    return;
                }
                if (this.multiple && item.selected) {
                    this.unselect(item);
                }
                else {
                    this.select(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
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
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.filterInput.nativeElement.focus();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.itemsList.unselect(item);
                this.focus();
                this._updateNgModel();
                this.removeEvent.emit(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.selectTag = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a;
                /** @type {?} */
                var tag;
                if (isFunction(this.addTag)) {
                    tag = ( /** @type {?} */(this.addTag))(this.filterValue);
                }
                else {
                    tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
                }
                /** @type {?} */
                var handleTag = function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); };
                if (isPromise(tag)) {
                    tag.then(function (item) { return _this.select(handleTag(item)); }).catch(function () { });
                }
                else if (tag) {
                    this.select(handleTag(tag));
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showClear = /**
         * @return {?}
         */
            function () {
                return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
            };
        Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.filterValue) {
                    return false;
                }
                /** @type {?} */
                var term = this.filterValue.toLowerCase();
                return this.addTag &&
                    (!this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === term; }) &&
                        (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) { return x.label.toLowerCase() === term; }))) &&
                    !this.loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showNoItemsFound = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return ((empty && !this._isTypeahead && !this.loading) ||
                    (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
                    !this.showAddTag;
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showTypeToSearch = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return empty && this._isTypeahead && !this.filterValue && !this.loading;
            };
        /**
         * @param {?} term
         * @return {?}
         */
        NgSelectComponent.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputFocus = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.focused) {
                    return;
                }
                this.element.classList.add('ng-select-focused');
                this.focusEvent.emit($event);
                this.focused = true;
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputBlur = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.element.classList.remove('ng-select-focused');
                this.blurEvent.emit($event);
                if (!this.isOpen && !this.disabled) {
                    this._onTouched();
                }
                this.focused = false;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.onItemHover = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.disabled) {
                    return;
                }
                this.itemsList.markItem(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.detectChanges = /**
         * @return {?}
         */
            function () {
                if (!( /** @type {?} */(this._cd)).destroyed) {
                    this._cd.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
                if (this.dropdownPanel) {
                    this.dropdownPanel.updateDropdownPosition();
                }
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgSelectComponent.prototype._setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                /** @type {?} */
                var firstItem = items[0];
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
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._setItemsFromNgOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var handleNgOptions = function (options) {
                    _this.items = options.map(function (option) {
                        return ({
                            $ngOptionValue: option.value,
                            $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                            disabled: option.disabled
                        });
                    });
                    _this.itemsList.setItems(_this.items);
                    if (_this.hasValue) {
                        _this.itemsList.mapSelectedItems();
                    }
                    _this.detectChanges();
                };
                /** @type {?} */
                var handleOptionChange = function () {
                    /** @type {?} */
                    var changedOrDestroyed = rxjs.merge(_this.ngOptions.changes, _this._destroy$);
                    rxjs.merge.apply(void 0, __spread(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(operators.takeUntil(changedOrDestroyed))
                        .subscribe(function (option) {
                        /** @type {?} */
                        var item = _this.itemsList.findItem(option.value);
                        item.disabled = option.disabled;
                        _this._cd.markForCheck();
                    });
                };
                this.ngOptions.changes
                    .pipe(operators.startWith(this.ngOptions), operators.takeUntil(this._destroy$), operators.filter(function (items) { return !!items.length; }))
                    .subscribe(function (options) {
                    _this.bindLabel = _this._defaultLabel;
                    handleNgOptions(options);
                    handleOptionChange();
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype._isValidWriteValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!isDefined(value) ||
                    (this.multiple && value === '') ||
                    Array.isArray(value) && value.length === 0) {
                    return false;
                }
                /** @type {?} */
                var validateBinding = function (item) {
                    if (isObject(item) && _this.bindValue) {
                        _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                        return false;
                    }
                    return true;
                };
                if (this.multiple) {
                    if (!Array.isArray(value)) {
                        this._console.warn('Multiple select ngModel should be array.');
                        return false;
                    }
                    return value.every(function (item) { return validateBinding(item); });
                }
                else {
                    return validateBinding(value);
                }
            };
        /**
         * @param {?} ngModel
         * @return {?}
         */
        NgSelectComponent.prototype._handleWriteValue = /**
         * @param {?} ngModel
         * @return {?}
         */
            function (ngModel) {
                var _this = this;
                if (!this._isValidWriteValue(ngModel)) {
                    return;
                }
                /** @type {?} */
                var select = function (val) {
                    var _a;
                    /** @type {?} */
                    var item = _this.itemsList.findItem(val);
                    if (item) {
                        _this.itemsList.select(item);
                    }
                    else {
                        /** @type {?} */
                        var isValObject = isObject(val);
                        /** @type {?} */
                        var isPrimitive = !isValObject && !_this.bindValue;
                        if ((isValObject || isPrimitive)) {
                            _this.itemsList.select(_this.itemsList.mapItem(val, null));
                        }
                        else if (_this.bindValue) {
                            item = (_a = {},
                                _a[_this.bindLabel] = null,
                                _a[_this.bindValue] = val,
                                _a);
                            _this.itemsList.select(_this.itemsList.mapItem(item, null));
                        }
                    }
                };
                if (this.multiple) {
                    ( /** @type {?} */(ngModel)).forEach(function (item) { return select(item); });
                }
                else {
                    select(ngModel);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleKeyPresses = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.searchable) {
                    return;
                }
                this._keyPress$
                    .pipe(operators.takeUntil(this._destroy$), operators.tap(function (letter) { return _this._pressedKeys.push(letter); }), operators.debounceTime(200), operators.filter(function () { return _this._pressedKeys.length > 0; }), operators.map(function () { return _this._pressedKeys.join(''); }))
                    .subscribe(function (term) {
                    /** @type {?} */
                    var item = _this.itemsList.findByLabel(term);
                    if (item) {
                        if (_this.isOpen) {
                            _this.itemsList.markItem(item);
                            _this._cd.markForCheck();
                        }
                        else {
                            _this.select(item);
                        }
                    }
                    _this._pressedKeys = [];
                });
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._updateNgModel = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var model = [];
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        if (this.bindValue) {
                            /** @type {?} */
                            var resolvedValue = null;
                            if (item.children) {
                                resolvedValue = item.value[ /** @type {?} */(this.groupBy)];
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
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                /** @type {?} */
                var selected = this.selectedItems.map(function (x) { return x.value; });
                if (this.multiple) {
                    this._onChange(model);
                    this.changeEvent.emit(selected);
                }
                else {
                    this._onChange(isDefined(model[0]) ? model[0] : null);
                    this.changeEvent.emit(selected[0]);
                }
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._clearSearch = /**
         * @return {?}
         */
            function () {
                if (!this.filterValue) {
                    return;
                }
                this.filterValue = null;
                this.itemsList.resetFilteredItems();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollInto(this.itemsList.markedItem);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToTag = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollIntoTag();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleTab = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleEnter = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleSpace = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen || this._manualOpen) {
                    return;
                }
                this.open();
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowUp = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
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
            };
        /**
         * @param {?} nextStep
         * @return {?}
         */
        NgSelectComponent.prototype._nextItemIsTag = /**
         * @param {?} nextStep
         * @return {?}
         */
            function (nextStep) {
                /** @type {?} */
                var nextIndex = this.itemsList.markedIndex + nextStep;
                return this.addTag && this.filterValue
                    && this.itemsList.markedItem
                    && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleBackspace = /**
         * @return {?}
         */
            function () {
                if (this.filterValue || !this.clearable || !this.hasValue) {
                    return;
                }
                if (this.multiple) {
                    this.unselect(this.itemsList.lastSelectedItem);
                }
                else {
                    this.clearModel();
                }
            };
        Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
            get: /**
             * @return {?}
             */ function () {
                return this.typeahead && this.typeahead.observers.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} config
         * @return {?}
         */
        NgSelectComponent.prototype._mergeGlobalConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.placeholder = this.placeholder || config.placeholder;
                this.notFoundText = this.notFoundText || config.notFoundText;
                this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
                this.addTagText = this.addTagText || config.addTagText;
                this.loadingText = this.loadingText || config.loadingText;
                this.clearAllText = this.clearAllText || config.clearAllText;
                this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            };
        NgSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-select',
                        template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\r\n    <div class=\"ng-value-container\">\r\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\r\n\r\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\r\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\r\n                <ng-template #defaultLabelTemplate>\r\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\r\n                    <span class=\"ng-value-label\">{{item.label}}</span>\r\n                </ng-template>\r\n\r\n                <ng-template\r\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\r\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\r\n                </ng-template>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\r\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\r\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\r\n        </ng-template>\r\n\r\n        <div class=\"ng-input\">\r\n            <input #filterInput\r\n                   type=\"text\"\r\n                   autocomplete=\"{{dropdownId}}\"\r\n                   [attr.id]=\"labelForId\"\r\n                   [attr.tabindex]=\"tabIndex\"\r\n                   [readOnly]=\"!searchable\"\r\n                   [disabled]=\"disabled\"\r\n                   [value]=\"filterValue ? filterValue : ''\"\r\n                   (input)=\"filter(filterInput.value)\"\r\n                   (focus)=\"onInputFocus($event)\"\r\n                   (blur)=\"onInputBlur($event)\"\r\n                   (change)=\"$event.stopPropagation()\"\r\n                   role=\"combobox\"\r\n                   [attr.aria-expanded]=\"isOpen\"\r\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\r\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ng-spinner-loader\" *ngIf=\"loading\"></div>\r\n\r\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\r\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\r\n    </span>\r\n\r\n    <span class=\"ng-arrow-wrapper\">\r\n        <span class=\"ng-arrow\"></span>\r\n    </span>\r\n</div>\r\n\r\n<ng-dropdown-panel *ngIf=\"isOpen\"\r\n    class=\"ng-dropdown-panel\"\r\n    [virtualScroll]=\"virtualScroll\"\r\n    [bufferAmount]=\"bufferAmount\"\r\n    [appendTo]=\"appendTo\"\r\n    [position]=\"dropdownPosition\"\r\n    [headerTemplate]=\"headerTemplate\"\r\n    [footerTemplate]=\"footerTemplate\"\r\n    [items]=\"itemsList.filteredItems\"\r\n    [markedItem]=\"itemsList.markedItem\"\r\n    (update)=\"viewPortItems = $event\"\r\n    (scroll)=\"scroll.emit($event)\"\r\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\r\n    (outsideClick)=\"close()\"\r\n    [class.ng-select-multiple]=\"multiple\"\r\n    [ngClass]=\"classes\"\r\n    [id]=\"dropdownId\">\r\n\r\n    <ng-container>\r\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\r\n                *ngFor=\"let item of viewPortItems\"\r\n                [class.ng-option-disabled]=\"item.disabled\"\r\n                [class.ng-option-selected]=\"item.selected\"\r\n                [class.ng-optgroup]=\"item.children\"\r\n                [class.ng-option]=\"!item.children\"\r\n                [class.ng-option-child]=\"!!item.parent\"\r\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\r\n                [attr.id]=\"item?.htmlId\">\r\n\r\n            <ng-template #defaultOptionTemplate>\r\n                <span class=\"ng-option-label\">{{item.label}}</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\r\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n\r\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\r\n            <ng-template #defaultTagTemplate>\r\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\r\n            </ng-template>\r\n\r\n            <ng-template\r\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\r\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n            </ng-template>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showNoItemsFound()\">\r\n        <ng-template #defaultNotFoundTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showTypeToSearch()\">\r\n        <ng-template #defaultTypeToSearchTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\r\n        <ng-template #defaultLoadingTextTemplate>\r\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\r\n        </ng-template>\r\n\r\n        <ng-template\r\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\r\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue  }\">\r\n        </ng-template>\r\n    </ng-container>\r\n\r\n</ng-dropdown-panel>\r\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return NgSelectComponent; }),
                                multi: true
                            }],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'listbox',
                            'class': 'ng-select',
                            '[class.ng-select-single]': '!multiple',
                        },
                        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        NgSelectComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['class',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['tabindex',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [NG_SELECT_DEFAULT_CONFIG,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef },
                { type: ConsoleService }
            ];
        };
        NgSelectComponent.propDecorators = {
            items: [{ type: i0.Input }],
            bindLabel: [{ type: i0.Input }],
            bindValue: [{ type: i0.Input }],
            clearable: [{ type: i0.Input }],
            markFirst: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            notFoundText: [{ type: i0.Input }],
            typeToSearchText: [{ type: i0.Input }],
            addTagText: [{ type: i0.Input }],
            loadingText: [{ type: i0.Input }],
            clearAllText: [{ type: i0.Input }],
            dropdownPosition: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            closeOnSelect: [{ type: i0.Input }],
            hideSelected: [{ type: i0.Input }],
            selectOnTab: [{ type: i0.Input }],
            openOnEnter: [{ type: i0.Input }],
            maxSelectedItems: [{ type: i0.Input }],
            groupBy: [{ type: i0.Input }],
            groupValue: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            selectableGroup: [{ type: i0.Input }],
            selectableGroupAsModel: [{ type: i0.Input }],
            searchFn: [{ type: i0.Input }],
            labelForId: [{ type: i0.Input }],
            typeahead: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-typeahead',] }],
            multiple: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-multiple',] }],
            addTag: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-taggable',] }],
            searchable: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-searchable',] }],
            isOpen: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-opened',] }],
            compareWith: [{ type: i0.Input }],
            clearSearchOnAdd: [{ type: i0.Input }],
            blurEvent: [{ type: i0.Output, args: ['blur',] }],
            focusEvent: [{ type: i0.Output, args: ['focus',] }],
            changeEvent: [{ type: i0.Output, args: ['change',] }],
            openEvent: [{ type: i0.Output, args: ['open',] }],
            closeEvent: [{ type: i0.Output, args: ['close',] }],
            searchEvent: [{ type: i0.Output, args: ['search',] }],
            clearEvent: [{ type: i0.Output, args: ['clear',] }],
            addEvent: [{ type: i0.Output, args: ['add',] }],
            removeEvent: [{ type: i0.Output, args: ['remove',] }],
            scroll: [{ type: i0.Output, args: ['scroll',] }],
            scrollToEnd: [{ type: i0.Output, args: ['scrollToEnd',] }],
            optionTemplate: [{ type: i0.ContentChild, args: [NgOptionTemplateDirective, { read: i0.TemplateRef },] }],
            optgroupTemplate: [{ type: i0.ContentChild, args: [NgOptgroupTemplateDirective, { read: i0.TemplateRef },] }],
            labelTemplate: [{ type: i0.ContentChild, args: [NgLabelTemplateDirective, { read: i0.TemplateRef },] }],
            multiLabelTemplate: [{ type: i0.ContentChild, args: [NgMultiLabelTemplateDirective, { read: i0.TemplateRef },] }],
            headerTemplate: [{ type: i0.ContentChild, args: [NgHeaderTemplateDirective, { read: i0.TemplateRef },] }],
            footerTemplate: [{ type: i0.ContentChild, args: [NgFooterTemplateDirective, { read: i0.TemplateRef },] }],
            notFoundTemplate: [{ type: i0.ContentChild, args: [NgNotFoundTemplateDirective, { read: i0.TemplateRef },] }],
            typeToSearchTemplate: [{ type: i0.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: i0.TemplateRef },] }],
            loadingTextTemplate: [{ type: i0.ContentChild, args: [NgLoadingTextTemplateDirective, { read: i0.TemplateRef },] }],
            tagTemplate: [{ type: i0.ContentChild, args: [NgTagTemplateDirective, { read: i0.TemplateRef },] }],
            dropdownPanel: [{ type: i0.ViewChild, args: [i0.forwardRef(function () { return NgDropdownPanelComponent; }),] }],
            ngOptions: [{ type: i0.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
            filterInput: [{ type: i0.ViewChild, args: ['filterInput',] }],
            disabled: [{ type: i0.HostBinding, args: ['class.ng-select-disabled',] }],
            filtered: [{ type: i0.HostBinding, args: ['class.ng-select-filtered',] }],
            handleKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return NgSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionHighlightDirective = /** @class */ (function () {
        function NgOptionHighlightDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.element = this.elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.label = this.element.innerHTML;
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._highlightLabel = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var label = this.label;
                if (!this.term) {
                    this._setInnerHtml(label);
                    return;
                }
                /** @type {?} */
                var indexOfTerm = stripSpecialChars(label)
                    .toLowerCase()
                    .indexOf(stripSpecialChars(this.term).toLowerCase());
                if (indexOfTerm > -1) {
                    this._setInnerHtml(label.substring(0, indexOfTerm)
                        + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                        + label.substring(indexOfTerm + this.term.length, label.length));
                }
                else {
                    this._setInnerHtml(label);
                }
            };
        Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
            get: /**
             * @return {?}
             */ function () {
                return isDefined(this.term) && isDefined(this.label);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} html
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._setInnerHtml = /**
         * @param {?} html
         * @return {?}
         */
            function (html) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
            };
        NgOptionHighlightDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngOptionHighlight]'
                    },] }
        ];
        /** @nocollapse */
        NgOptionHighlightDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        NgOptionHighlightDirective.propDecorators = {
            term: [{ type: i0.Input, args: ['ngOptionHighlight',] }]
        };
        return NgOptionHighlightDirective;
    }());

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
    var DefaultSelectionModel = /** @class */ (function () {
        function DefaultSelectionModel() {
            this._selected = [];
        }
        Object.defineProperty(DefaultSelectionModel.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        DefaultSelectionModel.prototype.select = /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
            function (item, multiple, groupAsModel) {
                item.selected = true;
                if (groupAsModel || !item.children) {
                    this._selected.push(item);
                }
                if (multiple) {
                    if (item.parent) {
                        /** @type {?} */
                        var childrenCount = item.parent.children.length;
                        /** @type {?} */
                        var selectedCount = item.parent.children.filter(function (x) { return x.selected; }).length;
                        item.parent.selected = childrenCount === selectedCount;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, true);
                        this._removeChildren(item);
                        if (!groupAsModel) {
                            this._selected = __spread(this._selected, item.children);
                        }
                    }
                }
            };
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        DefaultSelectionModel.prototype.unselect = /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
            function (item, multiple) {
                var _a;
                this._selected = this._selected.filter(function (x) { return x !== item; });
                item.selected = false;
                if (multiple) {
                    if (item.parent && item.parent.selected) {
                        /** @type {?} */
                        var children = item.parent.children;
                        this._removeParent(item.parent);
                        this._removeChildren(item.parent);
                        (_a = this._selected).push.apply(_a, __spread(children.filter(function (x) { return x !== item; })));
                        item.parent.selected = false;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, false);
                        this._removeChildren(item);
                    }
                }
            };
        /**
         * @return {?}
         */
        DefaultSelectionModel.prototype.clear = /**
         * @return {?}
         */
            function () {
                this._selected = [];
            };
        /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
        DefaultSelectionModel.prototype._setChildrenSelectedState = /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
            function (children, selected) {
                children.forEach(function (x) { return x.selected = selected; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeChildren = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x.parent !== parent; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeParent = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x !== parent; });
            };
        return DefaultSelectionModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = DefaultSelectionModelFactory, ɵ1 = {
        notFoundText: 'No items found',
        typeToSearchText: 'Type to search',
        addTagText: 'Add item',
        loadingText: 'Loading...',
        clearAllText: 'Clear all',
        disableVirtualScroll: false,
        openOnEnter: true
    };
    var NgSelectModule = /** @class */ (function () {
        function NgSelectModule() {
        }
        NgSelectModule.decorators = [
            { type: i0.NgModule, args: [{
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
                            common.CommonModule
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
        return NgSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgSelectComponent = NgSelectComponent;
    exports.NG_SELECT_DEFAULT_CONFIG = NG_SELECT_DEFAULT_CONFIG;
    exports.SELECTION_MODEL_FACTORY = SELECTION_MODEL_FACTORY;
    exports.NgSelectModule = NgSelectModule;
    exports.ɵr = ConsoleService;
    exports.ɵn = NgDropdownPanelComponent;
    exports.ɵs = NgOptionHighlightDirective;
    exports.ɵq = NgOptionComponent;
    exports.ɵi = NgFooterTemplateDirective;
    exports.ɵh = NgHeaderTemplateDirective;
    exports.ɵf = NgLabelTemplateDirective;
    exports.ɵl = NgLoadingTextTemplateDirective;
    exports.ɵg = NgMultiLabelTemplateDirective;
    exports.ɵj = NgNotFoundTemplateDirective;
    exports.ɵe = NgOptgroupTemplateDirective;
    exports.ɵd = NgOptionTemplateDirective;
    exports.ɵm = NgTagTemplateDirective;
    exports.ɵk = NgTypeToSearchTemplateDirective;
    exports.ɵc = DefaultSelectionModel;
    exports.ɵb = DefaultSelectionModelFactory;
    exports.ɵo = VirtualScrollService;
    exports.ɵp = WindowService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvY29uc29sZS5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmFsdWUtdXRpbHMudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9zZWFyY2gtaGVscGVyLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaWQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9pdGVtcy1saXN0LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0LnR5cGVzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctb3B0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L3NlbGVjdGlvbi1tb2RlbC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctb3B0aW9uLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1vcHRncm91cC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1sYWJlbC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1tdWx0aS1sYWJlbC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWhlYWRlci10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctZm9vdGVyLXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1ub3Rmb3VuZC10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy10eXBldG9zZWFyY2gtdG1wXScgfSlcclxuZXhwb3J0IGNsYXNzIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWxvYWRpbmd0ZXh0LXRtcF0nIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLXRhZy10bXBdJyB9KVxyXG5leHBvcnQgY2xhc3MgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uc29sZVNlcnZpY2Uge1xyXG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgaXNEZWZpbmVkKHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcclxufVxyXG4iLCJjb25zdCBkaWFjcml0aWNzID0ge1xyXG4gICAgJ1xcdTI0QjYnOiAnQScsXHJcbiAgICAnXFx1RkYyMSc6ICdBJyxcclxuICAgICdcXHUwMEMwJzogJ0EnLFxyXG4gICAgJ1xcdTAwQzEnOiAnQScsXHJcbiAgICAnXFx1MDBDMic6ICdBJyxcclxuICAgICdcXHUxRUE2JzogJ0EnLFxyXG4gICAgJ1xcdTFFQTQnOiAnQScsXHJcbiAgICAnXFx1MUVBQSc6ICdBJyxcclxuICAgICdcXHUxRUE4JzogJ0EnLFxyXG4gICAgJ1xcdTAwQzMnOiAnQScsXHJcbiAgICAnXFx1MDEwMCc6ICdBJyxcclxuICAgICdcXHUwMTAyJzogJ0EnLFxyXG4gICAgJ1xcdTFFQjAnOiAnQScsXHJcbiAgICAnXFx1MUVBRSc6ICdBJyxcclxuICAgICdcXHUxRUI0JzogJ0EnLFxyXG4gICAgJ1xcdTFFQjInOiAnQScsXHJcbiAgICAnXFx1MDIyNic6ICdBJyxcclxuICAgICdcXHUwMUUwJzogJ0EnLFxyXG4gICAgJ1xcdTAwQzQnOiAnQScsXHJcbiAgICAnXFx1MDFERSc6ICdBJyxcclxuICAgICdcXHUxRUEyJzogJ0EnLFxyXG4gICAgJ1xcdTAwQzUnOiAnQScsXHJcbiAgICAnXFx1MDFGQSc6ICdBJyxcclxuICAgICdcXHUwMUNEJzogJ0EnLFxyXG4gICAgJ1xcdTAyMDAnOiAnQScsXHJcbiAgICAnXFx1MDIwMic6ICdBJyxcclxuICAgICdcXHUxRUEwJzogJ0EnLFxyXG4gICAgJ1xcdTFFQUMnOiAnQScsXHJcbiAgICAnXFx1MUVCNic6ICdBJyxcclxuICAgICdcXHUxRTAwJzogJ0EnLFxyXG4gICAgJ1xcdTAxMDQnOiAnQScsXHJcbiAgICAnXFx1MDIzQSc6ICdBJyxcclxuICAgICdcXHUyQzZGJzogJ0EnLFxyXG4gICAgJ1xcdUE3MzInOiAnQUEnLFxyXG4gICAgJ1xcdTAwQzYnOiAnQUUnLFxyXG4gICAgJ1xcdTAxRkMnOiAnQUUnLFxyXG4gICAgJ1xcdTAxRTInOiAnQUUnLFxyXG4gICAgJ1xcdUE3MzQnOiAnQU8nLFxyXG4gICAgJ1xcdUE3MzYnOiAnQVUnLFxyXG4gICAgJ1xcdUE3MzgnOiAnQVYnLFxyXG4gICAgJ1xcdUE3M0EnOiAnQVYnLFxyXG4gICAgJ1xcdUE3M0MnOiAnQVknLFxyXG4gICAgJ1xcdTI0QjcnOiAnQicsXHJcbiAgICAnXFx1RkYyMic6ICdCJyxcclxuICAgICdcXHUxRTAyJzogJ0InLFxyXG4gICAgJ1xcdTFFMDQnOiAnQicsXHJcbiAgICAnXFx1MUUwNic6ICdCJyxcclxuICAgICdcXHUwMjQzJzogJ0InLFxyXG4gICAgJ1xcdTAxODInOiAnQicsXHJcbiAgICAnXFx1MDE4MSc6ICdCJyxcclxuICAgICdcXHUyNEI4JzogJ0MnLFxyXG4gICAgJ1xcdUZGMjMnOiAnQycsXHJcbiAgICAnXFx1MDEwNic6ICdDJyxcclxuICAgICdcXHUwMTA4JzogJ0MnLFxyXG4gICAgJ1xcdTAxMEEnOiAnQycsXHJcbiAgICAnXFx1MDEwQyc6ICdDJyxcclxuICAgICdcXHUwMEM3JzogJ0MnLFxyXG4gICAgJ1xcdTFFMDgnOiAnQycsXHJcbiAgICAnXFx1MDE4Nyc6ICdDJyxcclxuICAgICdcXHUwMjNCJzogJ0MnLFxyXG4gICAgJ1xcdUE3M0UnOiAnQycsXHJcbiAgICAnXFx1MjRCOSc6ICdEJyxcclxuICAgICdcXHVGRjI0JzogJ0QnLFxyXG4gICAgJ1xcdTFFMEEnOiAnRCcsXHJcbiAgICAnXFx1MDEwRSc6ICdEJyxcclxuICAgICdcXHUxRTBDJzogJ0QnLFxyXG4gICAgJ1xcdTFFMTAnOiAnRCcsXHJcbiAgICAnXFx1MUUxMic6ICdEJyxcclxuICAgICdcXHUxRTBFJzogJ0QnLFxyXG4gICAgJ1xcdTAxMTAnOiAnRCcsXHJcbiAgICAnXFx1MDE4Qic6ICdEJyxcclxuICAgICdcXHUwMThBJzogJ0QnLFxyXG4gICAgJ1xcdTAxODknOiAnRCcsXHJcbiAgICAnXFx1QTc3OSc6ICdEJyxcclxuICAgICdcXHUwMUYxJzogJ0RaJyxcclxuICAgICdcXHUwMUM0JzogJ0RaJyxcclxuICAgICdcXHUwMUYyJzogJ0R6JyxcclxuICAgICdcXHUwMUM1JzogJ0R6JyxcclxuICAgICdcXHUyNEJBJzogJ0UnLFxyXG4gICAgJ1xcdUZGMjUnOiAnRScsXHJcbiAgICAnXFx1MDBDOCc6ICdFJyxcclxuICAgICdcXHUwMEM5JzogJ0UnLFxyXG4gICAgJ1xcdTAwQ0EnOiAnRScsXHJcbiAgICAnXFx1MUVDMCc6ICdFJyxcclxuICAgICdcXHUxRUJFJzogJ0UnLFxyXG4gICAgJ1xcdTFFQzQnOiAnRScsXHJcbiAgICAnXFx1MUVDMic6ICdFJyxcclxuICAgICdcXHUxRUJDJzogJ0UnLFxyXG4gICAgJ1xcdTAxMTInOiAnRScsXHJcbiAgICAnXFx1MUUxNCc6ICdFJyxcclxuICAgICdcXHUxRTE2JzogJ0UnLFxyXG4gICAgJ1xcdTAxMTQnOiAnRScsXHJcbiAgICAnXFx1MDExNic6ICdFJyxcclxuICAgICdcXHUwMENCJzogJ0UnLFxyXG4gICAgJ1xcdTFFQkEnOiAnRScsXHJcbiAgICAnXFx1MDExQSc6ICdFJyxcclxuICAgICdcXHUwMjA0JzogJ0UnLFxyXG4gICAgJ1xcdTAyMDYnOiAnRScsXHJcbiAgICAnXFx1MUVCOCc6ICdFJyxcclxuICAgICdcXHUxRUM2JzogJ0UnLFxyXG4gICAgJ1xcdTAyMjgnOiAnRScsXHJcbiAgICAnXFx1MUUxQyc6ICdFJyxcclxuICAgICdcXHUwMTE4JzogJ0UnLFxyXG4gICAgJ1xcdTFFMTgnOiAnRScsXHJcbiAgICAnXFx1MUUxQSc6ICdFJyxcclxuICAgICdcXHUwMTkwJzogJ0UnLFxyXG4gICAgJ1xcdTAxOEUnOiAnRScsXHJcbiAgICAnXFx1MjRCQic6ICdGJyxcclxuICAgICdcXHVGRjI2JzogJ0YnLFxyXG4gICAgJ1xcdTFFMUUnOiAnRicsXHJcbiAgICAnXFx1MDE5MSc6ICdGJyxcclxuICAgICdcXHVBNzdCJzogJ0YnLFxyXG4gICAgJ1xcdTI0QkMnOiAnRycsXHJcbiAgICAnXFx1RkYyNyc6ICdHJyxcclxuICAgICdcXHUwMUY0JzogJ0cnLFxyXG4gICAgJ1xcdTAxMUMnOiAnRycsXHJcbiAgICAnXFx1MUUyMCc6ICdHJyxcclxuICAgICdcXHUwMTFFJzogJ0cnLFxyXG4gICAgJ1xcdTAxMjAnOiAnRycsXHJcbiAgICAnXFx1MDFFNic6ICdHJyxcclxuICAgICdcXHUwMTIyJzogJ0cnLFxyXG4gICAgJ1xcdTAxRTQnOiAnRycsXHJcbiAgICAnXFx1MDE5Myc6ICdHJyxcclxuICAgICdcXHVBN0EwJzogJ0cnLFxyXG4gICAgJ1xcdUE3N0QnOiAnRycsXHJcbiAgICAnXFx1QTc3RSc6ICdHJyxcclxuICAgICdcXHUyNEJEJzogJ0gnLFxyXG4gICAgJ1xcdUZGMjgnOiAnSCcsXHJcbiAgICAnXFx1MDEyNCc6ICdIJyxcclxuICAgICdcXHUxRTIyJzogJ0gnLFxyXG4gICAgJ1xcdTFFMjYnOiAnSCcsXHJcbiAgICAnXFx1MDIxRSc6ICdIJyxcclxuICAgICdcXHUxRTI0JzogJ0gnLFxyXG4gICAgJ1xcdTFFMjgnOiAnSCcsXHJcbiAgICAnXFx1MUUyQSc6ICdIJyxcclxuICAgICdcXHUwMTI2JzogJ0gnLFxyXG4gICAgJ1xcdTJDNjcnOiAnSCcsXHJcbiAgICAnXFx1MkM3NSc6ICdIJyxcclxuICAgICdcXHVBNzhEJzogJ0gnLFxyXG4gICAgJ1xcdTI0QkUnOiAnSScsXHJcbiAgICAnXFx1RkYyOSc6ICdJJyxcclxuICAgICdcXHUwMENDJzogJ0knLFxyXG4gICAgJ1xcdTAwQ0QnOiAnSScsXHJcbiAgICAnXFx1MDBDRSc6ICdJJyxcclxuICAgICdcXHUwMTI4JzogJ0knLFxyXG4gICAgJ1xcdTAxMkEnOiAnSScsXHJcbiAgICAnXFx1MDEyQyc6ICdJJyxcclxuICAgICdcXHUwMTMwJzogJ0knLFxyXG4gICAgJ1xcdTAwQ0YnOiAnSScsXHJcbiAgICAnXFx1MUUyRSc6ICdJJyxcclxuICAgICdcXHUxRUM4JzogJ0knLFxyXG4gICAgJ1xcdTAxQ0YnOiAnSScsXHJcbiAgICAnXFx1MDIwOCc6ICdJJyxcclxuICAgICdcXHUwMjBBJzogJ0knLFxyXG4gICAgJ1xcdTFFQ0EnOiAnSScsXHJcbiAgICAnXFx1MDEyRSc6ICdJJyxcclxuICAgICdcXHUxRTJDJzogJ0knLFxyXG4gICAgJ1xcdTAxOTcnOiAnSScsXHJcbiAgICAnXFx1MjRCRic6ICdKJyxcclxuICAgICdcXHVGRjJBJzogJ0onLFxyXG4gICAgJ1xcdTAxMzQnOiAnSicsXHJcbiAgICAnXFx1MDI0OCc6ICdKJyxcclxuICAgICdcXHUyNEMwJzogJ0snLFxyXG4gICAgJ1xcdUZGMkInOiAnSycsXHJcbiAgICAnXFx1MUUzMCc6ICdLJyxcclxuICAgICdcXHUwMUU4JzogJ0snLFxyXG4gICAgJ1xcdTFFMzInOiAnSycsXHJcbiAgICAnXFx1MDEzNic6ICdLJyxcclxuICAgICdcXHUxRTM0JzogJ0snLFxyXG4gICAgJ1xcdTAxOTgnOiAnSycsXHJcbiAgICAnXFx1MkM2OSc6ICdLJyxcclxuICAgICdcXHVBNzQwJzogJ0snLFxyXG4gICAgJ1xcdUE3NDInOiAnSycsXHJcbiAgICAnXFx1QTc0NCc6ICdLJyxcclxuICAgICdcXHVBN0EyJzogJ0snLFxyXG4gICAgJ1xcdTI0QzEnOiAnTCcsXHJcbiAgICAnXFx1RkYyQyc6ICdMJyxcclxuICAgICdcXHUwMTNGJzogJ0wnLFxyXG4gICAgJ1xcdTAxMzknOiAnTCcsXHJcbiAgICAnXFx1MDEzRCc6ICdMJyxcclxuICAgICdcXHUxRTM2JzogJ0wnLFxyXG4gICAgJ1xcdTFFMzgnOiAnTCcsXHJcbiAgICAnXFx1MDEzQic6ICdMJyxcclxuICAgICdcXHUxRTNDJzogJ0wnLFxyXG4gICAgJ1xcdTFFM0EnOiAnTCcsXHJcbiAgICAnXFx1MDE0MSc6ICdMJyxcclxuICAgICdcXHUwMjNEJzogJ0wnLFxyXG4gICAgJ1xcdTJDNjInOiAnTCcsXHJcbiAgICAnXFx1MkM2MCc6ICdMJyxcclxuICAgICdcXHVBNzQ4JzogJ0wnLFxyXG4gICAgJ1xcdUE3NDYnOiAnTCcsXHJcbiAgICAnXFx1QTc4MCc6ICdMJyxcclxuICAgICdcXHUwMUM3JzogJ0xKJyxcclxuICAgICdcXHUwMUM4JzogJ0xqJyxcclxuICAgICdcXHUyNEMyJzogJ00nLFxyXG4gICAgJ1xcdUZGMkQnOiAnTScsXHJcbiAgICAnXFx1MUUzRSc6ICdNJyxcclxuICAgICdcXHUxRTQwJzogJ00nLFxyXG4gICAgJ1xcdTFFNDInOiAnTScsXHJcbiAgICAnXFx1MkM2RSc6ICdNJyxcclxuICAgICdcXHUwMTlDJzogJ00nLFxyXG4gICAgJ1xcdTI0QzMnOiAnTicsXHJcbiAgICAnXFx1RkYyRSc6ICdOJyxcclxuICAgICdcXHUwMUY4JzogJ04nLFxyXG4gICAgJ1xcdTAxNDMnOiAnTicsXHJcbiAgICAnXFx1MDBEMSc6ICdOJyxcclxuICAgICdcXHUxRTQ0JzogJ04nLFxyXG4gICAgJ1xcdTAxNDcnOiAnTicsXHJcbiAgICAnXFx1MUU0Nic6ICdOJyxcclxuICAgICdcXHUwMTQ1JzogJ04nLFxyXG4gICAgJ1xcdTFFNEEnOiAnTicsXHJcbiAgICAnXFx1MUU0OCc6ICdOJyxcclxuICAgICdcXHUwMjIwJzogJ04nLFxyXG4gICAgJ1xcdTAxOUQnOiAnTicsXHJcbiAgICAnXFx1QTc5MCc6ICdOJyxcclxuICAgICdcXHVBN0E0JzogJ04nLFxyXG4gICAgJ1xcdTAxQ0EnOiAnTkonLFxyXG4gICAgJ1xcdTAxQ0InOiAnTmonLFxyXG4gICAgJ1xcdTI0QzQnOiAnTycsXHJcbiAgICAnXFx1RkYyRic6ICdPJyxcclxuICAgICdcXHUwMEQyJzogJ08nLFxyXG4gICAgJ1xcdTAwRDMnOiAnTycsXHJcbiAgICAnXFx1MDBENCc6ICdPJyxcclxuICAgICdcXHUxRUQyJzogJ08nLFxyXG4gICAgJ1xcdTFFRDAnOiAnTycsXHJcbiAgICAnXFx1MUVENic6ICdPJyxcclxuICAgICdcXHUxRUQ0JzogJ08nLFxyXG4gICAgJ1xcdTAwRDUnOiAnTycsXHJcbiAgICAnXFx1MUU0Qyc6ICdPJyxcclxuICAgICdcXHUwMjJDJzogJ08nLFxyXG4gICAgJ1xcdTFFNEUnOiAnTycsXHJcbiAgICAnXFx1MDE0Qyc6ICdPJyxcclxuICAgICdcXHUxRTUwJzogJ08nLFxyXG4gICAgJ1xcdTFFNTInOiAnTycsXHJcbiAgICAnXFx1MDE0RSc6ICdPJyxcclxuICAgICdcXHUwMjJFJzogJ08nLFxyXG4gICAgJ1xcdTAyMzAnOiAnTycsXHJcbiAgICAnXFx1MDBENic6ICdPJyxcclxuICAgICdcXHUwMjJBJzogJ08nLFxyXG4gICAgJ1xcdTFFQ0UnOiAnTycsXHJcbiAgICAnXFx1MDE1MCc6ICdPJyxcclxuICAgICdcXHUwMUQxJzogJ08nLFxyXG4gICAgJ1xcdTAyMEMnOiAnTycsXHJcbiAgICAnXFx1MDIwRSc6ICdPJyxcclxuICAgICdcXHUwMUEwJzogJ08nLFxyXG4gICAgJ1xcdTFFREMnOiAnTycsXHJcbiAgICAnXFx1MUVEQSc6ICdPJyxcclxuICAgICdcXHUxRUUwJzogJ08nLFxyXG4gICAgJ1xcdTFFREUnOiAnTycsXHJcbiAgICAnXFx1MUVFMic6ICdPJyxcclxuICAgICdcXHUxRUNDJzogJ08nLFxyXG4gICAgJ1xcdTFFRDgnOiAnTycsXHJcbiAgICAnXFx1MDFFQSc6ICdPJyxcclxuICAgICdcXHUwMUVDJzogJ08nLFxyXG4gICAgJ1xcdTAwRDgnOiAnTycsXHJcbiAgICAnXFx1MDFGRSc6ICdPJyxcclxuICAgICdcXHUwMTg2JzogJ08nLFxyXG4gICAgJ1xcdTAxOUYnOiAnTycsXHJcbiAgICAnXFx1QTc0QSc6ICdPJyxcclxuICAgICdcXHVBNzRDJzogJ08nLFxyXG4gICAgJ1xcdTAxQTInOiAnT0knLFxyXG4gICAgJ1xcdUE3NEUnOiAnT08nLFxyXG4gICAgJ1xcdTAyMjInOiAnT1UnLFxyXG4gICAgJ1xcdTI0QzUnOiAnUCcsXHJcbiAgICAnXFx1RkYzMCc6ICdQJyxcclxuICAgICdcXHUxRTU0JzogJ1AnLFxyXG4gICAgJ1xcdTFFNTYnOiAnUCcsXHJcbiAgICAnXFx1MDFBNCc6ICdQJyxcclxuICAgICdcXHUyQzYzJzogJ1AnLFxyXG4gICAgJ1xcdUE3NTAnOiAnUCcsXHJcbiAgICAnXFx1QTc1Mic6ICdQJyxcclxuICAgICdcXHVBNzU0JzogJ1AnLFxyXG4gICAgJ1xcdTI0QzYnOiAnUScsXHJcbiAgICAnXFx1RkYzMSc6ICdRJyxcclxuICAgICdcXHVBNzU2JzogJ1EnLFxyXG4gICAgJ1xcdUE3NTgnOiAnUScsXHJcbiAgICAnXFx1MDI0QSc6ICdRJyxcclxuICAgICdcXHUyNEM3JzogJ1InLFxyXG4gICAgJ1xcdUZGMzInOiAnUicsXHJcbiAgICAnXFx1MDE1NCc6ICdSJyxcclxuICAgICdcXHUxRTU4JzogJ1InLFxyXG4gICAgJ1xcdTAxNTgnOiAnUicsXHJcbiAgICAnXFx1MDIxMCc6ICdSJyxcclxuICAgICdcXHUwMjEyJzogJ1InLFxyXG4gICAgJ1xcdTFFNUEnOiAnUicsXHJcbiAgICAnXFx1MUU1Qyc6ICdSJyxcclxuICAgICdcXHUwMTU2JzogJ1InLFxyXG4gICAgJ1xcdTFFNUUnOiAnUicsXHJcbiAgICAnXFx1MDI0Qyc6ICdSJyxcclxuICAgICdcXHUyQzY0JzogJ1InLFxyXG4gICAgJ1xcdUE3NUEnOiAnUicsXHJcbiAgICAnXFx1QTdBNic6ICdSJyxcclxuICAgICdcXHVBNzgyJzogJ1InLFxyXG4gICAgJ1xcdTI0QzgnOiAnUycsXHJcbiAgICAnXFx1RkYzMyc6ICdTJyxcclxuICAgICdcXHUxRTlFJzogJ1MnLFxyXG4gICAgJ1xcdTAxNUEnOiAnUycsXHJcbiAgICAnXFx1MUU2NCc6ICdTJyxcclxuICAgICdcXHUwMTVDJzogJ1MnLFxyXG4gICAgJ1xcdTFFNjAnOiAnUycsXHJcbiAgICAnXFx1MDE2MCc6ICdTJyxcclxuICAgICdcXHUxRTY2JzogJ1MnLFxyXG4gICAgJ1xcdTFFNjInOiAnUycsXHJcbiAgICAnXFx1MUU2OCc6ICdTJyxcclxuICAgICdcXHUwMjE4JzogJ1MnLFxyXG4gICAgJ1xcdTAxNUUnOiAnUycsXHJcbiAgICAnXFx1MkM3RSc6ICdTJyxcclxuICAgICdcXHVBN0E4JzogJ1MnLFxyXG4gICAgJ1xcdUE3ODQnOiAnUycsXHJcbiAgICAnXFx1MjRDOSc6ICdUJyxcclxuICAgICdcXHVGRjM0JzogJ1QnLFxyXG4gICAgJ1xcdTFFNkEnOiAnVCcsXHJcbiAgICAnXFx1MDE2NCc6ICdUJyxcclxuICAgICdcXHUxRTZDJzogJ1QnLFxyXG4gICAgJ1xcdTAyMUEnOiAnVCcsXHJcbiAgICAnXFx1MDE2Mic6ICdUJyxcclxuICAgICdcXHUxRTcwJzogJ1QnLFxyXG4gICAgJ1xcdTFFNkUnOiAnVCcsXHJcbiAgICAnXFx1MDE2Nic6ICdUJyxcclxuICAgICdcXHUwMUFDJzogJ1QnLFxyXG4gICAgJ1xcdTAxQUUnOiAnVCcsXHJcbiAgICAnXFx1MDIzRSc6ICdUJyxcclxuICAgICdcXHVBNzg2JzogJ1QnLFxyXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxyXG4gICAgJ1xcdTI0Q0EnOiAnVScsXHJcbiAgICAnXFx1RkYzNSc6ICdVJyxcclxuICAgICdcXHUwMEQ5JzogJ1UnLFxyXG4gICAgJ1xcdTAwREEnOiAnVScsXHJcbiAgICAnXFx1MDBEQic6ICdVJyxcclxuICAgICdcXHUwMTY4JzogJ1UnLFxyXG4gICAgJ1xcdTFFNzgnOiAnVScsXHJcbiAgICAnXFx1MDE2QSc6ICdVJyxcclxuICAgICdcXHUxRTdBJzogJ1UnLFxyXG4gICAgJ1xcdTAxNkMnOiAnVScsXHJcbiAgICAnXFx1MDBEQyc6ICdVJyxcclxuICAgICdcXHUwMURCJzogJ1UnLFxyXG4gICAgJ1xcdTAxRDcnOiAnVScsXHJcbiAgICAnXFx1MDFENSc6ICdVJyxcclxuICAgICdcXHUwMUQ5JzogJ1UnLFxyXG4gICAgJ1xcdTFFRTYnOiAnVScsXHJcbiAgICAnXFx1MDE2RSc6ICdVJyxcclxuICAgICdcXHUwMTcwJzogJ1UnLFxyXG4gICAgJ1xcdTAxRDMnOiAnVScsXHJcbiAgICAnXFx1MDIxNCc6ICdVJyxcclxuICAgICdcXHUwMjE2JzogJ1UnLFxyXG4gICAgJ1xcdTAxQUYnOiAnVScsXHJcbiAgICAnXFx1MUVFQSc6ICdVJyxcclxuICAgICdcXHUxRUU4JzogJ1UnLFxyXG4gICAgJ1xcdTFFRUUnOiAnVScsXHJcbiAgICAnXFx1MUVFQyc6ICdVJyxcclxuICAgICdcXHUxRUYwJzogJ1UnLFxyXG4gICAgJ1xcdTFFRTQnOiAnVScsXHJcbiAgICAnXFx1MUU3Mic6ICdVJyxcclxuICAgICdcXHUwMTcyJzogJ1UnLFxyXG4gICAgJ1xcdTFFNzYnOiAnVScsXHJcbiAgICAnXFx1MUU3NCc6ICdVJyxcclxuICAgICdcXHUwMjQ0JzogJ1UnLFxyXG4gICAgJ1xcdTI0Q0InOiAnVicsXHJcbiAgICAnXFx1RkYzNic6ICdWJyxcclxuICAgICdcXHUxRTdDJzogJ1YnLFxyXG4gICAgJ1xcdTFFN0UnOiAnVicsXHJcbiAgICAnXFx1MDFCMic6ICdWJyxcclxuICAgICdcXHVBNzVFJzogJ1YnLFxyXG4gICAgJ1xcdTAyNDUnOiAnVicsXHJcbiAgICAnXFx1QTc2MCc6ICdWWScsXHJcbiAgICAnXFx1MjRDQyc6ICdXJyxcclxuICAgICdcXHVGRjM3JzogJ1cnLFxyXG4gICAgJ1xcdTFFODAnOiAnVycsXHJcbiAgICAnXFx1MUU4Mic6ICdXJyxcclxuICAgICdcXHUwMTc0JzogJ1cnLFxyXG4gICAgJ1xcdTFFODYnOiAnVycsXHJcbiAgICAnXFx1MUU4NCc6ICdXJyxcclxuICAgICdcXHUxRTg4JzogJ1cnLFxyXG4gICAgJ1xcdTJDNzInOiAnVycsXHJcbiAgICAnXFx1MjRDRCc6ICdYJyxcclxuICAgICdcXHVGRjM4JzogJ1gnLFxyXG4gICAgJ1xcdTFFOEEnOiAnWCcsXHJcbiAgICAnXFx1MUU4Qyc6ICdYJyxcclxuICAgICdcXHUyNENFJzogJ1knLFxyXG4gICAgJ1xcdUZGMzknOiAnWScsXHJcbiAgICAnXFx1MUVGMic6ICdZJyxcclxuICAgICdcXHUwMEREJzogJ1knLFxyXG4gICAgJ1xcdTAxNzYnOiAnWScsXHJcbiAgICAnXFx1MUVGOCc6ICdZJyxcclxuICAgICdcXHUwMjMyJzogJ1knLFxyXG4gICAgJ1xcdTFFOEUnOiAnWScsXHJcbiAgICAnXFx1MDE3OCc6ICdZJyxcclxuICAgICdcXHUxRUY2JzogJ1knLFxyXG4gICAgJ1xcdTFFRjQnOiAnWScsXHJcbiAgICAnXFx1MDFCMyc6ICdZJyxcclxuICAgICdcXHUwMjRFJzogJ1knLFxyXG4gICAgJ1xcdTFFRkUnOiAnWScsXHJcbiAgICAnXFx1MjRDRic6ICdaJyxcclxuICAgICdcXHVGRjNBJzogJ1onLFxyXG4gICAgJ1xcdTAxNzknOiAnWicsXHJcbiAgICAnXFx1MUU5MCc6ICdaJyxcclxuICAgICdcXHUwMTdCJzogJ1onLFxyXG4gICAgJ1xcdTAxN0QnOiAnWicsXHJcbiAgICAnXFx1MUU5Mic6ICdaJyxcclxuICAgICdcXHUxRTk0JzogJ1onLFxyXG4gICAgJ1xcdTAxQjUnOiAnWicsXHJcbiAgICAnXFx1MDIyNCc6ICdaJyxcclxuICAgICdcXHUyQzdGJzogJ1onLFxyXG4gICAgJ1xcdTJDNkInOiAnWicsXHJcbiAgICAnXFx1QTc2Mic6ICdaJyxcclxuICAgICdcXHUyNEQwJzogJ2EnLFxyXG4gICAgJ1xcdUZGNDEnOiAnYScsXHJcbiAgICAnXFx1MUU5QSc6ICdhJyxcclxuICAgICdcXHUwMEUwJzogJ2EnLFxyXG4gICAgJ1xcdTAwRTEnOiAnYScsXHJcbiAgICAnXFx1MDBFMic6ICdhJyxcclxuICAgICdcXHUxRUE3JzogJ2EnLFxyXG4gICAgJ1xcdTFFQTUnOiAnYScsXHJcbiAgICAnXFx1MUVBQic6ICdhJyxcclxuICAgICdcXHUxRUE5JzogJ2EnLFxyXG4gICAgJ1xcdTAwRTMnOiAnYScsXHJcbiAgICAnXFx1MDEwMSc6ICdhJyxcclxuICAgICdcXHUwMTAzJzogJ2EnLFxyXG4gICAgJ1xcdTFFQjEnOiAnYScsXHJcbiAgICAnXFx1MUVBRic6ICdhJyxcclxuICAgICdcXHUxRUI1JzogJ2EnLFxyXG4gICAgJ1xcdTFFQjMnOiAnYScsXHJcbiAgICAnXFx1MDIyNyc6ICdhJyxcclxuICAgICdcXHUwMUUxJzogJ2EnLFxyXG4gICAgJ1xcdTAwRTQnOiAnYScsXHJcbiAgICAnXFx1MDFERic6ICdhJyxcclxuICAgICdcXHUxRUEzJzogJ2EnLFxyXG4gICAgJ1xcdTAwRTUnOiAnYScsXHJcbiAgICAnXFx1MDFGQic6ICdhJyxcclxuICAgICdcXHUwMUNFJzogJ2EnLFxyXG4gICAgJ1xcdTAyMDEnOiAnYScsXHJcbiAgICAnXFx1MDIwMyc6ICdhJyxcclxuICAgICdcXHUxRUExJzogJ2EnLFxyXG4gICAgJ1xcdTFFQUQnOiAnYScsXHJcbiAgICAnXFx1MUVCNyc6ICdhJyxcclxuICAgICdcXHUxRTAxJzogJ2EnLFxyXG4gICAgJ1xcdTAxMDUnOiAnYScsXHJcbiAgICAnXFx1MkM2NSc6ICdhJyxcclxuICAgICdcXHUwMjUwJzogJ2EnLFxyXG4gICAgJ1xcdUE3MzMnOiAnYWEnLFxyXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxyXG4gICAgJ1xcdTAxRkQnOiAnYWUnLFxyXG4gICAgJ1xcdTAxRTMnOiAnYWUnLFxyXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxyXG4gICAgJ1xcdUE3MzcnOiAnYXUnLFxyXG4gICAgJ1xcdUE3MzknOiAnYXYnLFxyXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxyXG4gICAgJ1xcdUE3M0QnOiAnYXknLFxyXG4gICAgJ1xcdTI0RDEnOiAnYicsXHJcbiAgICAnXFx1RkY0Mic6ICdiJyxcclxuICAgICdcXHUxRTAzJzogJ2InLFxyXG4gICAgJ1xcdTFFMDUnOiAnYicsXHJcbiAgICAnXFx1MUUwNyc6ICdiJyxcclxuICAgICdcXHUwMTgwJzogJ2InLFxyXG4gICAgJ1xcdTAxODMnOiAnYicsXHJcbiAgICAnXFx1MDI1Myc6ICdiJyxcclxuICAgICdcXHUyNEQyJzogJ2MnLFxyXG4gICAgJ1xcdUZGNDMnOiAnYycsXHJcbiAgICAnXFx1MDEwNyc6ICdjJyxcclxuICAgICdcXHUwMTA5JzogJ2MnLFxyXG4gICAgJ1xcdTAxMEInOiAnYycsXHJcbiAgICAnXFx1MDEwRCc6ICdjJyxcclxuICAgICdcXHUwMEU3JzogJ2MnLFxyXG4gICAgJ1xcdTFFMDknOiAnYycsXHJcbiAgICAnXFx1MDE4OCc6ICdjJyxcclxuICAgICdcXHUwMjNDJzogJ2MnLFxyXG4gICAgJ1xcdUE3M0YnOiAnYycsXHJcbiAgICAnXFx1MjE4NCc6ICdjJyxcclxuICAgICdcXHUyNEQzJzogJ2QnLFxyXG4gICAgJ1xcdUZGNDQnOiAnZCcsXHJcbiAgICAnXFx1MUUwQic6ICdkJyxcclxuICAgICdcXHUwMTBGJzogJ2QnLFxyXG4gICAgJ1xcdTFFMEQnOiAnZCcsXHJcbiAgICAnXFx1MUUxMSc6ICdkJyxcclxuICAgICdcXHUxRTEzJzogJ2QnLFxyXG4gICAgJ1xcdTFFMEYnOiAnZCcsXHJcbiAgICAnXFx1MDExMSc6ICdkJyxcclxuICAgICdcXHUwMThDJzogJ2QnLFxyXG4gICAgJ1xcdTAyNTYnOiAnZCcsXHJcbiAgICAnXFx1MDI1Nyc6ICdkJyxcclxuICAgICdcXHVBNzdBJzogJ2QnLFxyXG4gICAgJ1xcdTAxRjMnOiAnZHonLFxyXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxyXG4gICAgJ1xcdTI0RDQnOiAnZScsXHJcbiAgICAnXFx1RkY0NSc6ICdlJyxcclxuICAgICdcXHUwMEU4JzogJ2UnLFxyXG4gICAgJ1xcdTAwRTknOiAnZScsXHJcbiAgICAnXFx1MDBFQSc6ICdlJyxcclxuICAgICdcXHUxRUMxJzogJ2UnLFxyXG4gICAgJ1xcdTFFQkYnOiAnZScsXHJcbiAgICAnXFx1MUVDNSc6ICdlJyxcclxuICAgICdcXHUxRUMzJzogJ2UnLFxyXG4gICAgJ1xcdTFFQkQnOiAnZScsXHJcbiAgICAnXFx1MDExMyc6ICdlJyxcclxuICAgICdcXHUxRTE1JzogJ2UnLFxyXG4gICAgJ1xcdTFFMTcnOiAnZScsXHJcbiAgICAnXFx1MDExNSc6ICdlJyxcclxuICAgICdcXHUwMTE3JzogJ2UnLFxyXG4gICAgJ1xcdTAwRUInOiAnZScsXHJcbiAgICAnXFx1MUVCQic6ICdlJyxcclxuICAgICdcXHUwMTFCJzogJ2UnLFxyXG4gICAgJ1xcdTAyMDUnOiAnZScsXHJcbiAgICAnXFx1MDIwNyc6ICdlJyxcclxuICAgICdcXHUxRUI5JzogJ2UnLFxyXG4gICAgJ1xcdTFFQzcnOiAnZScsXHJcbiAgICAnXFx1MDIyOSc6ICdlJyxcclxuICAgICdcXHUxRTFEJzogJ2UnLFxyXG4gICAgJ1xcdTAxMTknOiAnZScsXHJcbiAgICAnXFx1MUUxOSc6ICdlJyxcclxuICAgICdcXHUxRTFCJzogJ2UnLFxyXG4gICAgJ1xcdTAyNDcnOiAnZScsXHJcbiAgICAnXFx1MDI1Qic6ICdlJyxcclxuICAgICdcXHUwMUREJzogJ2UnLFxyXG4gICAgJ1xcdTI0RDUnOiAnZicsXHJcbiAgICAnXFx1RkY0Nic6ICdmJyxcclxuICAgICdcXHUxRTFGJzogJ2YnLFxyXG4gICAgJ1xcdTAxOTInOiAnZicsXHJcbiAgICAnXFx1QTc3Qyc6ICdmJyxcclxuICAgICdcXHUyNEQ2JzogJ2cnLFxyXG4gICAgJ1xcdUZGNDcnOiAnZycsXHJcbiAgICAnXFx1MDFGNSc6ICdnJyxcclxuICAgICdcXHUwMTFEJzogJ2cnLFxyXG4gICAgJ1xcdTFFMjEnOiAnZycsXHJcbiAgICAnXFx1MDExRic6ICdnJyxcclxuICAgICdcXHUwMTIxJzogJ2cnLFxyXG4gICAgJ1xcdTAxRTcnOiAnZycsXHJcbiAgICAnXFx1MDEyMyc6ICdnJyxcclxuICAgICdcXHUwMUU1JzogJ2cnLFxyXG4gICAgJ1xcdTAyNjAnOiAnZycsXHJcbiAgICAnXFx1QTdBMSc6ICdnJyxcclxuICAgICdcXHUxRDc5JzogJ2cnLFxyXG4gICAgJ1xcdUE3N0YnOiAnZycsXHJcbiAgICAnXFx1MjRENyc6ICdoJyxcclxuICAgICdcXHVGRjQ4JzogJ2gnLFxyXG4gICAgJ1xcdTAxMjUnOiAnaCcsXHJcbiAgICAnXFx1MUUyMyc6ICdoJyxcclxuICAgICdcXHUxRTI3JzogJ2gnLFxyXG4gICAgJ1xcdTAyMUYnOiAnaCcsXHJcbiAgICAnXFx1MUUyNSc6ICdoJyxcclxuICAgICdcXHUxRTI5JzogJ2gnLFxyXG4gICAgJ1xcdTFFMkInOiAnaCcsXHJcbiAgICAnXFx1MUU5Nic6ICdoJyxcclxuICAgICdcXHUwMTI3JzogJ2gnLFxyXG4gICAgJ1xcdTJDNjgnOiAnaCcsXHJcbiAgICAnXFx1MkM3Nic6ICdoJyxcclxuICAgICdcXHUwMjY1JzogJ2gnLFxyXG4gICAgJ1xcdTAxOTUnOiAnaHYnLFxyXG4gICAgJ1xcdTI0RDgnOiAnaScsXHJcbiAgICAnXFx1RkY0OSc6ICdpJyxcclxuICAgICdcXHUwMEVDJzogJ2knLFxyXG4gICAgJ1xcdTAwRUQnOiAnaScsXHJcbiAgICAnXFx1MDBFRSc6ICdpJyxcclxuICAgICdcXHUwMTI5JzogJ2knLFxyXG4gICAgJ1xcdTAxMkInOiAnaScsXHJcbiAgICAnXFx1MDEyRCc6ICdpJyxcclxuICAgICdcXHUwMEVGJzogJ2knLFxyXG4gICAgJ1xcdTFFMkYnOiAnaScsXHJcbiAgICAnXFx1MUVDOSc6ICdpJyxcclxuICAgICdcXHUwMUQwJzogJ2knLFxyXG4gICAgJ1xcdTAyMDknOiAnaScsXHJcbiAgICAnXFx1MDIwQic6ICdpJyxcclxuICAgICdcXHUxRUNCJzogJ2knLFxyXG4gICAgJ1xcdTAxMkYnOiAnaScsXHJcbiAgICAnXFx1MUUyRCc6ICdpJyxcclxuICAgICdcXHUwMjY4JzogJ2knLFxyXG4gICAgJ1xcdTAxMzEnOiAnaScsXHJcbiAgICAnXFx1MjREOSc6ICdqJyxcclxuICAgICdcXHVGRjRBJzogJ2onLFxyXG4gICAgJ1xcdTAxMzUnOiAnaicsXHJcbiAgICAnXFx1MDFGMCc6ICdqJyxcclxuICAgICdcXHUwMjQ5JzogJ2onLFxyXG4gICAgJ1xcdTI0REEnOiAnaycsXHJcbiAgICAnXFx1RkY0Qic6ICdrJyxcclxuICAgICdcXHUxRTMxJzogJ2snLFxyXG4gICAgJ1xcdTAxRTknOiAnaycsXHJcbiAgICAnXFx1MUUzMyc6ICdrJyxcclxuICAgICdcXHUwMTM3JzogJ2snLFxyXG4gICAgJ1xcdTFFMzUnOiAnaycsXHJcbiAgICAnXFx1MDE5OSc6ICdrJyxcclxuICAgICdcXHUyQzZBJzogJ2snLFxyXG4gICAgJ1xcdUE3NDEnOiAnaycsXHJcbiAgICAnXFx1QTc0Myc6ICdrJyxcclxuICAgICdcXHVBNzQ1JzogJ2snLFxyXG4gICAgJ1xcdUE3QTMnOiAnaycsXHJcbiAgICAnXFx1MjREQic6ICdsJyxcclxuICAgICdcXHVGRjRDJzogJ2wnLFxyXG4gICAgJ1xcdTAxNDAnOiAnbCcsXHJcbiAgICAnXFx1MDEzQSc6ICdsJyxcclxuICAgICdcXHUwMTNFJzogJ2wnLFxyXG4gICAgJ1xcdTFFMzcnOiAnbCcsXHJcbiAgICAnXFx1MUUzOSc6ICdsJyxcclxuICAgICdcXHUwMTNDJzogJ2wnLFxyXG4gICAgJ1xcdTFFM0QnOiAnbCcsXHJcbiAgICAnXFx1MUUzQic6ICdsJyxcclxuICAgICdcXHUwMTdGJzogJ2wnLFxyXG4gICAgJ1xcdTAxNDInOiAnbCcsXHJcbiAgICAnXFx1MDE5QSc6ICdsJyxcclxuICAgICdcXHUwMjZCJzogJ2wnLFxyXG4gICAgJ1xcdTJDNjEnOiAnbCcsXHJcbiAgICAnXFx1QTc0OSc6ICdsJyxcclxuICAgICdcXHVBNzgxJzogJ2wnLFxyXG4gICAgJ1xcdUE3NDcnOiAnbCcsXHJcbiAgICAnXFx1MDFDOSc6ICdsaicsXHJcbiAgICAnXFx1MjREQyc6ICdtJyxcclxuICAgICdcXHVGRjREJzogJ20nLFxyXG4gICAgJ1xcdTFFM0YnOiAnbScsXHJcbiAgICAnXFx1MUU0MSc6ICdtJyxcclxuICAgICdcXHUxRTQzJzogJ20nLFxyXG4gICAgJ1xcdTAyNzEnOiAnbScsXHJcbiAgICAnXFx1MDI2Ric6ICdtJyxcclxuICAgICdcXHUyNEREJzogJ24nLFxyXG4gICAgJ1xcdUZGNEUnOiAnbicsXHJcbiAgICAnXFx1MDFGOSc6ICduJyxcclxuICAgICdcXHUwMTQ0JzogJ24nLFxyXG4gICAgJ1xcdTAwRjEnOiAnbicsXHJcbiAgICAnXFx1MUU0NSc6ICduJyxcclxuICAgICdcXHUwMTQ4JzogJ24nLFxyXG4gICAgJ1xcdTFFNDcnOiAnbicsXHJcbiAgICAnXFx1MDE0Nic6ICduJyxcclxuICAgICdcXHUxRTRCJzogJ24nLFxyXG4gICAgJ1xcdTFFNDknOiAnbicsXHJcbiAgICAnXFx1MDE5RSc6ICduJyxcclxuICAgICdcXHUwMjcyJzogJ24nLFxyXG4gICAgJ1xcdTAxNDknOiAnbicsXHJcbiAgICAnXFx1QTc5MSc6ICduJyxcclxuICAgICdcXHVBN0E1JzogJ24nLFxyXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxyXG4gICAgJ1xcdTI0REUnOiAnbycsXHJcbiAgICAnXFx1RkY0Ric6ICdvJyxcclxuICAgICdcXHUwMEYyJzogJ28nLFxyXG4gICAgJ1xcdTAwRjMnOiAnbycsXHJcbiAgICAnXFx1MDBGNCc6ICdvJyxcclxuICAgICdcXHUxRUQzJzogJ28nLFxyXG4gICAgJ1xcdTFFRDEnOiAnbycsXHJcbiAgICAnXFx1MUVENyc6ICdvJyxcclxuICAgICdcXHUxRUQ1JzogJ28nLFxyXG4gICAgJ1xcdTAwRjUnOiAnbycsXHJcbiAgICAnXFx1MUU0RCc6ICdvJyxcclxuICAgICdcXHUwMjJEJzogJ28nLFxyXG4gICAgJ1xcdTFFNEYnOiAnbycsXHJcbiAgICAnXFx1MDE0RCc6ICdvJyxcclxuICAgICdcXHUxRTUxJzogJ28nLFxyXG4gICAgJ1xcdTFFNTMnOiAnbycsXHJcbiAgICAnXFx1MDE0Ric6ICdvJyxcclxuICAgICdcXHUwMjJGJzogJ28nLFxyXG4gICAgJ1xcdTAyMzEnOiAnbycsXHJcbiAgICAnXFx1MDBGNic6ICdvJyxcclxuICAgICdcXHUwMjJCJzogJ28nLFxyXG4gICAgJ1xcdTFFQ0YnOiAnbycsXHJcbiAgICAnXFx1MDE1MSc6ICdvJyxcclxuICAgICdcXHUwMUQyJzogJ28nLFxyXG4gICAgJ1xcdTAyMEQnOiAnbycsXHJcbiAgICAnXFx1MDIwRic6ICdvJyxcclxuICAgICdcXHUwMUExJzogJ28nLFxyXG4gICAgJ1xcdTFFREQnOiAnbycsXHJcbiAgICAnXFx1MUVEQic6ICdvJyxcclxuICAgICdcXHUxRUUxJzogJ28nLFxyXG4gICAgJ1xcdTFFREYnOiAnbycsXHJcbiAgICAnXFx1MUVFMyc6ICdvJyxcclxuICAgICdcXHUxRUNEJzogJ28nLFxyXG4gICAgJ1xcdTFFRDknOiAnbycsXHJcbiAgICAnXFx1MDFFQic6ICdvJyxcclxuICAgICdcXHUwMUVEJzogJ28nLFxyXG4gICAgJ1xcdTAwRjgnOiAnbycsXHJcbiAgICAnXFx1MDFGRic6ICdvJyxcclxuICAgICdcXHUwMjU0JzogJ28nLFxyXG4gICAgJ1xcdUE3NEInOiAnbycsXHJcbiAgICAnXFx1QTc0RCc6ICdvJyxcclxuICAgICdcXHUwMjc1JzogJ28nLFxyXG4gICAgJ1xcdTAxQTMnOiAnb2knLFxyXG4gICAgJ1xcdTAyMjMnOiAnb3UnLFxyXG4gICAgJ1xcdUE3NEYnOiAnb28nLFxyXG4gICAgJ1xcdTI0REYnOiAncCcsXHJcbiAgICAnXFx1RkY1MCc6ICdwJyxcclxuICAgICdcXHUxRTU1JzogJ3AnLFxyXG4gICAgJ1xcdTFFNTcnOiAncCcsXHJcbiAgICAnXFx1MDFBNSc6ICdwJyxcclxuICAgICdcXHUxRDdEJzogJ3AnLFxyXG4gICAgJ1xcdUE3NTEnOiAncCcsXHJcbiAgICAnXFx1QTc1Myc6ICdwJyxcclxuICAgICdcXHVBNzU1JzogJ3AnLFxyXG4gICAgJ1xcdTI0RTAnOiAncScsXHJcbiAgICAnXFx1RkY1MSc6ICdxJyxcclxuICAgICdcXHUwMjRCJzogJ3EnLFxyXG4gICAgJ1xcdUE3NTcnOiAncScsXHJcbiAgICAnXFx1QTc1OSc6ICdxJyxcclxuICAgICdcXHUyNEUxJzogJ3InLFxyXG4gICAgJ1xcdUZGNTInOiAncicsXHJcbiAgICAnXFx1MDE1NSc6ICdyJyxcclxuICAgICdcXHUxRTU5JzogJ3InLFxyXG4gICAgJ1xcdTAxNTknOiAncicsXHJcbiAgICAnXFx1MDIxMSc6ICdyJyxcclxuICAgICdcXHUwMjEzJzogJ3InLFxyXG4gICAgJ1xcdTFFNUInOiAncicsXHJcbiAgICAnXFx1MUU1RCc6ICdyJyxcclxuICAgICdcXHUwMTU3JzogJ3InLFxyXG4gICAgJ1xcdTFFNUYnOiAncicsXHJcbiAgICAnXFx1MDI0RCc6ICdyJyxcclxuICAgICdcXHUwMjdEJzogJ3InLFxyXG4gICAgJ1xcdUE3NUInOiAncicsXHJcbiAgICAnXFx1QTdBNyc6ICdyJyxcclxuICAgICdcXHVBNzgzJzogJ3InLFxyXG4gICAgJ1xcdTI0RTInOiAncycsXHJcbiAgICAnXFx1RkY1Myc6ICdzJyxcclxuICAgICdcXHUwMERGJzogJ3MnLFxyXG4gICAgJ1xcdTAxNUInOiAncycsXHJcbiAgICAnXFx1MUU2NSc6ICdzJyxcclxuICAgICdcXHUwMTVEJzogJ3MnLFxyXG4gICAgJ1xcdTFFNjEnOiAncycsXHJcbiAgICAnXFx1MDE2MSc6ICdzJyxcclxuICAgICdcXHUxRTY3JzogJ3MnLFxyXG4gICAgJ1xcdTFFNjMnOiAncycsXHJcbiAgICAnXFx1MUU2OSc6ICdzJyxcclxuICAgICdcXHUwMjE5JzogJ3MnLFxyXG4gICAgJ1xcdTAxNUYnOiAncycsXHJcbiAgICAnXFx1MDIzRic6ICdzJyxcclxuICAgICdcXHVBN0E5JzogJ3MnLFxyXG4gICAgJ1xcdUE3ODUnOiAncycsXHJcbiAgICAnXFx1MUU5Qic6ICdzJyxcclxuICAgICdcXHUyNEUzJzogJ3QnLFxyXG4gICAgJ1xcdUZGNTQnOiAndCcsXHJcbiAgICAnXFx1MUU2Qic6ICd0JyxcclxuICAgICdcXHUxRTk3JzogJ3QnLFxyXG4gICAgJ1xcdTAxNjUnOiAndCcsXHJcbiAgICAnXFx1MUU2RCc6ICd0JyxcclxuICAgICdcXHUwMjFCJzogJ3QnLFxyXG4gICAgJ1xcdTAxNjMnOiAndCcsXHJcbiAgICAnXFx1MUU3MSc6ICd0JyxcclxuICAgICdcXHUxRTZGJzogJ3QnLFxyXG4gICAgJ1xcdTAxNjcnOiAndCcsXHJcbiAgICAnXFx1MDFBRCc6ICd0JyxcclxuICAgICdcXHUwMjg4JzogJ3QnLFxyXG4gICAgJ1xcdTJDNjYnOiAndCcsXHJcbiAgICAnXFx1QTc4Nyc6ICd0JyxcclxuICAgICdcXHVBNzI5JzogJ3R6JyxcclxuICAgICdcXHUyNEU0JzogJ3UnLFxyXG4gICAgJ1xcdUZGNTUnOiAndScsXHJcbiAgICAnXFx1MDBGOSc6ICd1JyxcclxuICAgICdcXHUwMEZBJzogJ3UnLFxyXG4gICAgJ1xcdTAwRkInOiAndScsXHJcbiAgICAnXFx1MDE2OSc6ICd1JyxcclxuICAgICdcXHUxRTc5JzogJ3UnLFxyXG4gICAgJ1xcdTAxNkInOiAndScsXHJcbiAgICAnXFx1MUU3Qic6ICd1JyxcclxuICAgICdcXHUwMTZEJzogJ3UnLFxyXG4gICAgJ1xcdTAwRkMnOiAndScsXHJcbiAgICAnXFx1MDFEQyc6ICd1JyxcclxuICAgICdcXHUwMUQ4JzogJ3UnLFxyXG4gICAgJ1xcdTAxRDYnOiAndScsXHJcbiAgICAnXFx1MDFEQSc6ICd1JyxcclxuICAgICdcXHUxRUU3JzogJ3UnLFxyXG4gICAgJ1xcdTAxNkYnOiAndScsXHJcbiAgICAnXFx1MDE3MSc6ICd1JyxcclxuICAgICdcXHUwMUQ0JzogJ3UnLFxyXG4gICAgJ1xcdTAyMTUnOiAndScsXHJcbiAgICAnXFx1MDIxNyc6ICd1JyxcclxuICAgICdcXHUwMUIwJzogJ3UnLFxyXG4gICAgJ1xcdTFFRUInOiAndScsXHJcbiAgICAnXFx1MUVFOSc6ICd1JyxcclxuICAgICdcXHUxRUVGJzogJ3UnLFxyXG4gICAgJ1xcdTFFRUQnOiAndScsXHJcbiAgICAnXFx1MUVGMSc6ICd1JyxcclxuICAgICdcXHUxRUU1JzogJ3UnLFxyXG4gICAgJ1xcdTFFNzMnOiAndScsXHJcbiAgICAnXFx1MDE3Myc6ICd1JyxcclxuICAgICdcXHUxRTc3JzogJ3UnLFxyXG4gICAgJ1xcdTFFNzUnOiAndScsXHJcbiAgICAnXFx1MDI4OSc6ICd1JyxcclxuICAgICdcXHUyNEU1JzogJ3YnLFxyXG4gICAgJ1xcdUZGNTYnOiAndicsXHJcbiAgICAnXFx1MUU3RCc6ICd2JyxcclxuICAgICdcXHUxRTdGJzogJ3YnLFxyXG4gICAgJ1xcdTAyOEInOiAndicsXHJcbiAgICAnXFx1QTc1Ric6ICd2JyxcclxuICAgICdcXHUwMjhDJzogJ3YnLFxyXG4gICAgJ1xcdUE3NjEnOiAndnknLFxyXG4gICAgJ1xcdTI0RTYnOiAndycsXHJcbiAgICAnXFx1RkY1Nyc6ICd3JyxcclxuICAgICdcXHUxRTgxJzogJ3cnLFxyXG4gICAgJ1xcdTFFODMnOiAndycsXHJcbiAgICAnXFx1MDE3NSc6ICd3JyxcclxuICAgICdcXHUxRTg3JzogJ3cnLFxyXG4gICAgJ1xcdTFFODUnOiAndycsXHJcbiAgICAnXFx1MUU5OCc6ICd3JyxcclxuICAgICdcXHUxRTg5JzogJ3cnLFxyXG4gICAgJ1xcdTJDNzMnOiAndycsXHJcbiAgICAnXFx1MjRFNyc6ICd4JyxcclxuICAgICdcXHVGRjU4JzogJ3gnLFxyXG4gICAgJ1xcdTFFOEInOiAneCcsXHJcbiAgICAnXFx1MUU4RCc6ICd4JyxcclxuICAgICdcXHUyNEU4JzogJ3knLFxyXG4gICAgJ1xcdUZGNTknOiAneScsXHJcbiAgICAnXFx1MUVGMyc6ICd5JyxcclxuICAgICdcXHUwMEZEJzogJ3knLFxyXG4gICAgJ1xcdTAxNzcnOiAneScsXHJcbiAgICAnXFx1MUVGOSc6ICd5JyxcclxuICAgICdcXHUwMjMzJzogJ3knLFxyXG4gICAgJ1xcdTFFOEYnOiAneScsXHJcbiAgICAnXFx1MDBGRic6ICd5JyxcclxuICAgICdcXHUxRUY3JzogJ3knLFxyXG4gICAgJ1xcdTFFOTknOiAneScsXHJcbiAgICAnXFx1MUVGNSc6ICd5JyxcclxuICAgICdcXHUwMUI0JzogJ3knLFxyXG4gICAgJ1xcdTAyNEYnOiAneScsXHJcbiAgICAnXFx1MUVGRic6ICd5JyxcclxuICAgICdcXHUyNEU5JzogJ3onLFxyXG4gICAgJ1xcdUZGNUEnOiAneicsXHJcbiAgICAnXFx1MDE3QSc6ICd6JyxcclxuICAgICdcXHUxRTkxJzogJ3onLFxyXG4gICAgJ1xcdTAxN0MnOiAneicsXHJcbiAgICAnXFx1MDE3RSc6ICd6JyxcclxuICAgICdcXHUxRTkzJzogJ3onLFxyXG4gICAgJ1xcdTFFOTUnOiAneicsXHJcbiAgICAnXFx1MDFCNic6ICd6JyxcclxuICAgICdcXHUwMjI1JzogJ3onLFxyXG4gICAgJ1xcdTAyNDAnOiAneicsXHJcbiAgICAnXFx1MkM2Qyc6ICd6JyxcclxuICAgICdcXHVBNzYzJzogJ3onLFxyXG4gICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXHJcbiAgICAnXFx1MDM4OCc6ICdcXHUwMzk1JyxcclxuICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxyXG4gICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXHJcbiAgICAnXFx1MDNBQSc6ICdcXHUwMzk5JyxcclxuICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxyXG4gICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXHJcbiAgICAnXFx1MDNBQic6ICdcXHUwM0E1JyxcclxuICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxyXG4gICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXHJcbiAgICAnXFx1MDNBRCc6ICdcXHUwM0I1JyxcclxuICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxyXG4gICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXHJcbiAgICAnXFx1MDNDQSc6ICdcXHUwM0I5JyxcclxuICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxyXG4gICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXHJcbiAgICAnXFx1MDNDRCc6ICdcXHUwM0M1JyxcclxuICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxyXG4gICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXHJcbiAgICAnXFx1MDNDOSc6ICdcXHUwM0M5JyxcclxuICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBTcGVjaWFsQ2hhcnModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1hdGNoID0gKGE6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpYWNyaXRpY3NbYV0gfHwgYTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3RV0vZywgbWF0Y2gpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcclxuICAgIC8vIEZpcnN0IGNoYXJhY3RlciBpcyBhbiAnYScsIGl0J3MgZ29vZCBwcmFjdGljZSB0byB0YWcgaWQgdG8gYmVnaW4gd2l0aCBhIGxldHRlclxyXG4gICAgcmV0dXJuICdheHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4XS9nLCBmdW5jdGlvbiAoXykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgICAgY29uc3QgdmFsID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcclxuaW1wb3J0IHsgTmdTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzRnVuY3Rpb24sIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XHJcbmltcG9ydCB7IG5ld0lkIH0gZnJvbSAnLi9pZCc7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xyXG5cclxudHlwZSBPcHRpb25Hcm91cHMgPSBNYXA8c3RyaW5nLCBOZ09wdGlvbltdPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0xpc3Qge1xyXG5cclxuICAgIHByaXZhdGUgX2dyb3VwczogT3B0aW9uR3JvdXBzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX25nU2VsZWN0OiBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWwpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCBpdGVtcygpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCBmaWx0ZXJlZEl0ZW1zKCk6IE5nT3B0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hcmtlZEluZGV4ID0gLTE7XHJcblxyXG4gICAgZ2V0IG1hcmtlZEluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFya2VkSXRlbSgpOiBOZ09wdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmVkSXRlbXNbdGhpcy5fbWFya2VkSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBub0l0ZW1zVG9TZWxlY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1heEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlICYmIHRoaXMuX25nU2VsZWN0Lm1heFNlbGVjdGVkSXRlbXMgPD0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFzdFNlbGVjdGVkSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtcyhpdGVtczogYW55W10pIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMubWFwSXRlbShpdGVtLCBpbmRleCkpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IHRoaXMuX2dyb3VwQnkodGhpcy5faXRlbXMsIHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2ZsYXR0ZW4odGhpcy5fZ3JvdXBzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwcy5zZXQodW5kZWZpbmVkLCB0aGlzLl9pdGVtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFsuLi50aGlzLl9pdGVtc107XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgfHwgdGhpcy5tYXhJdGVtc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcclxuICAgICAgICBpZiAoIW11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGl0ZW0sIG11bHRpcGxlLCB0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXBBc01vZGVsKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIG11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTZWxlY3RlZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChpdGVtLCB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiBpc0RlZmluZWQoaXRlbS5pbmRleCkgJiYgdGhpcy5fbmdTZWxlY3QubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd1NlbGVjdGVkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kSXRlbSh2YWx1ZTogYW55KTogTmdPcHRpb24ge1xyXG4gICAgICAgIGxldCBmaW5kQnk6IChpdGVtOiBOZ09wdGlvbikgPT4gYm9vbGVhbjtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuY29tcGFyZVdpdGgpIHtcclxuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiB0aGlzLl9uZ1NlbGVjdC5jb21wYXJlV2l0aChpdGVtLnZhbHVlLCB2YWx1ZSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSkge1xyXG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+ICFpdGVtLmNoaWxkcmVuICYmIHRoaXMucmVzb2x2ZU5lc3RlZChpdGVtLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpID09PSB2YWx1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICFpdGVtLmNoaWxkcmVuICYmIGl0ZW0ubGFiZWwgJiYgaXRlbS5sYWJlbCA9PT0gdGhpcy5yZXNvbHZlTmVzdGVkKHZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5maW5kKGl0ZW0gPT4gZmluZEJ5KGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMubWFwSXRlbShpdGVtLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbS5tYXJrZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRCeUxhYmVsKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRlcm0gPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGVybSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKGl0ZW0ubGFiZWwpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYWJlbC5zdWJzdHIoMCwgdGVybS5sZW5ndGgpID09PSB0ZXJtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcmVkSXRlbXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRlcm0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IHRlcm0gOiBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnModGVybSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuIHx8IHRoaXMuX2RlZmF1bHRTZWFyY2hGbjtcclxuICAgICAgICBjb25zdCBoaWRlU2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20odGhpcy5fZ3JvdXBzLmtleXMoKSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9ncm91cHMuZ2V0KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlU2VsZWN0ZWQgJiYgKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50LnNlbGVjdGVkIHx8IGl0ZW0uc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hJdGVtID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gPyBpdGVtLnZhbHVlIDogaXRlbTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCh0ZXJtLCBzZWFyY2hJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2xhc3RdID0gbWF0Y2hlZEl0ZW1zLnNsaWNlKC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLl9pdGVtcy5maW5kKHggPT4geCA9PT0gbGFzdC5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChoZWFkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaCguLi5tYXRjaGVkSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0RmlsdGVyZWRJdGVtcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcy5maWx0ZXIoeCA9PiAheC5zZWxlY3RlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2l0ZW1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bm1hcmtJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya05leHRJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuX3N0ZXBUb0l0ZW0oKzEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtQcmV2aW91c0l0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcFRvSXRlbSgtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0l0ZW0oaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrU2VsZWN0ZWRPckRlZmF1bHQobWFya0RlZmF1bHQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXhPZkxhc3RTZWxlY3RlZCA9IHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCA/IC0xIDogdGhpcy5fZmlsdGVyZWRJdGVtcy5pbmRleE9mKHRoaXMubGFzdFNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFNlbGVjdGVkSXRlbSAmJiBpbmRleE9mTGFzdFNlbGVjdGVkID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSBpbmRleE9mTGFzdFNlbGVjdGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gbWFya0RlZmF1bHQgPyB0aGlzLmZpbHRlcmVkSXRlbXMuZmluZEluZGV4KHggPT4gIXguZGlzYWJsZWQpIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVOZXN0ZWQob3B0aW9uOiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAoIWlzT2JqZWN0KG9wdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25ba2V5XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVba2V5c1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXBJdGVtKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IE5nT3B0aW9uIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGlzRGVmaW5lZChpdGVtLiRuZ09wdGlvbkxhYmVsKSA/IGl0ZW0uJG5nT3B0aW9uTGFiZWwgOiB0aGlzLnJlc29sdmVOZXN0ZWQoaXRlbSwgdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzRGVmaW5lZChpdGVtLiRuZ09wdGlvblZhbHVlKSA/IGl0ZW0uJG5nT3B0aW9uVmFsdWUgOiBpdGVtO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgbGFiZWw6IGlzRGVmaW5lZChsYWJlbCkgPyBsYWJlbC50b1N0cmluZygpIDogJycsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIGh0bWxJZDogbmV3SWQoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWFwU2VsZWN0ZWRJdGVtcygpIHtcclxuICAgICAgICBjb25zdCBtdWx0aXBsZSA9IHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlID8gc2VsZWN0ZWQudmFsdWVbdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlXSA6IHNlbGVjdGVkLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kSXRlbSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIHNlbGVjdGVkICE9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChzZWxlY3RlZCwgbXVsdGlwbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGl0ZW0sIG11bHRpcGxlLCB0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXBBc01vZGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbHRlcih4ID0+IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHgpID09PSAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3dTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEV4aXN0cyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmluZCh4ID0+IHggPT09IHBhcmVudCk7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50RXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSBbLi4udGhpcy5fZmlsdGVyZWRJdGVtcy5zb3J0KChhLCBiKSA9PiAoYS5pbmRleCAtIGIuaW5kZXgpKV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlkZVNlbGVjdGVkKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbS5wYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5ldmVyeSh4ID0+IHguc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtLnBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmF1bHRTZWFyY2hGbihzZWFyY2g6IHN0cmluZywgb3B0OiBOZ09wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKG9wdC5sYWJlbCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbGFiZWwuaW5kZXhPZihzZWFyY2gpID4gLTFcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROZXh0SXRlbUluZGV4KHN0ZXBzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc3RlcHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWFya2VkSW5kZXggPT09IHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgPyAwIDogKHRoaXMuX21hcmtlZEluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhpcy5fbWFya2VkSW5kZXggPD0gMCkgPyAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKSA6ICh0aGlzLl9tYXJrZWRJbmRleCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0ZXBUb0l0ZW0oc3RlcHM6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9maWx0ZXJlZEl0ZW1zLmV2ZXJ5KHggPT4geC5kaXNhYmxlZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9nZXROZXh0SXRlbUluZGV4KHN0ZXBzKTtcclxuICAgICAgICBpZiAodGhpcy5tYXJrZWRJdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBUb0l0ZW0oc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9ncm91cEJ5KGl0ZW1zOiBOZ09wdGlvbltdLCBwcm9wOiBzdHJpbmcgfCBGdW5jdGlvbik6IE9wdGlvbkdyb3VwcyB7XHJcbiAgICAgICAgY29uc3QgaXNGbiA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gbmV3IE1hcDxzdHJpbmcsIE5nT3B0aW9uW10+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBpc0ZuID8gKDxGdW5jdGlvbj5wcm9wKShpdGVtLnZhbHVlKSA6IGl0ZW0udmFsdWVbPHN0cmluZz5wcm9wXTtcclxuICAgICAgICAgICAga2V5ID0gaXNEZWZpbmVkKGtleSkgPyBrZXkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzLmdldChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncm91cHMuc2V0KGtleSwgW2l0ZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oZ3JvdXBzOiBPcHRpb25Hcm91cHMpIHtcclxuICAgICAgICBjb25zdCBpc0ZuID0gaXNGdW5jdGlvbih0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdpdGhvdXRHcm91cCA9IGdyb3Vwcy5nZXQodW5kZWZpbmVkKSB8fCBbXTtcclxuICAgICAgICBpdGVtcy5wdXNoKC4uLndpdGhvdXRHcm91cCk7XHJcbiAgICAgICAgbGV0IGkgPSB3aXRob3V0R3JvdXAubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20oZ3JvdXBzLmtleXMoKSkpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50OiBOZ09wdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBrZXksXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGkrKyxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5fbmdTZWxlY3Quc2VsZWN0YWJsZUdyb3VwLFxyXG4gICAgICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwS2V5ID0gaXNGbiA/IHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbCA6IDxzdHJpbmc+dGhpcy5fbmdTZWxlY3QuZ3JvdXBCeTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX25nU2VsZWN0Lmdyb3VwVmFsdWUgfHwgKCgpID0+ICh7IFtncm91cEtleV06IGtleSB9KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ3JvdXBzLmdldChrZXkpLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHgucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgeC5jaGlsZHJlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHguaW5kZXggPSBpKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgICAgICBwYXJlbnQudmFsdWUgPSBncm91cFZhbHVlKGtleSwgY2hpbGRyZW4ubWFwKHggPT4geC52YWx1ZSkpO1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goLi4uY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBOZ09wdGlvbiB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgICBodG1sSWQ/OiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBtYXJrZWQ/OiBib29sZWFuO1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IHN0cmluZyB8IE9iamVjdDtcclxuICAgIHBhcmVudD86IE5nT3B0aW9uO1xyXG4gICAgY2hpbGRyZW4/OiBOZ09wdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcclxuICAgIFRhYiA9IDksXHJcbiAgICBFbnRlciA9IDEzLFxyXG4gICAgRXNjID0gMjcsXHJcbiAgICBTcGFjZSA9IDMyLFxyXG4gICAgQXJyb3dVcCA9IDM4LFxyXG4gICAgQXJyb3dEb3duID0gNDAsXHJcbiAgICBCYWNrc3BhY2UgPSA4XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmdTZWxlY3RDb25maWcge1xyXG4gICAgb3Blbk9uRW50ZXI/OiBib29sZWFuO1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBub3RGb3VuZFRleHQ/OiBzdHJpbmc7XHJcbiAgICB0eXBlVG9TZWFyY2hUZXh0Pzogc3RyaW5nO1xyXG4gICAgYWRkVGFnVGV4dD86IHN0cmluZztcclxuICAgIGxvYWRpbmdUZXh0Pzogc3RyaW5nO1xyXG4gICAgY2xlYXJBbGxUZXh0Pzogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbikge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KGhhbmRsZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgdGltZW91dDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtc0RpbWVuc2lvbnMge1xyXG4gICAgaXRlbXNMZW5ndGg6IG51bWJlcjtcclxuICAgIHZpZXdXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld0hlaWdodDogbnVtYmVyO1xyXG4gICAgY2hpbGRXaWR0aDogbnVtYmVyO1xyXG4gICAgY2hpbGRIZWlnaHQ6IG51bWJlcjtcclxuICAgIGl0ZW1zUGVyQ29sOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XHJcbiAgICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcclxuICAgIHRvcFBhZGRpbmc6IG51bWJlcjtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFZpcnR1YWxTY3JvbGxTZXJ2aWNlIHtcclxuXHJcbiAgICBjYWxjdWxhdGVJdGVtcyhkOiBJdGVtc0RpbWVuc2lvbnMsIGRyb3Bkb3duRWw6IEhUTUxFbGVtZW50LCBidWZmZXJBbW91bnQ6IG51bWJlcik6IEl0ZW1zUmFuZ2VSZXN1bHQge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGQuY2hpbGRIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xyXG4gICAgICAgIGlmIChkcm9wZG93bkVsLnNjcm9sbFRvcCA+IHNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBkcm9wZG93bkVsLnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIGRyb3Bkb3duRWwuc2Nyb2xsVG9wKTtcclxuICAgICAgICBjb25zdCBpbmRleEJ5U2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC8gc2Nyb2xsSGVpZ2h0ICogZC5pdGVtc0xlbmd0aDtcclxuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oZC5pdGVtc0xlbmd0aCwgTWF0aC5jZWlsKGluZGV4QnlTY3JvbGxUb3ApICsgKGQuaXRlbXNQZXJDb2wgKyAxKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0RW5kID0gZW5kO1xyXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyQ29sIC0gMSk7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gTWF0aC5taW4obWF4U3RhcnQsIE1hdGguZmxvb3IoaW5kZXhCeVNjcm9sbFRvcCkpO1xyXG5cclxuICAgICAgICBsZXQgdG9wUGFkZGluZyA9IGQuY2hpbGRIZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihzdGFydCwgYnVmZmVyQW1vdW50KSk7XHJcbiAgICAgICAgdG9wUGFkZGluZyA9ICFpc05hTih0b3BQYWRkaW5nKSA/IHRvcFBhZGRpbmcgOiAwO1xyXG4gICAgICAgIHN0YXJ0ID0gIWlzTmFOKHN0YXJ0KSA/IHN0YXJ0IDogLTE7XHJcbiAgICAgICAgZW5kID0gIWlzTmFOKGVuZCkgPyBlbmQgOiAtMTtcclxuICAgICAgICBzdGFydCAtPSBidWZmZXJBbW91bnQ7XHJcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCk7XHJcbiAgICAgICAgZW5kICs9IGJ1ZmZlckFtb3VudDtcclxuICAgICAgICBlbmQgPSBNYXRoLm1pbihkLml0ZW1zTGVuZ3RoLCBlbmQpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3BQYWRkaW5nOiB0b3BQYWRkaW5nLFxyXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQ6IGVuZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEaW1lbnNpb25zKGl0ZW1zTGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIsIHBhbmVsRWw6IEhUTUxFbGVtZW50LCBjb250ZW50RWw6IEhUTUxFbGVtZW50KTogSXRlbXNEaW1lbnNpb25zIHtcclxuICAgICAgICBjb25zdCBwYW5lbFJlY3QgPSBwYW5lbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1SZWN0ID0gY29udGVudEVsLmNoaWxkcmVuW2luZGV4XSA/IGNvbnRlbnRFbC5jaGlsZHJlbltpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgaXRlbXNQZXJDb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBhbmVsUmVjdC5oZWlnaHQgLyBpdGVtUmVjdC5oZWlnaHQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXRlbXNMZW5ndGg6IGl0ZW1zTGVuZ3RoLFxyXG4gICAgICAgICAgICB2aWV3V2lkdGg6IHBhbmVsUmVjdC53aWR0aCxcclxuICAgICAgICAgICAgdmlld0hlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcclxuICAgICAgICAgICAgY2hpbGRXaWR0aDogaXRlbVJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGNoaWxkSGVpZ2h0OiBpdGVtUmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIGl0ZW1zUGVyQ29sOiBpdGVtc1BlckNvbCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgTmdab25lLFxyXG4gICAgVGVtcGxhdGVSZWYsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9wdGlvbmFsLFxyXG4gICAgSW5qZWN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xyXG5pbXBvcnQgeyBEcm9wZG93blBvc2l0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgVE9QX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtdG9wJztcclxuY29uc3QgQk9UVE9NX0NTU19DTEFTUyA9ICduZy1zZWxlY3QtYm90dG9tJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgc2VsZWN0b3I6ICduZy1kcm9wZG93bi1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJoZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwibmctZHJvcGRvd24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICAjc2Nyb2xsIGNsYXNzPVwibmctZHJvcGRvd24tcGFuZWwtaXRlbXMgc2Nyb2xsLWhvc3RcIj5cclxuICAgICAgICAgICAgPGRpdiAjcGFkZGluZyBbY2xhc3MudG90YWwtcGFkZGluZ109XCJ2aXJ0dWFsU2Nyb2xsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgI2NvbnRlbnQgW2NsYXNzLnNjcm9sbGFibGUtY29udGVudF09XCJ2aXJ0dWFsU2Nyb2xsICYmIGl0ZW1zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1mb290ZXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczogWycuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW1zOiBOZ09wdGlvbltdID0gW107XHJcbiAgICBASW5wdXQoKSBtYXJrZWRJdGVtOiBOZ09wdGlvbjtcclxuICAgIEBJbnB1dCgpIHBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xyXG4gICAgQElucHV0KCkgYXBwZW5kVG86IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJ1ZmZlckFtb3VudCA9IDQ7XHJcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XHJcbiAgICBAT3V0cHV0KCkgb3V0c2lkZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzY3JvbGwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2Nyb2xsRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3BhZGRpbmcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcGFkZGluZ0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZHJvcGRvd246IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfc2VsZWN0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzU3RhcnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzRW5kOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zdGFydHVwTG9vcCA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9pc1Njcm9sbGVkVG9NYXJrZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Njcm9sbFRvRW5kRmlyZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRQb3NpdGlvbjogRHJvcGRvd25Qb3NpdGlvbjtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHsgfTtcclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gKCkgPT4geyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgX3ZpcnR1YWxTY3JvbGxTZXJ2aWNlOiBWaXJ0dWFsU2Nyb2xsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF93aW5kb3c6IFdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24gPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBoYW5kbGVNb3VzZWRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ID0gdGhpcy5fZHJvcGRvd24ucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgeyBjYXB0dXJlOiB0cnVlIH0pLFxyXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnbW91c2Vkb3duJywgeyBjYXB0dXJlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgkZXZlbnQpID0+IHRoaXMuX2hhbmRsZU91dHNpZGVDbGljaygkZXZlbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVJdGVtc0NoYW5nZShjaGFuZ2VzLml0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9kcm9wZG93bi5wYXJlbnROb2RlLCB0aGlzLl9kcm9wZG93bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93aGVuQ29udGVudFJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRG9jdW1lbnRSZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJdGVtcygpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucyh0aGlzLnZpcnR1YWxTY3JvbGwgPyAwIDogaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbEVsOiBFbGVtZW50ID0gdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gTWF0aC5mbG9vcihkLnZpZXdIZWlnaHQgLyBkLmNoaWxkSGVpZ2h0KSAtIDE7XHJcbiAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xyXG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSAoaW5kZXggKiBkLmNoaWxkSGVpZ2h0KSAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbDogSFRNTEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSGVpZ2h0ID0gQXJyYXkuZnJvbShjb250ZW50RWwuY2hpbGRyZW4pLnNsaWNlKDAsIGluZGV4KS5yZWR1Y2UoKGMsIG4pID0+IGMgKyBuLmNsaWVudEhlaWdodCwgMCk7XHJcbiAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IGNoaWxkcmVuSGVpZ2h0IC0gKGQuY2hpbGRIZWlnaHQgKiBNYXRoLm1pbihpbmRleCwgYnVmZmVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9UYWcoKSB7XHJcbiAgICAgICAgY29uc3QgZWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5fY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IGQuY2hpbGRIZWlnaHQgKiAoZC5pdGVtc0xlbmd0aCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uID0gdGhpcy5fY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKHRoaXMuX2Ryb3Bkb3duKTtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAndG9wJykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcm9wZG93biwgVE9QX0NTU19DTEFTUyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBCT1RUT01fQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0LCBUT1BfQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fc2VsZWN0LCBCT1RUT01fQ1NTX0NMQVNTKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2Ryb3Bkb3duLCBCT1RUT01fQ1NTX0NMQVNTKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIEJPVFRPTV9DU1NfQ0xBU1MpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9zZWxlY3QsIFRPUF9DU1NfQ0xBU1MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZU91dHNpZGVDbGljaygkZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Ryb3Bkb3duLmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICYmICRldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiAkZXZlbnQucGF0aCAmJiAkZXZlbnQucGF0aFswXSAmJiB0aGlzLl9zZWxlY3QuY29udGFpbnMoJGV2ZW50LnBhdGhbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3V0c2lkZUNsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5fZmlyZVNjcm9sbFRvRW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlSXRlbXNDaGFuZ2UoaXRlbXM6IHsgcHJldmlvdXNWYWx1ZTogTmdPcHRpb25bXSwgY3VycmVudFZhbHVlOiBOZ09wdGlvbltdIH0pIHtcclxuICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNTdGFydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoaXRlbXMgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5wcmV2aW91c1ZhbHVlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgKGl0ZW1zLnByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBpdGVtcy5wcmV2aW91c1ZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnR1cExvb3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXMuY3VycmVudFZhbHVlIHx8IFtdO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBlbmRUbyAmJiB0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIE5nWm9uZS5hc3NlcnROb3RJbkFuZ3VsYXJab25lKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5pdGVtcy5zbGljZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsb29wID0gKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gdGhpcy5fdmlydHVhbFNjcm9sbFNlcnZpY2UuY2FsY3VsYXRlSXRlbXMoZCwgdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnVmZmVyQW1vdW50IHx8IDApO1xyXG5cclxuICAgICAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN0eWxlLmhlaWdodCA9IGAke3Jlcy5zY3JvbGxIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIHJlcy50b3BQYWRkaW5nICsgJ3B4KSc7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXJ0ICE9PSB0aGlzLl9wcmV2aW91c1N0YXJ0IHx8IHJlcy5lbmQgIT09IHRoaXMuX3ByZXZpb3VzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKHJlcy5zdGFydCwgcmVzLmVuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoeyBzdGFydDogcmVzLnN0YXJ0LCBlbmQ6IHJlcy5lbmQgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSByZXMuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHJlcy5lbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXJ0dXBMb29wID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydHVwTG9vcCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnR1cExvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbG9vcChyZXNvbHZlKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maXJlU2Nyb2xsVG9FbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvRW5kRmlyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzY3JvbGw6IEhUTUxFbGVtZW50ID0gdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZzogSFRNTEVsZW1lbnQgPSB0aGlzLnZpcnR1YWxTY3JvbGwgP1xyXG4gICAgICAgICAgICB0aGlzLnBhZGRpbmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwuc2Nyb2xsVG9wICsgdGhpcy5fZHJvcGRvd24uY2xpZW50SGVpZ2h0ID49IHBhZGRpbmcuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9FbmQuZW1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGltZW5zaW9ucyhpbmRleCA9IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbFNjcm9sbFNlcnZpY2UuY2FsY3VsYXRlRGltZW5zaW9ucyhcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZURvY3VtZW50UmVzaXplKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hcHBlbmRUbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNTY3JvbGxlZFRvTWFya2VkIHx8ICF0aGlzLm1hcmtlZEl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW50byh0aGlzLm1hcmtlZEl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUN1cnJlbnRQb3NpdGlvbihkcm9wZG93bkVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLl9zZWxlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcclxuICAgICAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9IGRyb3Bkb3duRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChvZmZzZXRUb3AgKyBoZWlnaHQgKyBkcm9wZG93bkhlaWdodCA+IHNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd0b3AnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYm90dG9tJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmFwcGVuZFRvKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFwcGVuZFRvIHNlbGVjdG9yICR7dGhpcy5hcHBlbmRUb30gZGlkIG5vdCBmb3VuZCBhbnkgcGFyZW50IGVsZW1lbnRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJvcGRvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuX3NlbGVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgLSBib3VuZGluZ1JlY3QudG9wO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldExlZnQgPSBzZWxlY3RSZWN0LmxlZnQgLSBib3VuZGluZ1JlY3QubGVmdDtcclxuICAgICAgICBjb25zdCB0b3BEZWx0YSA9IHRoaXMuX2N1cnJlbnRQb3NpdGlvbiA9PT0gJ2JvdHRvbScgPyBzZWxlY3RSZWN0LmhlaWdodCA6IC10aGlzLl9kcm9wZG93bi5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUudG9wID0gb2Zmc2V0VG9wICsgdG9wRGVsdGEgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdCArICdweCc7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUud2lkdGggPSBzZWxlY3RSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5taW5XaWR0aCA9IHNlbGVjdFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3doZW5Db250ZW50UmVhZHkoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZ09wdGlvbiA9IHRoaXMuX2Ryb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5uZy1vcHRpb24nKTtcclxuICAgICAgICAgICAgaWYgKG5nT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlYWR5KHJlc29sdmUpLCA1KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlYWR5KHJlc29sdmUpKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLW9wdGlvbicsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSB2YWx1ZTogYW55O1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9IHRoaXMuX2lzRGlzYWJsZWQodmFsdWUpIH1cclxuXHJcbiAgICByZWFkb25seSBzdGF0ZUNoYW5nZSQgPSBuZXcgU3ViamVjdDx7IHZhbHVlOiBhbnksIGRpc2FibGVkOiBib29sZWFuIH0+KCk7XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZSQubmV4dCh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9kaXNhYmxlZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBmb3J3YXJkUmVmLFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIFRlbXBsYXRlUmVmLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBIb3N0QmluZGluZyxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIEluamVjdCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBJbmplY3Rpb25Ub2tlbixcclxuICAgIEF0dHJpYnV0ZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgc3RhcnRXaXRoLCB0YXAsIGRlYm91bmNlVGltZSwgbWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc1Byb21pc2UsIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XHJcbmltcG9ydCB7IEl0ZW1zTGlzdCB9IGZyb20gJy4vaXRlbXMtbGlzdCc7XHJcbmltcG9ydCB7IE5nT3B0aW9uLCBLZXlDb2RlLCBOZ1NlbGVjdENvbmZpZyB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcclxuaW1wb3J0IHsgbmV3SWQgfSBmcm9tICcuL2lkJztcclxuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR19TRUxFQ1RfREVGQVVMVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmdTZWxlY3RDb25maWc+KCduZy1zZWxlY3QtZGVmYXVsdC1vcHRpb25zJyk7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ1NlbGVjdENvbmZpZz4oJ25nLXNlbGVjdC1zZWxlY3Rpb24tbW9kZWwnKTtcclxuZXhwb3J0IHR5cGUgRHJvcGRvd25Qb3NpdGlvbiA9ICdib3R0b20nIHwgJ3RvcCcgfCAnYXV0byc7XHJcbmV4cG9ydCB0eXBlIEFkZFRhZ0ZuID0gKCh0ZXJtOiBzdHJpbmcpID0+IGFueSB8IFByb21pc2U8YW55Pik7XHJcbmV4cG9ydCB0eXBlIENvbXBhcmVXaXRoRm4gPSAoYTogYW55LCBiOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmctc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFt7XHJcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdsaXN0Ym94JyxcclxuICAgICAgICAnY2xhc3MnOiAnbmctc2VsZWN0JyxcclxuICAgICAgICAnW2NsYXNzLm5nLXNlbGVjdC1zaW5nbGVdJzogJyFtdWx0aXBsZScsXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgLy8gaW5wdXRzXHJcbiAgICBASW5wdXQoKSBpdGVtczogYW55W10gPSBbXTtcclxuICAgIEBJbnB1dCgpIGJpbmRMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYmluZFZhbHVlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGVhcmFibGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbWFya0ZpcnN0ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBub3RGb3VuZFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHR5cGVUb1NlYXJjaFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGFkZFRhZ1RleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGVhckFsbFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246IERyb3Bkb3duUG9zaXRpb24gPSAnYXV0byc7XHJcbiAgICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdE9uVGFiID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBvcGVuT25FbnRlcjogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIG1heFNlbGVjdGVkSXRlbXM6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGdyb3VwQnk6IHN0cmluZyB8IEZ1bmN0aW9uO1xyXG4gICAgQElucHV0KCkgZ3JvdXBWYWx1ZTogRnVuY3Rpb247XHJcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xyXG4gICAgQElucHV0KCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2VsZWN0YWJsZUdyb3VwID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXBBc01vZGVsID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNlYXJjaEZuID0gbnVsbDtcclxuXHJcbiAgICBASW5wdXQoKSBsYWJlbEZvcklkID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXR5cGVhaGVhZCcpIHR5cGVhaGVhZDogU3ViamVjdDxzdHJpbmc+O1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtbXVsdGlwbGUnKSBtdWx0aXBsZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtdGFnZ2FibGUnKSBhZGRUYWc6IGJvb2xlYW4gfCBBZGRUYWdGbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtc2VhcmNoYWJsZScpIHNlYXJjaGFibGUgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtb3BlbmVkJykgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb21wYXJlV2l0aCgpIHsgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoOyB9XHJcbiAgICBzZXQgY29tcGFyZVdpdGgoZm46IENvbXBhcmVXaXRoRm4pIHtcclxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdgY29tcGFyZVdpdGhgIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNsZWFyU2VhcmNoT25BZGQoKSB7IHJldHVybiBpc0RlZmluZWQodGhpcy5fY2xlYXJTZWFyY2hPbkFkZCkgPyB0aGlzLl9jbGVhclNlYXJjaE9uQWRkIDogdGhpcy5jbG9zZU9uU2VsZWN0OyB9O1xyXG4gICAgc2V0IGNsZWFyU2VhcmNoT25BZGQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaE9uQWRkID0gdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG91dHB1dCBldmVudHNcclxuICAgIEBPdXRwdXQoJ2JsdXInKSBibHVyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdmb2N1cycpIGZvY3VzRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ29wZW4nKSBvcGVuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdjbG9zZScpIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2NsZWFyJykgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoJ2FkZCcpIGFkZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgncmVtb3ZlJykgcmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCdzY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcclxuICAgIEBPdXRwdXQoJ3Njcm9sbFRvRW5kJykgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcclxuXHJcbiAgICAvLyBjdXN0b20gdGVtcGxhdGVzXHJcbiAgICBAQ29udGVudENoaWxkKE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbXVsdGlMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbm90Rm91bmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0eXBlVG9TZWFyY2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGQoTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxvYWRpbmdUZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCkpIGRyb3Bkb3duUGFuZWw6IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudDtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTmdPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbmdPcHRpb25zOiBRdWVyeUxpc3Q8TmdPcHRpb25Db21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1kaXNhYmxlZCcpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC1maWx0ZXJlZCcpIGdldCBmaWx0ZXJlZCgpIHsgcmV0dXJuICEhdGhpcy5maWx0ZXJWYWx1ZSAmJiB0aGlzLnNlYXJjaGFibGUgfTtcclxuXHJcbiAgICBpdGVtc0xpc3Q6IEl0ZW1zTGlzdDtcclxuICAgIHZpZXdQb3J0SXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcclxuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgZHJvcGRvd25JZCA9IG5ld0lkKCk7XHJcbiAgICBzZWxlY3RlZEl0ZW1JZCA9IDA7XHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIGZvY3VzZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdExhYmVsID0gJ2xhYmVsJztcclxuICAgIHByaXZhdGUgX3ByaW1pdGl2ZSA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9tYW51YWxPcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfcHJlc3NlZEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIF9jb21wYXJlV2l0aDogQ29tcGFyZVdpdGhGbjtcclxuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoT25BZGQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2V5UHJlc3MkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogTmdPcHRpb24pID0+IHsgfTtcclxuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBjbGVhckl0ZW0gPSAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBpdGVtKTtcclxuICAgICAgICB0aGlzLnVuc2VsZWN0KG9wdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ2NsYXNzJykgcHVibGljIGNsYXNzZXM6IHN0cmluZyxcclxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHB1YmxpYyB0YWJJbmRleDogc3RyaW5nLFxyXG4gICAgICAgIEBJbmplY3QoTkdfU0VMRUNUX0RFRkFVTFRfQ09ORklHKSBjb25maWc6IE5nU2VsZWN0Q29uZmlnLFxyXG4gICAgICAgIEBJbmplY3QoU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkpIG5ld1NlbGVjdGlvbk1vZGVsOiBTZWxlY3Rpb25Nb2RlbEZhY3RvcnksXHJcbiAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGVTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9tZXJnZUdsb2JhbENvbmZpZyhjb25maWcpO1xyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0ID0gbmV3IEl0ZW1zTGlzdCh0aGlzLCBuZXdTZWxlY3Rpb25Nb2RlbCgpKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEl0ZW1zKCk6IE5nT3B0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zTGlzdC5zZWxlY3RlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZFZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlS2V5UHJlc3NlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlIHx8IFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hbnVhbE9wZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SXRlbXNGcm9tTmdPcHRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gICAgaGFuZGxlS2V5RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoS2V5Q29kZVskZXZlbnQud2hpY2hdKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoJGV2ZW50LndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dEb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFycm93RG93bigkZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkFycm93VXA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlQXJyb3dVcCgkZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNwYWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNwYWNlKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW50ZXIoJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5UYWI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlVGFiKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUJhY2tzcGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgkZXZlbnQua2V5ICYmICRldmVudC5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleVByZXNzJC5uZXh0KCRldmVudC5rZXkudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJykge1xyXG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25nLWNsZWFyJykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsZWFyQ2xpY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ25nLWFycm93LXdyYXBwZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXJyb3dDbGljaygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnbmctdmFsdWUtaWNvbicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXJyb3dDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGVhckNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJNb2RlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQubmV4dChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckV2ZW50LmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhck1vZGVsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGVhcmFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QuY2xlYXJTZWxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZVdyaXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzT3BlbiB8fCB0aGlzLml0ZW1zTGlzdC5tYXhJdGVtc1NlbGVjdGVkIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5hZGRUYWcgJiYgdGhpcy5pdGVtc0xpc3Qubm9JdGVtc1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICBpZiAoIWl0ZW0gfHwgaXRlbS5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIGl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQuZW1pdChpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVOZ01vZGVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0IHx8IHRoaXMuaXRlbXNMaXN0Lm5vSXRlbXNUb1NlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5zZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50LmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGFnKCkge1xyXG4gICAgICAgIGxldCB0YWc7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5hZGRUYWcpKSB7XHJcbiAgICAgICAgICAgIHRhZyA9ICg8QWRkVGFnRm4+dGhpcy5hZGRUYWcpKHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhZyA9IHRoaXMuX3ByaW1pdGl2ZSA/IHRoaXMuZmlsdGVyVmFsdWUgOiB7IFt0aGlzLmJpbmRMYWJlbF06IHRoaXMuZmlsdGVyVmFsdWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRhZyA9IChpdGVtKSA9PiB0aGlzLl9pc1R5cGVhaGVhZCB8fCAhdGhpcy5pc09wZW4gPyB0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpIDogdGhpcy5pdGVtc0xpc3QuYWRkSXRlbShpdGVtKTtcclxuICAgICAgICBpZiAoaXNQcm9taXNlKHRhZykpIHtcclxuICAgICAgICAgICAgdGFnLnRoZW4oaXRlbSA9PiB0aGlzLnNlbGVjdChoYW5kbGVUYWcoaXRlbSkpKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGhhbmRsZVRhZyh0YWcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NsZWFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyYWJsZSAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2hvd0FkZFRhZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMuZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUYWcgJiZcclxuICAgICAgICAgICAgKCF0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLnNvbWUoeCA9PiB4LmxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IHRlcm0pICYmXHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuaGlkZVNlbGVjdGVkICYmIHRoaXMuaXNPcGVuIHx8ICF0aGlzLnNlbGVjdGVkSXRlbXMuc29tZSh4ID0+IHgubGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gdGVybSkpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dOb0l0ZW1zRm91bmQoKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHkgPSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICByZXR1cm4gKChlbXB0eSAmJiAhdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMubG9hZGluZykgfHxcclxuICAgICAgICAgICAgKGVtcHR5ICYmIHRoaXMuX2lzVHlwZWFoZWFkICYmIHRoaXMuZmlsdGVyVmFsdWUgJiYgIXRoaXMubG9hZGluZykpICYmXHJcbiAgICAgICAgICAgICF0aGlzLnNob3dBZGRUYWc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1R5cGVUb1NlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIHJldHVybiBlbXB0eSAmJiB0aGlzLl9pc1R5cGVhaGVhZCAmJiAhdGhpcy5maWx0ZXJWYWx1ZSAmJiAhdGhpcy5sb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gdGVybTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm5leHQodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCh0ZXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Rm9jdXMoJGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmctc2VsZWN0LWZvY3VzZWQnKTtcclxuICAgICAgICB0aGlzLmZvY3VzRXZlbnQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dEJsdXIoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5ibHVyRXZlbnQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbUhvdmVyKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICghKDxhbnk+dGhpcy5fY2QpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25QYW5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtc1swXTtcclxuICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuYmluZExhYmVsIHx8IHRoaXMuX2RlZmF1bHRMYWJlbDtcclxuICAgICAgICB0aGlzLl9wcmltaXRpdmUgPSBpc0RlZmluZWQoZmlyc3RJdGVtKSA/ICFpc09iamVjdChmaXJzdEl0ZW0pIDogdGhpcy5fcHJpbWl0aXZlO1xyXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLmhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcFNlbGVjdGVkSXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIGlzRGVmaW5lZCh0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5faXNUeXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNUeXBlYWhlYWQgfHwgdGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXNGcm9tTmdPcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZU5nT3B0aW9ucyA9IChvcHRpb25zOiBRdWVyeUxpc3Q8TmdPcHRpb25Db21wb25lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcclxuICAgICAgICAgICAgICAgICRuZ09wdGlvblZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25MYWJlbDogb3B0aW9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2V0SXRlbXModGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXBTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlT3B0aW9uQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkT3JEZXN0cm95ZWQgPSBtZXJnZSh0aGlzLm5nT3B0aW9ucy5jaGFuZ2VzLCB0aGlzLl9kZXN0cm95JCk7XHJcbiAgICAgICAgICAgIG1lcmdlKC4uLnRoaXMubmdPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnN0YXRlQ2hhbmdlJCkpXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwoY2hhbmdlZE9yRGVzdHJveWVkKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEl0ZW0ob3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5uZ09wdGlvbnMuY2hhbmdlc1xyXG4gICAgICAgICAgICAucGlwZShzdGFydFdpdGgodGhpcy5uZ09wdGlvbnMpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpLCBmaWx0ZXIoKGl0ZW1zOiBRdWVyeUxpc3Q8YW55PikgPT4gISFpdGVtcy5sZW5ndGgpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKG9wdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kTGFiZWwgPSB0aGlzLl9kZWZhdWx0TGFiZWw7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVOZ09wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVPcHRpb25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNWYWxpZFdyaXRlVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSB8fFxyXG4gICAgICAgICAgICAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSA9PT0gJycpIHx8XHJcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0ZUJpbmRpbmcgPSAoaXRlbTogYW55KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdChpdGVtKSAmJiB0aGlzLmJpbmRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBCaW5kaW5nIG9iamVjdCgke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSkgd2l0aCBiaW5kVmFsdWUgaXMgbm90IGFsbG93ZWQuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKCdNdWx0aXBsZSBzZWxlY3QgbmdNb2RlbCBzaG91bGQgYmUgYXJyYXkuJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gdmFsaWRhdGVCaW5kaW5nKGl0ZW0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVCaW5kaW5nKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlV3JpdGVWYWx1ZShuZ01vZGVsOiBhbnkgfCBhbnlbXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWYWxpZFdyaXRlVmFsdWUobmdNb2RlbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFsOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbSh2YWwpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWYWxPYmplY3QgPSBpc09iamVjdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmltaXRpdmUgPSAhaXNWYWxPYmplY3QgJiYgIXRoaXMuYmluZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKChpc1ZhbE9iamVjdCB8fCBpc1ByaW1pdGl2ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZWxlY3QodGhpcy5pdGVtc0xpc3QubWFwSXRlbSh2YWwsIG51bGwpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iaW5kVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kTGFiZWxdOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kVmFsdWVdOiB2YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICg8YW55W10+bmdNb2RlbCkuZm9yRWFjaChpdGVtID0+IHNlbGVjdChpdGVtKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0KG5nTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVLZXlQcmVzc2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fa2V5UHJlc3MkXHJcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXHJcbiAgICAgICAgICAgICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRLZXlzLnB1c2gobGV0dGVyKSksXHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5sZW5ndGggPiAwKSxcclxuICAgICAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5qb2luKCcnKSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEJ5TGFiZWwodGVybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlc3NlZEtleXMgPSBbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmdNb2RlbCgpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnNlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmluZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWUgPSBpdGVtLnZhbHVlWzxzdHJpbmc+dGhpcy5ncm91cEJ5XTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHRoaXMuaXRlbXNMaXN0LnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5iaW5kVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaChyZXNvbHZlZFZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLnB1c2goaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHgudmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKG1vZGVsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZShpc0RlZmluZWQobW9kZWxbMF0pID8gbW9kZWxbMF0gOiBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHNlbGVjdGVkWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5yZXNldEZpbHRlcmVkSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb01hcmtlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICF0aGlzLmRyb3Bkb3duUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwuc2Nyb2xsSW50byh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb1RhZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICF0aGlzLmRyb3Bkb3duUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwuc2Nyb2xsSW50b1RhZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZVRhYigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0T25UYWIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd0FkZFRhZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcclxuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVFbnRlcigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd0FkZFRhZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVuT25FbnRlciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlU3BhY2UoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuX21hbnVhbE9wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25leHRJdGVtSXNUYWcoKzEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnVubWFya0l0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5tYXJrTmV4dEl0ZW0oKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKC0xKSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC51bm1hcmtJdGVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvVGFnKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1ByZXZpb3VzSXRlbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9uZXh0SXRlbUlzVGFnKG5leHRTdGVwOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLml0ZW1zTGlzdC5tYXJrZWRJbmRleCArIG5leHRTdGVwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRhZyAmJiB0aGlzLmZpbHRlclZhbHVlXHJcbiAgICAgICAgICAgICYmIHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW1cclxuICAgICAgICAgICAgJiYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID09PSB0aGlzLml0ZW1zTGlzdC5maWx0ZXJlZEl0ZW1zLmxlbmd0aClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVCYWNrc3BhY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUgfHwgIXRoaXMuY2xlYXJhYmxlIHx8ICF0aGlzLmhhc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QodGhpcy5pdGVtc0xpc3QubGFzdFNlbGVjdGVkSXRlbSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgX2lzVHlwZWFoZWFkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnR5cGVhaGVhZC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tZXJnZUdsb2JhbENvbmZpZyhjb25maWc6IE5nU2VsZWN0Q29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgY29uZmlnLnBsYWNlaG9sZGVyO1xyXG4gICAgICAgIHRoaXMubm90Rm91bmRUZXh0ID0gdGhpcy5ub3RGb3VuZFRleHQgfHwgY29uZmlnLm5vdEZvdW5kVGV4dDtcclxuICAgICAgICB0aGlzLnR5cGVUb1NlYXJjaFRleHQgPSB0aGlzLnR5cGVUb1NlYXJjaFRleHQgfHwgY29uZmlnLnR5cGVUb1NlYXJjaFRleHQ7XHJcbiAgICAgICAgdGhpcy5hZGRUYWdUZXh0ID0gdGhpcy5hZGRUYWdUZXh0IHx8IGNvbmZpZy5hZGRUYWdUZXh0O1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1RleHQgPSB0aGlzLmxvYWRpbmdUZXh0IHx8IGNvbmZpZy5sb2FkaW5nVGV4dDtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsVGV4dCA9IHRoaXMuY2xlYXJBbGxUZXh0IHx8IGNvbmZpZy5jbGVhckFsbFRleHQ7XHJcbiAgICAgICAgdGhpcy5vcGVuT25FbnRlciA9IGlzRGVmaW5lZCh0aGlzLm9wZW5PbkVudGVyKSA/IHRoaXMub3Blbk9uRW50ZXIgOiBjb25maWcub3Blbk9uRW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRGVmaW5lZCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tuZ09wdGlvbkhpZ2hsaWdodF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KCduZ09wdGlvbkhpZ2hsaWdodCcpIHRlcm06IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZ2hsaWdodExhYmVsKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcclxuICAgICAgICBpZiAoIXRoaXMudGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleE9mVGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhsYWJlbClcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRoaXMudGVybSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgaWYgKGluZGV4T2ZUZXJtID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKFxyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZUZXJtKVxyXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRlZFwiPiR7bGFiZWwuc3Vic3RyKGluZGV4T2ZUZXJtLCB0aGlzLnRlcm0ubGVuZ3RoKX08L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgKyBsYWJlbC5zdWJzdHJpbmcoaW5kZXhPZlRlcm0gKyB0aGlzLnRlcm0ubGVuZ3RoLCBsYWJlbC5sZW5ndGgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQodGhpcy50ZXJtKSAmJiBpc0RlZmluZWQodGhpcy5sYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SW5uZXJIdG1sKGh0bWwpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaW5uZXJIVE1MJywgaHRtbCk7XHJcbiAgICB9XHJcbn0gICBcclxuIiwiaW1wb3J0IHsgTmdPcHRpb24gfSBmcm9tICcuL25nLXNlbGVjdC50eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgPSAoKSA9PiBTZWxlY3Rpb25Nb2RlbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwoKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25Nb2RlbCB7XHJcbiAgICB2YWx1ZTogTmdPcHRpb25bXTtcclxuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4sIHNlbGVjdGFibGVHcm91cEFzTW9kZWw6IGJvb2xlYW4pO1xyXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKTtcclxuICAgIGNsZWFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwgaW1wbGVtZW50cyBTZWxlY3Rpb25Nb2RlbCB7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogTmdPcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgZ3JvdXBBc01vZGVsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGdyb3VwQXNNb2RlbCB8fCAhaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuLmZpbHRlcih4ID0+IHguc2VsZWN0ZWQpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gY2hpbGRyZW5Db3VudCA9PT0gc2VsZWN0ZWRDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRDaGlsZHJlblNlbGVjdGVkU3RhdGUoaXRlbS5jaGlsZHJlbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBBc01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBbLi4udGhpcy5fc2VsZWN0ZWQsIC4uLml0ZW0uY2hpbGRyZW5dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbS5wYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVQYXJlbnQoaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQucHVzaCguLi5jaGlsZHJlbi5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShjaGlsZHJlbjogTmdPcHRpb25bXSwgc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKHggPT4geC5zZWxlY3RlZCA9IHNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVDaGlsZHJlbihwYXJlbnQ6IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4LnBhcmVudCAhPT0gcGFyZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVQYXJlbnQocGFyZW50OiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gcGFyZW50KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5HX1NFTEVDVF9ERUZBVUxUX0NPTkZJRywgTmdTZWxlY3RDb21wb25lbnQsIFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmVcclxufSBmcm9tICcuL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbmctb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlksIHVzZVZhbHVlOiBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19TRUxFQ1RfREVGQVVMVF9DT05GSUcsXHJcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBub3RGb3VuZFRleHQ6ICdObyBpdGVtcyBmb3VuZCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlVG9TZWFyY2hUZXh0OiAnVHlwZSB0byBzZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgYWRkVGFnVGV4dDogJ0FkZCBpdGVtJyxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0OiAnTG9hZGluZy4uLicsXHJcbiAgICAgICAgICAgICAgICBjbGVhckFsbFRleHQ6ICdDbGVhciBhbGwnLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVZpcnR1YWxTY3JvbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3Blbk9uRW50ZXI6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwic2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJtZXJnZSIsImZyb21FdmVudCIsInRha2VVbnRpbCIsIk5nWm9uZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiSW5qZWN0aW9uVG9rZW4iLCJzdGFydFdpdGgiLCJmaWx0ZXIiLCJ0YXAiLCJkZWJvdW5jZVRpbWUiLCJtYXAiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJBdHRyaWJ1dGUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkhvc3RCaW5kaW5nIiwiQ29udGVudENoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHNCQTRGeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtvQkFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFFRCxvQkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7QUMxSUQ7UUFJSSxtQ0FBbUIsUUFBMEI7WUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7U0FBSzs7b0JBRnJEQSxZQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7O3dCQUZ0QkMsY0FBVzs7O3dDQUEvQjs7O1FBU0kscUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7Ozt3QkFQeEJDLGNBQVc7OzswQ0FBL0I7OztRQWNJLGtDQUFtQixRQUEwQjtZQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtTQUFLOztvQkFGckRELFlBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7Ozs7d0JBWnJCQyxjQUFXOzs7dUNBQS9COzs7UUFtQkksdUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7Ozt3QkFqQjNCQyxjQUFXOzs7NENBQS9COzs7UUF3QkksbUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7Ozt3QkF0QnRCQyxjQUFXOzs7d0NBQS9COzs7UUE2QkksbUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7Ozt3QkEzQnRCQyxjQUFXOzs7d0NBQS9COzs7UUFrQ0kscUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7Ozt3QkFoQ3hCQyxjQUFXOzs7MENBQS9COzs7UUF1Q0kseUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFOzs7Ozt3QkFyQzVCQyxjQUFXOzs7OENBQS9COzs7UUE0Q0ksd0NBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7Ozt3QkExQzNCQyxjQUFXOzs7NkNBQS9COzs7UUFpREksZ0NBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7Ozs7d0JBL0NuQkMsY0FBVzs7O3FDQUEvQjs7Ozs7OztBQ0FBOzs7Ozs7O1FBSUksNkJBQUk7Ozs7WUFBSixVQUFLLE9BQWU7Z0JBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDeEI7O29CQUpKQyxhQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7NkJBRmxDOzs7Ozs7Ozs7OztBQ0FBLHVCQUEwQixLQUFVO1FBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQ2hEOzs7OztBQUVELHNCQUF5QixLQUFVO1FBQy9CLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RDs7Ozs7QUFFRCx1QkFBMEIsS0FBVTtRQUNoQyxPQUFPLEtBQUssWUFBWSxPQUFPLENBQUM7S0FDbkM7Ozs7O0FBRUQsd0JBQTJCLEtBQVU7UUFDakMsT0FBTyxLQUFLLFlBQVksUUFBUSxDQUFDO0tBQ3BDOzs7Ozs7O0lDZEQsSUFBTSxVQUFVLEdBQUc7UUFDZixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFR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