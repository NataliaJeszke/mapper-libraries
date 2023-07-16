import DefaultSchema from "../containers/defaultSchema/defaultSchema";
import MapperWindow from "../containers/mapperWindow/mapperWindow";
import UserSchema from "../containers/userSchema/userSchema";
import Work from "../containers/handleUserFiles/handleUserFile";

export default async function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Nowa aplikacja Mapper</h1>
      <section className="flex flex-row gap-4 w-screen p-5">
        <UserSchema />
        <MapperWindow />
        <DefaultSchema />
      </section>
    </main>
  );
}
