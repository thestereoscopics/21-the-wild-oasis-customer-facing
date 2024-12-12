import { Suspense } from "react";
import CabinsList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

//caches for time, which 3600 is 1 hour in seconds
export const revalidate = 3600;
export const metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinsList />
      </Suspense>
    </div>
  );
}
