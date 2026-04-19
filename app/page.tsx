import Image from "next/image";
import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import { scenes } from "@/lib/scenes";


export default function Home() {
  return (
    <div>
      <BackgroundScene scene={scenes[1]} />
      <MainContainer>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </MainContainer>
    </div>
  );
}
