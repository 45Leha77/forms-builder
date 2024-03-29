import { animate, style, transition, trigger } from '@angular/animations';

export const appearingAnimation = trigger('appearing', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms 100ms linear', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms 100ms linear', style({ opacity: 0 })),
  ]),
]);
