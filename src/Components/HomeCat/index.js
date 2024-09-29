import React from "react";
import HomeItems from "../HomeItems";

const HomeCat = () => {
    return (
        <>
            <section>
                <div className="homeCat">
                    <div className="container">
                        <h3 className="mb-4 hd">Featured Categories</h3>
                        <HomeItems/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeCat;