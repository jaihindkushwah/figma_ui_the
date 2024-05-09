import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AskQuestions from "../components/AskQuestions";
import HeroSection from "../components/HeroSection";

const Buttons = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className={
          "text-black sm:py-6 py-4 sm:px-8 px-6  bg-white hover:bg-[#F1F1F1]"
        }
        title="Get Projects"
        onClick={() => {
          navigate("/register");
        }}
      />
      <Button
        className={
          "bg-black text-white sm:py-6 py-4 sm:px-8 px-6  hover:bg-[#454444] font-semibold"
        }
        title="Onboard Talents"
      />
    </>
  );
};
function HomePage() {
  return (
    <>
      <Header
        className={
          "sm:m-5 m-1 rounded-full border border-slate-300 w-[96%]  sm:pl-12 pl-4 relative"
        }
        ButtonComponent={<Buttons />}
      />
      <div className="sm:m-10 m-3 flex flex-col">
        <HeroSection />
        <AskQuestions />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
