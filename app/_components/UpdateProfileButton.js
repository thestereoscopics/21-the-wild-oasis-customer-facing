"use client"; // has to be a client component for useFormStatus hook. Hook has to be in a child component of the form.
import { useFormStatus } from "react-dom";

export default function UpdateProfileButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
      disabled={pending}
    >
      {pending ? "Updating..." : "Update profile"}
    </button>
  );
}
