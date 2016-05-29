Identifying a component, utility, or construct:

### Components
- Are small, independent, multi-purposed building blocks.
- Are simple and self-contained.
- Have no concept of layout present.
- Examples: Buttons, icons, progress bars.

### Constructs
- Are one or more components, which requires specific layout or styling.
- Are complex and self-contained.
- Can be nested inside other constructs.
- Examples: Accordions, Breadcrumbs, Dialogs.

### Utilities
- Are immutable classes.
- Are commonly single property classes.
- Have one very specific, overriding purpose.
- Examples: Visibility classes, grid classes, width classes.

### Layouts
- Are page level, structural layouts.
- Are global in scope. Can have background, border, margin and padding here.
- Are filled with constructs to create completed pages.
- Examples: Page header, body, footer and Page document layout files.

### Templates
- Are HTML code blocks with mock data, only found in the documentation.
- Are typically large content blocks for a particular type of page.
- Examples: A blog post, an article, a product grid.


## Component & Construct file structure

- Components & Constructs both follow the OOCSS structure & skin methodology.
- 'Structure' defines the core styling mandatory to the component/construct.
- 'Theme' defines the one or more visual representations of the structure.


## Components

A component is a small, self-contained building block. Its purpose is very clear
and does not rely on any other component to achieve its desired output. Components
do not have any concept of layout when placed on a page.

A component cannot be broken down any further.
Combinations to form complex components that we define as
constructs. If you can break down your UI piece into smaller pieces, you've built
a construct and not a component.

A component is not necessarily tied to a specific element, such as a button or
input. It can use block or inline elements such as a div, and have descendants,
however the descendant elements depth is likely kept minimal.


## Constructs

A construct can be defined by two factors. If neither are applicable to your
code, it is component or utility, not a construct.

1) The construct is a combination of 2 or more components used within a containing
   element to organize the layout into a specific, complex component.
   Example: Cards, Carousel, Dialogs.

2) The construct is a container element with 1 component within, which may
   be present multiple times or requires specific layout styling.
   Examples: Pagination, Media, Embed.

All constructs must have [data-ui-construct] attributed to the containing element.
This makes it very clear to your developers where these constructs are, and what
they contain.

Constructs can also have an optional container class, which applies custom
styling to itself, and any other layout related elements needed to create the
desired result.

Constructs will generally involve the grid utilities, or other elements to control
layout. You can then style this specific layout with cosmetic styling, such as
margins, colors, borders, etc. The styling of constructs should be limited to the
newly created elements. They should not override any component styling, ever.

If you find yourself overriding component styling under your constructs container
class, for example using .construct .button {} to change existing styling of the
button within your construct, stop immediately and rethink your styles. They
likely belong in the components theme file, so your entire site or app can make
use of them.

Finally, constructs can be used inside constructs. For example, the carousel
construct should be able to live within the card construct. There are no limits
to this, and you should often see this as a positive situation. If you're able to
nest constructs happily, give yourself a pat on the back or have a well-deserved
drink, you're doing it right.


## Utility classes

Utility classes are immutable classes, which will override or provide additional
styling to the HTML. They are kept strictly to responsive width utility classes,
and to display utility classes for accessibility and JS toggling of state.

These two types of utility classes provide a lot of value for fast development
and keep your HTML easy to follow, your CSS clear and mobile-focused without
responsive clutter. Any other utility is unnecessary for these standards. They
provide no value.
