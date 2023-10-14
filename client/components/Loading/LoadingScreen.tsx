import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="absolute bg-white z-50 flex items-center justify-center top-0 left-0 w-full min-h-screen overflow-hidden">
      <div className="relative w-[100px] aspect-square">
        <Image
          fill
          src="/assets/logo.png"
          alt="Logo"
          className="object-contain"
          priority={true}
          sizes="(max-width: 380px), 50vw, 100vw"
        />
      </div>
    </div>
  );
}
