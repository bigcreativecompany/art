import ArtworkDisplay from '@/components/images/ArtworkDisplay';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900">
      <ArtworkDisplay
        src="https://selected-works.s3.ap-southeast-2.amazonaws.com/temp.jpg"
        alt="Temporary Image"
      />
    </div>
  );
}
