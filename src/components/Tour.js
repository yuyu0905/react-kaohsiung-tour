import { Outlet } from "react-router-dom";

function Tour () {
    return (
        <>
            <section className="container">
                <h2 className="fw-bold text-center">高雄旅遊景點</h2>
                <Outlet />
            </section>
        </>
    )
}

export default Tour;