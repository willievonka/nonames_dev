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
     *
     */
    public getIndex(): number {
        return this.activeIndex.value;

    }

    /**
     *
     */
    public setIndex(index: number): void {
        this.activeIndex.next(index);
    }
}
