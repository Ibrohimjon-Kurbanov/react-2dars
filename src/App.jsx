import AnimalGallery from "./components/AnimalGallery";
import ColorList from "./components/ColorList";
import FamousCities from "./components/FamousCities";
import GreetingCard from "./components/GreetingCard";
import HelloWorld from "./components/HelloWorld";
import SeasonColors from "./components/SeasonColors";
import SimpleMenu from "./components/SimpleMenu";
import WeekDays from "./components/WeekDays";
function App() {
  return (
    <div className="w-full mx-auto max-w-[1100px] my-[50px] flex flex-col gap-y-[30px]">
      <HelloWorld />
      <AnimalGallery />
      <ColorList />
      <WeekDays />
      <GreetingCard />
      <FamousCities></FamousCities>
      <SeasonColors></SeasonColors>
      <SimpleMenu></SimpleMenu>
    </div>
  );
}
export default App;
