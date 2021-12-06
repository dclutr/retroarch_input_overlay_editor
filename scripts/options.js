const options = list => {
    return list.reduce((html, option) => `${ html } <option value="${ option }"> ${ option } </option>`,'');
};


document.querySelector('#screen_preset')
    .innerHTML =
        options( [ '1920x1080', '1600x900', '1366x768', '1280x800', '1280x720', '640x360' ] );

document.querySelector('#screen_orientation')
    .innerHTML =
        options( [ 'Landscape', 'Portrait' ] );

document.querySelector('#viewport_preset')
    .innerHTML =
        options(
            [
                'Sony PlayStation 640x480', 'Sony PlayStation 256x448', 'Sony PlayStation Portable 480x272',
                'Nintendo GameBoy 160x144', 'Nintendo GameBoy Color 160x144', 'Nintendo GameBoy Advance 240x160','Nintendo 64 320x480', 'Nintendo 64 720x576', 'Nintendo DS 256x384',
                'Sega MegaDrive 320x240', 'Sega MegaDrive 256x240', 'Sega MegaDrive 320x224', 'Sega MegaDrive 256x224', 'Sega GameGear 160x144',
                'Sega Saturn 720x576', 'Sega Saturn 320x448', 'Sega 32X 320x420', 'Sega Dreamcast 640x480',
                'TurboGrafx-16 256x239', 'TurboGrafx-16 565x242',
            ]
        );

document.querySelector('#viewport_multiplier')
    .innerHTML =
        options( [ 1, 2, 3, 4 ] );

document.querySelector('#overlay_action')
    .innerHTML =
        options( [ 'move', 'scale', 'freeze' ] );

document.querySelector('#overlay_property')
    .innerHTML =
        options( Overlay.properties );
