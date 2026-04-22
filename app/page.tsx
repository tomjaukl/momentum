"use client"

import { useState} from "react";
// My components
import BackgroundScene from "@/components/BackgroundScene";
import MainContainer from "@/components/MainContainer";
import Greetings from "@/components/Greetings";
import SettingsButton from "@/components/SettingsButton";
import SettingsWindow from "@/components/SettingsWindow";

import Image from "next/image";

import  {scenes}  from "@/lib/scenes";

// Settings
import NewUserr from "@/components/newUser";
import { SettingsLogic, defaultSettings} from "@/lib/settingsLogic";


// User
export default function Home() {

  const [userName, setUserName] = useState('');
  

  return (
    <div>
      <BackgroundScene scene={scenes[0]} />
      <MainContainer>
        <SettingsButton />
        <Greetings name={userName || "Guest"} />
        <h1>{defaultSettings.userName}</h1>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="submit"  />
      </MainContainer>
    </div>
  );
}
