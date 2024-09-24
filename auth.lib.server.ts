import { cookies } from "next/headers";

export const login = async (formData: FormData) => {
  const passCode = formData.get("passCode");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ passCode: passCode }),
  });

  const data = await response.json();
  const expires = new Date(Date.now() + 60 * 60 * 1000); // one hour expiration time
  cookies().set("session", JSON.stringify(data), { expires, httpOnly: true });
  return data;
};

export const getSession = () => {
  const session = cookies().get("session");

  if (!session) {
    return null;
  }

  const sessionObj = JSON.parse(session.value) as {
    message: string;
    successful: boolean;
  };

  return {
    message: sessionObj?.message || "",
    successful: sessionObj?.successful,
  };
};
