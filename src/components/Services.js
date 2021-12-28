import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../utilities/CustomSelect';
import ShowPhone from '../utilities/ShowPhone';
import InputFile from '../utilities/InputFile';

export default function Services() {
    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <a href="javascript:history.go(-1)" className="d-block d-md-none gray-3">&#10094; Назад</a>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Дизайн</li>
                    </ol>
                </nav>
            </div>

            <div className="sec-9 container">
                <h1 className="text-center text-md-left">Услуги</h1>
            </div>

            <section className="sec-9 d-md-none mb-4">
                <div className="mobile-title px-4 py-3">
                    <div className="container pe-5">
                        <svg width="43" height="47" viewBox="0 0 84 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill" d="M43.147 66.9147H13.1234V24.4083L38.6111 3.17477L63.4873 23.5381V50.226C63.4873 50.9813 64.1264 51.5944 64.9161 51.5944C65.7057 51.5944 66.3449 50.9813 66.3449 50.226V25.8771L75.6425 33.488C75.912 33.7078 76.2416 33.8155 76.5702 33.8155C76.9732 33.8155 77.3742 33.6522 77.6571 33.3366C78.1705 32.7618 78.099 31.8989 77.4989 31.4071L39.5313 0.32854C38.9921 -0.11299 38.1987 -0.108429 37.6653 0.335838L0.491035 31.305C-0.104293 31.8012 -0.16716 32.6651 0.351014 33.2353C0.869188 33.8055 1.77028 33.8648 2.36656 33.3694L10.2659 26.7884V68.2822C10.2659 69.0376 10.905 69.6506 11.6946 69.6506H43.147C43.9367 69.6506 44.5758 69.0376 44.5758 68.2822C44.5758 67.5269 43.9367 66.9147 43.147 66.9147Z"/>
                        <path className="fill" d="M82.2016 80.8425L49.8396 45.3096C50.2351 41.5777 49.2111 38.5586 46.8233 36.569C43.9192 34.1495 41.2492 34.6095 37.2097 35.3031C36.6802 35.3944 36.1196 35.4911 35.5213 35.5879C33.997 35.8352 32.7116 34.3822 31.3147 32.6025C30.3256 31.3421 29.4705 30.2551 28.1351 30.5946C26.8345 30.9269 26.5316 32.3616 26.3494 33.6795C25.5443 39.5169 25.9294 47.6269 29.6603 51.273C32.7125 54.2665 36.9275 54.6864 39.0511 54.6864C39.3125 54.6864 39.5277 54.6791 39.7193 54.6708L76.8116 86.0557C77.9602 87.1518 79.3844 87.7797 80.7227 87.7788C80.7331 87.7788 80.7444 87.7788 80.7548 87.7788C81.6769 87.7724 82.5084 87.4493 83.0982 86.8689C84.5885 85.3995 84.1921 82.76 82.2016 80.8425ZM29.1166 34.3311C30.4644 36.0469 32.6974 38.8233 35.9865 38.2884C36.5953 38.1908 37.1663 38.0922 37.7043 38C41.705 37.311 43.1811 37.1485 44.9744 38.6444C46.6694 40.0572 47.348 42.2412 47.0186 45.1252L39.6022 51.9337C38.2951 51.9885 34.3037 51.9274 31.6743 49.35C28.9213 46.6567 28.421 39.7423 29.1166 34.3311ZM48.2805 47.7409L51.2233 50.9718L45.82 56.195L42.3081 53.2234L48.2805 47.7409ZM81.0776 84.9504C81.019 85.007 80.8822 85.0353 80.7236 85.0399C80.2857 85.0399 79.5231 84.7953 78.7379 84.0506L47.9558 58.0021L53.0986 53.0308L80.1092 82.687C80.1319 82.7117 80.1555 82.7363 80.18 82.7591C81.1502 83.6809 81.3144 84.7177 81.0776 84.9504Z"/>
                    </svg>
                        <div className="mx-auto">Дизайн</div>
                    </div> 
                </div>
            </section>

            <section className="sec-9 container pb-4 pb-sm-5">
                <nav className="d-none d-md-block service-nav mb-5">
                    <div className="row row-cols-4 gx-2 gx-lg-4">
                        <div>
                            <a href="#">
                                <svg width="80" height="105" viewBox="0 0 103 136" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_86_476" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4587 81.2222C27.3542 81.2222 26.4587 82.1176 26.4587 83.2222V89.567V95.0858V131.043C26.4587 132.147 27.3542 133.043 28.4587 133.043H44.1951C45.2997 133.043 46.1951 132.147 46.1951 131.043V97.0858H49.4846V131.043C49.4846 132.147 50.38 133.043 51.4846 133.043H68.3174C69.4219 133.043 70.3174 132.147 70.3174 131.043V89.567C70.3174 89.5611 70.3173 89.5552 70.3173 89.5493V83.2222C70.3173 82.1176 69.4219 81.2222 68.3173 81.2222H28.4587Z"/>
                                    </mask>
                                    <path className="fill" d="M46.1951 97.0858V94.0858H43.1951V97.0858H46.1951ZM49.4846 97.0858H52.4846V94.0858H49.4846V97.0858ZM70.3173 89.5493H67.3173V89.562L67.3174 89.5747L70.3173 89.5493ZM29.4587 83.2222C29.4587 83.7745 29.011 84.2222 28.4587 84.2222V78.2222C25.6973 78.2222 23.4587 80.4607 23.4587 83.2222H29.4587ZM29.4587 89.567V83.2222H23.4587V89.567H29.4587ZM23.4587 89.567V95.0858H29.4587V89.567H23.4587ZM23.4587 95.0858V131.043H29.4587V95.0858H23.4587ZM23.4587 131.043C23.4587 133.804 25.6973 136.043 28.4587 136.043V130.043C29.011 130.043 29.4587 130.49 29.4587 131.043H23.4587ZM28.4587 136.043H44.1951V130.043H28.4587V136.043ZM44.1951 136.043C46.9565 136.043 49.1951 133.804 49.1951 131.043H43.1951C43.1951 130.49 43.6428 130.043 44.1951 130.043V136.043ZM49.1951 131.043V97.0858H43.1951V131.043H49.1951ZM49.4846 94.0858H46.1951V100.086H49.4846V94.0858ZM46.4846 97.0858V131.043H52.4846V97.0858H46.4846ZM46.4846 131.043C46.4846 133.804 48.7231 136.043 51.4846 136.043V130.043C52.0368 130.043 52.4846 130.49 52.4846 131.043H46.4846ZM51.4846 136.043H68.3174V130.043H51.4846V136.043ZM68.3174 136.043C71.0788 136.043 73.3174 133.804 73.3174 131.043H67.3174C67.3174 130.49 67.7651 130.043 68.3174 130.043V136.043ZM73.3174 131.043V89.567H67.3174V131.043H73.3174ZM73.3174 89.567C73.3174 89.5521 73.3173 89.5377 73.3172 89.524L67.3174 89.5747C67.3174 89.5727 67.3174 89.5702 67.3174 89.567H73.3174ZM67.3173 83.2222V89.5493H73.3173V83.2222H67.3173ZM68.3173 84.2222C67.765 84.2222 67.3173 83.7745 67.3173 83.2222H73.3173C73.3173 80.4607 71.0787 78.2222 68.3173 78.2222V84.2222ZM28.4587 84.2222H68.3173V78.2222H28.4587V84.2222Z" mask="url(#path-1-inside-1_86_476)"/>
                                    <path className="stroke" d="M48.4363 26.9384C54.7876 26.9384 59.9363 21.824 59.9363 15.5151C59.9363 9.20617 54.7876 4.0918 48.4363 4.0918C42.0851 4.0918 36.9363 9.20617 36.9363 15.5151C36.9363 21.824 42.0851 26.9384 48.4363 26.9384Z" stroke-miterlimit="10"/>
                                    <path className="stroke" d="M92.3399 117.276H60.1794C58.6398 117.276 57.4423 116.203 57.4423 114.825V97.0593C57.4423 95.681 58.6398 94.6089 60.1794 94.6089H92.3399C93.8795 94.6089 95.0769 95.681 95.0769 97.0593V114.825C95.0769 116.203 93.8795 117.276 92.3399 117.276Z" fill="white" stroke-miterlimit="10"/>
                                    <line className="stroke" x1="95.0769" y1="104.243" x2="57.4423" y2="104.243"/>
                                    <path className="stroke" d="M17.796 41.4682C17.8349 40.5247 18.3132 39.6563 19.1124 39.1533C21.8688 37.4182 28.6882 33.4422 34.7147 32.4731C42.4841 31.2237 51.9183 31.2239 59.1328 32.4731C64.7643 33.4483 73.2278 37.4687 76.6707 39.186C77.6275 39.6633 78.2365 40.6269 78.2807 41.6952L80.0922 85.5718C80.1625 87.2758 78.8001 88.6956 77.0947 88.6956H18.9725C17.2671 88.6956 15.9047 87.2758 15.9751 85.5718L17.796 41.4682Z" fill="white" stroke-linejoin="round"/>
                                    <path className="stroke" d="M28 88L28 48" stroke-linejoin="round"/>
                                    <path className="stroke" d="M40 88L39.5446 32" stroke-linejoin="round"/>
                                    <path className="stroke" d="M57.0179 87.2974L57.0179 32.1622" stroke-linejoin="round"/>
                                    <path className="stroke" d="M68.0367 88.7778L68.0367 47.2223"/>
                                    <rect className="stroke" x="70.4868" y="89.6812" width="12" height="4.96664" stroke-linejoin="round"/>
                                    <line className="stroke" x1="15.8461" y1="79.0615" x2="28.8461" y2="79.0615"/>
                                    <line className="stroke" x1="67.0917" y1="79.062" x2="80.0917" y2="79.062"/>
                                </svg>
                                <span>Услуги риелтора</span>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="active">
                                <svg width="84" height="88" viewBox="0 0 84 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill" d="M43.147 66.9147H13.1234V24.4083L38.6111 3.17477L63.4873 23.5381V50.226C63.4873 50.9813 64.1264 51.5944 64.9161 51.5944C65.7057 51.5944 66.3449 50.9813 66.3449 50.226V25.8771L75.6425 33.488C75.912 33.7078 76.2416 33.8155 76.5702 33.8155C76.9732 33.8155 77.3742 33.6522 77.6571 33.3366C78.1705 32.7618 78.099 31.8989 77.4989 31.4071L39.5313 0.32854C38.9921 -0.11299 38.1987 -0.108429 37.6653 0.335838L0.491035 31.305C-0.104293 31.8012 -0.16716 32.6651 0.351014 33.2353C0.869188 33.8055 1.77028 33.8648 2.36656 33.3694L10.2659 26.7884V68.2822C10.2659 69.0376 10.905 69.6506 11.6946 69.6506H43.147C43.9367 69.6506 44.5758 69.0376 44.5758 68.2822C44.5758 67.5269 43.9367 66.9147 43.147 66.9147Z"/>
                                    <path className="fill" d="M82.2016 80.8425L49.8396 45.3096C50.2351 41.5777 49.2111 38.5586 46.8233 36.569C43.9192 34.1495 41.2492 34.6095 37.2097 35.3031C36.6802 35.3944 36.1196 35.4911 35.5213 35.5879C33.997 35.8352 32.7116 34.3822 31.3147 32.6025C30.3256 31.3421 29.4705 30.2551 28.1351 30.5946C26.8345 30.9269 26.5316 32.3616 26.3494 33.6795C25.5443 39.5169 25.9294 47.6269 29.6603 51.273C32.7125 54.2665 36.9275 54.6864 39.0511 54.6864C39.3125 54.6864 39.5277 54.6791 39.7193 54.6708L76.8116 86.0557C77.9602 87.1518 79.3844 87.7797 80.7227 87.7788C80.7331 87.7788 80.7444 87.7788 80.7548 87.7788C81.6769 87.7724 82.5084 87.4493 83.0982 86.8689C84.5885 85.3995 84.1921 82.76 82.2016 80.8425ZM29.1166 34.3311C30.4644 36.0469 32.6974 38.8233 35.9865 38.2884C36.5953 38.1908 37.1663 38.0922 37.7043 38C41.705 37.311 43.1811 37.1485 44.9744 38.6444C46.6694 40.0572 47.348 42.2412 47.0186 45.1252L39.6022 51.9337C38.2951 51.9885 34.3037 51.9274 31.6743 49.35C28.9213 46.6567 28.421 39.7423 29.1166 34.3311ZM48.2805 47.7409L51.2233 50.9718L45.82 56.195L42.3081 53.2234L48.2805 47.7409ZM81.0776 84.9504C81.019 85.007 80.8822 85.0353 80.7236 85.0399C80.2857 85.0399 79.5231 84.7953 78.7379 84.0506L47.9558 58.0021L53.0986 53.0308L80.1092 82.687C80.1319 82.7117 80.1555 82.7363 80.18 82.7591C81.1502 83.6809 81.3144 84.7177 81.0776 84.9504Z"/>
                                </svg>
                                <span>Дизайн</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <svg width="77" height="69" viewBox="0 0 77 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill" d="M36.2444 31.3458H27.9343C25.7503 31.3458 23.973 29.5695 23.973 27.3864C23.973 25.6246 24.9385 21.7871 25.7903 18.401C26.5101 15.5409 27.1899 12.8391 27.4438 10.9427C27.7168 8.92157 27.0843 6.9141 25.6638 5.28975C24.0103 3.39786 21.5069 2.26855 18.9671 2.26855C16.4246 2.26855 13.9184 3.39877 12.265 5.29157C10.8454 6.91593 10.2157 8.92339 10.4887 10.9418C10.748 12.8719 11.4714 15.6201 12.2358 18.5293C13.114 21.8681 14.1095 25.6528 14.1095 27.3864C14.1095 29.5695 12.3323 31.3458 10.1483 31.3458H1.68531C0.930922 31.3458 0.320312 31.9564 0.320312 32.7108V67.1352C0.320312 67.8887 0.930922 68.5002 1.68531 68.5002H36.2435C36.9979 68.5002 37.6085 67.8887 37.6085 67.1352V32.7108C37.6094 31.9573 36.9988 31.3458 36.2444 31.3458ZM10.1492 34.0758C13.8393 34.0758 16.8404 31.0746 16.8404 27.3864C16.8404 25.2997 15.8868 21.6734 14.8767 17.8341C14.166 15.1332 13.4316 12.3395 13.1941 10.5759C12.9811 9.00255 13.6891 7.81046 14.3207 7.08792C15.4463 5.79936 17.2263 4.99855 18.9662 4.99855C20.7034 4.99855 22.4824 5.79844 23.6081 7.0861C24.2406 7.80955 24.9504 9.00256 24.7374 10.5778C24.5036 12.3222 23.811 15.0741 23.1422 17.7349C22.1649 21.6188 21.243 25.2861 21.243 27.3864C21.243 31.0746 24.2442 34.0758 27.9343 34.0758H34.8794V41.3658H3.05122V34.0758H10.1492ZM3.05122 65.7702V44.0958H34.8794V65.7702H3.05122Z"/>
                                    <path className="fill" d="M23.2162 10.673C23.2162 8.32979 21.3097 6.42334 18.9665 6.42334C16.6232 6.42334 14.7168 8.32979 14.7168 10.673C14.7168 13.0163 16.6232 14.9227 18.9665 14.9227C21.3097 14.9227 23.2162 13.0163 23.2162 10.673ZM17.4468 10.673C17.4468 9.83493 18.1284 9.15334 18.9665 9.15334C19.8046 9.15334 20.4862 9.83493 20.4862 10.673C20.4862 11.5112 19.8046 12.1927 18.9665 12.1927C18.1284 12.1927 17.4468 11.5112 17.4468 10.673Z"/>
                                    <path className="fill" d="M76.1354 12.2867L68.7216 6.70025C68.485 6.52189 68.1975 6.42543 67.9008 6.42543H62.2879V1.86451C62.2879 1.11012 61.6764 0.499512 60.9229 0.499512H50.9803C50.2268 0.499512 49.6153 1.11012 49.6153 1.86451V6.42543H36.5886C35.8342 6.42543 35.2236 7.03604 35.2236 7.79043V18.4311C35.2236 19.1854 35.8342 19.7961 36.5886 19.7961H49.6153V67.1352C49.6153 67.8886 50.2268 68.5002 50.9803 68.5002H60.9229C61.6764 68.5002 62.2879 67.8886 62.2879 67.1352V19.7961H75.3146C76.0681 19.7961 76.6796 19.1854 76.6796 18.4311V13.3769C76.6796 12.9483 76.4785 12.5452 76.1354 12.2867ZM52.3453 3.22951H59.5579V6.42543H52.3453V3.22951ZM59.5579 65.7702H52.3453V19.7961H59.5579V65.7702ZM73.9496 17.0661H37.9536V9.15543H67.444L73.9496 14.0576V17.0661Z"/>
                                </svg>
                                <span>Ремонт</span>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <svg width="89" height="58" viewBox="0 0 89 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill" d="M88.7276 28.1158L82.4202 19.0394C81.482 17.6934 80.2293 16.5933 78.7693 15.8334C77.3092 15.0735 75.6855 14.6765 74.0372 14.6763H57.7648V2.16756C57.7648 1.76945 57.6056 1.38766 57.3222 1.10615C57.0387 0.824651 56.6543 0.666504 56.2535 0.666504H1.84437C1.44353 0.666504 1.05911 0.824651 0.775676 1.10615C0.49224 1.38766 0.333008 1.76945 0.333008 2.16756V49.2006C0.333008 49.5987 0.49224 49.9805 0.775676 50.262C1.05911 50.5435 1.44353 50.7017 1.84437 50.7017H14.3282C14.571 52.5361 15.4771 54.2203 16.8776 55.4404C18.2782 56.6604 20.0775 57.3332 21.9405 57.3332C23.8034 57.3332 25.6028 56.6604 27.0033 55.4404C28.4038 54.2203 29.3099 52.5361 29.5527 50.7017H63.2864C63.5603 52.5094 64.4782 54.1595 65.8733 55.352C67.2683 56.5446 69.0479 57.2005 70.8885 57.2005C72.7291 57.2005 74.5087 56.5446 75.9037 55.352C77.2988 54.1595 78.2167 52.5094 78.4907 50.7017H87.4883C87.8892 50.7017 88.2736 50.5435 88.557 50.262C88.8404 49.9805 88.9997 49.5987 88.9997 49.2006V28.9664C89.0005 28.6616 88.9054 28.3642 88.7276 28.1158ZM74.0372 17.6785C75.1968 17.6777 76.3392 17.957 77.366 18.4922C78.3929 19.0273 79.2733 19.8024 79.9315 20.7506L84.7578 27.6855H57.7648V17.6785H74.0372ZM21.9354 54.2041C21.0095 54.2081 20.1032 53.9389 19.3315 53.4307C18.5599 52.9224 17.9575 52.198 17.6009 51.3494C17.2442 50.5007 17.1493 49.5659 17.3283 48.6637C17.5072 47.7614 17.9519 46.9322 18.6059 46.2812C19.2599 45.6302 20.0939 45.1868 21.002 45.0071C21.9101 44.8275 22.8514 44.9197 23.7067 45.272C24.562 45.6244 25.2926 46.2211 25.806 46.9864C26.3194 47.7517 26.5924 48.6512 26.5904 49.5709C26.5878 50.7971 26.0968 51.9726 25.2247 52.8406C24.3526 53.7087 23.1701 54.1988 21.9354 54.2041ZM21.9354 41.9255C20.2166 41.92 18.5452 42.4853 17.1869 43.5315C15.8287 44.5777 14.8615 46.0448 14.4391 47.6996H3.35574V3.66861H54.7421V47.6996H29.3713C28.9531 46.0539 27.9953 44.5932 26.649 43.5478C25.3027 42.5024 23.6444 41.9316 21.9354 41.9255ZM70.8633 54.2041C69.9382 54.2041 69.0339 53.9315 68.2649 53.4209C67.4959 52.9102 66.8966 52.1845 66.5431 51.3354C66.1895 50.4864 66.0975 49.5523 66.2787 48.6513C66.4599 47.7503 66.9062 46.923 67.5611 46.274C68.2159 45.6251 69.0499 45.1836 69.9574 45.0056C70.865 44.8276 71.8053 44.921 72.6594 45.2739C73.5135 45.6269 74.243 46.2236 74.7555 46.9885C75.268 47.7534 75.5405 48.6521 75.5385 49.5709C75.5358 50.8006 75.0421 51.9791 74.1656 52.8477C73.2891 53.7163 72.1015 54.2041 70.8633 54.2041ZM78.3194 47.6996C77.9059 46.0475 76.9477 44.5803 75.5975 43.5317C74.2471 42.4832 72.5824 41.9135 70.8683 41.9135C69.1543 41.9135 67.4896 42.4832 66.1393 43.5317C64.789 44.5803 63.8308 46.0475 63.4173 47.6996H57.7648V30.6876H85.977V47.6996H78.3194Z"/>
                                </svg>
                                <span>Грузоперевозки</span>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="d-none d-xl-block col-4 col-xxl-3 pt-4">
                        <form className="service-leftMenu">
                            <div className="title px-4 py-3">
                                <svg width="43" height="47" viewBox="0 0 84 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill" d="M43.147 66.9147H13.1234V24.4083L38.6111 3.17477L63.4873 23.5381V50.226C63.4873 50.9813 64.1264 51.5944 64.9161 51.5944C65.7057 51.5944 66.3449 50.9813 66.3449 50.226V25.8771L75.6425 33.488C75.912 33.7078 76.2416 33.8155 76.5702 33.8155C76.9732 33.8155 77.3742 33.6522 77.6571 33.3366C78.1705 32.7618 78.099 31.8989 77.4989 31.4071L39.5313 0.32854C38.9921 -0.11299 38.1987 -0.108429 37.6653 0.335838L0.491035 31.305C-0.104293 31.8012 -0.16716 32.6651 0.351014 33.2353C0.869188 33.8055 1.77028 33.8648 2.36656 33.3694L10.2659 26.7884V68.2822C10.2659 69.0376 10.905 69.6506 11.6946 69.6506H43.147C43.9367 69.6506 44.5758 69.0376 44.5758 68.2822C44.5758 67.5269 43.9367 66.9147 43.147 66.9147Z"/>
                                    <path className="fill" d="M82.2016 80.8425L49.8396 45.3096C50.2351 41.5777 49.2111 38.5586 46.8233 36.569C43.9192 34.1495 41.2492 34.6095 37.2097 35.3031C36.6802 35.3944 36.1196 35.4911 35.5213 35.5879C33.997 35.8352 32.7116 34.3822 31.3147 32.6025C30.3256 31.3421 29.4705 30.2551 28.1351 30.5946C26.8345 30.9269 26.5316 32.3616 26.3494 33.6795C25.5443 39.5169 25.9294 47.6269 29.6603 51.273C32.7125 54.2665 36.9275 54.6864 39.0511 54.6864C39.3125 54.6864 39.5277 54.6791 39.7193 54.6708L76.8116 86.0557C77.9602 87.1518 79.3844 87.7797 80.7227 87.7788C80.7331 87.7788 80.7444 87.7788 80.7548 87.7788C81.6769 87.7724 82.5084 87.4493 83.0982 86.8689C84.5885 85.3995 84.1921 82.76 82.2016 80.8425ZM29.1166 34.3311C30.4644 36.0469 32.6974 38.8233 35.9865 38.2884C36.5953 38.1908 37.1663 38.0922 37.7043 38C41.705 37.311 43.1811 37.1485 44.9744 38.6444C46.6694 40.0572 47.348 42.2412 47.0186 45.1252L39.6022 51.9337C38.2951 51.9885 34.3037 51.9274 31.6743 49.35C28.9213 46.6567 28.421 39.7423 29.1166 34.3311ZM48.2805 47.7409L51.2233 50.9718L45.82 56.195L42.3081 53.2234L48.2805 47.7409ZM81.0776 84.9504C81.019 85.007 80.8822 85.0353 80.7236 85.0399C80.2857 85.0399 79.5231 84.7953 78.7379 84.0506L47.9558 58.0021L53.0986 53.0308L80.1092 82.687C80.1319 82.7117 80.1555 82.7363 80.18 82.7591C81.1502 83.6809 81.3144 84.7177 81.0776 84.9504Z"/>
                                </svg>
                                <div className="mx-auto">Дизайн</div>
                            </div>
                            <div className="p-3 p-xxl-4">
                                <fieldset className="mb-4">
                                    <legend className="title-font text-center fs-12 fw-6 mb-3">Опыт работы исполнителя</legend>
                                    <label className="ps-2 mb-3">
                                        <input type="checkbox" name="experience" value="Меньше года"/>
                                        <span className="fs-11 ms-3">Меньше года</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input type="checkbox" name="experience" value="От года"/>
                                        <span className="fs-11 ms-3">От года</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input type="checkbox" name="experience" value="От 3 лет"/>
                                        <span className="fs-11 ms-3">От 3 лет</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input type="checkbox" name="experience" value="Более 5 лет"/>
                                        <span className="fs-11 ms-3">Более 5 лет</span>
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <legend className="title-font text-center fs-12 fw-6 mb-3">Предоставляемые услуги</legend>
                                    <div className="d-flex flex-wrap fw-5">
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Курирование проекта"/>
                                            <div>Курирование проекта</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Закупки"/>
                                            <div>Закупки</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Проектирование"/>
                                            <div>Проектирование</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Освещение"/>
                                            <div>Освещение</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Подбор мебели"/>
                                            <div>Подбор мебели</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Консультация"/>
                                            <div>Консультация</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Подбор отделочных материалов"/>
                                            <div>Подбор отделочных материалов</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Ландшафтный дизайн"/>
                                            <div>Ландшафтный дизайн</div>
                                        </label>
                                        <label className="inp-text mb-3 me-3">
                                            <input type="checkbox" name="servises" value="Коммерческий дизайн"/>
                                            <div>Коммерческий дизайн</div>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-8 col-xxl-9">
                        <div className="d-flex justify-content-between mb-3 mb-xl-2">
                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasServiceFilter" className="d-flex d-xl-none align-items-center">
                                <img src="/real_estate/img/icons/filter.svg" alt="filter"/>
                                <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                            </button>
                            <div className="d-flex flex-column-reverse flex-sm-row align-items-end justify-content-between flex-1 ms-4 ms-xl-0">
                                <div className="d-flex">
                                    <div className="d-none d-md-block fs-11 me-1">Сортировать:</div>
                                    <CustomSelect className="gray-2" btnClass="fs-11" alignment="right" checkedOpt="По рейтингу" options={['По рейтингу', 'По опыту']}/>
                                </div>
                                <div className="fs-11">Найдено 15 объявлений</div>
                            </div>
                        </div>

                        <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-lg-3 row-cols-xl-2 row-cols-xxl-1 g-4">
                            <div>
                                <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="user-card">
                                    <div className="title">
                                        <div className="d-xxl-flex">
                                            <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                                                <NavLink to="/user">Колесникова Ирина</NavLink>
                                            </h4>
                                            <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                                <span>(3.35)</span>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 mb-xl-2 mb-xxl-0">Дизайнер</h4>
                                    </div>
                                    <div className="photo mt-2 mt-md-3 mt-xxl-0">
                                        <NavLink to="/user"><img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/></NavLink>
                                    </div>
                                    <div className="desc mt-2 mt-md-3 mt-xxl-0">
                                        <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы от 1 года</div>
                                        <div className="text">
                                            <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        <div className="serv">Проектирование</div>
                                        <div className="serv">Курирование проекта</div>
                                        <div className="serv">Создание макета</div>
                                        <div className="serv">Визуализация</div>
                                        <div className="serv">Освещение</div>
                                    </div>
                                    <div className="btns mt-2 mt-md-3 mt-xxl-0">
                                        <ShowPhone phone="+ 7 (952) 879 78 65"/>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-3">Написать сообщение</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="mt-4">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                    <img src="/real_estate/img/icons/prev2.svg" alt="Previous"/>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item">...</li>
                                <li className="page-item"><a className="page-link" href="/">6</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                    <img src="/real_estate/img/icons/next2.svg" alt="Next"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="write-message" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <form className="message-form">
                                <div className="d-flex align-items-center">
                                    <div className="photo me-2 me-sm-4">
                                        <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"></div>
                                    </div>
                                    <div>
                                        <h4>Колесникова Ирина</h4>
                                        <div className="gray-2 fs-09">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <textarea className="mt-3" rows="4" placeholder="Введите сообщение"></textarea>
                                <div className="d-flex align-items-center mt-3">
                                    <InputFile multiple={false}/>
                                    <button type="submit" className="btn btn-1 w-100 flex-1 fs-12 ms-4">ОТПРАВИТЬ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
            <form className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasServiceFilter">
                <div className="offcanvas-body">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
                        <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 1.18237L15 15.9049"/>
                            <path d="M14.9999 1.18237L1.00001 15.9049"/>
                        </svg>
                    </button>
                    <div className="service-leftMenu">
                        <div className="p-sm-3 p-xxl-4">
                            <fieldset className="mb-4">
                                <legend className="title-font text-center fs-12 fw-6 mb-3">Опыт работы исполнителя</legend>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="experience" value="Меньше года"/>
                                    <span className="fs-11 ms-3">Меньше года</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="experience" value="От года"/>
                                    <span className="fs-11 ms-3">От года</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="experience" value="От 3 лет"/>
                                    <span className="fs-11 ms-3">От 3 лет</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="experience" value="Более 5 лет"/>
                                    <span className="fs-11 ms-3">Более 5 лет</span>
                                </label>
                            </fieldset>
                            <fieldset>
                                <legend className="title-font text-center fs-12 fw-6 mb-3">Предоставляемые услуги</legend>
                                <div className="d-flex flex-wrap fw-5">
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Курирование проекта"/>
                                        <div>Курирование проекта</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Закупки"/>
                                        <div>Закупки</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Проектирование"/>
                                        <div>Проектирование</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Освещение"/>
                                        <div>Освещение</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Подбор мебели"/>
                                        <div>Подбор мебели</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Консультация"/>
                                        <div>Консультация</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Подбор отделочных материалов"/>
                                        <div>Подбор отделочных материалов</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Ландшафтный дизайн"/>
                                        <div>Ландшафтный дизайн</div>
                                    </label>
                                    <label className="inp-text mb-3 me-3">
                                        <input type="checkbox" name="servises" value="Коммерческий дизайн"/>
                                        <div>Коммерческий дизайн</div>
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="gray-3 fw-5">Найденно 1 200 объявлений</div>
                        <button type="button" onClick={() => document.getElementById("offcanvasServiceFilter").reset()} className="color-1 fs-11 fw-5">Очистить фильтр</button>
                    </div>
                    <button type="submit" className="btn btn-1 w-100 fs-11 text-uppercase">Показать</button>
                </div>
            </form>
        </main>
    )
}
