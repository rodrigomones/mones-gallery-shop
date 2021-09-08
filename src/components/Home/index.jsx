import { useEffect, useRef, useState } from "react";
import "./style.css";
import gsap from 'gsap';

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  let app = useRef(null)
  let images = useRef(null)
  
  useEffect(() => {
    gsap.to(".contenedor", {duration: 0, css: {visibility: 'visible'} });
    gsap.from(".grid", {opacity: 0, y: 120, duration: 1.5});
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contenedor" ref={ el => app = el}>
      <div className="grid" ref={ el => images = el}>
        <img
          className="linea"
          src="../images/linea.svg"
          alt=""
          style={{ margin: 120, zIndex: 99 }}
        />
        <div className="grid__item pos-1">
          <div
            className="grid__item-img"
            style={{
              backgroundImage: `url("https://monesrodrigo.com/img/treintaytres/305.jpg")`,
              transform: `translateY(-${offsetY * 0.3}px)`,
            }}
          ></div>
        </div>
        <div className="grid__item pos-2">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/ciento/000031530002.jpg)",
              transform: `translateY(${offsetY * 0.2}px)`,
            }}
          ></div>
        </div>
        <div className="grid__item pos-3">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/7.jpg)",
            }}
          ></div>
        </div>
        {/* <div className="grid__item pos-4">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/12.jpg)",
            }}
          ></div>
        </div> */}
        {/* <div className="grid__item pos-5">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/13.jpg)",
              transform: `translateY(-${offsetY * 0.7}px)`,
            }}
          ></div>
        </div> */}
        <div className="grid__item pos-6">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/25.jpg)",
              transform: `translateY(-${offsetY * 0.9}px)`,
            }}
          ></div>
        </div>
        {/* <div className="grid__item pos-7">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/26.jpg)",
              transform: `translateY(-${offsetY * 0.9}px)`,
            }}
          ></div>
        </div> */}
        {/* <div className="grid__item pos-8">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treinta/27.jpg)",
              transform: `translateY(-${offsetY * 0.6}px)`,
            }}
          ></div>
        </div> */}
        <div className="grid__item pos-9">
          <div
            className="grid__item-img"
            style={{
              backgroundImage:
                "url(https://monesrodrigo.com/img/treintaytres/300.jpg)",
              transform: `translateY(-${offsetY * 0.4}px)`,
            }}
          ></div>
        </div>
        <div className="grid__item pos-10">
          <div
            className="grid__item-img"
            style={{
              backgroundImage: "url(../images/flecha.svg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
