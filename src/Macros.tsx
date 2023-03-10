import MainContainer from "./DefaultContainer";
import AboutYou from "./Components/Macros/AboutYou";
import MacroResults from "./Components/Macros/MacroResults";

const Macros= () => {
  return (
    <MainContainer>
      <AboutYou />
      <MacroResults />
    </MainContainer>
  );
}

export default Macros;