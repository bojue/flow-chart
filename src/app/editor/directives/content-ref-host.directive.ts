import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContentRefHost]'
})
export class ContentRefHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
