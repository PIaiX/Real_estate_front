import React, {useState} from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import accessTokenActions from "../../store/actions/accessToken";
import currentUserActions from "../../store/actions/currentUser";
import { bindActionCreators } from "redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import apiRoutes from "../../API/config/apiRoutes";
import CustomModal from "../../components/CustomModal";

export default function AccountMenu() {

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const { resetToken } = bindActionCreators(accessTokenActions, dispatch);
  const { resetCurrentUser } = bindActionCreators(currentUserActions, dispatch);
  const [isShowModalExit, setIsShowModalExit] = useState(false)
  const conversationCount = useSelector(state => state?.conversationCount)

  const handleLogout = async () => {
    await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.LOGOUT}`);
    resetToken();
    resetCurrentUser();
    navigate("/");
    setIsShowModalExit(false)
  };

  return (
    <div>
      <nav
        className="d-block d-lg-none mt-3 mb-4 mb-sm-5"
        aria-label="breadcrumb"
      >
        <Link to="/" className="gray-3">
          &#10094; На главную
        </Link>
      </nav>
      <h1 className="d-block d-lg-none text-center color-1 mb-4">
        Личный кабинет
      </h1>
      <nav className="menu">
        <ul>
          <li>
            <img src="/img/icons/pa-1.svg" alt="Профиль" />
            <NavLink to="profile">Профиль</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-2.svg" alt="Мои объявления" />
            <NavLink to="my-ads">Мои объявления</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-3.svg" alt="Мои услуги" />
            <NavLink to="my-services">Мои услуги</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-4.svg" alt="Избранное" />
            <NavLink to="favorites">Избранное</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-11.svg" alt="Мои отклики" />
            <NavLink to="responses">Мои отклики</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-12.svg" alt="В работе" />
            <NavLink to="in-work">В работе</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-5.svg" alt="Сообщения" />
            <NavLink to="my-messages">Сообщения</NavLink>
            {(conversationCount > 0) && <div className="count">{conversationCount}</div>}
          </li>
          <li>
            <img src="/img/icons/pa-6.svg" alt="Отзывы" />
            <NavLink to="my-reviews">Отзывы</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-7.svg" alt="Выйти" />
            <button onClick={() => setIsShowModalExit(true)} type="button">
              Выйти
            </button>
          </li>
        </ul>
      </nav>
      <CustomModal
          isShow={isShowModalExit}
          setIsShow={setIsShowModalExit}
          closeButton={true}
          className='modal__exit-with-account'
      >
        <div className="text-center fs-15 fw-6 title-font my-5">
          Вы действительно хотите выйти?
        </div>
        <div className="row row-cols-2">
          <div>
            <button
                type="button"
                className="btn btn-2 w-100 fs-11 text-uppercase"
                onClick={() => setIsShowModalExit(false)}
            >
              Отмена
            </button>
          </div>
          <div>
            <button
                type="button"
                className="btn btn-1 w-100 fs-11 text-uppercase"
                onClick={handleLogout}
            >
              Выйти
            </button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
