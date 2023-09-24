// Renderizar Elementos

const observer = new IntersectionObserver(entries => {

    Array.from(entries).forEach(entry => {

        if (entry.intersectionRatio >= .5) {
            entry.target.classList.add('sobreNosOffHidden');
        }

    })

}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.contInfo > *')).forEach(element => {
    observer.observe(element)
})




// Renderizar Mapa 

let map;

async function gerarMapa(latitude, longitude) {
    const position = { lat: latitude, lng: longitude };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.querySelector('.contPrincipal .contMaps'), {
        zoom: 20,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Senai Mocca",
    });
}

function renderMaps(lat, long) {

    const contMaps = document.querySelector('.contPrincipal .contMaps');
    const textInvisibleMaps = document.querySelector('.contPrincipal .contMaps span');

    if (contMaps.classList.contains('ActiveMaps') == false) {
        textInvisibleMaps.classList.add('textMapsDesactive');
        gerarMapa(lat, long);
    } else {
        gerarMapa(lat, long);
    }
}




// Navegar entre páginas
function navigation(url) {
    window.location.href = url;
}


//Filtrar Texto
function filterDesc(desc) {
    if (desc.length < 33) {
        return desc;
    }
    else {
        return `${desc.substring(0, 30)}...`;
    }
}