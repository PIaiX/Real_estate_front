import React, {useState, useEffect} from "react";
import AccountMenu from "./PersonalAccount/AccountMenu";
import PersonalAccountRouter from '../routes/PersonalAccountRouter';

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
                                <AccountMenu/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="frame pt-4 pt-xxl-5">
                                <PersonalAccountRouter isMobile={mob}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none">
                    <PersonalAccountRouter isMobile={mob}/>
                </div>
            </section>
        </main>
    );
}
