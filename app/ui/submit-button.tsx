"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex w-full py-5 justify-center ">
      <button
        disabled={pending}
        type="submit"
        className="w-full sm:w-[50%] rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Soumettre
      </button>
    </div>
  );
}
