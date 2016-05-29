---
title: "Components"
layout: layout.html
---

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

## Component & Construct file structure

- Components & Constructs both follow the OOCSS structure & skin methodology.
- 'Structure' defines the core styling mandatory to the component/construct.
- 'Theme' defines the one or more visual representations of the structure.

### To summarise, components:
- Are small, independent, multi-purposed building blocks.
- Are simple and self-contained.
- Have no concept of layout present.
- Examples: Buttons, icons, progress bars.
