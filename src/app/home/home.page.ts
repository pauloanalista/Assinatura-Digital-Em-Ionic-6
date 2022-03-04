import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements AfterViewInit{
  signatureImg : string;
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl : ElementRef;
  constructor() {}

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    //console.log('startDrawing==================================', event);
    // works in device not in browser

  }

  moved(event: Event) {
    //console.log('moved==================================', event);
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    console.log(base64Data);

    this.signatureImg = base64Data;
  }
}
