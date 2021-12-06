// remove empty lines and spaces before and after lines
const trimEmptiness = text => {
    return text
        .replace('\r','')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n')
}

// creating configurations and instructions for saving them
const download = {

    overrideInstructions: `
        Option 1: (recommended)
        1. Go into Settings > Videos > Scaling and select Custom under Aspect Ratio
        2. Put the values below into Custom Aspect Ratio (Width), Custom Aspect Ratio (Height), Custom Aspect Ratio (X Position), Custom Aspect Ratio (Y Position)
        <b> Note: Works best with the Retroarch version from the Retroarch Website (not F-Droid or Google Play) </b>

        Option 2: (will probably not work) Copy and paste into a .cfg file as per the instructions <a href="https://docs.libretro.com/guides/overrides/#override-configs"> here </a>
    `.replaceAll('\r','').replaceAll('\n','<br/>'),

    overlayInstructions: `
        1. Select all in the box below
        2. Copy and paste into a .cfg file
        3. Place the .cfg file in the folder that has all the images. This could be the tool folder or any folder with the same images
    `.replaceAll('\r','').replaceAll('\n','<br/>'),

    overrideConfig: () => {
        const data = `
            aspect_ratio_index = "23"
            custom_viewport_width="${ state.gameViewportSize().x }"
            custom_viewport_height="${ state.gameViewportSize().y }"
            custom_viewport_x="${ state.targetScreenSize().x / 2 - state.gameViewportSize().x / 2 }"
            custom_viewport_y="0"
        `;

        return trimEmptiness(data);

    },
    overlayConfig: () => {

        const toData = (data, overlay, index) => {

            const [ key, shape, positionX, positionY, radiusX, radiusY ] =
                    [
                        overlay.is('clickable') ?overlay.key :'nul',
                        overlay.is('movable') || overlay.is('radial') ?'radial' :'rect',
                        ( overlay.position.x - 1 / 2 ) / grid.current.x,
                        ( overlay.position.y - 1 / 2 ) / grid.current.y,
                        ( overlay.size.x / 2 ) / grid.current.x,
                        ( overlay.size.y / 2 ) / grid.current.y,
                    ]


             data += `
                overlay0_desc${index + 3} = "${ key },${ positionX },${ positionY },${ shape },${ radiusX },${ radiusY }"
                overlay0_desc${index + 3}_overlay = ${ overlay.image }
            `;

            if(overlay.is('movable') === true) {

                data += `
                    overlay0_desc${index + 3}_range_mod = 3.5
                    overlay0_desc${index + 3}_pct = 0.75
                    overlay0_desc${index + 3}_movable = true
                `;
            }

            return data
        }


        const activeOverlays = overlays.filter(overlay => overlay.is('active'));
        const activeOverlayData = activeOverlays.reduce(toData,'');

        const d1 = ( state.targetScreenSize().x - state.gameViewportSize().x ) / ( 2 * state.targetScreenSize().x );
        const d2 = ( state.targetScreenSize().y - state.gameViewportSize().y ) / ( state.targetScreenSize().y );

        let data = `

            overlays = 1

            overlay0_full_screen = true
            overlay0_normalized = true
            overlay0_name = "overlay0"
            overlay0_range_mod = 1.5
            overlay0_alpha_mod = 2.0

            overlay0_descs = ${ activeOverlays.length + 3 }

            overlay0_desc0 = "nul,${ d1 / 2 },0.5,rect,${ d1 / 2 },0.5"
            overlay0_desc0_overlay = image-bgL.png
            overlay0_desc1 = "nul,0.5,${ 1 - d2 / 2 },rect,${ 0.5 - d1 },${ d2 / 2 }"
            overlay0_desc1_overlay = image-bgM.png
            overlay0_desc2 = "nul,${ 1 - d1 / 2 },0.5,rect,${ d1 / 2 },0.5"
            overlay0_desc2_overlay = image-bgR.png

            ${ activeOverlayData }


        `;

        return trimEmptiness(data);
    }
}
