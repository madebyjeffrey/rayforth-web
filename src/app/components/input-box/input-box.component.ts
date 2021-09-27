import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'rf-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent implements AfterViewInit {
  @ViewChild('textarea') textArea?: ElementRef<HTMLTextAreaElement>;

  @Output() codeSubmit = new EventEmitter<string>();

  constructor() {}

  ngAfterViewInit(): void {
    if (this.textArea) {
      this.textArea.nativeElement.addEventListener(
        'input',
        this.handleInput,
        true
      );

      this.textArea.nativeElement.addEventListener(
        'keydown',
        this.handleKeydown,
        true
      );
    }
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (this.textArea && event.code === 'Enter' && event.ctrlKey) {
      // execute code
      const code = this.textArea.nativeElement.value;

      this.codeSubmit.next(code);
    }
  };

  handleInput = (_event: Event) => {
    if (this.textArea) {
      const element = this.textArea.nativeElement;

      // reset height
      element.style.height = 'inherit';

      const computed = window.getComputedStyle(element);

      const height =
        parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        element.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10);

      element.style.height = height + 'px';
    }
  };
}
