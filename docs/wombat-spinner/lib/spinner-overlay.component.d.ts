import { OnInit, TemplateRef } from '@angular/core';
export declare class SpinnerOverlayComponent implements OnInit {
    loading: boolean;
    spinClass: string;
    icon: string;
    _bodyTemplate: TemplateRef<any>;
    bodyTemplate: TemplateRef<any>;
    bodyInput: TemplateRef<any>;
    bodyContent: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
}
