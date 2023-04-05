import "./Style/index.scss";
import Kanto from '../../Components/Kanto';
import Johto from '../../Components/Johto';
import Hoenn from '../../Components/Hoenn';
import Sinnoh from '../../Components/Sinnoh';
import Unova from '../../Components/Unova';
import Kalos from '../../Components/Kalos';

const Home = () => {
  return (
    <div className="home">
      <header>
      <section>
        <div className="home-container">
          <div className="home-init">
            <div className="text">
              <h1>Pokedex</h1>
            </div>
          </div>
        </div>
        </section>
        <nav>
          <ul>
            <li>
              <a href='#Kanto'>Kanto</a>
            </li>
            <li>
              <a href='#Johto'>Johto</a>
            </li>
            <li>
              <a href='#Hoenn'>Hoenn</a>
            </li>
            <li>
              <a href='#Sinnoh'>Sinnoh</a>
            </li>
            <li>
              <a href='#Unova'>Unova</a>
            </li>
            <li>
              <a href='#Kalos'>Kalos</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="Kanto">
          <h1> Kanto </h1>
          <div className="container">
            <Kanto/>
          </div>
        </section>

        <section id="Johto">
          <h1> Johto </h1>
          <article>
            <div className="container">
              <Johto/>
            </div>
          </article>
        </section>

        <section id="Hoenn">
          <h1> Hoenn </h1>
          <article>
            <div className="container">
              <Hoenn/>
            </div>
          </article>
        </section>

        <section id="Sinnoh">
          <h1> Sinnoh </h1>
          <article>
            <div className="container">
              <Sinnoh/>
            </div>
          </article>
        </section>

        <section id="Unova">
          <h1> Unova </h1>
          <article>
            <div className="container">
              <Unova/>
            </div>
          </article>
        </section>

        <section id="Kalos">
          <h1> Kalos </h1>
          <article>
          <div className="container">
            <Kalos/>
            </div>
          </article>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
