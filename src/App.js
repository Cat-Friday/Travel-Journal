import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data.js";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {data.map((elem) => {
        return (
          <Card
            key={elem.id}
            title={elem.title}
            location={elem.location}
            gmap={elem.googleMapsUrl}
            sdate={elem.startDate}
            edate={elem.endDate}
            desc={elem.description}
            img={elem.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
// title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description:
//       "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
