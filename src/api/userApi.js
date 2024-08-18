export async function changePasswordApi({ currentPassword, newPassword }) {
  const response = await fetch("/api/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  if (!response.ok) {
    throw new Error("Failed to change password");
  }

  return response.json();
}
