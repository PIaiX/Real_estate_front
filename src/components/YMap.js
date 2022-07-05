import React, {useEffect, useState} from 'react';
import {GeolocationControl, Map, ObjectManager, withYMaps, ZoomControl} from 'react-yandex-maps';
import {useSelector} from 'react-redux';

const YMap = ({ymaps, ...props}) => {
    const [objectManager, setObjectManager] = useState(null)
    const [selectedCluster, setSelectedCluster] = useState(null)
    const [selectedPoint, setSelectedPoint] = useState(null)
    const mapCenter = useSelector(state => state.mapCenter)
    const items = props.items

    useEffect(() => {
        objectManager && objectManager.removeAll() && initObjectManager()

    }, [items])

    const feature = items && items.map(item => ({
        type: 'Feature',
        id: item.id,
        geometry: {
            type: 'Point',
            coordinates: [item.latitude, item.longitude]
        },
        properties: {
            data: {
                id: item.id,
                isHot: item.isHot,
                isVip: item.isVip,
            }
        }
    }))

    useEffect(() => {
        if (props.callback && selectedCluster) {
            props.callback(selectedCluster.features?.map(item => item.properties?.data?.id))
        }
    }, [selectedCluster])

    useEffect(() => {
        if (props.callback && selectedPoint) {
            props.callback([selectedPoint.properties?.data?.id])
        }
    }, [selectedPoint])

    useEffect(() => {
        if (objectManager) {
            initObjectManager()
        }
    }, [objectManager])

    const onClusterEvent = (e) => {
        const objectId = e.get('objectId');
        const object = objectManager.clusters.getById(objectId)

        setSelectedCluster(object)
    }

    const onAddCluster = (e) => {
        // Назначаем обработчик событий для коллекции объектов-кластеров менеджера.
        objectManager.clusters.events.add('click', onClusterEvent);
    }

    const onObjectEvent = (e) => {
        const objectId = e.get('objectId')
        const object = objectManager.objects.getById(objectId)

        // Если событие произошло на метке
        if (object.geometry.type === 'Point') {
            setSelectedPoint(object)
        }
    }

    const initObjectManager = () => {
        const features = feature && feature.map(item => {
            const isHot = item.properties.data.isHot
            const isVip = item.properties.data.isVip

            if (isHot && isVip) {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/default-placemark.svg',
                        iconImageSize: [46, 47],
                    }
                }
            } else if (isHot && !isVip) {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/hot-placemark.svg',
                        iconImageSize: [43, 60],
                    }
                }
            } else if (isVip && !isHot) {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/vip-placemark.svg',
                        iconImageSize: [46, 47],
                    }
                }
            } else {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/default-placemark.svg',
                        iconImageSize: [46, 47],
                    }
                }
            }
        })
        objectManager.add(JSON.stringify(features))

        // Подпишемся на событие добавления кластера в коллекцию.
        objectManager.clusters.events.add('add', onAddCluster)

        // Назначаем обработчик событий на коллекцию объектов менеджера.
        objectManager.objects.events.add(['click'], onObjectEvent)
    }

    return (
        <div className={`y-maps-container ${props.className || ''}`}>
            <Map
                className='y-maps'
                state={{
                    center: mapCenter,
                    zoom: 10,
                    controls: [],
                }}
                options={{
                    restrictMapArea: true,
                    autoFitToViewport: 'always',
                    yandexMapDisablePoiInteractivity: false,
                    mapAutoFocus: false
                }}
                modules={["geolocation", "geocode"]}
            >
                <ZoomControl
                    options={{
                        size: "small",
                        position: {
                            top: '28px',
                            right: '46px'
                        }
                    }}
                />
                <GeolocationControl
                    options={{
                        position: {
                            top: '94px',
                            right: '46px'
                        }
                    }}
                />
                <ObjectManager
                    options={{
                        clusterize: true,
                        clusterDisableClickZoom: true
                    }}
                    objects={{
                        openBalloonOnClick: false,
                        // preset: 'islands#greenDotIcon',
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        iconImageHref: '/img/icons/Ymaps/default-placemark.svg',
                        // Размеры метки.
                        iconImageSize: [36, 55],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        // iconImageOffset: [-5, -38]
                    }}
                    clusters={{
                        openBalloonOnClick: false,
                        clusterIcons: [
                            {
                                href: '/img/icons/Ymaps/default-cluster.svg',
                                size: [40, 40],
                                offset: [-20, -20]
                            },
                            {
                                href: '/img/icons/Ymaps/default-cluster.svg',
                                size: [60, 60],
                                offset: [-30, -30]
                            }
                        ]
                    }}
                    instanceRef={ref => setObjectManager(ref)}
                />
            </Map>
        </div>
    );
};

export default withYMaps(YMap);