import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input() defaultColor  = "white";
  @Input('highlight') highlightColor  = "green";
  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  constructor() { }

  @HostListener('mouseenter') mouseenter(){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }


}
