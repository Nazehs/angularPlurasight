import { Component, Input, ViewChild, ElementRef, Injectable, Inject } from "@angular/core";
import { JQ_TOKEN } from "../shared/jquery.service";

@Component({
    selector: 'search-modal',
    template: `
    <div class="modal" id="{{elementId}}" #modalContainer tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal"><span>&times;</span></button>
            <h4>{{title}}</h4>
            </div>
            <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
            </div>
            </div>
        </div>
    </div> 
    `,
    styles: [
    ]
})

export class SearchModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerRef: ElementRef;

    @Input() onBodyCLickCLose: string;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        if (this.onBodyCLickCLose === 'true')
            this.$(this.containerRef.nativeElement).modal('hide');

    }
}