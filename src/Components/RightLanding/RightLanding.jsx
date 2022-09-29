import React from "react";
import "./RightLanding.css";

const RightLanding = () => {
  return (
    <div className="right-landing">
      <div className="circle-border"></div>
      <div className="circle-border"></div>
      <div className="nav">
        <Navbar />
        <div className="chat-bot">
          <div className="circle">&#8593;</div>
          <img src={Chat} alt="" />
        </div>
      </div>
      <div className="right-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/c219/f241/34571ab7ef6c1f17c68187e41fb189e2?Expires=1665360000&Signature=Apk5Bcj7UbwaF6fLASoLKl1dCXSrzczYycU94ObaVmbpnohNjZ0eNGZPIJCj6LwIBe3qFi-1DeHsp6I8RN0eCLi~iOKHDTUTuw0pwYfLzJKolgN1lVAeWHwNH8y5l2vJIetbFKO2538RAYX6r0IMIX-UUeC9Clc0nM3XtfUs0PU3Hyl~VQhsSpP2Qkwi-EeVcUgnaKvr6YjjfMyfVDvXblr0smJqss2fhNg8rwydYe60NrIsj7EgMJMLNoreBXD5W4cyyEeU4~288~6~1sxBvIZGWl70bopuqIlAukfyTZt8uMltRZSM2tatJl~7vB84JFr1pnA0pXiSALDEBUxFTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightLanding;
