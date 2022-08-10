import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ElementsService {
  private readonly borderStyles: string[] = [
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

  private readonly fontWeights: string[] = [
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
  get allBorderStyles(): string[] {
    return this.borderStyles;
  }
  get allFontWeights(): string[] {
    return this.fontWeights;
  }
}
