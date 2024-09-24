import Style from "./Home.module.scss";

export default function Home() {
  return (
    <main className={Style.Home}>
      <div className={Style.Home_Main}>
        <div className={Style.Home_Wrap}>
          <section className={Style.Home_Title}>
            <h3>Home</h3>
          </section>
        </div>
      </div>
    </main>
  );
}
