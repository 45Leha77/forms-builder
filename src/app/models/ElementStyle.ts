import { BorderStyles } from '../enums/border-styles';
import { FontWeights } from '../enums/font-weights';

export interface ElementStyle {
  id?: string;
  title: string;
  placeholderText?: string;
  width: string;
  height?: string;
  required: boolean;
  borderStyle?: BorderStyles;
  fontSize?: string;
  fontWeight?: FontWeights;
  color?: string;
  label?: string;
}
