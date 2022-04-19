import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import accessTokenActions from "../../store/actions/accessToken";
import { bindActionCreators } from "redux";
import useAxiosPrivate from "../hooks/axiosPrivate";

const baseUrl = "http://45.90.35.82:3333";

export default function AccountMenu() {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const { resetToken } = bindActionCreators(accessTokenActions, dispatch);

  const handleLogout = async () => {
    const response = await axiosPrivate.post(`${baseUrl}/api/auth/logout`);
    if (response && response.status === 200) {
      console.log("logout success");
      resetToken();
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
            <img src="/real_estate/img/icons/pa-1.svg" alt="Профиль" />
            <NavLink to="profile">Профиль</NavLink>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-2.svg" alt="Мои объявления" />
            <NavLink to="my-ads">Мои объявления</NavLink>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-3.svg" alt="Мои услуги" />
            <NavLink to="my-services">Мои услуги</NavLink>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-4.svg" alt="Избранное" />
            <NavLink to="favorites">Избранное</NavLink>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-5.svg" alt="Сообщения" />
            <NavLink to="my-messages">Сообщения</NavLink>
            <div className="count">2</div>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-6.svg" alt="Отзывы" />
            <NavLink to="my-reviews">Отзывы</NavLink>
          </li>
          <li>
            <img src="/real_estate/img/icons/pa-7.svg" alt="Выйти" />
            <button onClick={handleLogout} type="button">
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
