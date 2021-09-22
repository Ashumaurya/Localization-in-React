import { T } from "@tolgee/react";
import { Dropdown } from "./dropdown";

function App() {
  return (
    <div className="root bg-black h-full text-white">
      <div className="App container mx-auto">
        {/* *************** Header **************** */}
        <div className="header flex items-center py-4 w-full">
          <div className="header flex items-center flex-grow">
            <div className="width-1 h-5 w-3 bg-white"></div>
            <div className="width-1 h-5 w-1 bg-white mx-1"></div>
            <div className="width-1 h-5 w-2 bg-white mr-4"></div>
            <div className="logo text-2xl font-black mx-4 ">Localization</div>
          </div>
          <div className="flex justify-end">
            <Dropdown color={"white"} />
          </div>
        </div>
        {/* *********************** Hero Area ******************* */}
        <div className="hero-area font-bold lg:text-8xl md:text-6xl md:my-40  my-20 2xl:w-2/3 xl:w-4/5 md:w-2/3 text-4xl">
          <p>
            <T>
              This is a demo project to showcase how to achive localization in
              react using Tolgee
            </T>
          </p>
        </div>
        {/* **************************** About Section ********************* */}
        <div className="md:py-40 py-20">
          <div className="section-title text-2xl font-black">
            <T>About</T>
          </div>

          <div className="about-description py-20 text-2xl md:w-2/3 ">
            <p>
              <T>
                This project is to explain the viewers how localization can be
                easily achived in React using Tolgee. And how important it is
                for buisnesses
              </T>
            </p>
            <p className="my-10 text-blue-600 cursor-pointer">
              <a href="https://blog.theashishmaurya.me/how-to-localize-your-react-app-using-tolgee-toolkit">
                <T>Read full blog</T>
              </a>
            </p>
          </div>
        </div>
        {/* ****************************Contact**************************** */}
        <div className="md:pb-40 pb-20">
          <div className="text-2xl font-black">
            <T> Contact</T>
          </div>
          <div className="flex my-10">
            <div className="mr-6 ">
              <a href="https://instagram.com/theashishmaurya">
                <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
              </a>
            </div>
            <div className="mr-6 ">
              <a href="https://twitter.com/theysaymaurya">
                <img src="https://img.icons8.com/fluency/48/000000/twitter.png" />
              </a>
            </div>
            <div className="mr-6 ">
              <a href="https://linkedin.com/in/theashishmaurya">
                <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
              </a>
            </div>
            <div className="mr-6 ">
              <a href="https://github.com/ashumaurya">
                <img src="https://img.icons8.com/color-glass/48/000000/github.png" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
