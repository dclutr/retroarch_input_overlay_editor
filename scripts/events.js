for (el of document.querySelectorAll('.config')) {
    el.onchange = draw;
}

for (el of document.querySelectorAll('.config_active')) {
    el.onchange = drawOverlays;
}

document.querySelector('#override_tab').onclick = openOverrideTab;
document.querySelector('#overlay_tab').onclick = openOverlayTab;
document.querySelector('#overlay_property').onchange = switchOverlayProperty;

document.querySelector('#touchable_area').onclick = touch;

document.querySelector('#redraw').onclick = draw;
document.querySelector('#close_and_redraw').onclick = () => { closeRedrawPopup(); draw(); }

document.querySelector('#download_close').onclick = closeDownload;
document.querySelector('#override_download').onclick = openDownloadOverride;
document.querySelector('#overlay_download').onclick = openDownloadOverlay;

document.querySelector('#fullscreen').onclick = goFullScreen
