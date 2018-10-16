/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as searchHelper from './search-helper';
import { isDefined, isFunction, isObject } from './value-utils';
import { newId } from './id';
/** @typedef {?} */
var OptionGroups;
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
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModel.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: /**
         * @return {?}
         */
        function () {
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
        this._filteredItems = tslib_1.__spread(this._items);
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
            findBy = function (item) { return item.value === value ||
                !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); };
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
        term = searchHelper.stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(function (item) {
            /** @type {?} */
            var label = searchHelper.stripSpecialChars(item.label).toLocaleLowerCase();
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
        term = this._ngSelect.searchFn ? term : searchHelper.stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        var hideSelected = this._ngSelect.hideSelected;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            /** @type {?} */
            var matchedItems = [];
            try {
                for (var _c = tslib_1.__values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = tslib_1.__read(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    /** @type {?} */
                    var head = this_1._items.find(function (x) { return x === last_1.parent; });
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, tslib_1.__spread(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
            for (var _b = tslib_1.__values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
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
                for (var _b = tslib_1.__values(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.selected = false;
                    this._filteredItems.push(child);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this._filteredItems = tslib_1.__spread(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
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
        var label = searchHelper.stripSpecialChars(opt.label).toLocaleLowerCase();
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
            for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                /** @type {?} */
                var key = isFn ? (/** @type {?} */ (prop))(item.value) : item.value[/** @type {?} */ (prop)];
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
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_5) throw e_5.error; }
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
        items.push.apply(items, tslib_1.__spread(withoutGroup));
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
            items.push.apply(items, tslib_1.__spread(children));
        };
        var this_2 = this;
        try {
            for (var _b = tslib_1.__values(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_2(key);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return items;
    };
    return ItemsList;
}());
export { ItemsList };
if (false) {
    /** @type {?} */
    ItemsList.prototype._groups;
    /** @type {?} */
    ItemsList.prototype._items;
    /** @type {?} */
    ItemsList.prototype._filteredItems;
    /** @type {?} */
    ItemsList.prototype._markedIndex;
    /** @type {?} */
    ItemsList.prototype._ngSelect;
    /** @type {?} */
    ItemsList.prototype._selectionModel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L2l0ZW1zLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLN0IsSUFBQTtJQUlJLG1CQUNZLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULG9CQUFlLEdBQWYsZUFBZTtzQkFHRSxFQUFFOzhCQU1NLEVBQUU7NEJBTWhCLENBQUMsQ0FBQztLQWR4QjtJQUlELHNCQUFJLDRCQUFLOzs7O1FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7OztPQUFBO0lBSUQsc0JBQUksb0NBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDOUI7OztPQUFBO0lBSUQsc0JBQUksa0NBQVc7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBYTs7OztRQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7U0FDckM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVU7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakQ7OztPQUFBO0lBRUQsc0JBQUksc0NBQWU7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFD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QUFQLENBQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssbUJBQVMsUUFBUSxHQUFFOzs7O1lBdkI1QixLQUFrQixJQUFBLEtBQUEsaUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxnQkFBQTtnQkFBdEMsSUFBTSxHQUFHLFdBQUE7d0JBQUgsR0FBRzthQXdCYjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7O29CQS9WckI7SUFpV0MsQ0FBQTtBQXhWRCxxQkF3VkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ09wdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LnR5cGVzJztcclxuaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XHJcbmltcG9ydCB7IE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNEZWZpbmVkLCBpc0Z1bmN0aW9uLCBpc09iamVjdCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xyXG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcclxuXHJcbnR5cGUgT3B0aW9uR3JvdXBzID0gTWFwPHN0cmluZywgTmdPcHRpb25bXT47XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbXNMaXN0IHtcclxuXHJcbiAgICBwcml2YXRlIF9ncm91cHM6IE9wdGlvbkdyb3VwcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9uZ1NlbGVjdDogTmdTZWxlY3RDb21wb25lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgICBnZXQgaXRlbXMoKTogTmdPcHRpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpbHRlcmVkSXRlbXM6IE5nT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgICBnZXQgZmlsdGVyZWRJdGVtcygpOiBOZ09wdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tYXJrZWRJbmRleCA9IC0xO1xyXG5cclxuICAgIGdldCBtYXJrZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZWRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1hcmtlZEl0ZW0oKTogTmdPcHRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zW3RoaXMuX21hcmtlZEluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbm9JdGVtc1RvU2VsZWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5faXRlbXMubGVuZ3RoID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYXhJdGVtc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSAmJiB0aGlzLl9uZ1NlbGVjdC5tYXhTZWxlY3RlZEl0ZW1zIDw9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhc3RTZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLm1hcEl0ZW0oaXRlbSwgaW5kZXgpKTtcclxuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHMgPSB0aGlzLl9ncm91cEJ5KHRoaXMuX2l0ZW1zLCB0aGlzLl9uZ1NlbGVjdC5ncm91cEJ5KTtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLl9mbGF0dGVuKHRoaXMuX2dyb3Vwcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHMuc2V0KHVuZGVmaW5lZCwgdGhpcy5faXRlbXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSBbLi4udGhpcy5faXRlbXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkIHx8IHRoaXMubWF4SXRlbXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fbmdTZWxlY3QubXVsdGlwbGU7XHJcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChpdGVtLCBtdWx0aXBsZSwgdGhpcy5fbmdTZWxlY3Quc2VsZWN0YWJsZUdyb3VwQXNNb2RlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiBtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlU2VsZWN0ZWQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwudW5zZWxlY3QoaXRlbSwgdGhpcy5fbmdTZWxlY3QubXVsdGlwbGUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgaXNEZWZpbmVkKGl0ZW0uaW5kZXgpICYmIHRoaXMuX25nU2VsZWN0Lm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTZWxlY3RlZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEl0ZW0odmFsdWU6IGFueSk6IE5nT3B0aW9uIHtcclxuICAgICAgICBsZXQgZmluZEJ5OiAoaXRlbTogTmdPcHRpb24pID0+IGJvb2xlYW47XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmNvbXBhcmVXaXRoKSB7XHJcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gdGhpcy5fbmdTZWxlY3QuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdmFsdWUpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpIHtcclxuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiAhaXRlbS5jaGlsZHJlbiAmJiB0aGlzLnJlc29sdmVOZXN0ZWQoaXRlbS52YWx1ZSwgdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlKSA9PT0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAhaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmxhYmVsICYmIGl0ZW0ubGFiZWwgPT09IHRoaXMucmVzb2x2ZU5lc3RlZCh2YWx1ZSwgdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuZmluZChpdGVtID0+IGZpbmRCeShpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShpdGVtOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLm1hcEl0ZW0oaXRlbSwgdGhpcy5faXRlbXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNlbGVjdGVkKCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW0ubWFya2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyZWRJdGVtcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlMYWJlbCh0ZXJtOiBzdHJpbmcpIHtcclxuICAgICAgICB0ZXJtID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5maW5kKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhpdGVtLmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWwuc3Vic3RyKDAsIHRlcm0ubGVuZ3RoKSA9PT0gdGVybTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIodGVybTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSBbXTtcclxuICAgICAgICB0ZXJtID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gPyB0ZXJtIDogc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiB8fCB0aGlzLl9kZWZhdWx0U2VhcmNoRm47XHJcbiAgICAgICAgY29uc3QgaGlkZVNlbGVjdGVkID0gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuX2dyb3Vwcy5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fZ3JvdXBzLmdldChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVNlbGVjdGVkICYmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCB8fCBpdGVtLnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHRoaXMuX25nU2VsZWN0LnNlYXJjaEZuID8gaXRlbS52YWx1ZSA6IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2godGVybSwgc2VhcmNoSXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtsYXN0XSA9IG1hdGNoZWRJdGVtcy5zbGljZSgtMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5faXRlbXMuZmluZCh4ID0+IHggPT09IGxhc3QucGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaGVhZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goLi4ubWF0Y2hlZEl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEZpbHRlcmVkSXRlbXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5faXRlbXMuZmlsdGVyKHggPT4gIXguc2VsZWN0ZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5tYXJrSXRlbSgpIHtcclxuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtOZXh0SXRlbSgpIHtcclxuICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKCsxKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrUHJldmlvdXNJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuX3N0ZXBUb0l0ZW0oLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtJdGVtKGl0ZW06IE5nT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1NlbGVjdGVkT3JEZWZhdWx0KG1hcmtEZWZhdWx0PzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4T2ZMYXN0U2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgPyAtMSA6IHRoaXMuX2ZpbHRlcmVkSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gJiYgaW5kZXhPZkxhc3RTZWxlY3RlZCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gaW5kZXhPZkxhc3RTZWxlY3RlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IG1hcmtEZWZhdWx0ID8gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCh4ID0+ICF4LmRpc2FibGVkKSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlTmVzdGVkKG9wdGlvbjogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFpc09iamVjdChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uW2tleV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW2tleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFwSXRlbShpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBOZ09wdGlvbiB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25MYWJlbCkgPyBpdGVtLiRuZ09wdGlvbkxhYmVsIDogdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0sIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25WYWx1ZSkgPyBpdGVtLiRuZ09wdGlvblZhbHVlIDogaXRlbTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgIGxhYmVsOiBpc0RlZmluZWQobGFiZWwpID8gbGFiZWwudG9TdHJpbmcoKSA6ICcnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkLFxyXG4gICAgICAgICAgICBodG1sSWQ6IG5ld0lkKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG1hcFNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGUgPSB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdGVkIG9mIHRoaXMuc2VsZWN0ZWRJdGVtcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSA/IHNlbGVjdGVkLnZhbHVlW3RoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZV0gOiBzZWxlY3RlZC52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZmluZEl0ZW0odmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBzZWxlY3RlZCAhPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwudW5zZWxlY3Qoc2VsZWN0ZWQsIG11bHRpcGxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChpdGVtLCBtdWx0aXBsZSwgdGhpcy5fbmdTZWxlY3Quc2VsZWN0YWJsZUdyb3VwQXNNb2RlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5maWx0ZXIoeCA9PiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZih4KSA9PT0gLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zaG93U2VsZWN0ZWQoaXRlbTogTmdPcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0ucGFyZW50O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFeGlzdHMgPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmZpbmQoeCA9PiB4ID09PSBwYXJlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIXBhcmVudEV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gWy4uLnRoaXMuX2ZpbHRlcmVkSXRlbXMuc29ydCgoYSwgYikgPT4gKGEuaW5kZXggLSBiLmluZGV4KSldO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZGVTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmZpbHRlcih4ID0+IHggIT09IGl0ZW0pO1xyXG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGl0ZW0ucGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4uZXZlcnkoeCA9PiB4LnNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geCAhPT0gaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgIT09IGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZhdWx0U2VhcmNoRm4oc2VhcmNoOiBzdHJpbmcsIG9wdDogTmdPcHRpb24pIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhvcHQubGFiZWwpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsLmluZGV4T2Yoc2VhcmNoKSA+IC0xXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TmV4dEl0ZW1JbmRleChzdGVwczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHN0ZXBzID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX21hcmtlZEluZGV4ID09PSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDEpID8gMCA6ICh0aGlzLl9tYXJrZWRJbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoaXMuX21hcmtlZEluZGV4IDw9IDApID8gKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgOiAodGhpcy5fbWFya2VkSW5kZXggLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGVwVG9JdGVtKHN0ZXBzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDAgfHwgdGhpcy5fZmlsdGVyZWRJdGVtcy5ldmVyeSh4ID0+IHguZGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gdGhpcy5fZ2V0TmV4dEl0ZW1JbmRleChzdGVwcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFya2VkSXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGVwVG9JdGVtKHN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JvdXBCeShpdGVtczogTmdPcHRpb25bXSwgcHJvcDogc3RyaW5nIHwgRnVuY3Rpb24pOiBPcHRpb25Hcm91cHMge1xyXG4gICAgICAgIGNvbnN0IGlzRm4gPSBpc0Z1bmN0aW9uKHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nLCBOZ09wdGlvbltdPigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gaXNGbiA/ICg8RnVuY3Rpb24+cHJvcCkoaXRlbS52YWx1ZSkgOiBpdGVtLnZhbHVlWzxzdHJpbmc+cHJvcF07XHJcbiAgICAgICAgICAgIGtleSA9IGlzRGVmaW5lZChrZXkpID8ga2V5IDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBzLnNldChrZXksIFtpdGVtXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mbGF0dGVuKGdyb3VwczogT3B0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgY29uc3QgaXNGbiA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICBjb25zdCB3aXRob3V0R3JvdXAgPSBncm91cHMuZ2V0KHVuZGVmaW5lZCkgfHwgW107XHJcbiAgICAgICAgaXRlbXMucHVzaCguLi53aXRob3V0R3JvdXApO1xyXG4gICAgICAgIGxldCBpID0gd2l0aG91dEdyb3VwLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKGdyb3Vwcy5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogTmdPcHRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDoga2V5LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpKyssXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuX25nU2VsZWN0LnNlbGVjdGFibGVHcm91cCxcclxuICAgICAgICAgICAgICAgIGh0bWxJZDogbmV3SWQoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBncm91cEtleSA9IGlzRm4gPyB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwgOiA8c3RyaW5nPnRoaXMuX25nU2VsZWN0Lmdyb3VwQnk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwVmFsdWUgPSB0aGlzLl9uZ1NlbGVjdC5ncm91cFZhbHVlIHx8ICgoKSA9PiAoeyBbZ3JvdXBLZXldOiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGdyb3Vwcy5nZXQoa2V5KS5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB4LnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIHguY2hpbGRyZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB4LmluZGV4ID0gaSsrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICAgICAgcGFyZW50LnZhbHVlID0gZ3JvdXBWYWx1ZShrZXksIGNoaWxkcmVuLm1hcCh4ID0+IHgudmFsdWUpKTtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKC4uLmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==