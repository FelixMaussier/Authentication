import React from "react";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <>
      <h1>You are logged in</h1>;
    </>
  );
}
