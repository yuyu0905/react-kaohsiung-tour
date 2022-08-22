import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Loading from "./Loading";



function TourDetail () {
    let navigate = useNavigate();
    const { tourId } = useParams();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('tourlist')));
    const [tour, setTour] = useState();
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
                setTour(newData.find(item=>item.Id === tourId));
                setLoading(false);
            });
        } else if(data.find(item=>item.Id === tourId)) {
            setTour(data.find(item=>item.Id === tourId));
        } else {
            navigate('/notfund');
        }
    }, [ tourId ]);
    
    return (
        <>
            <section className="container">
            {
                loading ? <Loading/> : !!tour &&
                    (<>
                        <div className="card">
                            <h3 className="text-center">{tour.Name}</h3>
                            <img src={tour.Picture1} alt={tour.Name} />
                            <p>{tour.Description}</p>
                            <p>地址: {tour.Add}</p>
                        </div>
                    </>)
            }
                
            </section>
        </>
    )
}

export default TourDetail;