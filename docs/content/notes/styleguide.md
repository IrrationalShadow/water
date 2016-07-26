# Sass Guidelines

_The following guidelines outline an occasionally reasonable style guide for (S)CSS development.
These guidelines strongly encourage the use of existing, common, sensible patterns._


## Table of contents

1. **Terminology**
 - [Rule declaration](#rule-declaration)
 - [Selector](#selector)
 - [Property](#property)
2. **(S)CSS**
 - [General principles](#general-principles)
 - [Specificity](#specificity)
 - [Formatting](#formatting)
 - [Ordering](#ordering)
 - [Comments](#comments)
 - [Variables](#variables)
 - [Mixins](#mixins)
 - [Functions](#functions)
 - [Extending](#extending)
 - [Nesting](#nesting)
3. **Naming conventions**
 - [Convention](#convention)
 - [Component classes](#component-classes)
 - [Construct classes](#construct-classes)
 - [State classes](#state-classes)
 - [Utility classes](#utility-classes)
 - [JavaScript data-attributes](#javascript-data-attributes)
4. **Acknowledgements**


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
elements, as well as an element's class, ID, or any of its attributes. Here are
some examples of selectors:

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


# (S)CSS


## General principles

- Strictly enforce and adhere to the agreed-upon style guide.
- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even with multiple contributors.
- Break down complex design patterns into small, reusable patterns.
- Split CSS across multiple files, concatenating them during a build step.
- Never style patterns in unrelated pattern files (don't style a `.button` in `.table` files.).
- Keep selector specificity as low as possible.
- Choose simple solutions over clever solutions whenever possible.
- Use the `.scss` syntax, never the original `.sass` syntax.


## Specificity

Scaling CSS as well as possible, on any large code-base, is difficult. There's a
number of things we can do to assist us, but it can all come undone if specificity
is abused and/or forgotten. Adhere to the following guidelines will help you on
the path to scalability:

- **Do:** Use classes in your selectors.
- **Do:** Style the base elements.
- **Do:** Keep your selector specificity as low as possible.
- **Do:** Use the child selector `>` when applicable.
- **Do:** Use `!important`, but limit its use strictly to utility classes.
- **Don't:** Use ID's for styling.
- **Don't:** Qualify selectors by prefixing an element.
- **Don't:** Reference or style descendant elements in your selectors.
- **Don't:** Chain classes together ([State classes](#state-classes) being the exception).
- **Don't:** Write selectors with two or more descendants. (See [nesting](#nesting) below).
- **Don't:** Write descendant selectors that will work without being nested.

When following these guidelines you may still find that you're writing *location
dependent* selectors. This is something you should be trying to avoid.

*Location dependent selectors are selectors that style a class or element only
when present inside a particular containing class or element.*

Note the code block below. The *selector intent* is to style the `.selector` class
a particular way when it appears inside the sidebar, but there's a much better way
to achieve this. As Harry Roberts has said, *"A component shouldn’t have to live
in a certain place to look a certain way".*

```scss
.sidebar .selector {
    color: #333;
}
```

There are a few problems with this code. The selector has unnecessarily increased
the specificity of the `.selector` class, its made the properties valid only when
`.selector` appears within the `.sidebar` class, it can confuse the developer about
where the code belongs (does it belong with the sidebar CSS or the button CSS file?),
and it's also no longer flexible or reusable elsewhere in your project.

This can be improved by adding a modifier class to the `.selector` pattern, such
as `.selector--primary`. This adds to the base class without extra specificity,
while maintaining a relationship with it, and will work across your entire project.
See below:

```scss
.selector--primary {
    color: #333;
}
```

*For more information on CSS Specificity, see Harry Roberts' [CSS Guidelines on
specificity](http://cssguidelin.es/#specificity).* *To understand selector intent,
see [CSS Guidelines on Selector Intent](http://cssguidelin.es/#selector-intent).*


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

- Never mix spaces and tabs for indentation.
- Use soft-tabs (4 spaces) for indentation.
- Use one level of indentation for each property declaration.

### Whitespace

- Always be consistent in your use of whitespace.
- Remove all trailing white-space from your file.
  - Tip: Set your editor to "show invisibles" and automatically remove end-of-line whitespace.
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
  - Example: `margin-top: 1rem` instead of `margin: 1rem 0 0`.
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
}

.selector:hover {
    border-color: #daa520;
}

.selector::before {
    content: 'Hello';
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

     > .icon {
         color: #fff;
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


## Variables

- Use variables appropriately to maintain DRY standards.
- Avoid single-use variables, they lose the point of variables altogether.
- Don't hide variables in a separate 'settings' file, keep them with your code.
- Define variables at the top of the file you're using them in.
- All variables should only be used in the file they're declared in.
- Use local variables when applicable only to a specific selector tree.
- Write variables with one consistent naming convention.

Using a variant of BEM (the BEM methodology from Yandex), all variables should
follow a *"Base, Element, Modifier"* pattern, consisting of structured names and
meaningful hyphens. The goal is to effectively create a variable name that both
explains what it does, and what it relates to as succinctly as possible.

Sass variables are global in scope by default unless you specify a local variable
(a variable defined within a selector). The naming conventions differ slightly,
depending on the scope of your variable.

#### Variable naming conventions

- Global variables follow a pattern of `<blockName>[-elementName][-propertyName][--modifier]`.
- Local variables follow a simpler pattern of `<elementName|propertyName>[--modifier]`.

*What do the symbols mean?* The words wrapped in `< >` are compulsory, the `[ ]`
are all optional, however you must choose at least one. The `|` is simply separating
your options, choose either option in your naming.

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

Mixins follow a simpler naming convention, needing only to follow camelCase. Choose
a general word or phrase to describe your mixin, being as accurate to what it
actually does as you can.

#### Example Mixins

- `@mixin textTruncate()`.
- `@mixin hidden()`.
- `@mixin clearFloats()`.


## Functions & maps

Abstraction is also very important when naming your variables. Choose abstractions
that allow the ability to scale, for example `fastest, faster, fast, slow, slower,
slowest` or when sizing `largest, larger, large, small, smaller, smallest`.


## Extending




## Nesting




# Naming conventions

## Convention




## Component classes




## Construct classes



## State classes



## Utility classes



## JavaScript data attributes




## Acknowledgements

 _These guidelines wouldn't exist without being 'influenced' by these lovely people/documents:_

 - Yandex's [BEM: Key concepts](https://en.bem.info/methodology/key-concepts/)
 - Nicolas Gallagher's [SUIT CSS](http://suitcss.github.io/) and [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
 - Airbnb's [CSS / Sass styleguide](https://github.com/airbnb/css)
 - Medium's [CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.jmtwduxy9)
 - Harry Roberts' [CSS guidelines](http://cssguidelin.es/)
