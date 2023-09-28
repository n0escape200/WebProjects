import { useState } from "react";
import "./Result.css";
import Navbar from "../../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendar,
  faHandshake,
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Result = () => {
  const photos = [
    "https://wallpapers.com/images/hd/cool-car-chevrolet-corvette-cipxrabgpci91ils.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2019-dodge-challenger-srt-hellcat-redeye-comparison-104-1581425446.jpg?crop=0.651xw:0.489xh;0.0928xw,0.333xh&resize=1200:*",
    "https://img.classistatic.de/api/v1/mo-prod/images/31/31ba9464-7876-4b36-bb96-188602376470?rule=mo-640.jpg",
    "https://i.redd.it/3nrnq2h1tihz.jpg",
    "https://assets.whichcar.com.au/image/upload/s--SU6HrSNk--/c_fill,f_auto,q_auto:good/t_p_16x9/v1/archive/whichcar/2019/08/12/-1/Dodge-Challenger-Demon-right-hand-drive-Australia-review.jpg",
    "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format",
  ];
  const imageHandle = (event) => {
    setPhoto(event.target.className);
  };
  const [photo, setPhoto] = useState(0);
  return (
    <div className="resultContainer">
      <Navbar />
      <div className="mainContent">
        <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
          <div className="left">
            <div className="photoGallery">
              <div className="mainPhoto">
                <FontAwesomeIcon
                  id="arrows"
                  size="2xl"
                  icon={faArrowLeft}
                  onClick={() => {
                    photo > 0 && setPhoto(photo - 1);
                  }}
                />
                <img id="centerPhoto" src={photos[photo]} alt="" />
                <FontAwesomeIcon
                  id="arrows"
                  size="2xl"
                  icon={faArrowRight}
                  onClick={() => {
                    photo < photos.length - 1 && setPhoto(photo + 1);
                  }}
                />
              </div>
              <div className="photoArray">
                {photos.map((value, index) => {
                  return (
                    <img
                      id="subImage"
                      className={index}
                      key={index}
                      src={value}
                      onClick={imageHandle}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="shortDetails">
              <div style={{ fontSize: 32 }}>BMW Seria 3</div>
              <div style={{ marginTop: 10 }}>
                2018 • 74 312 km • Diesel • Sedan
              </div>
              <div
                style={{
                  color: "#ff0000",
                  fontSize: 40,
                  fontWeigh: 600,
                  textShadow: "2px 2px 3px #FF0000",
                }}
              >
                20 540 EUR
              </div>
            </div>
            <div className="dealerInfo">
              <div id="dealerName">Maricia Vericu</div>
              <div id="dealerType">
                <FontAwesomeIcon icon={faHandshake} />
                Private dealer
              </div>
              <div id="dealerHistory">
                <FontAwesomeIcon icon={faCalendar} />
                Selling sicen 120 B.C
              </div>
              <div id="msg">
                <FontAwesomeIcon icon={faMessage} color="white" />
                Send a message
              </div>
              <div id="phone">
                <FontAwesomeIcon icon={faPhone} color="#0593ff" />
                See phone number
              </div>
              <div id="location">
                <FontAwesomeIcon icon={faLocationDot} />
                Romania,Sucava,Radauti,Petre Liciu 41
              </div>
              <div id="other">
                <FontAwesomeIcon icon={faHandshake} />
                See other 69420 deals from this person
              </div>
            </div>
          </div>
        </div>
        <div className="under">
          <div style={{ fontSize: 27 }}>Description</div>
          <p
            style={{ fontSize: 17, border: "0.01em solid black", padding: 15 }}
          >
            Vestibulum ut tempor lorem. Proin tristique augue quis sapien
            efficitur, ac placerat libero tristique. Duis tincidunt aliquet
            risus nec suscipit. Aliquam sit amet quam congue, bibendum ante et,
            eleifend ligula. Donec at iaculis dolor, ut pretium mi. Etiam porta
            libero ligula, venenatis dignissim neque blandit sit amet. Etiam non
            magna dapibus, posuere leo id, vestibulum nisl. Nulla nisl elit,
            rutrum ut purus non, gravida imperdiet enim. Mauris accumsan
            sollicitudin enim a mattis. Proin aliquet vestibulum nulla, nec
            dictum mauris porta consequat. Duis arcu nulla, dapibus vel aliquam
            et, sollicitudin nec odio. Proin sit amet augue feugiat, malesuada
            erat sit amet, elementum nulla. Sed rutrum vehicula erat, vitae
            fermentum ante iaculis in. Mauris risus ex, sagittis sit amet elit
            et, porttitor vestibulum mi. Nam eget quam mattis, condimentum augue
            eget, ornare ante. Fusce non dictum arcu. Sed rhoncus quis nisl id
            ornare. Fusce sit amet quam nec ante rhoncus sollicitudin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
