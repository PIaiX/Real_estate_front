import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import accessTokenActions from "../../store/actions/accessToken";
import currentUserActions from "../../store/actions/currentUser";
import { bindActionCreators } from "redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const baseUrl = "https://api.antontig.beget.tech";

export default function AccountMenu() {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const { resetToken } = bindActionCreators(accessTokenActions, dispatch);
  const { resetCurrentUser } = bindActionCreators(currentUserActions, dispatch);

  const handleLogout = async () => {
    const response = await axiosPrivate.post(`${baseUrl}/api/auth/logout`);
    if (response && response.status === 200 && localStorage.getItem("fingerprint")) {
      resetToken();
      resetCurrentUser();
      navigate("/");
    }
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
            <NavLink to="my-ads/page/1">Мои объявления</NavLink>
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
            <NavLink to="responses/page/1">Мои отклики</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-12.svg" alt="В работе" />
            <NavLink to="in-work/page/1">В работе</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-5.svg" alt="Сообщения" />
            <NavLink to="my-messages">Сообщения</NavLink>
            <div className="count">2</div>
          </li>
          <li>
            <img src="/img/icons/pa-6.svg" alt="Отзывы" />
            <NavLink to="my-reviews">Отзывы</NavLink>
          </li>
          <li>
            <img src="/img/icons/pa-7.svg" alt="Выйти" />
            <button onClick={handleLogout} type="button">
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
