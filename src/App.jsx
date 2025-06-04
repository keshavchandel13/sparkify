import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager-loaded components
import TopBar from "./component/TopBar";
import Navbar from "./component/Navbar";
import Links from "./component/Links";
import ContactForm from "./component/ContactForm";
import QuickLinks from "./component/QuickLinks";
import Rights from "./component/Rights";
import ImageSlider from './component/ImageSlider';

// Lazy-loaded route components
const MidBody = lazy(() => import("./component/MidBody"));
const Services = lazy(() => import("./component/Services"));
const ContactHead = lazy(() => import("./component/ContactHead"));
const Map = lazy(() => import("./component/Map"));
const AboutHead = lazy(() => import("./component/AboutHead"));
const AboutUs = lazy(() => import("./component/AboutUs"));
const MissionAndVision = lazy(() => import("./component/MissionAndVision"));
const SparkifyScroll = lazy(() => import("./component/SparkifyScroll"));
const BestProducts = lazy(() => import("./component/BestProducts"));
const ShopnowHead = lazy(() => import("./component/ShopnowHead"));
const Shopnow = lazy(() => import("./component/Shopnow"));
const Tshirts = lazy(() => import("./component/Tshirts"));
const Mugs = lazy(() => import("./component/Mugs"));
const OtherProducts = lazy(() => import("./component/OtherProducts"));

import "./App.css";

function App() {
  const images = [
    "/bawaOnTop.png",
    "/mouseMock.png",
    "/pandaGirl.png",
    "/shrija.jpg",
    "/bikeTshirt.png",
    "/giftMug.jpg",
    "/waterBottle.webp",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Suspense fallback={<div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Loading...</div>}>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <ImageSlider images={images} interval={5000} />
                  <MidBody />
                  <SparkifyScroll />
                  <Services />
                  <BestProducts />
                </>
              }
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <>
                  <ContactHead />
                  <Services />
                  <Map />
                </>
              }
            />

            {/* About Us Page */}
            <Route
              path="/about-us"
              element={
                <>
                  <AboutHead />
                  <AboutUs />
                  <MissionAndVision />
                  <Services />
                  <Map />
                </>
              }
            />

            {/* Shop Page */}
            <Route
              path="/shop"
              element={
                <>
                  <ShopnowHead />
                  <Shopnow />
                  <Tshirts />
                  <Mugs />
                  <OtherProducts />
                  <BestProducts />
                </>
              }
            />
          </Routes>
        </Suspense>
        <Links />
        <ContactForm />
        <QuickLinks />
        <Rights />
      </BrowserRouter>
    </div>
  );
}

export default App;
