import ArtworkDisplay from '@/components/images/ArtworkDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ArtworkDisplay
        src="https://selected-works.s3.ap-southeast-2.amazonaws.com/temp.jpg"
        alt="Temporary Image"
      />
    </main>
  );
}
