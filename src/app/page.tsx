import ArtworkDisplay from '@/components/images/ArtworkDisplay';

export default function Home() {
  return (
    <main>
      <ArtworkDisplay
        src="https://selected-works.s3.ap-southeast-2.amazonaws.com/temp.jpg"
        alt="Temporary Image"
        priority
      />
    </main>
  );
}
