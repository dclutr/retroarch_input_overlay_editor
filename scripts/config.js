// configuration via checkboxes, dropdowns, textboxes
const config = {
    targetScreen: {
        custom: () => {
            return document.querySelector('#screen_custom').checked;
        },
        sizeX: () => {
            let x = parseInt(document.querySelector('#screen_size_x').value);
            x = isNaN(x) ?1 :Math.max(1, x);
            return x;
        },
        sizeY: () => {
            let y = parseInt(document.querySelector('#screen_size_y').value);
            y = isNaN(y) ?1 :Math.max(1, y);
            return y;
        },
        preset: () => {
            return document.querySelector('#screen_preset').value
        },
        orientation: () => {
            return document.querySelector('#screen_orientation').value
        }
    },
    gameViewport: {
        custom: () => {
            return document.querySelector('#viewport_custom').checked;
        },
        sizeX: () => {
            let x = parseInt(document.querySelector('#viewport_size_x').value)
            x = isNaN(x) ?1 :Math.max(1, x);
            return x;
        },
        sizeY: () => {
            let y = parseInt(document.querySelector('#viewport_size_y').value)
            y = isNaN(y) ?1 :Math.max(1, y);
            return y;
        },
        preset: () => {
            return document.querySelector('#viewport_preset').value
        },
        multiplier: () => {
            return parseInt(document.querySelector('#viewport_multiplier').value)
        }
    },
    overlay: {
        currentAction: () => {
            return document.querySelector('#overlay_action').value;
        },
        currentProperty: () => {
            return document.querySelector('#overlay_property').value;
        }
    }
};

