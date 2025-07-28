export const VideoDisplay = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative overflow-hidden rounded-lg border border-neural shadow-neural">
        <video
          width="100%"
          height="auto"
          controls
          className="w-full h-auto"
          preload="metadata"
        >
          <source
            src="https://wqrcmdgmvzoqbvggqzho.supabase.co/storage/v1/object/public/lovable//AI_Video_Creation_Confirmation.mp4"
            type="video/mp4"
          />
          <div className="flex items-center justify-center h-48 bg-tech border border-neural rounded">
            <p className="text-muted-foreground">Video not supported in this browser</p>
          </div>
        </video>
      </div>
    </div>
  );
};