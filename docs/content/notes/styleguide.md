# Sass Guidelines

_The following guidelines outline an occasionally reasonable style guide for CSS development.
These guidelines strongly encourage the use of existing, common, sensible patterns._


## Table of contents

1. **Terminology**
 - Rule declaration
 - Selector
 - Property
2. **CSS**
 - General principles
 - Specificity
 - Formatting
 - Units
 - White space
 - Vendor prefixes
3. **Sass**
 - General principles
 - Syntax
 - Ordering
 - Comments
 - Functions
 - Variables
 - Mixins
 - Extending
 - Nesting
4. **Naming conventions**
 - General principles
 - Component & Construct classes
 - State classes
 - Utility classes
 - JavaScript data-attributes
5. **Acknowledgements**


## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```scss
.class {
    background-color: #777;
    color: #333;
}
```

### Selector

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```scss
[selector] {
    background-color: #777;
    color: #333;
}
```

### Property

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```scss
.class {
    [property]: [property-value];
}
```


## CSS

### General principles

- Strictly enforce and adhere to the agreed-upon style guide.
- Don't try to prematurely optimize your code; keep it readable and understandable.
- All code in any code-base should look like a single person typed it, even with multiple contributors.
- Break down complex design patterns into small, reusable patterns.
- Split CSS across multiple files, concatenating them during a build step.
- Never style patterns in unrelated pattern files.
- Keep selector specificity as low as possible.
- Choose simple solutions over clever solutions where applicable.


### Specificity

Scaling CSS as well as possible, on any large code-base, is difficult. There's a number of things we can
do to assist us, but it can all come undone if specificity is abused and/or forgotten. Adhere to the following
guidelines will help you on the path to scalability:

- **Do:** Use classes in your selectors.
- **Do:** Style the base elements.
- **Do:** Keep your selector specificity as low as possible at all times.
- **Do:** Use the child selector `>` when applicable.
- **Do:** Use the `!important` tag, but limit its use strictly to utility classes.

- **Don't:** Use ID's for styling.
- **Don't:** Reference or style descendant elements in your selectors.
- **Don't:** Qualify selectors by prefixing an element.
- **Don't:** Chain classes together ([State classes](#state-classes) being the exception).
- **Don't:** Write selectors with two or more descendants. (See [nesting](#nesting) below).
- **Don't:** Write descendant selectors that will work without being nested.

When following these guidelines you may still find that you're writing *location dependent* selectors. This
is something you should be trying to avoid. A location dependent selector occurs when you're styling a class
or element that is inside a particular containing element, which restricts where the styles will work.

Note the below code block, the *selector intent* is to style the `.button` class a particular way when it
appears inside the sidebar, but there's a much better way to achieve this. As Harry Roberts has said,
*"A component shouldn’t have to live in a certain place to look a certain way".*

```scss
.sidebar .button {
    color: #333;
}
```

There are a few problems with this code. The selector has unnecessarily increased the specificity of the `.button` class, its made
the properties valid only when `.button` appears within the `.sidebar` class, and can confuse the developer for where the code belongs
(does it belong with the sidebar CSS or the button CSS?). It's also no longer flexible, or reusable elsewhere in your project.

This can be rectified by adding a modifier class to the `.button` pattern, such as `.button--primary`. This extends the base class
without adding specificity, while maintaining a relationship with it, and will work across your entire project. See below:

```scss
.button--primary {
    color: #333;
}
```

*For more information on CSS Specificity, see Harry Roberts' [CSS Guidelines on specificity](http://cssguidelin.es/#specificity).*
*To understand selector intent, see [CSS Guidelines on Selector Intent](http://cssguidelin.es/#selector-intent).*


### Formatting




## Acknowledgements

 _These guidelines wouldn't exist without being 'influenced' by these lovely people/documents:_
 - Nicolas Gallagher's [SUIT CSS](http://suitcss.github.io/) and [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
 - Airbnb's [CSS / Sass Styleguide](https://github.com/airbnb/css)
 - Medium's [CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.jmtwduxy9)
 - Harry Roberts' [CSS Guidelines](http://cssguidelin.es/)
