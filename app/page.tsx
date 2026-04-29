import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import FetchedInfo from "@/components/FetchedInfo";
import { scenes } from "@/lib/scenes";
import useTasks from "@/hooks/useTasks";

export default function Home() {
  return (
    <div className="">
      <BackgroundScene scene={scenes[0]} />
      <MainContainer>
        <FetchedInfo/>
      </MainContainer>
    </div>
  );
}