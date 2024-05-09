import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AskQuestions from "../components/AskQuestions";
import GirlImage from "../assets/girlImg.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Sparkle from "../assets/sparkle.svg";
import ArrowVector from "../assets/ArrowVector.svg";

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
        <div className="mt-0 mx-8 flex   items-center flex-col">
          <div className="flex pt-10 flex-col items-center gap-3 justify-center max-w-[640px]">
            <p className="text-3xl text-green-600 text-center tracking-wider font-medium shadows-into-light-regular">
              Success stories
            </p>
            <p className="text-6xl font-semibold text-center gap-2">
              Every success journey we've encountered.
            </p>
          </div>
          <div className="flex justify-center items-center px-10 gap-20">
            <div className="flex-1 pl-10 flex justify-center items-center relative">
              <div className="h-[660px] w-[520px] overflow-hidden rounded-[50px]">
                <img
                  src={GirlImage}
                  alt="GirlImage"
                  className="object-cover h-full rounded-[50px] w-full transform translate-y-36"
                />
              </div>
              <div className="absolute bottom-[-9%] right-[-9%] p-8 h-[240px] w-[290px] flex flex-col gap-6 rounded-[36px] border border-[#3D3D3D] bg-[#002E18]">
                <p className="mt-2">
                  <span className="text-5xl text-white font-bold">$0.5 </span>{" "}
                  <span className="text-[#A6A3A0] text-2xl uppercase">
                    {" "}
                    million
                  </span>
                </p>
                <p className="text-[#cccccc] text-start font-medium text-[18px]">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
              <div className="absolute top-[36%] shadow shadow-[#d1cfcf]  left-[-12%]  h-[235px] w-[268px] flex flex-col rounded-[30px] bg-white">
                <p className="absolute mt-[-26px] ml-[-18px] font-bold">
                  <img src={Sparkle} alt="Sparkle" />
                </p>
                <div className="p-6 pb-10 flex flex-col gap-2 ">
                  <span className="font-[800] text-6xl mt-2 font-[switzer]">
                    40%
                  </span>
                  <p className="text-[#828282] text-start font-medium text-[18px]">
                    Achieved reduction in project execution time by optimising
                    team availability
                  </p>
                </div>
              </div>
              <div className="absolute bottom-10 left-[-4px] shadow shadow-[#d1cfcf]   p-3 px-5  flex items-center rounded-full gap-3 bg-white">
                <span className="rounded-full flex justify-center items-center bg-[#e9f4ea]   h-12 w-12">
                  <img
                    width={"25px"}
                    height={"25px"}
                    src={ArrowVector}
                    alt="ArrowVector"
                  />
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-[22px]">10 days</span>
                  <span className="text-[#828282] text-[16px]">
                    Staff Deployment
                  </span>
                </span>
              </div>
            </div>
            <div className="flex-1 flex h-full flex-col justify-between mt-28  p-10 pb-0">
              <p className="text-5xl  text-start font-semibold ">
                Enhance fortune 50 company’s insights teams research
                capabilities
                <p className="py-10 flex gap-3 ">
                  <span className="py-2 px-2 bg-green-600 rounded-full"></span>
                  <span className="py-2 px-2 bg-slate-400 rounded-full"></span>
                  <span className="py-2 px-2 bg-slate-400 rounded-full"></span>
                </p>
              </p>
              <Button
                title={"Explore More"}
                className={
                  "text-white w-[240px] mt-20 font-semibold py-7 bg-black hover:bg-[#454444]"
                }
                icon={<ArrowRightOutlined className="ml-5" />}
              />
            </div>
          </div>
        </div>
        <AskQuestions />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
