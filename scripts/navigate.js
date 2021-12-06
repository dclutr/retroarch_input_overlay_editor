
const openOverrideTab = () => {
    document.querySelector('#overlay_menu').style.display = 'none';
    document.querySelector('#override_menu').style.display = 'block';
};

const openOverlayTab = () => {
    document.querySelector('#override_menu').style.display = 'none';
    document.querySelector('#overlay_menu').style.display = 'block';
};


const switchOverlayProperty = () => {

    for(el of document.querySelectorAll('.property_label')) { el.style.display = 'none'; }

    const currentProperty = config.overlay.currentProperty();

    if(currentProperty === 'active') {

        for(overlay of overlays)
            overlay.propertyElement('active').style.display = 'inline';

    } else {

        for(overlay of overlays)
            if(overlay.is('active'))
                overlay.propertyElement(currentProperty).style.display = 'inline';
    }
};

const openDownloadOverride = () => {
    document.querySelector('#download_area').style.display = 'block';
    document.querySelector('#download_instructions').innerHTML = download.overrideInstructions;
    document.querySelector('#download_config').value = download.overrideConfig();
};

const openDownloadOverlay = () => {
    document.querySelector('#download_area').style.display = 'block';
    document.querySelector('#download_instructions').innerHTML = download.overlayInstructions;
    document.querySelector('#download_config').value = download.overlayConfig();

};

const closeDownload = () => {
    document.querySelector('#download_area').style.display = 'none';
};

const openRedrawPopup = () => {
    document.querySelector('#redraw_popup').style.display = 'block';
};

const closeRedrawPopup = () => {
    document.querySelector('#redraw_popup').style.display = 'none';
};

const goFullScreen = () => {
    let elem = document.querySelector("body");
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => { alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);});
    } else {
        document.exitFullscreen();
    }
    openRedrawPopup();
};
