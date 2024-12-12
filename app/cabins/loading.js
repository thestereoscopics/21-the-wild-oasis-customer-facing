import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className='grid justify-center items-center'>
      <Spinner />
      <p className='tex-xl text-primary-200'>Loading Cabin(s)...</p>
    </div>
  );
}
