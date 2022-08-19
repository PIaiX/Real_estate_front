const checkPhotoPath = (path = '') => path?.length
    ? path.includes('http')
        ? path
        : `https://api.antontig.beget.tech/uploads/${path}`
    : '/img/nophoto.jpg'

export {checkPhotoPath}