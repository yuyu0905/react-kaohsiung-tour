import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";


function TourList () {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('tourlist')));
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if(!data) {
            setLoading(true);

            fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
            .then(res => res.json())
            .then(result => {
                let newData = result.data.XML_Head.Infos.Info;
                localStorage.setItem('tourlist', JSON.stringify(newData));
                setData(newData);
                setLoading(false);
            });
        }
    }, []);
    
    return (
        <>
            <section className="container">
                <ul className="tour-list">
                {
                    loading ? <Loading/> : !!data &&
                        data.map((item, i) => {
                            return (<li key={i}>
                                <Link to={`/tour/${item.Id}`}>
                                    <img src={item.Picture1} alt={item.Name} />
                                    <h3 className="text-center">{item.Name}</h3>
                                </Link>
                            </li>)
                    })
                }
                </ul>
                
            </section>
        </>
    )
}

export default TourList;