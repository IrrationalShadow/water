# Sass Styleguide

_The following guidelines outline an occasionally reasonable style guide for (S)CSS development.
These guidelines strongly encourage the use of existing, common, sensible patterns._


## Table of contents

1. **Introduction**
 - [Key principles](#general-principles)
 - [Terminology](#terminology)
2. **Syntax & formatting**
 - [Syntax](#syntax)
 - [Formatting](#formatting)
 - [Ordering](#ordering)
 - [Comments](#comments)
3. **Sass features**
 - [Variables](#variables)
 - [Mixins](#mixins)
 - [Extending](#extending)
 - [Nesting](#nesting)
 - [Functions](#functions)
 - [Maps](#maps)
 - [Conditionals](#conditional-statements)
 - [Loops](#loops)
 - [Warnings & errors](#warnings-errors)
4. **Specificity**
 - [Selector specificity](#selector-specificity)
 - [Separate container and content](#separate-container-and-content)
5. **Naming**
 - [Naming your classes](#naming-your-classes)
 - [Naming conventions](#naming-conventions)
6. **Architecture**
 - [Methodology](#methodology)
 - [Folder structure](#folder-structure)
 - [Global style functions](#global-style-functions)
7. **Acknowledgements**
 - [Shamelessly influenced by:](#acknowledgements)


# Introduction

This is yet another (S)CSS Styleguide, with strong opinions on the why's and how's
to write your styles, name your classes and so on. While reading, keep in mind that
although the rules and guidelines are firm, they can be bent or broken when it
makes sense to do so, as long as you can comment and articulate your reasoning
in your code.

## Key principles

> Sass, being intended to write CSS, should not get much more complex than regular CSS.
> The KISS principle (Keep It Simple Stupid) is key here and may even take precedence
> over the DRY principle (Don’t Repeat Yourself) in some circumstances.
&mdash; *Hugo Giraudel*

- Keep it simple stupid.
- Choose simple solutions over clever solutions whenever possible.
- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even with multiple contributors.
- Break down complex design patterns into small, reusable patterns.
- Split CSS across multiple files, concatenating them during a build step.
- Never style patterns in unrelated pattern files (don't style `.button` presentation in `.table` files).
- Keep selector specificity as low as possible.


## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors)
with an accompanying group of properties. Here's an example:

```scss
.selector {
  background-color: #777;
  color: #333;
}
```

### Selector

In a rule declaration, “selectors” are the bits that determine which elements in
the DOM tree will be styled by the defined properties. Selectors can match HTML
elements, as well as an element's class, ID, or any of its attributes. Here's an
example:

```scss
[selector] {
  background-color: #777;
  color: #333;
}
```

### Property

Finally, properties are what give the selected elements of a rule declaration
their style. Properties are key-value pairs, and a rule declaration can contain
one or more property declarations. Property declarations look like this:

```scss
.selector {
  [property]: [property-value];
}
```


# Syntax & formatting

## Syntax

Use the `.scss` syntax and file extention for all sass files, never the original
`.sass` standards and extention.

## Formatting

The chosen code format must ensure that code is: easy to read; easy to clearly
comment; minimizes the chance of accidentally introducing errors; and results in
useful diffs and blames.

### 80 character line length

Whenever possible, limit the line length to a maximum of 80 characters. Doing so
enables developers to have multiple files open side by side, and provides a
comfortable line length for reading and commenting.

### Title block

- Begin every file with a title block.
- Title blocks must always have *uppercased* text.
- The total line length of the borders must be 80 characters.
- Always leave **one** empty line after the title block before you start writing your code.

```scss
// =============================================================================
// EXAMPLE
// =============================================================================

.selector
```

### Section title block

- Group related sections under section title blocks.
- Section titles should always use *sentence case*.
- The total line length of the borders must be 80 characters.
- Always leave **one** empty line below a section title.
- Always leave **two** empty lines above section titles when code appears above it.

```scss
// Section example
// -----------------------------------------------------------------------------

.selectorA {
  color: #333;
}


// Another section example
// -----------------------------------------------------------------------------

.selectorB {
  font-size: 1rem;
}
```

### Rule declaration

- Use one selector per line in multi-selector rulesets.
- Include a single space before the opening brace of a ruleset.
- Include one property declaration per line in a declaration block.
- Property declarations are to be *ordered alphabetically*.
- Include a single space after the colon of a property declaration.
- Include a space after each comma in comma-separated property or function values.
- Include a single space between math operators (such as `+` or `/`) and values.
- Include a semi-colon at the end of *every* property in a declaration block.
- Place the closing brace of a ruleset in the same column as the first character of the ruleset.
- Separate each rule declaration with a blank line.

### Indentation

- Use soft-tabs (2 spaces) for indentation.
- Never mix spaces and tabs for indentation.
- Use one level of indentation for each property declaration.

### Whitespace

- Always be consistent in your use of whitespace.
- Remove all trailing white-space from your file.
  - *Tip: Set your editor to "show invisibles" and automatically remove end-of-line whitespace.*
- Leave one clear line at the bottom of your file.

### Quotation

- Use *single quotes* consistently.
- Quote attribute values in selectors.
- Quote all property values where applicable.

### Property values

- Use lowercase and shorthand hex values.
- Where allowed, avoid specifying units for zero-values (`0` opposed to `0rem`).
- When styling borders to have no border, use `0` instead of `none`.
- As a general rule, use unit-less `line-height` values as defaults.
- Never specify the `height` property unless it's specifically needed.
- Only style the property you're explicitly concerned with.
  - *Example: `margin-top: 1rem` instead of `margin: 1rem 0 0`.*
- Use shorthand property values when you must style all values.

### Units

- Use `rem` units as the primary unit type.
- Use `px` units only when specifying a border width or radius, and the root font size.
- Use `%` units only when necessary to position, set width or height and to make circular border radius'.
- **Never** resort to setting a *[magic number](https://css-tricks.com/magic-numbers-in-css/)* such as `margin-left: 34px`.

### Pseudo elements and classes

- Declare *pseudo classes* with a single colon.
- Declare *pseudo elements* with a double colon.

### Vendor prefixes

- Do not use vendor prefixes in your code.
- Run [autoprefixer](https://github.com/postcss/autoprefixer) to provide the necessary vendor prefixes during a build step.

#### Example formatting:

```scss
// =============================================================================
// EXAMPLE
// =============================================================================

.selector {
  background-image: url('img/image.png');
  border: 1px solid #333;
  color: #abcdef;
  font-family: 'Times New Roman', serif;
  margin: 2rem 0;
  padding-top: 1rem;
  text-transform: uppercase;
  width: calc(100% - 8rem);

  &:hover {
    border-color: #daa520;
  }

  &::before {
    content: 'Hello';
  }
}


// Section example
// -----------------------------------------------------------------------------

.selectorA,
.selectorB,
.selectorC[type='text'] {
  color: #f00;
}
```


## Ordering

When it comes to ordering your properties, consistency and simplicity are the most
important factors.

1. *Local variable* declarations
 - Any variables specific to one block of code can be local.
2. *Extend* declarations
 - Only `@extend` placeholder selectors.
3. *Property* declarations
 - Use alphabetical ordering of properties.
4. *Include* declarations
 - Placing `@includes` after property declarations makes it easier to read the entire selector.
 - Breakpoint includes should appear as the last includes, in order of size, with **one** line break above.
5. *Nested rule* declarations
 - When necessary, nested rules go last.
 - Always add **one** line break between your nested rules and properties.

#### Example ordering:

 ```scss
 .button {
   $button-size: 3rem;
   @extend %button;
   border: 1px solid #aaa;
   border-radius: 2px;
   color: #333;
   height: $button-size;
   margin-top: -($button-size / 2);
   position: absolute;
   text-transform: uppercase;
   top: 50%;
   @include fontSize('h5');

   &:hover,
   &:focus {
     border-color: #008080;
   }

   &.is-active {
     font-weight: bold;
   }
 }
 ```


## Comments

- Use `//` for comments. Do not use the CSS comment style `/* */`.
- Separate your code into logical sections using comment title and section blocks.
- Write detailed comments for code that isn't self-documenting.
- Annotate your code at the end of the line.
- Write comments for your annotations inside the relevant title or section block.

#### Example comments:

```scss
// =============================================================================
// EXAMPLE
// =============================================================================
// Describe your file when necessary. Explain how it should be used.
// This comment block is 80 characters wide.
//
// 1. Example annotated code.
// -----------------------------------------------------------------------------

.selectorA {
  color: #232425;
  text-align: center; // 1
}


// Section example
// -----------------------------------------------------------------------------
// 1. Annotate comments in title or section blocks.
// 2. Another example of an annotated comment.
// -----------------------------------------------------------------------------

.selectorB {
  background-color: #777;
  float: left; // 1
  padding: 1rem; // 2
}
```


# Sass features

## Variables

- Use variables appropriately to maintain DRY standards.
- Avoid single-use variables, they lose the point of variables altogether.
- Don't hide variables in a separate 'settings' file, keep them with your code.
- Define variables at the top of the file you're using them in.
- All variables should only be used in the file they're declared in.
- Use local variables when applicable only to a specific selector tree.
- Write variables with one consistent naming convention.

### Variable naming conventions

Using a variant of BEM (the methodology from Yandex), all variables should
follow a *"Block, Element, Modifier"* pattern, consisting of structured names and
meaningful hyphens. The goal is to effectively create a variable name that both
explains what it does, and what it relates to as succinctly as possible.

Sass variables are global in scope by default unless you specify a local variable
(a variable defined within a selector). The naming conventions differ slightly,
depending on the scope of your variable.

- Global variables follow a pattern of `<blockName>[-elementName][-propertyName][--modifier]`.
- Local variables follow a simpler pattern of `<elementName|propertyName>[--modifier]`.

*What do the symbols mean?*

The words wrapped in `< >` are compulsory, the `[ ]`
are optional, however you must choose at least one. The `|` is simply separating
your available options, choose one option only.

*What do the terms mean?*

- `<blockName>` will either match or be very similar to the name of your file.
- `[-elementName]` could either be a verb or an adjective used to describe the variable.
- `[-propertyName]` should be defined if the variable is specific to a property.
- `[--modifier]` only needs to be used when you're modifying an existing variable,
or applies to a specific

#### Example global variables

- `$button-borderRadius` uses `blockName-propertyName`.
- `$chip-padding--vertical` uses `blockName-propertyName--modifier`.
- `$icon-size` uses `blockName-elementName`.
- `$radio-checked-borderColor` uses `blockName-elementName-propertyName`.
- `$formHorizontal-label-fontSize` uses `blockName-elementName-propertyName`.

#### Example local variables

- `$padding` uses `propertyName`.
- `$padding--vertical` uses `propertyName--modifier`.
- `$size` uses `elementName`.
- `$size--large` uses `elementName--modifier`.


## Mixins

- When declaring a `@mixin` or calling an `@include` always write the `()`.
- Where applicable, follow the same alphabetical sort order for multiple mixins.
- When using a responsive breakpoint `@include`, always leave *one* empty line above.

Mixins follow a simpler naming convention, needing only to follow camelCase. Choose
a general word or phrase to describe your mixin, being as accurate to what it
actually does as you can. Generally all `@include`'s should be called *inside* your
selectors, not the other way around.

*Note: You don't need to create any cross-browser mixins or use any library to
handle such things, use [autoprefixer](https://github.com/postcss/autoprefixer).*

#### Example mixin declarations

```scss
@mixin fontSize($fontSize, $lineHeight: $fontSize) {
  font-size: fontSize($fontSize);
  line-height: lineHeight($lineHeight);
}

@mixin textTruncate() {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
```

#### Example mixin includes

```scss
.selector {
  @include fontSize('h3');
  @include textTruncate();
}

.selector {
  color: #333;
  text-align: center;

  @include breakpoint('large') {
    color: #777;
  }
}
```


## Extending

- `@extend` placeholder selectors only, do not extend classes or elements.
- Never extend a placeholder selector in another file.
- Placeholder selectors should be written in the appropriate line position.

In a scenario where you have multiple selectors with unique properties as well as
sharing some common properties, a placeholder `@extend` could simplify your sass.
Rather than repeating selectors in a comma separated multi-line way, you can
opt for a placeholder that is extended by each individual selector that needs it.

#### Example placeholder extend

```scss
%placeholder {
  color: #333;
  display: block;
  padding: 1rem 2rem;
  text-align: center;
}

.selectorA {
  @extend %placeholder;
  margin: 1rem;
}

.selectorB {
  @extend %placeholder;
  border: 1px solid #777;
}

```


## Nesting

### CSS selector guidelines

- Keep specificity as low as possible.
- Selectors should aim to have *one* descendant, with **no more than two**.
- Restructure all selectors that have *three* or more descendants.

### Sass nesting guidelines

- There is a maximum of **three** levels of depth for nesting.
- Try to avoid long blocks of nested rules, readability starts to suffer.
- **Restrict nesting to:**
  - Pseudo selectors (classes and elements).
  - Chained class selectors (such as state classes).
  - Modifier class descendants (such as `.buttonGroup--large > .button`).
- ***All other selectors including attribute selectors should be written like CSS selectors.***
- **Do:** use the ampersand operator for pseudo selectors and chaining class selectors.
- **Don't:** use [parent selector suffixes](http://thesassway.com/news/sass-3-3-released#parent-selector-suffixes) appended to selectors, they are harder to scan/search for.

Nesting is a feature of Sass that can divide developers. Some love to use nesting,
while others throw a blanket ban on it. There was even an article creating a rule called
[The Inception Rule](http://thesassway.com/beginner/the-inception-rule), which was
basically advising: "Don't nest more than three levels deep". In the end though, it
really comes down to the fact that [sass doesn't create bad code, bad coders do](http://www.thesassway.com/editorial/sass-doesnt-create-bad-code-bad-coders-do).

Sass nesting and the resulting CSS selectors can be different in appearance. Don't
confuse proper use of indentation for poor selector specificity/performance.
Take the following sass for example:

```scss
.selector--modifier {
  color: #111;
  text-transform: uppercase;

  @include viewport('large') {
    > .oneLevelDescendant {
      display: block;
      float: left;

      &:hover {
        color: #333;
      }
    }
  }
}
```

The class `.oneLevelDescendant` as two levels deep as far as nesting is concerned.
The compiled css class selector is actually one level deep
`.selector--modifier > .oneLevelDescendant`, and the `:hover` selector sits at a
third level of nesting, but when the CSS compiles the selector is actually
`.selector--modifier > .oneLevelDescendant:hover`.

#### Example nesting

```scss
.button {
  color: #333;
  text-transform: uppercase;

  &:active,
  &.is-active {
    border-color: #f00;
  }
}

.button['disabled'] {
  cursor: not-allowed;
}

.button + .button {
  margin-left: 1rem;
}

.button--ghost {
  background: none;
  border: 2px solid #333;

  &.button--primary {
    border-color: #f00;
  }
}

.table--responsiveList {
  @include viewport('small', 'max-width') {
    > .table-header {
      @include hidden();
    }

    > .table-body th,
    > .table-body td {
      padding: spacing('half');

      &:hover {
        background-color: #eee;
      }
    }
  }
}
```


## Functions

[Sass functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
are fantastic. They enable a lot of new possibilities to your CSS, but remember
that just because you can, doesn't mean you should. Make use of functions when
appropriate, but don't go and be too clever. The simpler your code, the simpler
the upkeep.

#### Notable functions

There's a few functions that stand out from the crowd (more than those mentioned
below). Make use of these functions in particular whenever you deem necessary.

- [if($condition, $if-true, $if-false)](http://sass-lang.com/documentation/Sass/Script/Functions.html#if-instance_method)
- [map-get($map, $key)](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method)
- [rgba($color, $alpha)](http://sass-lang.com/documentation/Sass/Script/Functions.html#rgba-instance_method)
- [round($number)](http://sass-lang.com/documentation/Sass/Script/Functions.html#round-instance_method)

#### Example function

```scss
@function color($color, $variant: 'base') {
  @return map-get(map-get($colorMap, $color), $variant);
  @warn 'Unknown color `#{$color}` used in color function.';
  @return null;
}
```


# Specificity

## Selector specificity

Scaling CSS as well as possible, on any large code-base, is difficult. There's a
number of things we can do to assist us, but it can all come undone if specificity
is abused and/or forgotten. Adhere to the following guidelines will help you on
the path to scalability:

- **Do** use classes in your selectors.
- **Do** style the base elements.
- **Do** keep your selector specificity as low as possible.
- **Do** use the child selector `>` when applicable.
- **Do** use `!important`, but limit its use strictly to utility classes.
- **Don't** use ID's for styling.
- **Don't** qualify selectors by prefixing an element.
- **Don't** reference or style descendant elements in your selectors.
- **Don't** write selectors with more than two descendants. (See [nesting](#nesting)).
- **Don't** write descendant selectors that will work without being nested.

When following these guidelines you may still find that you're writing location
dependent selectors. This is something you should be trying to avoid.

## Separate container and content

*Location dependent selectors are selectors that style a class or element only
when present inside a specific containing class or element.*

Note the code block below. The *selector intent* is to style the `.button` class
a particular way, but currently the styles will only work when it's inside the
`.sidebar` container. What should we do if we want these styles to appear inside
another section of the website/app? A component should look the same no matter
where you put it.

```scss
.sidebar .button {
  color: #333;
}
```

There are a few problems with this code. The selector has:

1. Unnecessarily increased the specificity of the `.button` class.
2. It's no longer flexible or reusable elsewhere in your project.
3. It can confuse the developer about where the code belongs.

This can be improved by adding a modifier class to the `.button` pattern, such
as `.button--primary`. This adds to the base class without extra specificity,
maintaining a relationship with it, and will work across your entire project.

See below:

```scss
.selector--primary {
  color: #333;
}
```

*For more information on CSS Specificity, see Harry Roberts' [CSS Guidelines on
specificity](http://cssguidelin.es/#specificity).* *To understand selector intent,
see [CSS Guidelines on Selector Intent](http://cssguidelin.es/#selector-intent).
See the [OOCSS Wiki](https://github.com/stubbornella/oocss/wiki#separate-structure-and-skin)
for information on separating style concerns.*


# Naming

## Naming your classes

*Nicolas Gallagher has written a great article covering HTML semantics and front-end
architecture. There's a section on class naming that I can't recommend enough,
and will be referencing throughout this part of the styleguide. For more information
see his article on [distinguishing between different types of HTML semantics](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/#distinguishing-between-different-types-of-html-semantics).*

We all know naming things is hard, even without quoting Phil Karlton. When it
comes to naming CSS classes it's not any easier. Developers can struggle to come
up with class names for individual UI pieces, especially ones that aren't as
obvious as `.button` or `.modal`. For example, you've been handed a design that
is a list of news articles, with a title, date, and short description. You quickly
build the HTML and throw on a couple of classes resulting in something like this:

```html
<div class="news">
  <h2>News</h2>
  <article class="news-article">
  <h3>Article headline</h3>
  <p>Butcher waistcoat austin art party franzen, letterpress cardigan...</p>
  </article>
</div>
```

> Tying your class name semantics tightly to the nature of the content has already
reduced the ability of your architecture to scale or be easily put to use by other
developers.
&mdash; *Nicolas Gallagher*

The class names `news` and descendant `news-article` don't tell you anything that's
not already obvious from viewing the content, and cannot be used (or even worse, is used)
with content that isn't news.

> The most reusable components are those with class names that are independent of
the content.
&mdash; *Nicolas Gallagher*

So how do you name your classes? You should be focusing on the repeating structural
and functional patterns in the design, not on the content. Class names that are
independent of the content, but do not literally describe the presentation. The
poster child for abstraction is the [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
by Nicole Sullivan.

> It is important to strike a balance between names that do not literally describe
the style that the class brings, but also ones that do not explicitly describe
specific use cases.
&mdash; *Harry Roberts*

#### Recommended

- Highly reusable class names.
- Classes that are as short as possible but as long as necessary.
- Classes that communicate useful information *to developers*.

```scss
.nav {
  margin-bottom: 1rem;
}

.button {
  font-size: 1rem;
}

.thumbnail {
  border: 1px solid #333;
}

.button--primary {
    color: #00f;
}
```

#### Not recommended

- Don't create class names that describe the content or use cases.
- Don't name classes based on location of content.
- Don't name classes based on presentation.

```scss
.navigation {
  margin-bottom: 1rem;
}

.btn {
  font-size: 1rem;
}

.news-thumbnail {
  border: 1px solid #333;
}

.button--blue {
    color: #00f;
}
```

### Building constructs

- Add a `data-construct="Construct name"` to your containing element.
- Use sentence case for your construct names.

Mixing and matching reusable classes allows developers to create constructs (large
or complex UI) much quicker, requiring much less effort and new styling. To improve
the scanning of these complicated chunks of code, Harry Roberts suggests adding a
data attribute to the HTML's wrapping element to provide a more specific, meaningful
name alongside the reusable classes. This makes it very clear to all developers
where a particular construct begins and what content it contains. This is where
you can describe the specific use case of your UI.


## Naming conventions

Class naming conventions use [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)'
conventions with the exception of `camelCase` over `PascalCase` for component
names. *You may pass an optional namespace to your components and constructs if
your project could have multiple CSS libraries in use.*

These conventions rely on *structured class names and meaningful hyphens* (i.e., not  
using hyphens merely to separate words). This helps to work around the current  
limits of applying CSS to the DOM (i.e., the lack of style encapsulation), and to
better communicate the relationships between classes.

### Component classes

Syntax: `[<namespace>-]<componentName>[-descendentName][--modifierName]`

*A component is a small, self-contained building block. Its purpose is very clear
and does not rely on any other component to achieve its desired output. Components
do not have any concept of 'layout' when placed on a page, they simply look after
themselves without shaping things around them.*

### Construct classes

Syntax: `[<namespace>-]<constructName>[-descendentName][--modifierName]`

*A construct creates a specifically styled layout for content. This content could
be an aesthetic layout for a single component, or a structural layout for a group
of components or other constructs.*

### Utility classes

Syntax: `u-<utilityName>[-@[s|m|l|xl]]`

*Utility classes are immutable classes, which will override or provide additional
styling to the HTML.*

### State classes

Syntax: `is-<stateName>`

*State classes are typically triggered via JavaScript when a state has changed in
the UI, though states can also be applied on page load from the initial page render,
to be later toggled to a new state. They trigger specific styling to occur.*

### JavaScript hooks

Syntax: `data-<name>`

*When you need to apply state or other logic that has no connection to CSS styling,
do so via a data attribute.*


# Architecture

## Methodology

If you've read this far, you've probably got a fairly good idea of the decisions
made and the multiple methodologies used. This styleguide adheres to a methodology
that really just splices together a number of old and modern principles and
methodologies in a cohesive way. To break it down here's the biggest influences:

### DRY KISS

Don't repeat yourself. Keep it simple stupid. These two key principles are the
foundations of this coding styleguide. The DRY principle applies to your sass,
allowing your compiled CSS to have some repetition when it makes sense to do so.
With equal importance, your sass should also be kept as simple as possible. Sass
can do many complicated things very well, but in then end its intention is to
output CSS. Your sass doesn't need to get much more complicated than that.

Don't over-engineer your styling. Don't write code that may be very clever, but
is very hard for others to follow/digest. You're not building a rocket, so keep
it simple stupid.

### OOCSS & Atomic Design

Object-oriented CSS and Atomic Design. There's been several methodologies and
coding styles/patterns built around the idea of reusable UI components, these
two in particular speaking quite loudly.

Nicole Sullivan popularised the concept of object-oriented CSS back in 2010 by
creating the [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).
The idea was simple, to encourage you to think about your CSS as reusable objects
that can be used independently throughout your website. The two main principles
are separating structure from skin, and separating container from content. The
most popular way to describe this concept is to think of your objects as lego
pieces that you fit together in whatever combination you need.

[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) is a more recent
methodology, created by Brad Frost. It takes the core concepts of OOCSS and runs
with them in a style that breaks down your UI into logical chunks from smallest
to largest, or from 'atoms' to 'molecules' to 'organisms'. It wants you to stop
thinking of building 'a home page' (or any web page) and start thinking of building
the pieces that make up that web page.

### BEM & SUIT CSS

Another methodology which kicked off a lot of similar naming conventions is [BEM](https://en.bem.info/methodology/key-concepts/)
(Block-Element-Modifier), a class naming convention created by Yandex with large
codebases and scalability in mind. BEM solidifies the OOCSS/Atomic Design methodologies
mentioned above. Each larger piece of UI can be referred to as a 'block', with its
descendants being 'elements' and any 'modifier' - an entity that defines the
appearance and behaviour of a block or an element.

Nicholas Gallagher, as part of [SUIT CSS](https://github.com/suitcss/suit), created
a variant of BEM naming conventions that relies on structured class names and
meaningful hyphens, and adds to it a utility class format and state class format,
rounding out everything you'll need to construct a well built design system.

## Folder structure

### Toolkit

- Has no outputted styles.
- Contains the global settings (maps and functions).
- Contains the global tools (mixins and functions).
- *Example settings: Animation Colors, Spacing, Type*
- *Example tools: Calculations, Float, Shape, Type*

### Layout

- Is the designs structural layout (skeleton/wireframe only).
- Can define a container class for fixed width global scoped content.
- Has limited visual styling (Background, border, margin/padding) only.
- *Examples: Header, Body and Footer content zones.*

### Components

- Are small, independent, multi-purposed building blocks.
- Are simple and self-contained.
- Have no concept of layout present.
- *Examples: Buttons, Icons, Inputs, Typography.*

### Constructs

- Are one or more components, which requires specific layout or visuals.
- Are complex and self-contained.
- Can be nested inside other constructs.
- *Examples: Accordions, Cards, Dialogs, Tables.*

### Utilities

- Are immutable classes.
- Are typically single property classes.
- Have one very specific, overriding purpose.
- *Examples: Visibility classes, Grid classes, Width classes.*

#### Example folder structure

```scss
/toolkit
  /settings
    _name-settings.scss
  /tools
    _name-tools.scss
  _toolkit.scss
/layout
  _layout.scss
/components
  /component
    _component-structure.scss
    _component-theme.scss
  _components.scss
/constructs
  /construct
    _construct-structure.scss
    _construct-theme.scss
  _constructs.scss
/utilities
  /utility
    _utility-utilities.scss
project.scss
```


## Global style functions

Sass maps are extraordinarily useful. When combined with custom functions they
can be utilised as a great solution to global styles such as color or typography.
These global functions very clearly differentiate themselves from simple file
variables, they convey global importance and build relationships between your
color palette, typography, etc more so than basic variables.

You can build a global toolkit that will become the backbone of your styles. One
of the most popular uses of this combination is for building your color palette.
You create a map of your colors, and a custom function such as `color()` to call
the value you need.

With this in mind, there's a handful of candidates that you should consider making
use of throughout all of your sass:

- Animation
- Color
- Spacing
- Typography
- Viewport
- z-index

By creating maps for each of these areas, you cover everything you need to build
the core aesthetics for any project with the added bonus functionality that maps
provide. Here's an example for creating a color function powered by a map:

*Map:*

```scss
$colorMap: (
  'primary': (
    'dark': #333,
    'base': #777,
    'light': #ccc
  )
);
```

*Helper function:*

```scss
@function color($color, $variant: 'base') {
  @return map-get(map-get($colorMap, $color), $variant);
  @warn 'Unknown color `#{$color}` used in color function.';
  @return null;
}
```

*Sass:*

```scss
.selector {
  background-color: color('primary', 'light');
  color: color('primary');
}
```

*Compiled CSS:*

```css
.selector {
  background-color: #aaa;
  color: #777;
}
```

A little abstraction is also very important when naming your map keys. Choose
abstractions that allow the ability to scale. The scale you choose doesn't
necessarily matter, as long as it's clearly understood by others. Some examples:

- `fastest, faster, fast, slow, slower, slowest`
- `largest, larger, large, small, smaller, smallest`
- `darkest, darker, dark, light, lighter, lightest`

*For more on using sass maps in this way, check out these articles:*

- Erskine Design's [Friendlier colour names with Sass maps](http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/).
- Sitepoint's [Using Sass Maps](https://www.sitepoint.com/using-sass-maps/).


# Acknowledgements

*These guidelines wouldn't exist without being shamelessly influenced by these
 lovely people/documents:*

 - Nicolas Gallagher's [SUIT CSS](http://suitcss.github.io/), [Idiomatic CSS](https://github.com/necolas/idiomatic-css), and [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
 - Airbnb's [CSS / Sass styleguide](https://github.com/airbnb/css)
 - Hugo Giraudel's [Sass guidelines](http://sass-guidelin.es/)
 - Harry Roberts' [CSS guidelines](http://cssguidelin.es/)
 - Brad Frosts' [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
 - Medium's [CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.jmtwduxy9)
 - Yandex's [BEM: Key concepts](https://en.bem.info/methodology/key-concepts/)
 - Nicole Sullivan's [Media object saves hundreds of lines of code](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) & [OOCSS](https://github.com/stubbornella/oocss/wiki)
 - Jonathan Snook's [SMACSS State rules](https://smacss.com/book/type-state)
