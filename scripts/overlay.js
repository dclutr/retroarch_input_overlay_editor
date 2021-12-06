class Overlay {

    static keys =
        [
            'l', 'l2', 'l3', 'r', 'r2', 'r3', 'up', 'down', 'left', 'right', 'a', 'b', 'x', 'y', 'start', 'select', 'analog_left_bg', 'analog_right_bg','analog_left', 'analog_right', 'menu_toggle',
            'up|left', 'up|right', 'down|left', 'down|right',
        ];

    static properties =
        [ 'active', 'selected', ,'clickable', 'movable', 'radial' ];

    static defaults = {
        active:
            [],
        selected:
            [],
        clickable:
            [
                'l', 'l2', 'l3', 'r', 'r2', 'r3', 'up', 'down', 'left', 'right', 'a', 'b', 'x', 'y', 'start', 'select', 'analog_left', 'analog_right', 'menu_toggle',
                'up|left', 'up|right', 'down|left', 'down|right',
            ],
        movable:
            [ 'analog_left', 'analog_right' ],
        radial:
            [ 'a', 'b', 'x', 'y', 'analog_left', 'analog_right' ],
    };

    key;
    name;
    image;
    position = { x: 2 , y: 2 };
    size = { x: 2 , y: 2 };

    constructor(key) {
        this.key = key;
        this.name = key.replaceAll('|', '_');
        this.image = `image-${ this.name.replaceAll('_', '-').replaceAll('|', '-') }.png`;
    };

    is(property) {
        return document.querySelector(`#${ property }_overlay_${ this.name }`).checked;
    };

    propertyElement(property) {
        return document.querySelector(`#${ property }_overlay_${ this.name }_label`);
    }

    imageElement() {
        return document.querySelector(`#image_overlay_${ this.name }`);
    }
};

const overlays = [];

for(key of Overlay.keys) {
    overlays.push(new Overlay(key));
}

const propertyCheckbox = (key, property) => {

    const name = key.replaceAll('|', '_');

    const checkbox = {
        id: `${ property }_overlay_${ name }`,
        class: `config_${ property }`
    };

    const label = {
        id:`${ checkbox.id }_label`,
        class: `property_label ${ property }`
    };

    return (
        `<label id="${ label.id }" for="${ checkbox.id  }" class="${ label.class }">
            | ${ name.toUpperCase() }
            <input id="${ checkbox.id }" class="${ checkbox.class }" type="checkbox"${ Overlay.defaults[ property ].includes(key) ?' checked' :'' }>
        </label>`
    );
}

document.querySelector('#overlay_list')
    .innerHTML =
        Overlay.keys.reduce((keyHtml, key) => keyHtml + Overlay.properties.reduce((properyHtml, property) => properyHtml + propertyCheckbox(key, property), ''), '');


document.querySelector('#overlay_images')
    .innerHTML =
        overlays.reduce((html, overlay) => `${ html } <img class="overlay" id="image_overlay_${ overlay.name }" src="${ overlay.image }">`, '');

