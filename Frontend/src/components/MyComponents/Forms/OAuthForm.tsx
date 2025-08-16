import { getUserSession } from "@/lib/session";

export default async function OAuthForm() {
  const user = await getUserSession();
  return <h1>{JSON.stringify(user)}</h1>;
}
