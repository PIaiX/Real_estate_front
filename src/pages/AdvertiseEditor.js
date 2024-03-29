import React, {useCallback, useEffect, useRef, useState} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import ImageUploading from "react-images-uploading";
import CustomSelect from '../components/CustomSelect';
import Scroll, {animateScroll as scroll, Link} from 'react-scroll';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useAccessToken, useCurrentUser} from "../store/reducers";
import {getTypesEstate} from "../API/typesEstate";
import {getAdsPage} from "../API/adspage";
import {updateAd} from "../API/users";
import CustomModal from "../components/CustomModal";
import {dadataFias} from "../API/dadata";
import {AddressSuggestions} from "react-dadata";
import env from "../config/env";
import {bindActionCreators} from "redux";
import alertActions from '../store/actions/alert'
import {useDispatch, useSelector} from "react-redux";
import {dadataReAddress} from "../API/dadataReAddress";

export default function Advertise() {

    const city = useSelector(state => state?.selectedCity)
    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate();
    const token = useAccessToken()
    const currentUser = useCurrentUser()
    const {uuid} = useParams()
    const userId = currentUser?.id
    const [isShow, setIsShow] = useState(false)
    const [ad, setAd] = useState({})
    const [prepTypeText, setPrepTypeText] = useState('')
    const [btnRadio, setBtnRadio] = useState({
        transactionType: null,
        rentalType: null,
        estateTypeId: null,
        estateId: null,
        houseType: null,
        roomType: null,
        wcType: null,
        balconyType: null,
        layoutType: null,
        repairType: null,
        houseBuildingType: null,
        elevatorType: null,
        hasRamp: null,
        hasGarbage: null,
        isMortgage: null,
        isEncumbrances: null,
    })
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        const adsget = async () => {
            try {
                const result = (userId && uuid) ? await getAdsPage(uuid, userId) : ""
                if (result) {
                    setAd(result)
                }
            } catch (error) {
                console.log(error)
            }
        }
        adsget()
    }, [userId, uuid])

    const [defaultForm, setDefaultForm] = useState({})

    useEffect(() => {
        setDefaultForm(
            {
                address: ad?.address,
                residentalComplex: ad?.residentalComplex,
                totalArea: ad?.totalArea,
                floor: ad['floor'],
                hasBathroom: ad?.hasBathroom,
                hasConditioner: ad?.hasConditioner,
                hasDishWasher: ad?.hasDishWasher,
                hasFurniture: ad?.hasFurniture,
                hasInternet: ad?.hasInternet,
                hasKitchenFurniture: ad?.hasKitchenFurniture,
                hasRefrigerator: ad?.hasRefrigerator,
                hasShowerCabin: ad?.hasShowerCabin,
                hasTv: ad?.hasTv,
                hasWashingMachine: ad?.hasWashingMachine,
                description: ad?.description,
                yearOfConstruction: ad?.yearOfConstructionForUser,
                ceilingHeight: ad?.ceilingHeight,
                hasGroundParking: ad?.hasGroundParking,
                hasMoreLayerParking: ad?.hasMoreLayerParking,
                hasUnderGroundParking: ad?.hasUnderGroundParking,
                price: ad?.price,
                communalPrice: ad?.communalPrice || 0,
                pledge: ad?.pledge,
                commission: ad?.commission,
                prepaymentType: ad?.prepaymentType,
                withKids: ad?.withKids,
                withPets: ad?.withPets,
                longitude: ad?.longitude,
                latitude: ad?.latitude,
                livingArea: ad?.livingArea || 0,
                kitchenArea: ad?.kitchenArea || 0,
                maxFloor: ad?.maxFloor || 0,
                cadastralNumber: ad?.cadastralNumber,
            }
        )
        setBtnRadio({
            transactionType: ad?.transactionType,
            rentalType: ad?.rentalType,
            estateTypeId: ad?.estate?.realEstateTypeId,
            estateId: ad?.estateId,
            houseType: ad?.houseType,
            roomType: ad?.roomType,
            WCType: ad?.wcType,
            balconyType: ad?.balconyType,
            layoutType: ad?.layoutType,
            repairType: ad?.repairType,
            houseBuildingType: ad?.houseBuildingType,
            elevatorType: ad?.elevatorType,
            hasRamp: Number(ad?.hasRamp),
            hasGarbage: Number(ad?.hasGarbage),
            isMortgage: Number(ad?.isMortgage),
            isEncumbrances: Number(ad?.isEncumbrances),
        })
    }, [ad])

    const [data, setData] = useState({})
    useEffect(() => {
        if (defaultForm) {
            setData({...defaultForm, ...btnRadio})
        }
    }, [defaultForm])

    const ref = useRef(null); // Form
    const [deal, setDeal] = useState('1'); // тип сделки (по умолчанию - продажа)
    const [proptype, setProptype] = useState('1'); // тип недвижимости (по умолчанию - Жилая)
    const [requiredElems, setRequired] = useState([]);

    const [types, setTypes] = useState([]) // result require api
    const [es, setEs] = useState([]) // state estates in types
    const [res, setRes] = useState('') // check id in array id's

    useEffect(() => {
        setProptype(btnRadio.estateTypeId)
        setRes(btnRadio.estateTypeId)
    }, [btnRadio.estateTypeId])

    useEffect(() => {
        btnRadio.transactionType === 0 ? setDeal('0') : setDeal('1')
    }, [btnRadio.transactionType])

    useEffect(() => {
        const typess = async () => {
            try {
                let result = await getTypesEstate()
                if (result) {
                    setTypes(result)
                }
            } catch (error) {
                console.log(error)
            }
        }
        typess()
    }, [])

    useEffect(() => {
        types.map(i => (i.id === btnRadio.estateTypeId) && setEs(i.estates))
    }, [btnRadio, types])

    useEffect(() => {
        const ids = types.map(i => i.id)
        setRes(ids.find((t) => t === +proptype))
    }, [types, proptype])

    /* images upload */
    const [imgs, setImages] = useState([]);
    const [mainImg, setMainImg] = useState(0);
    const maxNumber = 24;
    const onChange = (imageList, addUpdateIndex, e) => {
        resetFieldVal(e, 'isInValidImage')
        setImages(imageList);
        if (imageList !== null) {
            setRequired(requiredElems.filter(obj => {
                if (obj !== 'imgs') {
                    return obj;
                }
            }));
            let label = ref.current.querySelector(`[data-for="imgs"]`);
            label.dataset.state = true;
        } else {
            if (!requiredElems.includes('imgs')) {
                setRequired([...requiredElems, 'imgs']);
                let label = ref.current.querySelector(`[data-for="imgs"]`);
                label.dataset.state = false;
            }
        }
    };

    const onRent = (e) => {
        setDeal(e.target.value); //переключение типа
    };
    const onSale = (e) => {
        setDeal(e.target.value); //переключение типа
    };

    const [activeField, setActiveField] = useState(1); //для мобильных устройств

    const f = imgs[mainImg]
    const image = f?.file

    const handleCheckbox = (e) => {
        const {target} = e;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const {name} = target
        setData(prevData => {
            return {...prevData, [name]: value};
        })

    }

    useEffect(() => {
        setPrepTypeText(ad?.prepaymentTypeForUser)
    }, [ad])

    const fields = {
        isInValidEstateId: false,
        isInValidTransactionType: false,
        isInValidRentalTypes: false,
        isInValidAddress: false,
        isInValidHouseType: false,
        isInValidRoomType: false,
        isInValidTotalArea: false,
        isInValidLivingArea: false,
        isInValidKitchenArea: false,
        isInValidFloor: false,
        isInValidMaxFloor: false,
        isInValidDescription: false,
        isInValidImage: false,
        isInValidPrice: false,
        isInvalidEstateTypeId: false,
        isInValidYear: false,
        isInValidCeilingHeight: false,
        isInValidWC: false,
        isInValidBalcony: false,
        isInValidLayout: false,
        isInValidRepair: false,
        isInValidHouseBuilding: false,
        isInValidElevator: false,
    }
    const [valid, setValid] = useState(fields);
    const scroller = Scroll.scroller;

    const years = []
    let startYear = new Date().getFullYear();
    for (startYear; startYear >= 1850; startYear--) {
        years.push(startYear)
    }
    const findYear = years.find(i => i === +data?.yearOfConstruction);

    const [statusRequest, setStatusRequest] = useState({
        error: false,
        good: false,
    })

    const [district, setDistrict] = useState({})

    const handleSub = (e) => {
        e.preventDefault()
        const isInValidEstateId = data.estateId === undefined || data.estateId === 0
        const isInValidTransactionType = data.transactionType === undefined
        const isInValidAddress = data.address?.length < 5 || data.address === undefined
        const isInValidHouseType = data.houseType === undefined
        const isInValidRoomType = data.roomType === undefined
        const isInValidTotalArea = data.totalArea === undefined || data.totalArea < 0
        const isInValidLivingArea = data?.livingArea < 0;
        const isInValidKitchenArea = data?.kitchenArea < 0;
        const isInValidFloor = data["floor"] === undefined || data?.floor < 0;
        const isInValidMaxFloor = data?.maxFloor < 0;
        const isInValidDescription = data.description?.length < 30 || data.description === undefined
        const isInValidImage = imgs?.length === 0 || imgs === undefined || imgs?.length === 1
        const isInValidPrice = data.price === undefined
        const isInValidEstateTypeId = data.estateTypeId === undefined || data.estateTypeId === 0
        const isInValidYear = data.yearOfConstruction?.length > 4 || data.yearOfConstruction?.length <= 3 || findYear === undefined
        const isInValidCeilingHeight = data.ceilingHeight < 3 || data.ceilingHeight > 100
        const isInValidWC = data?.WCType === undefined
        const isInValidBalcony = data?.balconyType === undefined
        const isInValidLayout = data?.layoutType === undefined
        const isInValidRepair = data?.repairType === undefined
        const isInValidHouseBuilding = data?.houseBuildingType === undefined
        const isInValidElevator = data?.elevatorType === undefined

        if (isInValidTransactionType) {
            scroll.scrollTo("anchor-1")
            setValid({...valid, isInValidTransactionType: true})
        } else if (isInValidEstateTypeId) {
            scroll.scrollTo("anchor-1")
            setValid({...valid, isInValidEstateTypeId: true})
        } else if (isInValidEstateId) {
            scroll.scrollTo("anchor-1")
            setValid({...valid, isInValidEstateId: true})
        } else if (isInValidAddress) {
            scroller.scrollTo("anchor-2", {offset: -80})
            setValid({...valid, isInValidAddress: true})
        } else if (isInValidHouseType) {
            scroller.scrollTo("anchor-2", {offset: -80})
            setValid({...valid, isInValidHouseType: true})
        } else if (isInValidRoomType) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidRoomType: true})
        } else if (isInValidTotalArea) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidTotalArea: true})
        } else if (isInValidLivingArea) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidLivingArea: true})
        } else if (isInValidKitchenArea) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidKitchenArea: true})
        } else if (isInValidFloor) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidFloor: true})
        } else if (isInValidMaxFloor) {
            scroller.scrollTo("anchor-2")
            setValid({...valid, isInValidMaxFloor: true})
        } else if (isInValidWC) {
            scroller.scrollTo("anchor-2", {offset: 500})
            setValid({...valid, isInValidWC: true})
        } else if (isInValidBalcony) {
            scroller.scrollTo("anchor-2", {offset: 500})
            setValid({...valid, isInValidBalcony: true})
        } else if (isInValidLayout) {
            scroller.scrollTo("anchor-2", {offset: 500})
            setValid({...valid, isInValidLayout: true})
        } else if (isInValidRepair) {
            scroller.scrollTo("anchor-2", {offset: 500})
            setValid({...valid, isInValidRepair: true})
        } else if (isInValidDescription) {
            scroller.scrollTo("anchor-3", {offset: -80})
            setValid({...valid, isInValidDescription: true})
        } else if (isInValidImage) {
            scroller.scrollTo("anchor-3", {offset: -80})
            setValid({...valid, isInValidImage: true})
        } else if (isInValidYear) {
            scroller.scrollTo("anchor-4", {offset: -80})
            setValid({...valid, isInValidYear: true})
        } else if (isInValidHouseBuilding) {
            scroller.scrollTo("anchor-4")
            setValid({...valid, isInValidHouseBuilding: true})
        } else if (isInValidElevator) {
            scroller.scrollTo("anchor-4")
            setValid({...valid, isInValidElevator: true})
        } else if (isInValidCeilingHeight) {
            scroller.scrollTo("anchor-4", {offset: -80})
            setValid({...valid, isInValidCeilingHeight: true})
        } else if (isInValidPrice) {
            scroller.scrollTo("anchor-5")
            setValid({...valid, isInValidPrice: true})
        } else {
            const userId = currentUser?.id;
            const formData = new FormData();
            const req = {...data, token, userId, image};

            for (const key in req) {
                formData.append(key, req[key]);
            }

            formData.append('district[][city]', district['city'])
            formData.append('district[][name]', district['name'])

            if (imgs?.length >= 1) {
                if (imgs?.length === 2) {
                    imgs.forEach((i, index) => {
                        if (i.file?.name !== image.name) {
                            formData.append('images[]', i.file)
                        }
                    })
                } else {
                    imgs.forEach((i, index) => {
                        if (i.file?.name !== image.name) {
                            formData.append('images', i.file)
                        }
                    })
                }
            }

            updateAd(axiosPrivate, uuid, formData).then(() => {
                setAlert('success', true, 'Объявление успешно отредактировано, переход в мои объявления')
                setTimeout(() => {
                    navigate("/personal-account/my-ads", {replace: true})
                }, 2000)
            }).catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
        }
    }

    const resetFieldVal = (newState, field) => {
        setValid({...valid, [field]: false})
    }

    useEffect(() => {
        (data['fias_id']) && dadataFias(data['fias_id'])
            .then(res => setDistrict({
                city,
                name: res?.suggestions[0]?.data?.city_district
            }))
    }, [data.address])

    const suggestionsRef = useCallback(node => {
        if (node !== null) {
            node.setInputValue(data?.address)
        }
    }, [data?.address])

    useEffect(() => {
        if (data?.address) {
            dadataReAddress({query: data?.address, count: 5})
                .then(res => {
                    setData(prevState => (
                        {
                            ...prevState,
                            address: res[0]?.value,
                            fias_id: res[0]?.data?.fias_id,
                            latitude: res[0]?.data?.geo_lat,
                            longitude: res[0]?.data?.geo_lon
                        }
                    ))
                })
        }
    }, [data?.address])

    return (

        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <NavLink to="/personal-account/my-ads" className="d-block d-md-none gray-3">&#10094; Назад</NavLink>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">
                                Главная /
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/personal-account/my-ads">
                                Мои объявления /
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Редактирование
                        </li>
                    </ol>
                </nav>
            </div>

            <section id="sec-11" className="container mb-6">
                <h1 className="text-center text-lg-start">Редактировать объявление</h1>
                <form
                    ref={ref}
                    className="row gx-xxl-5 position-relative"
                    name="postingAd"
                    noValidate
                >
                    <div className="mob-indicator">
                        <div className={(activeField === 1) ? 'active' : ''}>
                            {
                                (data.transactionType && data.estateId && data.estateTypeId)
                                ? <img src="/img/icons/compform.svg"
                                       style={{width: 1.5 + 'em', height: 1.5 + 'em'}} alt="comp"/>
                                : 1
                            }
                        </div>
                        <div className={(activeField === 2) ? 'active' : ''}>
                            {
                                (data.address && data.totalArea && data['floor'])
                                ? <img src="/img/icons/compform.svg"
                                       style={{width: 1.5 + 'em', height: 1.5 + 'em'}} alt="comp"/>
                                : 2
                            }
                        </div>
                        <div className={(activeField === 3) ? 'active' : ''}>
                            {
                                (image && data.description)
                                ? <img src="/img/icons/compform.svg"
                                       style={{width: 1.5 + 'em', height: 1.5 + 'em'}} alt="comp"/>
                                : 3
                            }
                        </div>
                        <div className={(activeField === 4) ? 'active' : ''}>
                            {
                                (data.yearOfConstruction && data.ceilingHeight)
                                ? <img src="/img/icons/compform.svg"
                                       style={{width: 1.5 + 'em', height: 1.5 + 'em'}} alt="comp"/>
                                : 4
                            }
                        </div>
                        <div className={(activeField === 5) ? 'active' : ''}>
                            {
                                (data.price)
                                ? <img src="/img/icons/compform.svg"
                                       style={{width: 1.5 + 'em', height: 1.5 + 'em'}} alt="comp"/>
                                : 5
                            }
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <fieldset
                            data-show={(activeField === 1) ? 'true' : 'false'}
                            name="anchor-1"
                            className="element frame p-lg-4 mb-4 mb-lg-5"
                        >
                            <legend className="text-center text-lg-start title-font fw-7 fs-15 mb-md-4">Тип
                                объявления
                            </legend>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                    <span data-for="deal" data-status={false}
                                          style={{color: valid.isInValidTransactionType ? '#DA1E2A' : ''}}>Сделка*:</span>
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-3 row-cols-xxl-4">

                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="deal"
                                                    value={0}
                                                    checked={btnRadio.transactionType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, transactionType: 0}))}
                                                    onChange={(e) => {
                                                        onRent(e)
                                                        setData(prevData => {
                                                            return {...prevData, "transactionType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidTransactionType')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Аренда</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="deal"
                                                    value={1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, transactionType: 1}))}
                                                    checked={btnRadio.transactionType === 1}
                                                    onChange={(e) => {
                                                        onSale(e)
                                                        setData(prevData => {
                                                            return {...prevData, "transactionType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidTransactionType')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Продажа</span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            {
                                (deal === "0") &&
                                <>
                                    <div className="row">
                                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                            <span data-for="rental-type" data-status={false}
                                                  style={{color: valid.isInValidRentalTypes ? '#DA1E2A' : ''}}>Тип аренды*:</span>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row row-cols-3 row-cols-xxl-4">
                                                <div>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="rental-type"
                                                            value={0}
                                                            checked={btnRadio.rentalType === 0}
                                                            onClick={() => setBtnRadio(prevState => ({...prevState, rentalType: 0}))}
                                                            onChange={(e) => {
                                                                setData(prevData => {
                                                                    return {
                                                                        ...prevData,
                                                                        "rentalType": e.target.value
                                                                    }
                                                                })
                                                                resetFieldVal(e, 'isInValidRentalTypes')
                                                            }}
                                                        />
                                                        <span className="fs-11 ms-2">Длительно</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="rental-type"
                                                            value={1}
                                                            checked={btnRadio.rentalType === 1}
                                                            onClick={() => setBtnRadio(prevState => ({...prevState, rentalType: 1}))}
                                                            onChange={(e) => {
                                                                setData(prevData => {
                                                                    return {
                                                                        ...prevData,
                                                                        "rentalType": e.target.value
                                                                    }
                                                                })
                                                                resetFieldVal(e, 'isInValidRentalTypes')
                                                            }}
                                                        />
                                                        <span className="fs-11 ms-2">Несколько месяцев</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="rental-type"
                                                            value={2}
                                                            checked={btnRadio.rentalType === 2}
                                                            onClick={() => setBtnRadio(prevState => ({...prevState, rentalType: 2}))}
                                                            onChange={(e) => {
                                                                setData(prevData => {
                                                                    return {
                                                                        ...prevData,
                                                                        "rentalType": e.target.value
                                                                    }
                                                                })
                                                                resetFieldVal(e, 'isInValidRentalTypes')
                                                            }}
                                                        />
                                                        <span className="fs-11 ms-2">Посуточно</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className={(deal === "0") ? "d-none d-md-block my-4" : "d-none"}/>
                                </>
                            }
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                    <span data-for="property-type" data-status={false}
                                          style={{color: valid.isInValidEstateTypeId ? '#DA1E2A' : ''}}>Тип недвижимости*:</span>
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        {types.map((i, ad) =>
                                            <div key={i.id}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="property-type"
                                                        value={i.id}
                                                        checked={btnRadio.estateTypeId === i.id}
                                                        onClick={() => setBtnRadio(prevState => ({...prevState, estateTypeId: i.id}))}
                                                        onChange={(e) => {
                                                            setProptype(i.id);
                                                            setData(prevData => {
                                                                return {...prevData, "estateTypeId": e.target.value}
                                                            })
                                                            setEs(i.estates)
                                                            resetFieldVal(e, 'isInValidEstateTypeId')
                                                        }}
                                                        onInput={() => setEs(i.estates)}
                                                    />
                                                    <span className="fs-11 ms-2">{i.name}</span>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {
                                (proptype === res) &&
                                <>
                                    <hr className="d-none d-md-block my-4"/>
                                    <div className="row">
                                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                            <span data-for="estate" data-status={false}
                                                  style={{color: valid.isInValidEstateId ? '#DA1E2A' : ''}}>Объект*:</span>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                                {es.map((i) =>
                                                    <div key={i.id}>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name="estate"
                                                                value={i.id}
                                                                checked={btnRadio.estateId === i.id}
                                                                onClick={() => setBtnRadio(prevState => ({...prevState, estateId: i.id}))}
                                                                onChange={(e) => {
                                                                    setData(prevData => {
                                                                        return {
                                                                            ...prevData,
                                                                            "estateId": e.target.value
                                                                        }
                                                                    })
                                                                    resetFieldVal(e, 'isInValidEstateId')
                                                                }}
                                                            />
                                                            <span className="fs-11 ms-2">{i.name}</span>
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                            <>
                                <hr className="d-none d-md-block my-4"/>
                                <div className="row">
                                    <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                        <span data-for="rental-type" data-status={false}>Кадастровый номер:</span>
                                    </div>
                                    <div className="col-md-9">
                                        <div>
                                            <label>
                                                <input
                                                    type='text'
                                                    value={data?.cadastralNumber || ''}
                                                    onChange={(e) => {
                                                        setData(prevState => ({...prevState, cadastralNumber: e.target.value}))
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                            {/* для мобильных устроийств */}
                            <div
                                className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-2 w-100"
                                        onClick={(e) => e.target.closest("form").reset()}
                                    >
                                        Отменить
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-1 w-100"
                                        onClick={() => setActiveField(2)}
                                    >
                                        Далее
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset data-show={(activeField === 2) ? 'true' : 'false'} name="anchor-2"
                                  className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="text-center text-lg-start title-font fw-7 fs-15 mb-md-4">Об объекте
                            </legend>
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                    <span data-for="address" data-status={false}
                                          style={{color: valid.isInValidAddress ? '#DA1E2A' : ''}}>
                                        Адрес*:
                                    </span>
                                </div>
                                <div className="col-md-9">
                                    {data?.address &&
                                        <AddressSuggestions
                                            delay={300}
                                            containerClassName='advertise__address'
                                            defaultQuery={data?.address}
                                            ref={suggestionsRef}
                                            inputProps={{
                                                style: {borderColor: valid.isInValidAddress ? '#DA1E2A' : ''},
                                                placeholder: "Адрес",
                                            }}
                                            token={env.DADATA_TOKEN}
                                            onChange={e =>
                                                setData(prevData => ({
                                                    ...prevData,
                                                    "address": e.value,
                                                    "latitude": e.data?.geo_lat,
                                                    "longitude": e.data?.geo_lon,
                                                    "fias_id": e.data?.fias_id
                                                }))}
                                        />
                                    }
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0">Название ЖК:</div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        name="housing-complex"
                                        className="fs-11"
                                        placeholder="Например: Центральный"
                                        value={data?.residentalComplex || ''}
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "residentalComplex": e.target.value}
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                    <span data-for="housing-type" data-status={false}
                                          style={{color: valid.isInValidHouseType ? '#DA1E2A' : ''}}>Тип жилья*:</span>
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                                        <div>
                                            <label htmlFor="houseType1">
                                                <input
                                                    id="houseType1"
                                                    type="radio"
                                                    name="housing-type"
                                                    value={0}
                                                    checked={btnRadio.houseType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, houseType: 0}))}
                                                    onChange={(e) => {
                                                        setData(prevData => {
                                                            return {...prevData, "houseType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidHouseType')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Квартира</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="houseType2">
                                                <input
                                                    id="houseType2"
                                                    type="radio"
                                                    name="housing-type"
                                                    value={1}
                                                    checked={btnRadio.houseType === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, houseType: 1}))}
                                                    onChange={(e) => {
                                                        setData(prevData => {
                                                            return {...prevData, "houseType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidHouseType')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Апартаменты</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                                    <span data-for="rooms" data-status={false}
                                          style={{color: valid.isInValidRoomType ? '#DA1E2A' : ''}}>Количество комнат*:</span>
                                </div>
                                <div className="col-md-9 d-flex">
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={0}
                                            checked={btnRadio.roomType === 0}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 0}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>Студия</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={1}
                                            checked={btnRadio.roomType === 1}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 1}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>1</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={2}
                                            checked={btnRadio.roomType === 2}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 2}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>2</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={3}
                                            checked={btnRadio.roomType === 3}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 3}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>3</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={4}
                                            checked={btnRadio.roomType === 4}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 4}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>4</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={5}
                                            checked={btnRadio.roomType === 5}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 5}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>5</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input
                                            type="radio"
                                            name="rooms"
                                            value={6}
                                            checked={btnRadio.roomType === 6}
                                            onClick={() => setBtnRadio(prevState => ({...prevState, roomType: 6}))}
                                            onChange={(e) => {
                                                setData(prevData => {
                                                    return {...prevData, "roomType": e.target.value}
                                                })
                                                resetFieldVal(e, 'isInValidRoomType')
                                            }}
                                        />
                                        <div>5+</div>
                                    </label>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                                <div className="fs-11 title-req">
                                    <span data-for="total-area" data-status={false}
                                          style={{color: valid.isInValidTotalArea ? '#DA1E2A' : ''}}>Общая площадь*:</span>
                                </div>
                                <div>
                                    <input
                                        style={{borderColor: valid.isInValidTotalArea ? '#DA1E2A' : ''}}
                                        type="number"
                                        name="total-area"
                                        placeholder="0"
                                        value={data?.totalArea || ''}
                                        className="fs-11 area w-100"
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "totalArea": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidTotalArea')
                                        }}
                                    />
                                </div>
                                <div
                                    className="text-md-end title mt-3 mt-sm-4 mt-md-0"
                                    style={{color: valid.isInValidLivingArea ? '#DA1E2A' : ''}}
                                >
                                    Жилая площадь:
                                </div>
                                <div className="mt-3 mt-sm-4 mt-md-0">
                                    <input
                                        style={{borderColor: valid.isInValidLivingArea ? '#DA1E2A' : ''}}
                                        type="number"
                                        name="living-space"
                                        placeholder="0"
                                        className="fs-11 area w-100"
                                        value={data?.livingArea || ''}
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "livingArea": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidLivingArea')
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-3 mt-sm-4">
                                <div
                                    className="fs-11 title"
                                    style={{color: valid.isInValidKitchenArea ? '#DA1E2A' : ''}}
                                >
                                    Площадь кухни:
                                </div>
                                <div>
                                    <input
                                        style={{borderColor: valid.isInValidKitchenArea ? '#DA1E2A' : ''}}
                                        type="number"
                                        name="kitchen-area"
                                        placeholder="0"
                                        value={data?.kitchenArea || ''}
                                        className="fs-11 area w-100"
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "kitchenArea": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidKitchenArea')
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div className="fs-11 title-req">
                                    <span data-for="floor" data-status={false}
                                          style={{color: valid.isInValidFloor ? '#DA1E2A' : ''}}>Этаж*:</span>
                                </div>
                                <div>
                                    <input
                                        style={{borderColor: valid.isInValidFloor ? '#DA1E2A' : ''}}
                                        type="number"
                                        name="floor"
                                        placeholder="0"
                                        value={data["floor"] || ''}
                                        className="fs-11 w-100"
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "floor": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidFloor')
                                        }}
                                    />
                                </div>
                                <div
                                    className="title text-md-end mt-3 mt-sm-4 mt-md-0"
                                    style={{color: valid.isInValidMaxFloor ? '#DA1E2A' : ''}}
                                >
                                    Этажей в доме:
                                </div>
                                <div className="mt-3 mt-sm-4 mt-md-0">
                                    <input
                                        style={{borderColor: valid.isInValidMaxFloor ? '#DA1E2A' : ''}}
                                        type="number"
                                        name="floor"
                                        placeholder="0"
                                        value={data?.maxFloor || ''}
                                        className="fs-11 w-100"
                                        onChange={(e) => {
                                            setData(prevData => {
                                                return {...prevData, "maxFloor": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidMaxFloor')
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidWC ? '#DA1E2A' : ''}}
                                >
                                    Санузел*:
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="WCTypes"
                                                    value={0}
                                                    checked={btnRadio.WCType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, WCType: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "WCType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidWC')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Раздельный</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="WCTypes"
                                                    value={1}
                                                    checked={btnRadio.WCType === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, WCType: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "WCType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidWC')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Совмещенный</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="WCTypes"
                                                    value={2}
                                                    checked={btnRadio.WCType === 2}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, WCType: 2}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "WCType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidWC')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Два или более</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidBalcony ? '#DA1E2A' : ''}}
                                >
                                    Балкон/Лоджия*:
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="balconyTypes"
                                                    value={1}
                                                    checked={btnRadio.balconyType === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, balconyType: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "balconyType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidBalcony')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Балкон</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="balconyTypes"
                                                    value={2}
                                                    checked={btnRadio.balconyType === 2}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, balconyType: 2}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "balconyType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidBalcony')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Лоджия</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="balconyTypes"
                                                    value={0}
                                                    checked={btnRadio.balconyType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, balconyType: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "balconyType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidBalcony')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Нет</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidLayout ? '#DA1E2A' : ''}}
                                >
                                    Планировка*:
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="layoutTypes"
                                                    value={0}
                                                    checked={btnRadio.layoutType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, layoutType: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "layoutType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidLayout')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Изолированная</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="layoutTypes"
                                                    value={1}
                                                    checked={btnRadio.layoutType === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, layoutType: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "layoutType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidLayout')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Смежная</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="layoutTypes"
                                                    value={2}
                                                    checked={btnRadio.layoutType === 2}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, layoutType: 2}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "layoutType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidLayout')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Свободная</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidRepair ? '#DA1E2A' : ''}}
                                >
                                    Ремонт*:
                                </div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="repairTypes"
                                                    value={0}
                                                    checked={btnRadio.repairType === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, repairType: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "repairType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidRepair')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Косметический</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="repairTypes"
                                                    value={1}
                                                    checked={btnRadio.repairType === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, repairType: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "repairType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidRepair')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Евро</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="repairTypes"
                                                    value={2}
                                                    checked={btnRadio.repairType === 2}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, repairType: 2}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "repairType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidRepair')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Дизайнерский</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="repairTypes"
                                                    value={3}
                                                    checked={btnRadio.repairType === 3}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, repairType: 3}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "repairType": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidRepair')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Без ремонта</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr className="d-none d-md-block my-4"/>
                                <div className="row mt-4 mt-sm-5 mt-md-0">
                                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Дополнительно:</div>
                                    <div className="col-md-9">
                                        <div className="row row-cols-sm-2 row-cols-xxl-3">
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasKitchenFurniture"
                                                    checked={data?.hasKitchenFurniture || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Кухонная мебель</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasFurniture"
                                                    checked={data?.hasFurniture || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Мебель в комнатах</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasRefrigerator"
                                                    checked={data.hasRefrigerator || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Холодильник</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasWashingMachine"
                                                    checked={data?.hasWashingMachine || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Стиральная машина</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasDishWasher"
                                                    checked={data?.hasDishWasher || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Посудомоечная машина</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasTv"
                                                    checked={data?.hasTv || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Телевизор</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasConditioner"
                                                    checked={data?.hasConditioner || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Кондиционер</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasInternet"
                                                    checked={data?.hasInternet || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Интернет</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasBathroom"
                                                    checked={data?.hasBathroom || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Ванна</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="hasShowerCabin"
                                                    checked={data?.hasShowerCabin || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Душевая кабина</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="withKids"
                                                    checked={data?.withKids || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Можно с детьми</span>
                                            </label>
                                            <label className="mb-3">
                                                <input
                                                    type="checkbox"
                                                    name="withPets"
                                                    checked={data?.withPets || false}
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="fs-11 ms-3">Можно с животными</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* для мобильных устроийств */}
                            <div
                                className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                                <div>
                                    <button type="button" className="btn btn-2 w-100"
                                            onClick={() => setActiveField(1)}>Назад
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100"
                                            onClick={() => setActiveField(3)}>Далее
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset data-show={(activeField === 3) ? 'true' : 'false'} name="anchor-3"
                                  className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-4">
                                Описание и фото
                            </legend>
                            <div className="row mb-2">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">
                                    <span data-for="description" data-status={false}
                                          style={{color: valid.isInValidDescription ? '#DA1E2A' : ''}}>Описание*:</span>
                                </div>
                                <div className="col-md-9">
                                    <textarea
                                        style={{borderColor: valid.isInValidDescription ? '#DA1E2A' : ''}}
                                        name="description"
                                        rows="5"
                                        className="fs-11"
                                        value={data?.description || ''}
                                        placeholder="Расскажите подробне об объекте и условиях сделки."
                                        onChange={e => {
                                            setData(prevData => {
                                                return {...prevData, "description": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidDescription')
                                        }}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">
                                    <span data-for="imgs" data-status={false}
                                          style={{color: valid.isInValidImage ? '#DA1E2A' : ''}}>Фото и планировка*:</span>
                                </div>
                                <div className="col-md-9">
                                    <ImageUploading
                                        multiple
                                        value={imgs}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                        acceptType={['JPG', 'JPEG', 'PNG', 'WEBP']}
                                    >
                                        {({
                                              imageList,
                                              onImageUpload,
                                              onImageRemoveAll,
                                              onImageUpdate,
                                              onImageRemove,
                                              isDragging,
                                              dragProps,
                                            errors
                                          }) => (
                                              <>
                                            <div className="upload__image-wrapper">
                                                <div className="imgs-box">
                                                    {imageList.map((image, index) => (
                                                        <div key={index} className="image-item">
                                                            <img src={image.data_url} alt=""/>
                                                            <div className="image-item__btn-wrapper">
                                                                <button type="button"
                                                                        onClick={() => onImageUpdate(index)}>
                                                                    <img src="/img/icons/update.svg"
                                                                         alt="Обновить"/>
                                                                </button>
                                                                <button type="button"
                                                                        onClick={() => onImageRemove(index)}>
                                                                    <img src="/img/icons/delete.svg"
                                                                         alt="Удалить"/>
                                                                </button>
                                                                {
                                                                    (index !== mainImg) &&
                                                                    <button type="button"
                                                                            onClick={() => setMainImg(index)}
                                                                            className="main-img">Сделать
                                                                        главным</button>
                                                                }
                                                            </div>
                                                            {
                                                                (index === mainImg) &&
                                                                <div className="mark">Главное фото</div>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button type="button"
                                                            className="btn btn-1 px-3 px-sm-4 me-3 me-sm-4"
                                                            style={isDragging ? {color: "red"} : null}
                                                            onClick={onImageUpload}
                                                            {...dragProps}
                                                    >
                                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <line x1="10.75" x2="10.75" y2="21" stroke="white"
                                                                  strokeWidth="1.5"/>
                                                            <line y1="10.25" x2="21" y2="10.25" stroke="white"
                                                                  strokeWidth="1.5"/>
                                                        </svg>
                                                        <span className="ms-2">Добавить фото</span>
                                                    </button>
                                                    <button type="button" onClick={onImageRemoveAll}>Удалить все
                                                    </button>
                                                </div>
                                            </div>
                                                  <span
                                                      className="text-danger">{errors?.acceptType && "Поддерживаемые форматы файла: JPEG, JPG, PNG"}</span>
                                              </>
                                        )}
                                    </ImageUploading>
                                    <div className="fs-08 gray-3 mt-2">Не допускаются к размещению фотографии с
                                        водяными
                                        знаками, чужих объектов и рекламные баннеры. JPG, PNG или GIF. Загрузка о 2 штук и более.
                                        При загрузке одного фото заменяется главное фото объявления.
                                    </div>
                                </div>
                            </div>
                            {/* для мобильных устроийств */}
                            <div
                                className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100"
                                            onClick={() => setActiveField(2)}>Назад
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100"
                                            onClick={() => setActiveField(4)}>Далее
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset data-show={(activeField === 4) ? 'true' : 'false'} name="anchor-4"
                                  className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-4">О здании</legend>
                            <div className="row align-items-center">
                                <div className="col-6 col-md-3 fs-11 title"
                                     style={{color: valid.isInValidYear ? '#DA1E2A' : ''}}>Год постройки*:
                                </div>
                                <div className="col-6 col-md-9">
                                    <input
                                        style={{borderColor: valid.isInValidYear ? '#DA1E2A' : ''}}
                                        type="number"
                                        className="fs-11"
                                        placeholder="Год"
                                        value={data?.yearOfConstruction || ''}
                                        onChange={e => {
                                            setData(prevData => {
                                                return {...prevData, "yearOfConstruction": +e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidYear')
                                        }}
                                    />
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidHouseBuilding ? '#DA1E2A' : ''}}
                                >
                                    Тип дома*:
                                </div>
                                <div className="col-md-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="house-type"
                                                value={0}
                                                checked={btnRadio.houseBuildingType === 0}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, houseBuildingType: 0}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "houseBuildingType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidHouseBuilding')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Кирпичный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="house-type"
                                                value={1}
                                                checked={btnRadio.houseBuildingType === 1}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, houseBuildingType: 1}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "houseBuildingType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidHouseBuilding')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Панельный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="house-type"
                                                value={2}
                                                checked={btnRadio.houseBuildingType === 2}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, houseBuildingType: 2}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "houseBuildingType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidHouseBuilding')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Монолитный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="house-type"
                                                value={3}
                                                checked={btnRadio.houseBuildingType === 3}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, houseBuildingType: 3}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "houseBuildingType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidHouseBuilding')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Блочный</span>
                                        </label>
                                        <label className="my-2">
                                            <input
                                                type="radio"
                                                name="house-type"
                                                value={4}
                                                checked={btnRadio.houseBuildingType === 4}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, houseBuildingType: 4}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "houseBuildingType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidHouseBuilding')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Деревянный</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div
                                    className="col-md-3 fs-11 title mb-3 m-md-0"
                                    style={{color: valid.isInValidElevator ? '#DA1E2A' : ''}}
                                >
                                    Лифт*:
                                </div>
                                <div className="col-md-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="lift"
                                                value={0}
                                                checked={btnRadio.elevatorType === 0}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, elevatorType: 0}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "elevatorType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidElevator')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="lift"
                                                value={1}
                                                checked={btnRadio.elevatorType === 1}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, elevatorType: 1}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "elevatorType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidElevator')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Пассажирский</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="lift"
                                                value={2}
                                                checked={btnRadio.elevatorType === 2}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, elevatorType: 2}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "elevatorType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidElevator')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Грузовой</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input
                                                type="radio"
                                                name="lift"
                                                value={3}
                                                checked={btnRadio.elevatorType === 3}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, elevatorType: 3}))}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "elevatorType": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidElevator')
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Пассажирский/Грузовой</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div className="col-6 col-md-3 fs-11 title"
                                     style={{color: valid.isInValidCeilingHeight ? '#DA1E2A' : ''}}>Высота потолков:
                                </div>
                                <div className="col-6 col-md-9">
                                    <input
                                        style={{borderColor: valid.isInValidCeilingHeight ? '#DA1E2A' : ''}}
                                        type="number"
                                        placeholder="3-100"
                                        className="fs-11"
                                        defaultValue={defaultForm?.ceilingHeight}
                                        onChange={e => {
                                            setData(prevData => {
                                                return {...prevData, "ceilingHeight": e.target.value}
                                            })
                                            resetFieldVal(e, 'isInValidCeilingHeight')
                                        }}
                                    />
                                    <span className="ms-2">м</span>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Пандус:</div>
                                <div className="col-md-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input
                                                type="radio"
                                                name="ramp"
                                                value={1}
                                                checked={btnRadio.hasRamp === 1}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, hasRamp: 1}))}
                                                onChange={e => {
                                                    setData(prevData => ({...prevData, "hasRamp": e.target.value}))
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input
                                                type="radio"
                                                name="ramp"
                                                checked={btnRadio.hasRamp === 0}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, hasRamp: 0}))}
                                                onChange={e => {
                                                    setData(prevData => ({...prevData, "hasRamp": e.target.value}))
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Мусоропровод:</div>
                                <div className="col-md-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input
                                                type="radio"
                                                name="chute"
                                                checked={btnRadio.hasGarbage === 1}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, hasGarbage: 1}))}
                                                onChange={e => {
                                                    setData(prevData =>
                                                      ({...prevData, "hasGarbage": e.target.value})
                                                    )
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input
                                                type="radio"
                                                name="chute"
                                                value={0}
                                                checked={btnRadio.hasGarbage === 0}
                                                onClick={() => setBtnRadio(prevState => ({...prevState, hasGarbage: 0}))}
                                                onChange={e => {
                                                    setData(prevData => ({...prevData, "hasGarbage": e.target.value}))
                                                }}
                                            />
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Парковка:</div>
                                <div className="col-md-9 row row-cols-2 row-cols-xl-3">
                                    <div>
                                        <label className="mb-3">
                                            <input
                                                type="checkbox"
                                                name="hasGroundParking"
                                                checked={data?.hasGroundParking || false}
                                                onChange={e => handleCheckbox(e)}
                                            />
                                            <span className="fs-11 ms-3">Наземная</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="mb-3">
                                            <input
                                                type="checkbox"
                                                name="hasUnderGroundParking"
                                                checked={data?.hasUnderGroundParking || false}
                                                onChange={e => handleCheckbox(e)}
                                            />
                                            <span className="fs-11 ms-3">Подземная</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="mb-3">
                                            <input
                                                type="checkbox"
                                                name="hasMoreLayerParking"
                                                checked={data?.hasMoreLayerParking || false}
                                                onChange={e => handleCheckbox(e)}
                                            />
                                            <span className="fs-11 ms-3">Многоуровневая</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-lg-none row row-cols-2 row-cols-sm-3 justify-content-center gx-2 gx-sm-4 mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100"
                                            onClick={() => setActiveField(3)}>Назад
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100"
                                            onClick={() => setActiveField(5)}>Далее
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset data-show={(activeField === 5) ? 'true' : 'false'} name="anchor-5"
                                  className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-5">Условия сделки</legend>
                            {
                                /* условия ПРОДАЖИ */
                                (deal === "1") &&
                                <div>
                                    <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                        <div className="col-md-3 fs-11 title-req mb-3 m-md-0">
                                            <span data-for="price" data-status={false}
                                                  style={{color: valid.isInValidPrice ? '#DA1E2A' : ''}}>Цена*:</span>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                style={{borderColor: valid.isInValidPrice ? '#DA1E2A' : ''}}
                                                type="number"
                                                name="price"
                                                value={data?.price || ''}
                                                className="fs-11 price"
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "price": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidPrice')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                        <div className="col-md-3 fs-11 title-req mb-3 m-md-0">
                                            <span data-for="hypothec" data-status={false}
                                                  style={{color: valid.isInValidHypothec ? '#DA1E2A' : ''}}>Ипотека*:</span>
                                        </div>
                                        <div className="col-md-9 d-flex">
                                            <label className="me-5">
                                                <input
                                                    type="radio"
                                                    name="isMortgage"
                                                    value={0}
                                                    checked={btnRadio.isMortgage === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, isMortgage: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "isMortgage": e.target.value}
                                                        })
                                                        resetFieldVal(e, 'isInValidHypothec')
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Да</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="hypothec"
                                                    value={1}
                                                    checked={btnRadio.isMortgage === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, isMortgage: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "isMortgage": e.target.value}
                                                        })
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Нет</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                        <div className="col-md-3 fs-11 title mb-3 m-md-0">Обременения:</div>
                                        <div className="col-md-9 d-flex">
                                            <label className="me-5">
                                                <input
                                                    type="radio"
                                                    name="difficulties"
                                                    value={0}
                                                    checked={btnRadio.isEncumbrances === 0}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, isEncumbrances: 0}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "isEncumbrances": e.target.value}
                                                        })
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Да</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="difficulties"
                                                    value={1}
                                                    checked={btnRadio.isEncumbrances === 1}
                                                    onClick={() => setBtnRadio(prevState => ({...prevState, isEncumbrances: 1}))}
                                                    onChange={e => {
                                                        setData(prevData => {
                                                            return {...prevData, "isEncumbrances": e.target.value}
                                                        })
                                                    }}
                                                />
                                                <span className="fs-11 ms-2">Нет</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                /* условия АРЕНДЫ */
                                (deal === "0") &&
                                <div>
                                    <div className="row align-items-center mb-4">
                                        <div className="col-md-3 mb-3 m-md-0">
                                            <div className="fs-11 title-req">
                                                <span data-for="rental" data-status={false}
                                                      style={{color: valid.isInValidPrice ? '#DA1E2A' : ''}}>Арендная плата*:</span>
                                            </div>
                                            <small className="gray-3 fs-08">Без коммунальных услуг</small>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                style={{borderColor: valid.isInValidPrice ? '#DA1E2A' : ''}}
                                                type="number"
                                                name="rental"
                                                placeholder="0"
                                                value={data?.price || ''}
                                                className="fs-11 price"
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "price": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidPrice')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-3 mb-3 m-md-0 fs-11 title-req">Коммунальные платежи:
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                type="number"
                                                className="fs-11 price"
                                                value={data?.communalPrice || 0}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "communalPrice": e.target.value}
                                                    })
                                                }}
                                            />
                                            <div className="d-flex mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="isCountersSeparately"
                                                    onChange={e => handleCheckbox(e)}
                                                />
                                                <span className="ms-2">Счетчики оплачиваются отдельно</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-3 mb-3 m-md-0 fs-11 title-req">
                                            <span data-for="deposit" data-status={false}>Залог*:</span>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                type="number"
                                                name="deposit"
                                                placeholder="0"
                                                className="fs-11 price"
                                                value={data?.pledge || ''}
                                                disabled={data.isPledge}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "pledge": e.target.value}
                                                    })
                                                    resetFieldVal(e, 'isInValidPledge')
                                                }}
                                            />
                                            <div className="d-flex mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="isPledge"
                                                    checked={data?.pledge === 0}
                                                    onChange={e => {
                                                        handleCheckbox(e)
                                                        setData(prevData => {
                                                            return {...prevData, "pledge": 0}
                                                        })
                                                    }}
                                                />
                                                <span className="ms-2">Без залога</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-4">
                                        <div className="col-md-3 mb-3 m-md-0 fs-11 title-req">
                                            <span data-for="prepayment" data-status={false}>Предоплата*:</span>
                                        </div>
                                        <div className="col-md-9">
                                            <CustomSelect
                                                modificator="prepayment"
                                                btnClass="inp"
                                                name="prepayment"
                                                checkedOptions={[prepTypeText]}
                                                options={['нет', '1 месяц', '2 месяца', '3 месяца', '4 месяца', '5 месяцев','6 месяцев','7 месяцев','8 месяцев','9 месяцев','10 месяцев','11 месяцев']}
                                                callback={({title, value}) => {
                                                    setData(prevData => {
                                                        return {...prevData, "prepaymentType": value}
                                                    })
                                                    setPrepTypeText(title)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-3 mb-3 m-md-0 fs-11 title-req">Комиссия агента:</div>
                                        <div className="col-md-9">
                                            <input
                                                type="number"
                                                className="percent fs-11"
                                                value={data.commission || ''}
                                                disabled={data.isCommission}
                                                onChange={e => {
                                                    setData(prevData => {
                                                        return {...prevData, "commission": e.target.value}
                                                    })
                                                }}
                                            />
                                            <div className="d-flex mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="isCommission"
                                                    checked={data?.commission === 0}
                                                    onChange={e => {
                                                        handleCheckbox(e)
                                                        setData(prevData => {
                                                            return {...prevData, "commission": "0"}
                                                        })
                                                    }}
                                                />
                                                <span className="ms-2">Без комиссии</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* для мобильных устроийств */}
                            <div
                                className="d-lg-none row row-cols-2 row-cols-sm-3 justify-content-center gx-2 gx-sm-4 mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100"
                                            onClick={() => setActiveField(4)}>Назад
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-1 w-100"
                                        onClick={(e) => {
                                            handleSub(e)
                                        }}
                                    >
                                        Редактировать
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <CustomModal
                            isShow={isShow}
                            setIsShow={setIsShow}
                            closeButton={false}
                            backdrop='static'
                            centre={true}
                        >
                            {statusRequest.good &&
                                <div style={{textAlign: "center"}}>
                                    <p>Редакция прошла успешно! Переход в "Мои объявления"</p>
                                </div>
                            }
                            {statusRequest.error &&
                                <div style={{textAlign: "center"}}>
                                    <p>Произошла ошибка</p>
                                </div>
                            }
                        </CustomModal>

                        <div className="d-flex justify-content-between mb-4">
                            <div>*- поля обязательные для заполнения</div>
                        </div>

                        <button
                            type="submit"
                            className="d-none d-lg-block btn btn-1 fs-15 mx-auto"
                            onClick={(e) => {
                                handleSub(e)
                            }}
                        >
                            Редактировать объявление
                        </button>
                        <div className="d-none d-lg-block gray-3 text-center mt-3">Нажимая кнопку “Разместить
                            объявление”, Вы соглашаетесь с <a href="/" className="color-1">условиями сайта</a></div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3 position-relative">
                        <aside>
                            <nav className="contents mb-4 mb-lg-5">
                                <ol>
                                    <li data-target="anchor-1">
                                        <Link activeClass="active" to="anchor-1" spy={true} smooth={true}
                                              hashSpy={true}
                                              offset={-80} duration={300}
                                              isDynamic={true}>
                                            <span>Тип объявления</span>
                                        </Link>
                                    </li>
                                    <li data-target="anchor-2">
                                        <Link activeClass="active" to="anchor-2" spy={true} smooth={true}
                                              hashSpy={true}
                                              offset={-80} duration={300}
                                              isDynamic={true}><span>Об объекте</span></Link>
                                    </li>
                                    <li data-target="anchor-3">
                                        <Link activeClass="active" to="anchor-3" spy={true} smooth={true}
                                              hashSpy={true}
                                              offset={-80} duration={300}
                                              isDynamic={true}><span>Описание и фото</span></Link>
                                    </li>
                                    <li data-target="anchor-4">
                                        <Link activeClass="active" to="anchor-4" spy={true} smooth={true}
                                              hashSpy={true}
                                              offset={-80} duration={300}
                                              isDynamic={true}><span>О здании</span></Link>
                                    </li>
                                    <li data-target="anchor-5">
                                        <Link activeClass="active" to="anchor-5" spy={true} smooth={true}
                                              hashSpy={true}
                                              offset={-80} duration={300}
                                              isDynamic={true}><span>Условия сделки</span></Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="faster">
                                <img src="/img/img5.jpg" alt="" className="img-fluid"/>
                                <div className="title">Хотите найти покупателя/арендатора быстрее?</div>
                                <button type="button" className="btn btn-1 px-3">Узнать о преимуществах</button>
                            </div>
                        </aside>
                    </div>
                </form>
            </section>
        </main>
    )
}
