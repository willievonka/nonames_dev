import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable()
export class ActivePanelService extends Observable<number> {

    protected activeIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() {
        super((subscriber: Subscriber<number>) => {
            this.activeIndex.subscribe(subscriber);
        });
    }

    /**
     * Gets the current active index.
     * @returns The current active index as a number.
     */
    public getIndex(): number {
        return this.activeIndex.value;
    }

    /**
     * Sets the active index to the specified value.
     * @param index - The new active index as a number.
     */
    public setIndex(index: number): void {
        this.activeIndex.next(index);
    }
}
