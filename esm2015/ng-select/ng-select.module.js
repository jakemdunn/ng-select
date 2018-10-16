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
const ɵ0 = DefaultSelectionModelFactory, ɵ1 = {
    notFoundText: 'No items found',
    typeToSearchText: 'Type to search',
    addTagText: 'Add item',
    loadingText: 'Loading...',
    clearAllText: 'Clear all',
    disableVirtualScroll: false
};
export class NgSelectModule {
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
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L25nLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdHLE9BQU8sRUFDSCx5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4Qiw4QkFBOEIsRUFDOUIsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFDM0IseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN0QiwrQkFBK0IsRUFDbEMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztXQXNDWCw0QkFBNEIsT0FHNUQ7SUFDTixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxVQUFVLEVBQUUsVUFBVTtJQUN0QixXQUFXLEVBQUUsWUFBWTtJQUN6QixZQUFZLEVBQUUsV0FBVztJQUN6QixvQkFBb0IsRUFBRSxLQUFLO0NBQzlCO0FBSWIsTUFBTTs7O1lBbERMLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1Ysd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLCtCQUErQjtvQkFDL0IsOEJBQThCO29CQUM5QixzQkFBc0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QiwyQkFBMkI7b0JBQzNCLCtCQUErQjtvQkFDL0IsOEJBQThCO29CQUM5QixzQkFBc0I7aUJBQ3pCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLElBQThCLEVBQUU7b0JBQzVFO3dCQUNJLE9BQU8sRUFBRSx3QkFBd0I7d0JBQ2pDLFFBQVEsSUFPUDtxQkFDSjtpQkFDSjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTkdfU0VMRUNUX0RFRkFVTFRfQ09ORklHLCBOZ1NlbGVjdENvbXBvbmVudCwgU0VMRUNUSU9OX01PREVMX0ZBQ1RPUlkgfSBmcm9tICcuL25nLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbmctdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1kcm9wZG93bi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcclxuICAgICAgICBOZ09wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgICAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSwgdXNlVmFsdWU6IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1NFTEVDVF9ERUZBVUxUX0NPTkZJRyxcclxuICAgICAgICAgICAgdXNlVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIG5vdEZvdW5kVGV4dDogJ05vIGl0ZW1zIGZvdW5kJyxcclxuICAgICAgICAgICAgICAgIHR5cGVUb1NlYXJjaFRleHQ6ICdUeXBlIHRvIHNlYXJjaCcsXHJcbiAgICAgICAgICAgICAgICBhZGRUYWdUZXh0OiAnQWRkIGl0ZW0nLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICAgICAgICAgIGNsZWFyQWxsVGV4dDogJ0NsZWFyIGFsbCcsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVmlydHVhbFNjcm9sbDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlIHsgfVxyXG4iXX0=