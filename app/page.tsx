import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import Tasks from "@/components/Tasks";
import Quote from "@/components/Quote";
import GreetingsSection from "@/components/GreetingsSection";

import { scenes } from "@/lib/scenes";

export default function Home() {
  return (
    <div>
      <BackgroundScene scene={scenes[0]} />
      <MainContainer> 
        <GreetingsSection />
        <Tasks />
        <Quote />
      </MainContainer>
    </div>
  );
}