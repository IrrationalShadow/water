---
title: "progress"
---

# Progress

Currently we only support the progress element, and only in the determinate state. This will be expanded upon to show indeterminate progress, as well as loading spinners, however these items are not yet important to the core component, and are strictly used for theming purposes.

If a project requires loading spinners or indeterminate progress bars, please extend this components theme file to do so.

## Determinate progress bars

<progress class="progress" value="0" max="100">0%</progress>
<progress class="progress" value="33" max="100">33%</progress>
<progress class="progress" value="66" max="100">66%</progress>
<progress class="progress" value="100" max="100">100%</progress>

### Progress bar size modifiers

<progress class="progress progress--small" value="80" max="100">80%</progress>
<progress class="progress" value="40" max="100">40%</progress>
<progress class="progress progress--large" value="60" max="100">60%</progress>
