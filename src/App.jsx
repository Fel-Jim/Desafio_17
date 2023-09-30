import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="PrincipalBox ">
        <Header TitleHeader="Adopta un perrito" />
        <div className="CardBox">
          <MyCard
            ImageP="https://www.nationalgeographic.com.es/medio/2023/05/30/pastor-belga-1_78c40c60_230530100802_800x800.jpg"
            NameP="Perro policia"
            DescriptionP="Era de un policia"
            ColorBadge="secondary"
            TextBadge="Perro 1"
          />
          <MyCard
            ImageP="https://sm.ign.com/ign_latam/screenshot/default/bee-boo_rr8p.png"
            NameP="Perro de MajinBoo"
            DescriptionP="Un perro comun y corriente pero de MajinBoo, Cuidado"
            ColorBadge="success"
            TextBadge="Perro 2"
          />
          <MyCard
            ImageP="https://www.geekmi.news/__export/1655585132248/sites/debate/img/2022/06/18/bond.jpg_423682103.jpg"
            NameP="Perro espia"
            DescriptionP="Perro que puede leer la mente, pero si no lees la de el no sabras que vio por que solo ladra y esta viejo"
            ColorBadge="danger"
            TextBadge="Perro 3"
          />
          <MyCard
            ImageP="https://www.seresmitologicos.net/wp-content/uploads/2011/05/cancerbero.jpg"
            NameP="Cancerbero"
            DescriptionP="Era de hades pero lo puedes adoptar, cuidara bien de la casa pero es grande y puede comer mucho"
            ColorBadge="info"
            TextBadge="Perro 4"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
