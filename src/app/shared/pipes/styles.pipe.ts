import { Pipe, PipeTransform } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Pipe({
  name: 'styles',
  pure: true,
})
export class StylesPipe implements PipeTransform {
  transform(styleList: ElementStyle): any {
    return {
      width: `${styleList.width}px`,
      height: `${styleList.height}px`,
      borderStyle: `${styleList.borderStyle}`,
      fontSize: `${styleList.fontSize}px`,
      fontWeight: `${styleList.fontWeight}`,
    };
  }
}
