---
title: "buttons"
---

<div class="example">
    <button class="button">Button</button>
</div>

```html
<button class="button">Button</button>
```

<div class="example">
    <button class="button">Button</button>
    <button class="button button--primary">Button</button>
    <button class="button" disabled>Button</button>
</div>

```html
<!-- Base button -->
<button class="button">Button</button>

<!-- Primary button -->
<button class="button button--primary">Button</button>

<!-- Disabled button -->
<button class="button" disabled>Button</button>
```


```css
.button {
    background-color: material("lightGreen", 500);
    border-radius: $button-borderRadius;
    border: 0;
    color: color("whites");
    font-family: fontFamily("text");
    font-size: fontSize("base");
    line-height: fontSize("base");
    padding: spacing("half");
    text-transform: uppercase;
    transition: background-color duration("faster") timing("swiftOut");
}
```
