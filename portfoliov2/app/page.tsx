import { ThemeChanger } from "./components/header/ThemeChanger";

export default function Home() {
  return (
    <main className="flex bg-base-100 min-h-screen flex-col items-center justify-between p-24">
      <ThemeChanger />

      <button className="btn btn-primary"> Button</button>
      <button className="btn btn-secondary"> Button</button>
      <button className="btn btn-accent"> Button</button>
      <button className="btn btn-neutral"> Button</button>
      <button className="btn btn-info"> Button</button>
      <button className="btn btn-success"> Button</button>
      <button className="btn btn-warning"> Button</button>
      <button className="btn btn-error"> Button</button>
    </main>
  );
}
