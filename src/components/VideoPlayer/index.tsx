// import { useEffect, useRef } from "react";

export default function VideoPlayerRetangular() {

  return (
    <div className="w-full videoplayer relative z-10">
      <div className={``}>
        <video
          style={{ width: "100%", height: "100%", margin: "0 auto" }}
          playsInline
          autoPlay
          loop
          muted
          src="/video01.mp4"
        />
      </div>
    </div>
  );
}