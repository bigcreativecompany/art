import ImageWithControls from './components/ImageWithControls';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-[90vw] h-[85vh] relative">
        <ImageWithControls
          src="https://selected-works.s3.ap-southeast-2.amazonaws.com/temp.jpg"
          alt="Temporary Image"
        />
      </div>
    </div>
  );
}
