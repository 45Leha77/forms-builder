import { Injectable } from '@angular/core';
import { BorderStyles } from '../enums/border-styles';
import { FontWeights } from '../enums/font-weights';

@Injectable({ providedIn: 'root' })
export class ElementsService {
  private readonly borderStyles: BorderStyles[] = [
    BorderStyles.none,
    BorderStyles.hidden,
    BorderStyles.dotted,
    BorderStyles.dashed,
    BorderStyles.solid,
    BorderStyles.double,
    BorderStyles.groove,
    BorderStyles.ridge,
    BorderStyles.inset,
    BorderStyles.outset,
  ];

  private readonly fontWeights: FontWeights[] = [
    FontWeights.normal,
    FontWeights.bold,
    FontWeights.lighter,
    FontWeights.bolder,
    FontWeights.hundred,
    FontWeights.twoHundred,
    FontWeights.threeHundred,
    FontWeights.fourHundred,
    FontWeights.fiveHundred,
    FontWeights.sixHundred,
    FontWeights.sevenHundred,
    FontWeights.eightHundred,
    FontWeights.nineHundred,
    FontWeights.inherit,
    FontWeights.initial,
    FontWeights.unset,
  ];

  get allBorderStyles(): string[] {
    return this.borderStyles;
  }
  get allFontWeights(): string[] {
    return this.fontWeights;
  }
}
