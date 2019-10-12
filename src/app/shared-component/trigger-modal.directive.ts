import { Directive, Input, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from '../shared/jquery.service';

@Directive({
    selector: "[trigger-modal]"
})

export class TriggerModalDirective implements OnInit {
    @Input('trigger-modal') modalId: string;
    private elementRef: HTMLElement;
    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
        this.elementRef = ref.nativeElement;
    }

    ngOnInit() {
        this.elementRef.addEventListener('click', event => {
            // console.log('cliked')
            this.$(`#${this.modalId}`).modal({});
        })

    }
}