import React, {useEffect, useState} from 'react';
import {GeolocationControl, Map, ObjectManager, ZoomControl} from 'react-yandex-maps';
import {useSelector} from 'react-redux';

const YMap = (props) => {
    const [objectManager, setObjectManager] = useState(null)
    const [selectedCluster, setSelectedCluster] = useState(null)
    const [selectedPoint, setSelectedPoint] = useState(null)
    const mapCenter = useSelector(state => state.mapCenter)
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
                    id: 1,
                    uuid: "b4fe24b5-3e25-46d9-bb90-638b155c9ac3",
                    transactionType: 1,
                    isCountersSeparately: true,
                    pledge: 0,
                    prepaymentType: 5,
                    commission: 0,
                    address: "west",
                    houseType: 0,
                    roomType: 2,
                    totalArea: 2,
                    floor: 17,
                    wcType: 1,
                    balconyType: 2,
                    layoutType: 2,
                    repairType: 3,
                    hasKitchenFurniture: false,
                    hasFurniture: false,
                    hasRefrigerator: false,
                    hasWashingMachine: false,
                    hasDishWasher: false,
                    hasTv: false,
                    hasConditioner: false,
                    hasInternet: false,
                    hasBathroom: false,
                    hasShowerCabin: false,
                    withKids: false,
                    withPets: false,
                    description: "iste",
                    houseBuildingType: 1,
                    elevatorType: 0,
                    hasRamp: false,
                    hasGarbage: false,
                    hasGroundParking: false,
                    hasUnderGroundParking: false,
                    hasMoreLayerParking: false,
                    price: 671409,
                    isMortgage: false,
                    isEncumbrances: false,
                    viewsCount: 0,
                    isVip: true,
                    isHot: false,
                    isBanned: false,
                    image: null,
                    rentalType: null,
                    communalPrice: null,
                    residentalComplex: null,
                    livingArea: null,
                    kitchenArea: null,
                    maxFloor: null,
                    yearOfConstruction: null,
                    ceilingHeight: null,
                    metro: null,
                    userId: 3,
                    estateId: 5,
                    createdAt: "2022-05-23T14:09:36.927+00:00",
                    images: [],
                    user: {
                        id: 3,
                        uuid: "3c472a1a-ab61-4385-ad5e-7537daa69e58",
                        ownerType: 0,
                        firstName: "User",
                        lastName: "User",
                        sex: null,
                        birthday: null,
                        phone: null,
                        email: "user@mail.ru",
                        avatar: null,
                        rating: "0.0",
                        isSubscribed: true,
                        isBanned: false,
                        isActivated: true,
                        roleId: 3,
                        createdAt: "2022-05-23T14:09:36.891+00:00",
                        ownerTypeForUser: "Собственник",
                        fullName: "User User",
                        isActivatedForUser: "Да",
                        isSubscribedForUser: "Да",
                        isBannedForUser: "Нет",
                        createdAtForUser: "2022.05.23",
                        birthdayForUser: "Не установлен",
                        phoneForUser: "Не установлен",
                        sexForUser: "Не установлен"
                    },
                    transactionTypeForUser: "Продажа",
                    prepaymentTypeForUser: "6 месяцев",
                    commissionForUser: "0%",
                    roomsForUser: "2 комнаты",
                    houseTypeForUser: "Квартира",
                    WCTypeForUser: "Совмещенный",
                    balconyTypeForUser: "Лоджия",
                    layoutForUser: "Свободная",
                    repairTypeForUser: "Без ремонта",
                    houseBuildingTypeForUser: "Панельный",
                    elevatorTypeForUser: "Нет",
                    rentalTypeForUser: "Не установлено",
                    communalPriceForUser: "Не установлено",
                    residentalComplexForUser: "Не установлено",
                    livingAreaForUser: "Не установлено",
                    kitchenAreaForUser: "Не установлено",
                    maxFloorForUser: "Не установлено",
                    yearOfConstructionForUser: "",
                    ceilingHeightForUser: "Не установлено",
                    metroForUser: "Не установлено",
                    createdAtForUser: "23 мая, 2022",
                    title: "2-к, квартира 2",
                    wishlistStatus: false,
                    reportStatus: false
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
                    id: 1,
                    uuid: "b4fe24b5-3e25-46d9-bb90-638b155c9ac3",
                    transactionType: 1,
                    isCountersSeparately: true,
                    pledge: 0,
                    prepaymentType: 5,
                    commission: 0,
                    address: "west",
                    houseType: 0,
                    roomType: 2,
                    totalArea: 2,
                    floor: 17,
                    wcType: 1,
                    balconyType: 2,
                    layoutType: 2,
                    repairType: 3,
                    hasKitchenFurniture: false,
                    hasFurniture: false,
                    hasRefrigerator: false,
                    hasWashingMachine: false,
                    hasDishWasher: false,
                    hasTv: false,
                    hasConditioner: false,
                    hasInternet: false,
                    hasBathroom: false,
                    hasShowerCabin: false,
                    withKids: false,
                    withPets: false,
                    description: "iste",
                    houseBuildingType: 1,
                    elevatorType: 0,
                    hasRamp: false,
                    hasGarbage: false,
                    hasGroundParking: false,
                    hasUnderGroundParking: false,
                    hasMoreLayerParking: false,
                    price: 671409,
                    isMortgage: false,
                    isEncumbrances: false,
                    viewsCount: 0,
                    isVip: true,
                    isHot: true,
                    isBanned: false,
                    image: null,
                    rentalType: null,
                    communalPrice: null,
                    residentalComplex: null,
                    livingArea: null,
                    kitchenArea: null,
                    maxFloor: null,
                    yearOfConstruction: null,
                    ceilingHeight: null,
                    metro: null,
                    userId: 3,
                    estateId: 5,
                    createdAt: "2022-05-23T14:09:36.927+00:00",
                    images: [],
                    user: {
                        id: 3,
                        uuid: "3c472a1a-ab61-4385-ad5e-7537daa69e58",
                        ownerType: 0,
                        firstName: "User",
                        lastName: "User",
                        sex: null,
                        birthday: null,
                        phone: null,
                        email: "user@mail.ru",
                        avatar: null,
                        rating: "0.0",
                        isSubscribed: true,
                        isBanned: false,
                        isActivated: true,
                        roleId: 3,
                        createdAt: "2022-05-23T14:09:36.891+00:00",
                        ownerTypeForUser: "Собственник",
                        fullName: "User User",
                        isActivatedForUser: "Да",
                        isSubscribedForUser: "Да",
                        isBannedForUser: "Нет",
                        createdAtForUser: "2022.05.23",
                        birthdayForUser: "Не установлен",
                        phoneForUser: "Не установлен",
                        sexForUser: "Не установлен"
                    },
                    transactionTypeForUser: "Продажа",
                    prepaymentTypeForUser: "6 месяцев",
                    commissionForUser: "0%",
                    roomsForUser: "2 комнаты",
                    houseTypeForUser: "Квартира",
                    WCTypeForUser: "Совмещенный",
                    balconyTypeForUser: "Лоджия",
                    layoutForUser: "Свободная",
                    repairTypeForUser: "Без ремонта",
                    houseBuildingTypeForUser: "Панельный",
                    elevatorTypeForUser: "Нет",
                    rentalTypeForUser: "Не установлено",
                    communalPriceForUser: "Не установлено",
                    residentalComplexForUser: "Не установлено",
                    livingAreaForUser: "Не установлено",
                    kitchenAreaForUser: "Не установлено",
                    maxFloorForUser: "Не установлено",
                    yearOfConstructionForUser: "",
                    ceilingHeightForUser: "Не установлено",
                    metroForUser: "Не установлено",
                    createdAtForUser: "23 мая, 2022",
                    title: "2-к, квартира 2",
                    wishlistStatus: false,
                    reportStatus: false
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
                    id: 1,
                    uuid: "b4fe24b5-3e25-46d9-bb90-638b155c9ac3",
                    transactionType: 1,
                    isCountersSeparately: true,
                    pledge: 0,
                    prepaymentType: 5,
                    commission: 0,
                    address: "west",
                    houseType: 0,
                    roomType: 2,
                    totalArea: 2,
                    floor: 17,
                    wcType: 1,
                    balconyType: 2,
                    layoutType: 2,
                    repairType: 3,
                    hasKitchenFurniture: false,
                    hasFurniture: false,
                    hasRefrigerator: false,
                    hasWashingMachine: false,
                    hasDishWasher: false,
                    hasTv: false,
                    hasConditioner: false,
                    hasInternet: false,
                    hasBathroom: false,
                    hasShowerCabin: false,
                    withKids: false,
                    withPets: false,
                    description: "iste",
                    houseBuildingType: 1,
                    elevatorType: 0,
                    hasRamp: false,
                    hasGarbage: false,
                    hasGroundParking: false,
                    hasUnderGroundParking: false,
                    hasMoreLayerParking: false,
                    price: 671409,
                    isMortgage: false,
                    isEncumbrances: false,
                    viewsCount: 0,
                    isVip: true,
                    isHot: false,
                    isBanned: false,
                    image: null,
                    rentalType: null,
                    communalPrice: null,
                    residentalComplex: null,
                    livingArea: null,
                    kitchenArea: null,
                    maxFloor: null,
                    yearOfConstruction: null,
                    ceilingHeight: null,
                    metro: null,
                    userId: 3,
                    estateId: 5,
                    createdAt: "2022-05-23T14:09:36.927+00:00",
                    images: [],
                    user: {
                        id: 3,
                        uuid: "3c472a1a-ab61-4385-ad5e-7537daa69e58",
                        ownerType: 0,
                        firstName: "User",
                        lastName: "User",
                        sex: null,
                        birthday: null,
                        phone: null,
                        email: "user@mail.ru",
                        avatar: null,
                        rating: "0.0",
                        isSubscribed: true,
                        isBanned: false,
                        isActivated: true,
                        roleId: 3,
                        createdAt: "2022-05-23T14:09:36.891+00:00",
                        ownerTypeForUser: "Собственник",
                        fullName: "User User",
                        isActivatedForUser: "Да",
                        isSubscribedForUser: "Да",
                        isBannedForUser: "Нет",
                        createdAtForUser: "2022.05.23",
                        birthdayForUser: "Не установлен",
                        phoneForUser: "Не установлен",
                        sexForUser: "Не установлен"
                    },
                    transactionTypeForUser: "Продажа",
                    prepaymentTypeForUser: "6 месяцев",
                    commissionForUser: "0%",
                    roomsForUser: "2 комнаты",
                    houseTypeForUser: "Квартира",
                    WCTypeForUser: "Совмещенный",
                    balconyTypeForUser: "Лоджия",
                    layoutForUser: "Свободная",
                    repairTypeForUser: "Без ремонта",
                    houseBuildingTypeForUser: "Панельный",
                    elevatorTypeForUser: "Нет",
                    rentalTypeForUser: "Не установлено",
                    communalPriceForUser: "Не установлено",
                    residentalComplexForUser: "Не установлено",
                    livingAreaForUser: "Не установлено",
                    kitchenAreaForUser: "Не установлено",
                    maxFloorForUser: "Не установлено",
                    yearOfConstructionForUser: "",
                    ceilingHeightForUser: "Не установлено",
                    metroForUser: "Не установлено",
                    createdAtForUser: "23 мая, 2022",
                    title: "2-к, квартира 2",
                    wishlistStatus: false,
                    reportStatus: false
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
                    id: 1,
                    uuid: "b4fe24b5-3e25-46d9-bb90-638b155c9ac3",
                    transactionType: 1,
                    isCountersSeparately: true,
                    pledge: 0,
                    prepaymentType: 5,
                    commission: 0,
                    address: "west",
                    houseType: 0,
                    roomType: 2,
                    totalArea: 2,
                    floor: 17,
                    wcType: 1,
                    balconyType: 2,
                    layoutType: 2,
                    repairType: 3,
                    hasKitchenFurniture: false,
                    hasFurniture: false,
                    hasRefrigerator: false,
                    hasWashingMachine: false,
                    hasDishWasher: false,
                    hasTv: false,
                    hasConditioner: false,
                    hasInternet: false,
                    hasBathroom: false,
                    hasShowerCabin: false,
                    withKids: false,
                    withPets: false,
                    description: "iste",
                    houseBuildingType: 1,
                    elevatorType: 0,
                    hasRamp: false,
                    hasGarbage: false,
                    hasGroundParking: false,
                    hasUnderGroundParking: false,
                    hasMoreLayerParking: false,
                    price: 671409,
                    isMortgage: false,
                    isEncumbrances: false,
                    viewsCount: 0,
                    isVip: true,
                    isHot: false,
                    isBanned: false,
                    image: null,
                    rentalType: null,
                    communalPrice: null,
                    residentalComplex: null,
                    livingArea: null,
                    kitchenArea: null,
                    maxFloor: null,
                    yearOfConstruction: null,
                    ceilingHeight: null,
                    metro: null,
                    userId: 3,
                    estateId: 5,
                    createdAt: "2022-05-23T14:09:36.927+00:00",
                    images: [],
                    user: {
                        id: 3,
                        uuid: "3c472a1a-ab61-4385-ad5e-7537daa69e58",
                        ownerType: 0,
                        firstName: "User",
                        lastName: "User",
                        sex: null,
                        birthday: null,
                        phone: null,
                        email: "user@mail.ru",
                        avatar: null,
                        rating: "0.0",
                        isSubscribed: true,
                        isBanned: false,
                        isActivated: true,
                        roleId: 3,
                        createdAt: "2022-05-23T14:09:36.891+00:00",
                        ownerTypeForUser: "Собственник",
                        fullName: "User User",
                        isActivatedForUser: "Да",
                        isSubscribedForUser: "Да",
                        isBannedForUser: "Нет",
                        createdAtForUser: "2022.05.23",
                        birthdayForUser: "Не установлен",
                        phoneForUser: "Не установлен",
                        sexForUser: "Не установлен"
                    },
                    transactionTypeForUser: "Продажа",
                    prepaymentTypeForUser: "6 месяцев",
                    commissionForUser: "0%",
                    roomsForUser: "2 комнаты",
                    houseTypeForUser: "Квартира",
                    WCTypeForUser: "Совмещенный",
                    balconyTypeForUser: "Лоджия",
                    layoutForUser: "Свободная",
                    repairTypeForUser: "Без ремонта",
                    houseBuildingTypeForUser: "Панельный",
                    elevatorTypeForUser: "Нет",
                    rentalTypeForUser: "Не установлено",
                    communalPriceForUser: "Не установлено",
                    residentalComplexForUser: "Не установлено",
                    livingAreaForUser: "Не установлено",
                    kitchenAreaForUser: "Не установлено",
                    maxFloorForUser: "Не установлено",
                    yearOfConstructionForUser: "",
                    ceilingHeightForUser: "Не установлено",
                    metroForUser: "Не установлено",
                    createdAtForUser: "23 мая, 2022",
                    title: "2-к, квартира 2",
                    wishlistStatus: false,
                    reportStatus: false
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
                    id: 1,
                    uuid: "b4fe24b5-3e25-46d9-bb90-638b155c9ac3",
                    transactionType: 1,
                    isCountersSeparately: true,
                    pledge: 0,
                    prepaymentType: 5,
                    commission: 0,
                    address: "west",
                    houseType: 0,
                    roomType: 2,
                    totalArea: 2,
                    floor: 17,
                    wcType: 1,
                    balconyType: 2,
                    layoutType: 2,
                    repairType: 3,
                    hasKitchenFurniture: false,
                    hasFurniture: false,
                    hasRefrigerator: false,
                    hasWashingMachine: false,
                    hasDishWasher: false,
                    hasTv: false,
                    hasConditioner: false,
                    hasInternet: false,
                    hasBathroom: false,
                    hasShowerCabin: false,
                    withKids: false,
                    withPets: false,
                    description: "iste",
                    houseBuildingType: 1,
                    elevatorType: 0,
                    hasRamp: false,
                    hasGarbage: false,
                    hasGroundParking: false,
                    hasUnderGroundParking: false,
                    hasMoreLayerParking: false,
                    price: 671409,
                    isMortgage: false,
                    isEncumbrances: false,
                    viewsCount: 0,
                    isVip: true,
                    isHot: false,
                    isBanned: false,
                    image: null,
                    rentalType: null,
                    communalPrice: null,
                    residentalComplex: null,
                    livingArea: null,
                    kitchenArea: null,
                    maxFloor: null,
                    yearOfConstruction: null,
                    ceilingHeight: null,
                    metro: null,
                    userId: 3,
                    estateId: 5,
                    createdAt: "2022-05-23T14:09:36.927+00:00",
                    images: [],
                    user: {
                        id: 3,
                        uuid: "3c472a1a-ab61-4385-ad5e-7537daa69e58",
                        ownerType: 0,
                        firstName: "User",
                        lastName: "User",
                        sex: null,
                        birthday: null,
                        phone: null,
                        email: "user@mail.ru",
                        avatar: null,
                        rating: "0.0",
                        isSubscribed: true,
                        isBanned: false,
                        isActivated: true,
                        roleId: 3,
                        createdAt: "2022-05-23T14:09:36.891+00:00",
                        ownerTypeForUser: "Собственник",
                        fullName: "User User",
                        isActivatedForUser: "Да",
                        isSubscribedForUser: "Да",
                        isBannedForUser: "Нет",
                        createdAtForUser: "2022.05.23",
                        birthdayForUser: "Не установлен",
                        phoneForUser: "Не установлен",
                        sexForUser: "Не установлен"
                    },
                    transactionTypeForUser: "Продажа",
                    prepaymentTypeForUser: "6 месяцев",
                    commissionForUser: "0%",
                    roomsForUser: "2 комнаты",
                    houseTypeForUser: "Квартира",
                    WCTypeForUser: "Совмещенный",
                    balconyTypeForUser: "Лоджия",
                    layoutForUser: "Свободная",
                    repairTypeForUser: "Без ремонта",
                    houseBuildingTypeForUser: "Панельный",
                    elevatorTypeForUser: "Нет",
                    rentalTypeForUser: "Не установлено",
                    communalPriceForUser: "Не установлено",
                    residentalComplexForUser: "Не установлено",
                    livingAreaForUser: "Не установлено",
                    kitchenAreaForUser: "Не установлено",
                    maxFloorForUser: "Не установлено",
                    yearOfConstructionForUser: "",
                    ceilingHeightForUser: "Не установлено",
                    metroForUser: "Не установлено",
                    createdAtForUser: "23 мая, 2022",
                    title: "2-к, квартира 2",
                    wishlistStatus: false,
                    reportStatus: false
                }
            }
        }
    ]

    useEffect(() => {
        if (props.callback && selectedCluster) {
            props.callback(selectedCluster.features?.map(item => item.properties?.data))
        }
    }, [selectedCluster])

    useEffect(() => {
        if (props.callback && selectedPoint) {
            props.callback([selectedPoint.properties?.data])
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
        const features = dataArr.map(item => {
            if (item.properties.data.isHot) {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/hot-placemark.svg',
                        iconImageSize: [46, 47],
                    }
                }
            }
            if (item.properties.data.isVip) {
                return {
                    ...item,
                    options: {
                        iconLayout: 'default#image',
                        iconImageHref: '/img/icons/Ymaps/vip-placemark.svg',
                        iconImageSize: [43, 60],
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
                    zoom: 9,
                    controls: [],
                }}
                options={{
                    restrictMapArea: true,
                    autoFitToViewport: 'always',
                    yandexMapDisablePoiInteractivity: false
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

export default YMap;