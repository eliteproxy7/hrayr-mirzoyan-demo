import {
  sequence,
  trigger,
  animate,
  style,
  group,
  query,
  transition,
  animateChild,
  state,
  animation,
  useAnimation,
  stagger
} from "@angular/animations";

const reusable = animation(
  [
    style({
      opacity: "{{opacity}}",
      transform: "scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"
    }),
    animate("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)", style("*"))
  ],
  {
    params: {
      duration: "200ms",
      delay: "0ms",
      opacity: "0",
      scale: "1",
      x: "0",
      y: "0",
      z: "0"
    }
  }
);



const slideLeft = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)' }), { optional: true }),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), { optional: true }),
  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
    ]), { optional: true }),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), { optional: true })
  ])
]

const slideRight = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)' }), { optional: true }),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(100%,0,0)' }), { optional: true }),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(-100%,0,0)' })), // y: '-100%'
    ]), { optional: true }),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), { optional: true })
  ])
]

const fadeIn = [
  query(':enter', [
          style({ opacity: 0 })
      ], { optional: true }
  ),
  group([
      query(':leave', [
              animate(500, style({ opacity: 0 }))
          ],
          { optional: true }
      ),
      query(':enter', [
              style({ opacity: 0 }),
              animate(500, style({ opacity: 1 }))
          ],
          { optional: true }
      )
  ])
];

const slideUp = [
  query(':enter, :leave', style({ position: 'absolute', opacity: 1, width:'100%' })
    , { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ], { optional: true }),
  ])
];



export const hrayrDemoAnimations = [
  trigger("animate", [transition("void => *", [useAnimation(reusable)])]),
  trigger(
    'msgSlideHide', 
    [
      transition(
        ':enter', 
        [
          style({ transform: 'translateY(calc(100% + 2px))'}),
          animate('0.3s ease-out', 
                  style({ transform: 'translateY(0px)'}))
        ]
      ),
      transition(
        ':leave', 
        [
          style({transform: 'translateY(0px)' }),
          animate('0.3s ease-in', 
                  style({ transform: 'translateY(calc(100% + 2px))'}))
        ]
      )
    ]
),
trigger(
  'signupSuccessAnimation', 
  [
    transition(
      ':enter', 
      [
        style({ transform: 'translateX(100%)', opacity: 1 }),
        animate('0.3s ease-out', 
                style({ transform: 'translateY(0px)', opacity: 1 }))
      ]
    ),
    transition(
      ':leave', 
      [
        style({transform: 'translateY(0px)', opacity: 1 }),
        animate('0.3s ease-in', 
                style({ transform: 'translateY(-100%)', opacity: 1 }))
      ]
    )
  ]
),
  trigger(
        'inOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ transform: 'translateY(5px)', opacity: 0 }),
              animate('0.3s ease-out', 
                      style({ transform: 'translateY(0px)', opacity: 1 }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({transform: 'translateY(0px)', opacity: 1 }),
              animate('0.3s ease-in', 
                      style({ transform: 'translateY(5px)', opacity: 0 }))
            ]
          )
        ]
  ),
  trigger(
    'inOutAnimationY', 
    [
      transition(
        ':enter', 
        [
          style({ transform: 'translateY(5px)', opacity: 0 }),
          animate('0.3s 1s ease-out', 
                  style({ transform: 'translateY(0px)', opacity: 1 }))
        ]
      ),
      transition(
        ':leave', 
        [
          style({transform: 'translateY(0px)', opacity: 1 }),
          animate('0.3s ease-in', 
                  style({ transform: 'translateY(5px)', opacity: 0 }))
        ]
      )
    ]
),
  trigger("fadeInOut", [
    state(
      "0",
      style({
        opacity: 0,
        display: "none"
      })
    ),
    state(
      "1",
      style({
        opacity: 1,
        display: "block"
      })
    ),
    transition("0 => 1", animate("300ms")),
    transition("1 => 0", animate("300ms"))
  ]),
  trigger('routerAnimations', [
    transition('* => iphone', slideUp), //bottom
    transition('* => iwatch', fadeIn),  //fade
    transition('* => intro', fadeIn),  //fade
    transition('* => macbook', slideRight),  //right
  ])
];




