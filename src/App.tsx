import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar'
import {VGBox} from './VGBox'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop: "10px", marginBottom:"10px", fontSize:"x-large", width: "100%", fontWeight:"bolder", textAlign: "center"}}>
        Game projects
      </div>
      <hr></hr>
      <VGBox
        title={"Prometheus Unbound"}
        picture={"./pmunbound.png"}
        tagline={"Yugo BAFTA Award Longlist, CS354S 2D Capstone Project, Released on Steam"}
        summary={"Prometheus Unbound is a 2D stealth platformer with graceful speed and machine-precision movement. Play as the monstrous machine-made-mortal, Anala. Maneuver through a neo-gothic sprawl and transform into a volatile, electric form to hunt enemies."}
        overview={"I led integration efforts between art and game mechanics and implemented a versatile in-game cutscene system. I additionally designed stages, wrote dialogue, designed tutorials, and assisted the player and enemy leads in development."}
        itchlink={"https://duplicitousgames.itch.io/prometheus-unbound"}
        steamlink={"https://store.steampowered.com/app/2846110/Prometheus_Unbound/"}
        gitlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/PrometheusUnbound"}
        youtubelink={"https://www.youtube.com/watch?v=mnG6PLblVfY&list=PLty4Du1lHL7twtEIDfAXUOOJmStRqylTS&index=1&t=1s&ab_channel=SudokuCrew"}
        />
        
        <VGBox
        title={"Pig Out"}
        picture={"./PigOutCover.png"}
        tagline={"2024 Texas Game Jam Submission"}
        summary={"Collect as much food as possible and defeat all the farmers protecting precious oats in this 2 player cooperative game. One player controls Pigman and another his internal organs to ensure he gets enough oxygen and his food gets disposed of properly."}
        overview={"I designed the inside player's gameplay loop and game play mechanics. I created all the organs and also provided the game objects that linked the inside and outside worlds. The key tools I used were C# and Unity."}
        itchlink={"https://smileitcher.itch.io/pig-out"}
        steamlink={""}
        gitlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/Pigout"}
        youtubelink={""}
        />
        

        <VGBox 
          title={"John Chimp 2: Bull Rush"}
          picture={"./JC2V2.png"}
          tagline={"2024 Chillenium Game Jam"}
          summary={"John Chimp is an NFT savant in the midst of the great Gamestock stock gamma squeeze of the early 2020s. After the stock started dipping, he knew he had to buy up all the stocks to punish the shorting corporate bears. Shoot elastic ropes and bullets to propel yourself upwards in this endless, innovative, parkour-shooter."}
          overview={"I created the endless terrain generation mechanic and designed all the guns and their behaviors. The key technologies I used in this project were C# and Unity."}
          gitlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/Minecraft"}
          itchlink={"https://wild-mortimer.itch.io/planet-of-the-chokes"}
          steamlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/JohnChimp2"}
          youtubelink={"https://www.youtube.com/playlist?list=PLty4Du1lHL7voyRPzFNimd8iDsWeTiCbo"}
        />

        <VGBox 
          title={"Planet of the Chokes"}
          picture={"./PlanetOfTheChokesPic.png"}
          tagline={"2023 Chillenium Game Jam 2nd Place Programming Award"}
          summary={"Planet of the Chokes is a Tower-Defense-like game in which you attempt to ward off aliens attacking the earth from all directions. The twist is that placing down defensive towers causes global warming to worsen, which will increase the likelihood of farms burning down and also possibly lead to humanity's extinction before the aliens kill you."}
          overview={"I designed the class structure used by all entities and the behavior of many of the entities in the game (including missile movement, tower behavior, etc.). I also implemented intuitive, user-friendly tower placement and designed the camera and planet controls. The key technologies I used in this project were C# and Unity."}
          gitlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/Planet%20of%20the%20Chokes"}
          itchlink={"https://wild-mortimer.itch.io/planet-of-the-chokes"}
          steamlink={""}
          youtubelink={"https://www.youtube.com/watch?v=R6gkWpl_m5g&list=PLty4Du1lHL7toA78ezeR1lHkEV6KjsF5n&ab_channel=ArnoVenter"}
        />

        <VGBox 
          title={"Procedurally Generated Minecraft"}
          picture={"./MCPicFinal.png"}
          tagline={"CS 354H Project using WebGL"}
          summary={"Developed a Minecraft-inspired game with procedural terrain and texture generation. Users can travel as far as they want in any direction and there will always be more land from one of 3 unique biomes to greet them. Modifications they make to the terrain will also persist."}
          overview={"The endless world and persistent changes were implemented in a memory and processing constrained web environment. Each texture is generated in real time so no 2 textures look exactly the same, and many incorporate \"live\" textures. The key technologies I used were openGL and TypeScript."}
          gitlink={"https://github.com/SmileCoder1/GameDevApp/tree/main/Minecraft"}
          itchlink={""}
          steamlink={""}
          youtubelink={"https://youtu.be/JkHrvQCiPa4?si=kGUPGMPC6zRirTT3"}
        />

        <object type="application/pdf" style={{margin:"10px", height: "700px", width: "90%"}} data="./ArnoldVenterResume2025.pdf"></object>
        
    </div>
  );
}

export default App;
