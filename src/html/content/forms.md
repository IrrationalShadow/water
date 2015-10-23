---
title: "forms"
---

# Forms

```html
<form class="form">

    <legend class="form-legend">Form legend</legend>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Range slider</label>
            <input class="form-range" type="range" id="test5" min="0" max="100" />
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field <small>Some help text can go here...</small></label>
            <input class="form-input" type="text" placeholder="Placeholder...">
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field</label>
            <input class="form-input" type="text">
        </div>
        <div class="form-field">
            <label class="form-label">Form field</label>
            <input class="form-input" type="text">
        </div>
        <div class="form-field">
            <label class="form-label">Form field</label>
            <input class="form-input" type="text">
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <span class="form-affix-label">Prepend</span>
                <input class="form-input" type="text">
                <span class="form-affix-label">Append</span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <button class="form-affix-button button">Prefix</button>
                <input class="form-input" type="text">
                <button class="form-affix-button button">Filter</button>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field has-validation form-field--success">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <span class="form-inset-label">Inset Label</span>
                <input class="form-input has-inset-label has-inset-icon" type="text">
            </div>
            <label class="form-feedback">This is an inline error message. Fix your shit.</label>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <input class="form-input has-inset-button" type="text">
                <button class="form-inset-button"></button>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form textarea</label>
            <textarea class="form-textarea" rows="3"></textarea>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form select</label>
            <select class="form-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Radio buttons</label>
            <div class="form-toggleGroup">
                <input class="form-radio" type="radio" name="pokemons" value="Gold" id="pokemonGold">
                <label class="form-label" for="pokemonGold">Pokemon Gold</label>
                <input class="form-radio" type="radio" name="pokemons" value="Silver" id="pokemonSilver">
                <label class="form-label" for="pokemonSilver">Pokemon Silver</label>
                <input class="form-radio" type="radio" name="pokemons" value="Crystal" id="pokemonCrystal">
                <label class="form-label" for="pokemonCrystal">Pokemon Crystal</label>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Radio blocks</label>
            <div class="form-toggleGroup">
                <input class="form-radio" type="radio" name="ge-event" value="Release" id="release">
                <label class="form-labelBox" for="release">Release</label>
                <input class="form-radio" type="radio" name="ge-event" value="Event" id="event">
                <label class="form-labelBox" for="event">Event</label>
                <input class="form-radio" type="radio" name="ge-event" value="Competition" id="competition">
                <label class="form-labelBox" for="competition">Competition</label>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Checkboxes</label>
            <div class="form-toggleGroup">
                <input class="form-checkbox" type="checkbox" name="pokemon" value="Red" id="pokemonRed">
                <label class="form-label" for="pokemonRed">Pokemon Red</label>
                <input class="form-checkbox" type="checkbox" name="pokemon" value="Blue" id="pokemonBlue">
                <label class="form-label" for="pokemonBlue">Pokemon Blue</label>
                <input class="form-checkbox" type="checkbox" name="pokemon" value="Yellow" id="pokemonYellow">
                <label class="form-label" for="pokemonYellow">Pokemon Yellow</label>
            </div>
        </div>
    </div>

</form>

<form class="form form--inline">
    <legend class="form-legend">Inline form</legend>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Username</label>
            <input class="form-input" type="text">
        </div>
        <div class="form-field">
            <label class="form-label">Password</label>
            <input class="form-input" type="password">
        </div>
        <div class="form-actions">
            <button class="button">Login</button>
        </div>
    </div>
</form>

<form class="form form--horizontal">
    <legend class="form-legend">Horizontal form</legend>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field <small>Some help text can go here...</small></label>
            <input class="form-input" type="text" placeholder="Placeholder...">
        </div>
    </div>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Username</label>
            <input class="form-input" type="text">
        </div>
    </div>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Password</label>
            <input class="form-input" type="password">
        </div>
    </div>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <button class="form-affix-label">Prefix</button>
                <input class="form-input" type="text">
                <button class="form-affix-button button">Filter</button>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="form-field">
            <label class="form-label">Form select</label>
            <select class="form-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    </div>
    <div class="form-group">
        <div class="form-field has-validation form-field--success">
            <label class="form-label">Form field</label>
            <div class="form-field-group">
                <span class="form-inset-label">Inset Label</span>
                <input class="form-input has-inset-label has-inset-icon" type="text">
            </div>
            <label class="form-feedback">This is an inline error message. Fix your shit.</label>
        </div>
    </div>
</form>
```
