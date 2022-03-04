# Veja como criar assinaturas digitais no Ionic 6

## Criando Assinaturas Digitais com Ionic 6

Fala Dev!
Hoje trago um artigo bem interessante que é como podemos criar assinaturas digitais através do Ionic 6.

Clique no link abaixo para assistir o vídeo gratuitamente no Youtube.

[ASSISTA NO YOUTUBE - Como CRIAR ASSINATURA DIGITAL NO IONIC 6](https://youtu.be/Did17pzld3k)


## Vamos ao código
Crie seu projeto em Ionic 6, no meu caso usei template blank e irei usar angular
```
ionic start meuapp
```

Instale o pacote em seu projeto
```
npm i signature_pad --save
```

Edite sua home.page.html
```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Ionic signature example 1
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding" >
  <div>
    <canvas #canvas (touchstart)="startDrawing($event)" (touchmove)="moved($event)"></canvas>
    <ion-grid>
      <ion-row>
        <ion-col size="6">
          <ion-button color="danger" (click)="clearPad()">Clear</ion-button>
        </ion-col>
        <ion-col size="4" offset="2">
          <ion-button color="secondary" (click)="savePad()">Save</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  <img src='{{ signatureImg }}' />
</ion-content>
```

Edite seu arquivo home.page.scss para que seu canva apareça
```css
canvas {
  display: block;
  border: 1px solid rgb(187, 178, 178);
  background-color: var(--ion-color-success);
}
```

Edite sua home.page.ts
```typescript
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl : ElementRef;
  signatureImg: string;

  constructor() { }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

}
```

Basicamente o plugin permite você desenhar no canva e capturar a stringBase64 do que foi desenhado.
Com essa string na mão é só jogar em um arquivo de imagem ou salvar no banco de dados.

Quando quiser colocar essa assinatura em um pdf, só usar a stringBase64 que foi salva.


# VEJA TAMBÉM
## Participe de nosso Grupo de Estudo
- [Participe gratuitamente do grupo de estudo](https://olha.la/ilovecode)


## Fique ligado, acesse!
- [Blog ILoveCode](https://ilovecode.com.br)

## Novidades, cupons de descontos e cursos gratuitos
https://olha.la/ilovecode
