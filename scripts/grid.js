const grid = {
    current:
        null,
    next:
        null,
    unit:
        null,
    scale: () => {

        const gridMax = 32;

        const { x, y } = state.targetScreenSize()

        grid.next = ( x > y )
                ?{ x: gridMax, y: Math.ceil( gridMax * ( y / x ) ) }
                :{ y: gridMax, x: Math.ceil( gridMax * ( x / y ) ) };

        if (grid.current === null) { grid.current = { x: grid.next.x, y: grid.next.y }; }

        if ((grid.next.x !== grid.current.x) || (grid.next.y !== grid.current.y)) {

            const gridRatio = { x: ( grid.next.x / grid.current.x ), y: ( grid.next.y / grid.current.y ) };

            for (overlay of overlays)
                [ overlay.position.x, overlay.position.y ] = [ overlay.position.x * gridRatio.x, overlay.position.y * gridRatio.y ];

            [ grid.current.x, grid.current.y ] = [ grid.next.x, grid.next.y ];
        }

        console.log(`current grid ${ grid.current.x }x${ grid.current.y }`)
    },
    unit: () => {

        const elT = document.querySelector('#target_screen');
        return ( elT.offsetWidth / grid.current.x );
    },
    coordinates: ([ x, y ]) => {

        const elT = document.querySelector('#target_screen');
        return (
            [ Math.ceil( ( x - elT.offsetLeft ) / grid.unit() ), Math.ceil( ( y - elT.offsetTop ) / grid.unit() ) ]
        );
    }
};
