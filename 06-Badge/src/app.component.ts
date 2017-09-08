import { Component } from "@angular/core";

@Component({
    selector: "my-comp",
    template: `
        <h1>Badge Demo</h1>
        <button (click)="changeCount()" class="btn btn-primary" type="button">
            {{title}} <span class="badge">{{count}}</span>
        </button>
    `
})

export class AppComponent{
    title="Inbox";
    count=44;

    changeCount(){
        console.log(++this.count)
    }
}