import { FormEvent, useState } from "react";
import { login } from "../../auth.lib.server";

type LogInSectionProps = {
  errorMessage?: string;
};

const LogInSection = ({ errorMessage }: LogInSectionProps) => {
  const handleLogIn = async (formData: FormData) => {
    "use server";
    await login(formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-6 md:p-24 p-10 h-full overflow-auto">
      <h1 className="text-3xl font-bold font-mono">Log In to the App Store</h1>
      <form action={handleLogIn} className="flex flex-col flex-wrap gap-4">
        <input
          type="text"
          placeholder="PassCode"
          name="passCode"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn rounded-lg" type="submit">
          Log In
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-500 text-sm font-bold">{errorMessage}</div>
      )}
    </div>
  );
};
export default LogInSection;
