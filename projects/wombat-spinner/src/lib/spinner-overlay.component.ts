import { Component, HostBinding, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'w-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {

  @Input()
  loading = true;

  @HostBinding('class')
  @Input()
  spinClass = '';

  @Input()
  icon = 'fas fa-circle-notch fa-spin fa-5x';

  _bodyTemplate: TemplateRef<any>;

  get bodyTemplate(): TemplateRef<any> {
    return this._bodyTemplate;
  }

  set bodyTemplate(tmpl: TemplateRef<any>) {
    this._bodyTemplate = tmpl;
  }

  @Input('body')
  set bodyInput(tmpl: TemplateRef<any>) {
    if (tmpl) {
      this.bodyTemplate = tmpl;
    }
  }

  @ContentChild(TemplateRef, { static: false })
  set bodyContent(tmpl: TemplateRef<any>) {
    if (tmpl) {
      this.bodyTemplate = tmpl;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
