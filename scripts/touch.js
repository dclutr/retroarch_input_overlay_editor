const touch = event => {

    const [ touchX, touchY ] = grid.coordinates([ event.x, event.y ]);

    const selected = overlays.filter(overlay => overlay.is('active') && overlay.is('selected'));

    switch (config.overlay.currentAction()) {
        case 'move': {

            const [ meanX, meanY ] =
                    [
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.position.x, 0) / selected.length ),
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.position.y, 0) / selected.length )
                    ];

            for (overlay of selected)
                [ overlay.position.x, overlay.position.y ] =
                    [ touchX + overlay.position.x - meanX, touchY + overlay.position.y - meanY ];

            drawOverlays();
        };
        break;
        case 'scale': {
            const [ meanPositionX, meanPositionY, meanSizeX, meanSizeY ] =
                    [
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.position.x, 0) / selected.length ),
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.position.y, 0) / selected.length ),
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.size.x, 0) / selected.length ),
                        Math.ceil( selected.reduce((sum, overlay) => sum + overlay.size.y, 0) / selected.length )
                    ];
            const [ scaleX, scaleY ] = [ Math.abs( touchX - meanPositionX ), Math.abs( touchY - meanPositionY ) ];

            for (overlay of selected)
                [ overlay.size.x, overlay.size.y ] =
                    [ 1 + Math.floor( scaleX - overlay.size.x / 2 + meanSizeX / 2 ), 1 + Math.floor( scaleY - overlay.size.y / 2 + meanSizeY / 2 ) ];

            drawOverlays();
        };
        break;
        case 'test': {
        };
        break;
    }
    console.log(`touch ${ touchX }x${ touchY }`);
}
