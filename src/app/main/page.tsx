import DefaultSchema from "../containers/defaultSchema/defaultSchema";
import MapperWindow from "../containers/mapperWindow/mapperWindow";
import UserSchema from "../containers/userSchema/userSchema";
import Work from "../containers/handleUserFile/handleUserFile";

export default async function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>Mapp your schemas and create JSON file</h2>
      <section className="flex flex-row gap-4 w-screen p-5">
        <UserSchema />
        <MapperWindow />
        <DefaultSchema />
      </section>
    </main>
  );
}
