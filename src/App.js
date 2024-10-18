import logo from './logo.svg';
import './App.css';
import Film from "./Film";

function App() {
  return (
    <div className="App">
      <Film Source="dziki_robot.jpg" Title="Dziki Robot" Type="Przygotowe/Science Fiction/Dla dzieci" Tag="PREMIERA" Time="16:00 - 17:30"></Film>
        <Film Source="joker_2.jpg" Title="Joker 2" Type="Przygotowe/Marvel" Tag="PREMIERA" Time="14:00 - 12:30"></Film>
        <Film Source="kulej.jpg" Title="KULEJ" Type="Sporty Walki / Romans" Tag="SALA STUDYJNA" Time="12:00 - 14:30"></Film>
      <Film Source="przyjaciel_pingwin.jpg" Title="Mój Przyjaciel Pingwin" Type="Zwierzęta / Przyjaźń / Musical" Tag="STUDYJNY" Time="13:00 - 15:30"></Film>
        <Film Source="terrifier_3.jpg" Title="TERRIFIER 3" Type="Horror / Krew" Tag="PREMIERA" Time="19:00 - 21:30"></Film>
    </div>

  );
}

export default App;
