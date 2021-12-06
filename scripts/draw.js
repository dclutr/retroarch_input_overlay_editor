/**
 * The Drawable Area element is a rectangle left after removing the area taken by the Menu
 */
const drawDrawableArea = () => {

    const [ elD, elM ] = [ document.querySelector('#drawable_area'), document.querySelector('#menu') ];

    [ elD.style.width, elD.style.height ] =
        (window.innerWidth > window.innerHeight)
            ?[
                `${ window.innerWidth - elM.offsetWidth }px`,
                `${ window.innerHeight }px`
            ]
            :[
                `${ window.innerWidth }px`,
                `${ window.innerHeight - elM.offsetHeight }px`
            ]

    console.log(`draw drawable area (${ elD.offsetWidth }x${ elD.offsetHeight })`);
};

/**
 * The Target Screen element is a rectangle that uses the Target Screen dimensions
 * but has been scaled to fit in the Drawable Area element
 */
const drawTargetScreen = () => {

    const [ elT, elD ] = [ document.querySelector('#target_screen'), document.querySelector('#drawable_area') ];

    const { x, y } = state.targetScreenSize();

    [ elT.style.width, elT.style.height ] =
        ( x / elD.offsetWidth > y / elD.offsetHeight )
            ?[
                `${ ( elD.offsetWidth - 32 ) }px`,
                `${ ( elD.offsetWidth - 32 ) * (y/x) }px`
            ]
            :[
                `${ ( elD.offsetHeight - 32 )* (x/y) }px`,
                `${ ( elD.offsetHeight - 32 )  }px`
            ];

    [ elT.style.left, elT.style.top ] =
        [ `${ ( elD.offsetWidth - elT.offsetWidth ) / 2 }px`, `${ ( elD.offsetHeight - elT.offsetHeight ) / 2 }px` ];


    console.log(`draw target screen (${ elT.offsetWidth }x${ elT.offsetHeight })`);
};

/**
 * The Game Viewport element is a rectangle that uses the Game Viewport dimesions
 * but has been scaled to fit in the Target Screen element
 */
const drawGameViewport = () => {

    const [ elG, elT ] = [ document.querySelector('#game_viewport'), document.querySelector('#target_screen') ];

    const t = state.targetScreenSize();
    const g = state.gameViewportSize();

    const ratio = elT.offsetWidth /  t.x;

    [ elG.style.width, elG.style.height ] =
        [ `${ ( Math.min( g.x * ratio, elT.offsetWidth ) ) }px`, `${ ( Math.min( g.y * ratio, elT.offsetHeight ) ) }px` ];

    elG.style.left = `${ elT.offsetLeft + ( elT.offsetWidth - elG.offsetWidth ) / 2 }px`;
    elG.style.top = `${ elT.offsetTop }px`;


    console.log(`draw game viewport (${ elT.offsetWidth }x${ elT.offsetHeight })`);
};

/**
 * The Overlay Images are drawn using a position and size in less precise grid coordinates rather than actual pixels
 */
const drawOverlays = () => {

    const elT = document.querySelector('#target_screen');

    if(!((elT.offsetWidth > 0) && (elT.offsetWidth > 0))) { return; }

    grid.scale();

    const unit = grid.unit();

    for (overlay of overlays) {

        const elI = overlay.imageElement();

        if (!overlay.is('active')) {
            elI.style.display = 'none';
            continue;
        }

        [ elI.style.display, elI.style.width, elI.style.height, elI.style.left, elI.style.top, ] =
            [
                'block',
                `${ overlay.size.x * grid.unit() }px`,
                `${ overlay.size.y * grid.unit() }px`,
                `${ elT.offsetLeft + ( overlay.position.x - (1/2) - overlay.size.x / 2 ) * grid.unit() }px`,
                `${ elT.offsetTop + ( overlay.position.y - (1/2) - overlay.size.y / 2 ) * grid.unit() }px`,
            ];

        console.log(`overlay ${ overlay.name }, position ${ overlay.position.x }x${ overlay.position.y }, size ${ overlay.size.x }x${ overlay.size.y }`);
    }
    console.log(`unit ${ grid.unit() }px`);
}

/**
 * The Touchable Area is an invisible element covering the Target Screen that can be clicked
 * It is stacked on top of the Target Screen, Game Viewport and Overlays so that all places in the area are touchable
 */
const drawTouchableArea = () => {
    const [ el1, el2 ] = [ document.querySelector('#touchable_area'), document.querySelector('#target_screen') ];

    [ el1.style.width, el1.style.height, el1.style.left, el1.style.top, ] =
        [ `${ el2.offsetWidth }px`, `${ el2.offsetHeight }px`, `${ el2.offsetLeft }px`, `${ el2.offsetTop }px`, ];
}

const draw = () => {
    drawDrawableArea();
    drawTargetScreen();
    drawGameViewport();
    drawOverlays();
    drawTouchableArea();
};
