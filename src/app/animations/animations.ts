import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);

export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ transform: 'rotate(-90deg)', opacity: 0 }),
    animate('500ms', style({ transform: 'rotate(0deg)', opacity: 1 })),
  ]),
]);

export const flipIn = trigger('flipIn', [
  transition(':enter', [
    style({ transform: 'perspective(100px) rotate3d(1, 0, 0, 180deg)', opacity: 0 }),
    animate('700ms', style({ transform: 'perspective(100px) rotate3d(1, 0, 0, 0deg)', opacity: 1 })),
  ]),
]);

export const zoomIn = trigger('zoomIn', [
    transition(':enter', [
      style({ transform: 'scale(0.5)', opacity: 0 }),
      animate('500ms', style({ transform: 'scale(1)', opacity: 1 })),
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('500ms', style({ transform: 'scale(0.5)', opacity: 0 })),
    ]),
  ]);

  export const myAnimation = trigger('myAnimation', [
    state('default', style({
      transform: 'none'
    })),
    state('flipped', style({
      transform: 'rotateY(180deg)'
    })),
    transition('default => flipped', [
      animate('400ms ease-in-out', keyframes([
        style({ transform: 'rotateY(90deg)', offset: 0.33 }),
        style({ transform: 'rotateY(180deg)', offset: 0.66 }),
        style({ transform: 'rotateY(270deg)', offset: 1.0 })
      ]))
    ]),
    transition('flipped => default', [
      animate('400ms ease-in-out', keyframes([
        style({ transform: 'rotateY(90deg)', offset: 0.33 }),
        style({ transform: 'rotateY(0)', offset: 0.66 }),
        style({ transform: 'rotateY(-90deg)', offset: 1.0 })
      ]))
    ])
  ]);
