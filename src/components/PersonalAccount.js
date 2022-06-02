import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./account/Favorites";
import UserAds from "./account/UserAds";
import UserProfile from "./account/UserProfile";
import UserServices from "./account/UserServices";
import UserReviews from "./account/UserReviews";
import UserMessages from "./account/UserMessages";
import CreateService from "./account/CreateService";
import ChatPage from "./account/ChatPage";
import AccountMenu from "./account/AccountMenu";

export default function PersonalAccount() {
  const [mob, setMob] = useState(false);

  useEffect(() => {
    function updateView() {
      if (window.matchMedia("(max-width: 991px)").matches) {
        setMob(true);
      } else {
        setMob(false);
      }
    }
    window.addEventListener("resize", updateView);
    updateView();
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <main className="account py-sm-3 py-md-4 py-lg-5">
      <section id="sec-12" className="container">
        <div className="d-none d-lg-block">
          <h1 className="text-center text-lg-start">Личный кабинет</h1>
          <div className="row ">
            <div className="col-lg-4 col-xl-3">
              <div className="frame p-4">
                <AccountMenu />
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="frame pt-4 pt-xxl-5">
                {mob === false && (
                  <Routes>
                    <Route path="/" element={<UserProfile />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="my-ads" element={<UserAds />} >
                      <Route path='page/:page' element={<UserAds/>} />
                    </Route>
                    <Route path="my-services" element={<UserServices />} />
                    <Route
                      path="my-services/create"
                      element={<CreateService />}
                    />
                    <Route path="favorites" element={<Favorites />} >
                        <Route path="page/:page" element={<Favorites />} />
                    </Route>
                    <Route path="my-messages" element={<UserMessages />} />
                    <Route path="my-messages/*" element={<ChatPage />} />
                    <Route path="my-reviews" element={<UserReviews />} >
                      <Route path='page/:page' element={<UserReviews />}/>
                    </Route>
                  </Routes>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none">
          {mob === true && (
            <Routes>
              <Route path="/" element={<AccountMenu />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="my-ads" element={<UserAds />} >
                <Route path='page/:page' element={<UserAds/>} />
              </Route>
              <Route path="my-services" element={<UserServices />} />
              <Route path="my-services/create" element={<CreateService />} />
              <Route path="favorites" element={<Favorites />} >
                <Route path="page/:page" element={<Favorites />} />
              </Route>
              <Route path="my-messages" element={<UserMessages />} />
              <Route path="my-messages/*" element={<ChatPage />} />
              <Route path="my-reviews" element={<UserReviews />} >
                <Route path='page/:page' element={<UserReviews />}/>
              </Route>
            </Routes>
          )}
        </div>
      </section>
    </main>
  );
}
