'use client'
import DefaultSchema from "../containers/defaultSchema/defaultSchema";
import MapperWindow from "../containers/mapperWindow/mapperWindow";
import UserSchema from "../containers/userSchema/userSchema";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main() {
  return (
    <DndProvider backend={HTML5Backend}>
    <main className="flex min-h-screen flex-col items-center">
      <section className="flex flex-row gap-4 w-screen p-5">
        <UserSchema />
        <MapperWindow />
        <DefaultSchema />
      </section>
    </main>
  </DndProvider>
  );
}
