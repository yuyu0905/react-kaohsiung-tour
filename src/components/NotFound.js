import { Link } from "react-router-dom";

function NotFound() {
    return (
      <section className="container text-center">
        <h2 className="fw-bold">您的網址出錯囉~</h2>
          <Link to="/">回到首頁</Link>
      </section>
    );
  }

  export default NotFound;