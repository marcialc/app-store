export const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.reload();
  }
};
