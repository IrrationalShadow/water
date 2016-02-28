Defining a component, utility, or pattern:

Components
- Independent building blocks.
- Simple and very small UI pieces that are self-contained.

Utilities
- Immutable classes.
- Commonly single property classes with 1 specific overriding purpose.

Patterns
- The combination of a component(s) and layout to form larger UI patterns.
- Can contain unique/custom styling, as well as utility classes.


Component / Pattern file structure

- Components & Patterns both follow the OOCSS structure & skin methodology.
- 'Structure' defines the skeleton of the component or pattern.
- 'Theme' defines one or more visual representations of the structure.


Components

A component is a small, self-contained piece of UI. Its purpose is very clear
and concise. Components do not dictate page layout on their own, they reside
inside patterns, which control the layout. A component does not rely on any
other component to achieve its desired output.

A component cannot be broken down any further. They are small UI lego blocks,
which you use in combinations to form complex components that we define as
patterns. If you can break down your UI piece into smaller pieces, you've built
a pattern and not a component.

A component is not necessarily tied to a specific element, such as a button or
input. It can use block or inline elements such as a div, and have descendants,
however the descendant elements depth is likely kept to a minimum.


Utility classes

Utility classes are immutable classes, which will override or provide additional
styling to the HTML. They are kept strictly to responsive width utility classes,
and to display utility classes for accessibility and JS toggling of state.

These two types of utility classes provide a lot of value for fast development
and keep your HTML easy to follow, your CSS clear and mobile-focused without
responsive clutter. Any other utility is unnecessary for these standards. They
provide no value.


Patterns

A pattern can be defined by 2 factors. If neither are applicable to your UI
piece, it is component or utility, not a pattern.

1) The pattern is a combination of 2 or more components used under a containing
   element to organize their layout into a specific, complex component.
   Example: A login form.

2) The pattern is a container element with 1 component within, which may
   be present multiple times, or require specific layout defined styling.
   Example: A button group or button toolbar.

All patterns must have a data-ui-pattern attributed to the containing element.
This makes it very clear to your developers where these patterns are, and what
they contain.

Patterns can also have an optional container class, which can apply custom
styling to itself, and any other layout related elements needed to create the
complex UI piece.

Patterns will generally involve the grid component, or other elements to control
layout of the pattern. You can then style this specific layout with cosmetic
styling, such as margins, colors, borders, etc. The styling of patterns should
be limited to the newly created elements. They should not override any component
styling, ever.

If you find yourself overriding component styling under your patterns container
class, for example using .pattern .button {} to change existing styling of the
button within your pattern, stop immediately and rethink your styles. They
likely belong in the components theme file, so your entire site or app can make
use of them.

Finally, patterns can be used inside patterns. It's the pattern level where you
can nest patterns within patterns. For example, a button group pattern can live
inside of a button toolbar pattern. There are no limits to this, and you should
often see this as a positive situation. If you're able to nest patterns happily,
give yourself a pat on the back or have a well-deserved drink, you're doing it
right.
