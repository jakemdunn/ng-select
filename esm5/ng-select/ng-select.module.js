/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_SELECT_DEFAULT_CONFIG, NgSelectComponent, SELECTION_MODEL_FACTORY } from './ng-select.component';
import { NgFooterTemplateDirective, NgHeaderTemplateDirective, NgLabelTemplateDirective, NgLoadingTextTemplateDirective, NgMultiLabelTemplateDirective, NgNotFoundTemplateDirective, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgTagTemplateDirective, NgTypeToSearchTemplateDirective } from './ng-templates.directive';
import { NgOptionComponent } from './ng-option.component';
import { NgOptionHighlightDirective } from './ng-option-highlight.directive';
import { NgDropdownPanelComponent } from './ng-dropdown-panel.component';
import { DefaultSelectionModelFactory } from './selection-model';
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
    return NgSelectModule;
}());
export { NgSelectModule };
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdHLE9BQU8sRUFDSCx5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4Qiw4QkFBOEIsRUFDOUIsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFDM0IseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN0QiwrQkFBK0IsRUFDbEMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztTQXNDWCw0QkFBNEIsT0FHNUQ7SUFDTixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxVQUFVLEVBQUUsVUFBVTtJQUN0QixXQUFXLEVBQUUsWUFBWTtJQUN6QixZQUFZLEVBQUUsV0FBVztJQUN6QixvQkFBb0IsRUFBRSxLQUFLO0lBQzNCLFdBQVcsRUFBRSxJQUFJO0NBQ3BCOzs7OztnQkEvQ1osUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7d0JBQ3hCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsK0JBQStCO3dCQUMvQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLDJCQUEyQjt3QkFDM0IsK0JBQStCO3dCQUMvQiw4QkFBOEI7d0JBQzlCLHNCQUFzQjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsSUFBOEIsRUFBRTt3QkFDNUU7NEJBQ0ksT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsUUFBUSxJQVFQO3lCQUNKO3FCQUNKO2lCQUNKOzt5QkF0RUQ7O1NBdUVhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOR19TRUxFQ1RfREVGQVVMVF9DT05GSUcsIE5nU2VsZWN0Q29tcG9uZW50LCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL25nLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vbmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIE5nT3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5nU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgIE5nT3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlLFxyXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZLCB1c2VWYWx1ZTogRGVmYXVsdFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfU0VMRUNUX0RFRkFVTFRfQ09ORklHLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgbm90Rm91bmRUZXh0OiAnTm8gaXRlbXMgZm91bmQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZVRvU2VhcmNoVGV4dDogJ1R5cGUgdG8gc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgIGFkZFRhZ1RleHQ6ICdBZGQgaXRlbScsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJBbGxUZXh0OiAnQ2xlYXIgYWxsJyxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVWaXJ0dWFsU2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9wZW5PbkVudGVyOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE1vZHVsZSB7IH1cclxuIl19