import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
@Component({
    selector: 'atlp-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AtlpProgressBarComponent implements OnInit, OnDestroy {
    bufferValue: number;
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value: number;
    visible: boolean;
    showTitle: boolean;
    title: string;
    // Private
    private _unsubscribeAll: Subject<any>;
    /**
     * Constructor
     *
     * @param {AtlpProgressBarService} _atlpProgressBarService
     */
    constructor(
        private _atlpProgressBarService: AtlpProgressBarService
    ) {
        // Set the defaults
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the progress bar service properties
        // Titlw value
        // this._atlpProgressBarService.titleValue
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((titleValue) => {
        //         this.title = titleValue;
        //     });
        // Buffer value
        this._atlpProgressBarService.bufferValue
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((bufferValue) => {
                this.bufferValue = bufferValue;
            });
        // Mode
        this._atlpProgressBarService.mode
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mode) => {
                this.mode = mode;
            });
        // Value
        this._atlpProgressBarService.value
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.value = value;
            });
        // Visible
        this._atlpProgressBarService.visible
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((visible) => {
                // console.log(visible);
                this.visible = visible;
            });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
}