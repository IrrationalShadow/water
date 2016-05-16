---
title: "tables"
---

# Tables

Empty your mind. Be formless. Shapeless. Like water. You put water into a bottle, it becomes the bottle. You put it into a teapot, it becomes the teapot. Now water can flow, or it can crash. Be water, my friend.

## Basic table

<table class="table">
    <thead class="table-header">
        <tr class="table-row">
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
            <th>Four</th>
        </tr>
    </thead>
    <tbody class="table-body">
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row table-row--warning">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
    </tbody>
</table>

## Table modifiers

#### Table with small modifier

<table class="table table--small">
    <caption class="table-surtitle">Table surtitle</caption>
    <caption class="table-subtitle">Table subtitle</caption>
    <thead class="table-header">
        <tr class="table-row">
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
            <th>Four</th>
        </tr>
    </thead>
    <tbody class="table-body">
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row table-row--warning">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
        <tr class="table-row">
            <th>Value</th>
            <td>Value</td>
            <td>Value</td>
            <td>Value</td>
        </tr>
    </tbody>
</table>

#### Table with responsive list modifier
This table will change its UI on small viewports to function more like a list.

<table class="table table--responsiveList">
    <thead class="table-header">
        <tr class="table-row">
            <th scope="col">One</th>
            <th scope="col">Two</th>
            <th scope="col">Three</th>
            <th scope="col">Four</th>
        </tr>
    </thead>
    <tbody class="table-body">
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
    </tbody>
</table>

#### Table with responsive overflow modifier
This table condense its column span, and will allow horizontal scrolling when the viewport is too small.

<table class="table table--responsiveOverflowX">
    <thead class="table-header">
        <tr class="table-row">
            <th scope="col">One</th>
            <th scope="col">Two</th>
            <th scope="col">Three</th>
            <th scope="col">Four</th>
        </tr>
    </thead>
    <tbody class="table-body">
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row table-row--success">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
        <tr class="table-row">
            <th scope="row">Value</th>
            <td data-title="Column 1">Value</td>
            <td data-title="Column 2">Value</td>
            <td data-title="Column 3">Value</td>
        </tr>
    </tbody>
</table>
