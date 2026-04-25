"use client"

import { useEffect, useState } from "react";
import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import Greetings from "@/components/Greetings";
import SettingsButton from "@/components/SettingsButton";

import { scenes } from "@/lib/scenes";
import useUserName from "@/hooks/useUserName";

export default function Home() {

  const { userName, saveUserName, mounted } = useUserName();

  return (
    <div>
      <BackgroundScene scene={scenes[0]} />
      <MainContainer>
        <SettingsButton name={userName} onSave={(name) => saveUserName(name)}/>
        {mounted && <Greetings name={userName || "Guest"} />}
      </MainContainer>
    </div>
  );
}