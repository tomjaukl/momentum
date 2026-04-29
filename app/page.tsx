import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import FetchedInfo from "@/components/FetchedInfo";
import { scenes } from "@/lib/scenes";
import Pomodoro from "@/components/Pomodoro";

export default function Home() {
  return (
    <div className="">
      <BackgroundScene scene={scenes[0]} />
      <MainContainer audioPath={scenes[0].audioSrc ?? ""}>
        <Pomodoro />
        <FetchedInfo/>
      </MainContainer>
    </div>
  );
}