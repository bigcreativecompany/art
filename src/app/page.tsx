import ImageWithControls from './components/ImageWithControls';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ImageWithControls
        src="https://selected-works.s3.ap-southeast-2.amazonaws.com/temp.jpg"
        alt="Temporary Image"
      />
    </main>
  );
}
