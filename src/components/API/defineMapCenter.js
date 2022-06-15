const defineMapCenter = async (ymaps, selectedCity) => {
    try {
        const ymapsGeocoder = await ymaps.geocode(selectedCity);
        if (ymapsGeocoder) {
            return ymapsGeocoder.geoObjects.get(0).geometry.getCoordinates()
        }
    } catch (err) {
        console.log(err)
        return [0, 0]
    }
}

export default defineMapCenter