import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ElementsService {
  get allBorderStyles() {
    return [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ];
  }

  get allFontWeights() {
    return [
      'normal',
      'bold',
      'lighter',
      'bolder',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'inherit',
      'initial',
      'unset',
    ];
  }
}
