import React, {useState, useEffect} from "react";
import PersonalAccountRouter from '../routes/PersonalAccountRouter';

export default function PersonalAccount() {
    const [mob, setMob] = useState(window.matchMedia("(max-width: 991px)").matches);

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
                <PersonalAccountRouter isMobile={mob}/>
            </section>
        </main>
    )
}
