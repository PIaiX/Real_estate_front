export default {
    //auth
    ACTIVATE_ACCOUNT: '/auth/activate',
    LOGIN: '/auth/login',
    RESET_PASSWORD: '/auth/rememberPassword',
    REGISTRATION: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',

    //page ads
    ADS_ACTIONS: '/realEstates',
    ADS_ACTIONS_WISHLIST: '/realEstates/wishlist',
    ADS_REPORT: '/realEstates/reports',
    CREATE_AD: '/realEstates/create',
    GET_RESPONSES_AD: '/responses/realEstate',

    //catalog
    GET_CATALOG: '/realEstates/paginate',
    GET_DISTRICTS: '/districts',

    //cities
    GET_CITIES: '/cities',

    //main page
    GET_RECOMMEND_ADS: '/realEstates/recommended',
    GET_POPULAR_ADS: '/realEstates/popular',
    GET_BANNERS: '/banners',

    //articles
    GET_ARTICLES_ACTIONS: '/news',
    GET_ARTICLES_RANDOM: '/news/random',

    //question
    ASK_QUESTIONS: '/questions',

    // realEstates - general
    GET_ESTATE_TYPES: '/realEstates/types',
    GET_FOR_MAP: '/realEstates/getForMap',
    CREATE_ESTATE_RESPONSE: '/responses/create/realEstate',

    //profile
    USER_UPDATE: '/user/update',
    GET_USER: '/user',
    USER_DELETE_AVATAR: '/user/deleteAvatar',
    USER_ADS: '/user/realEstates',
    USER_WISHLIST: '/user/wishlist',
    USER_DELETE_AD: '/realEstates/delete',
    USER_UPDATE_AD: '/realEstates/update',
    USER_REVIEWS: '/user/reviews',

    //users pages
    ADD_REVIEW_USER: '/user/reviews/add',
    REPORT_ACTIONS_USER: '/user/reports',
    REPORT_ACTIONS_REVIEWS: '/user/reviewsReports',
    REVIEWS_IN_USERS_PAGE: '/user/reviews',

    //service
    GET_SERVICE_TYPES: '/services/types',
    GET_SERVICE_SUB_TYPES: '/services/subServicesTypes',
    GET_SERVICE_ATTRIBUTES_TYPES: '/services/attributesTypes',
    SERVICES_ACTIONS: '/services',
    ADD_SERVICES: '/services/add',

    // responses
    RESPONSES_INCOMINGS: '/responses/incumings',
    RESPONSES_OUTGOINGS: '/responses/outgoings',
    RESPONSES_INPROCESS_OWNER: '/responses/inProcess/owner',
    RESPONSES_INPROCESS_EXECUTOR: '/responses/inProcess/executor',
    RESPONSES_COMPLETED: '/responses/completed',
    RESPONSES_ACCEPT: '/responses/accept',
    RESPONSES_COMPLETE: '/responses/complete',
    RESPONSES_ACTIONS: '/responses',
    RESPONSES_CREATE: '/responses/create/service',

    // delete images
    DELETE_IMAGE: '/realEstates/deleteImage'
}