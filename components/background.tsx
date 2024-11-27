export default function Background() {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover"
      autoPlay
      controls={false}
      loop
      muted
      playsInline
      poster="/IMG_7170.webp"
      preload="none"
    >
      <source src="/IMG_7170.webm" type="video/webm" />
    </video>
  );
}

