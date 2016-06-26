### Layout
- Is the designs structural layout (skeleton/wireframe only).
- Can define a container class for fixed width global scoped content.
- Has limited visual styling (Background, border, margin/padding) only.
- *Examples: Header, Body and Footer zones.*

### Components
- Are small, independent, multi-purposed building blocks.
- Are simple and self-contained.
- Have no concept of layout present.
- *Examples: Buttons, icons, progress bars.*

### Constructs
- Are one or more components, which requires specific layout or visuals.
- Are complex and self-contained.
- Can be nested inside other constructs.
- *Examples: Accordions, Breadcrumbs, Dialogs.*

### Utilities
- Are immutable classes.
- Are typically single property classes.
- Have one very specific, overriding purpose.
- *Examples: Visibility classes, grid classes, width classes.*

### Templates
- Are HTML templates (with mock data in documentation).
- Are typically content templates for a particular type of page.
- Have no unique CSS applied to them. They're built using the above parts.
- *Examples: A blog post with a related posts sidebar and comment form.*


## Components

*A component is a small, self-contained building block.* Its purpose is very clear
and does not rely on any other component to achieve its desired output. Components
do not have any concept of 'layout' when placed on a page, they simply look after
themselves without shaping things around them.

*A component cannot be broken down any further.* It is the starting point for our UI,
relying only on the toolkit. If you can break down your component into a smaller pieces,
you've built a construct and not a component.

*A component is not necessarily tied to a specific element*, such as a button or
input field. It can be built with any generic element, and it can have descendants, however
the descendant elements depth is likely kept to a minimum.


## Constructs

A construct can be defined by two factors. If neither are applicable to your
code, it is component or utility, and not a construct.

1. The construct is a combination of two or more components used within a containing
   element to organize the layout into a specific, complex component.

2. The construct is one component used within a containing element, which may
   be present multiple times or requires specific layout styling.

All constructs must have [data-ui-construct] attributed to the containing element.
This makes it very clear to your developers where these constructs are, and what
they contain.

Constructs can also have an optional container class, which can apply custom
styling to itself, and/or any other layout related elements needed to create the
desired result. The styling of constructs should be limited to the newly created
elements. They should not override any component styling, ever.

If you find yourself overriding component styling under your constructs container
class, for example using `.construct .button` to change existing styling of the
button within your construct, immediately stop and rethink your styles. They
likely belong in the components file so your entire codebase can make use of them.

Finally, constructs can be used inside other constructs. For example, the carousel
construct should be able to live within the card construct. There are no limits
to this, and you should often see this as a positive situation. If you're able to
nest constructs happily within one another, give yourself a pat on the back or have
a well-deserved drink, you're doing it right.

Constructs can make use of the grid utility classes, or other utilities to control
responsive layout. This is where you transition from writing your CSS construct, to
building your HTML template. The combination of the card construct with the grid classes
allows you to build a collection of cards that resizes based on viewport, tailored
exactly to your needs.


## Utility classes

Utility classes are immutable classes, which will override or provide additional
styling to the HTML. They are kept strictly to grid utility classes, breakpoint based width
utility classes, and display utility classes.

These utility classes provide a lot of value for fast development and keep your
HTML easy to follow, your CSS clear and mobile-focused without responsive clutter.
Any other utility is unnecessary for these standards. They provide no meaningful value.
