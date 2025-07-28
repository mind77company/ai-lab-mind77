import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const VideoIntro = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoEnd = () => {
    // Smooth transition to login after video ends
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-neural animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-energy border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onLoadedData={handleVideoLoad}
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source
          src="https://wqrcmdgmvzoqbvggqzho.supabase.co/storage/v1/object/public/lovable//AI_Video_Creation_Confirmation.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};