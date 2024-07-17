// import { useEffect, useRef } from "react";

export default function VideoPlayer() {

  return (
    <div className="w-full videoplayer relative z-10">
      <div className={`w-full`}>
        <video
          style={{ maxWidth: "100%", maxHeight: "100%", margin: "0 auto" }}
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