const state = {
    targetScreenSize: () => {

        let size = { };

        [ size.x, size.y ] =
            ( config.targetScreen.custom() !== true )
                ?(
                    ( config.targetScreen.orientation() !== 'Portrait' )
                        ?config.targetScreen.preset().split('x').map(value => parseInt(value))
                        :config.targetScreen.preset().split('x').map(value => parseInt(value)).reverse()
                )
                :[
                    config.targetScreen.sizeX(),
                    config.targetScreen.sizeY()
                ];

        console.log(`target screen (${ size.x } x ${ size.y })`)
        return size;
    },
    gameViewportSize: () => {

        let size = { };

        [ size.x, size.y ] =
            ( config.gameViewport.custom() !== true )
                ?(
                    config.gameViewport.preset().split(' ').at(-1).split('x').map(value => parseInt(value) * config.gameViewport.multiplier())
                )
                :[
                    config.gameViewport.sizeX(),
                    config.gameViewport.sizeY()
                ];

        console.log(`game viewport (${ size.x } x ${ size.y })`)
        return size;
    },
}
