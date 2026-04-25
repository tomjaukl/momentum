import { useState } from "react";
export default function NameSettings({name, onSave} : {name: string, onSave: (name: string) => void}) {
    const [tempName, setTempName] = useState("");

    return (
        <div className="flex bg-lime-200/50">
            <input type="text" 
            placeholder="Enter your nickname"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            className="p-1.5 border-2"
            />
            <input type="submit" value="Save" onClick={() => onSave(tempName)} 
            className="cursor-pointer bg-green-400 w-full border-t-2 border-r-2 border-b-2"/>
        </div>
    )
}