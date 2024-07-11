// import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch(error => {
  //       console.error("Erro ao iniciar video", error);
  //     });
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);

  return (
    <div className="videoplayer relative z-10">
      <div className={`w-full min-h-screen`}>
        <video
          style={{ maxWidth: "100%", maxHeight: "100%", margin: "0 auto" }}
          playsInline
          autoPlay
          loop
          muted
          src="/videotarot.mp4"
        // ref={videoEl}
        />
      </div>
    </div>
  );
}