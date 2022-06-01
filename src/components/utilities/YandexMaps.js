import React, {useEffect} from 'react';

const YandexMaps = () => {

    const dataArr = [
        {
            type: 'Feature',
            id: 11,
            geometry: {
                type: 'Point',
                coordinates: [55.821463, 49.093077]
            },
            properties: {
                data: {
                    mood: 'excellent'
                }
            }
        },
        {
            type: 'Feature',
            id: 22,
            geometry: {
                type: 'Point',
                coordinates: [55.797574, 49.106594]
            },
            properties: {
                data: {
                    mood: 'good'
                }
            }
        },
        {
            type: 'Feature',
            id: 33,
            geometry: {
                type: 'Point',
                coordinates: [55.821563, 49.090052]
            },
            properties: {
                data: {
                    mood: 'bad'
                }
            }
        },
        {
            type: 'Feature',
            id: 44,
            geometry: {
                type: 'Point',
                coordinates: [55.741377, 49.216427]
            },
            properties: {
                data: {
                    mood: 'school'
                }
            }
        },
        {
            type: 'Feature',
            id: 55,
            geometry: {
                type: 'Point',
                coordinates: [55.740827, 49.213142]
            },
            properties: {
                data: {
                    mood: '5magazine'
                }
            }
        }
    ]
    const geoJSON = {
        type: 'FeatureCollection',
        features: dataArr
    }

    useEffect(() => {
        const ymaps = window.ymaps

        let myMap
        ymaps.ready(() => {
            myMap = new ymaps.Map("map", {
                center: [55.796129, 49.106408],
                zoom: 9,
                controls: [],
            }, {
                restrictMapArea: true,
                autoFitToViewport: 'always'
            })
            myMap.controls.add('zoomControl', {
                size: "small",
                position: {
                    top: '28px',
                    right: '46px'
                }
            })
            myMap.controls.add('geolocationControl', {
                position: {
                    top: '94px',
                    right: '46px'
                }
            })

            const objectManager = new ymaps.ObjectManager({
                clusterize: true,
                clusterDisableClickZoom: true,
                clusterHasBalloon: false,
                clusterHasHint: false,
                geoObjectOpenBalloonOnClick: false,
                clusterOpenBalloonOnClick: false
            });
            objectManager.add(JSON.stringify(geoJSON));
            myMap?.geoObjects.add(objectManager);

            function onClusterEvent (e) {
                const objectId = e.get('objectId');
                const object = objectManager.clusters.getById(objectId)

                console.log('clusterOBJ: ', object)
                console.log('clusterOBJ: ', object.properties.geoObjects)
            }

            function onAddCluster (e) {
                // Назначаем обработчик событий для коллекции объектов-кластеров менеджера.
                objectManager.clusters.events.add(['click'], onClusterEvent);
            }

            // Подпишемся на событие добавления кластера в коллекцию.
            objectManager.clusters.events.add(['add'], onAddCluster);


            // При клике на метке изменяем цвет ее иконки на желтый.
            function onObjectEvent (e) {
                const objectId = e.get('objectId')
                const object = objectManager.objects.getById(objectId)

                // Если событие произошло на метке, изменяем цвет ее иконки.
                if (object.geometry.type === 'Point') {
                    console.log('pointOBJ: ', object)
                    console.log('pointOBJID: ', objectId)
                    console.log('point: ', object.properties.data)
                }
            }

            // Назначаем обработчик событий на коллекцию объектов менеджера.
            objectManager.objects.events.add(['click'], onObjectEvent);
        })



        return myMap?.destroy
    }, [])

    return (
        <div id="map" style={{width: '100%', height: '100%'}}/>
    );
};

export default YandexMaps;