import VER from "../../assets/drivers/VER.avif"
import NOR from "../../assets/drivers/NOR.avif"
import LEC from "../../assets/drivers/LEC.avif"
import SAI from "../../assets/drivers/SAI.avif"
import PIA from "../../assets/drivers/PIA.avif"
import PER from "../../assets/drivers/PER.avif"
import RUS from "../../assets/drivers/RUS.avif"
import HAM from "../../assets/drivers/HAM.avif"
import ALO from "../../assets/drivers/ALO.avif"
import STR from "../../assets/drivers/STR.avif"
import HUL from "../../assets/drivers/HUL.avif"
import TSU from "../../assets/drivers/TSU.avif"
import RIC from "../../assets/drivers/RIC.avif"
import BEA from "../../assets/drivers/BEA.avif"
import GAS from "../../assets/drivers/GAS.avif"
import MAG from "../../assets/drivers/MAG.avif"
import ALB from "../../assets/drivers/ALB.avif"
import OCO from "../../assets/drivers/OCO.avif"
import ZHO from "../../assets/drivers/ZHO.avif"
import SAR from "../../assets/drivers/SAR.avif"
import BOT from "../../assets/drivers/BOT.avif"

export const F1_DRIVERS: Map<string, string> = new Map<string, string>([
  // Alpine
  ["Pierre Gasly", GAS],
  ["Esteban Ocon", OCO],

  // Aston Martin
  ["Fernando Alonso", ALO],
  ["Lance Stroll", STR],

  // Ferrari
  ["Oliver Bearman", BEA],
  ["Charles Leclerc", LEC],
  ["Carlos Sainz", SAI],

  // Haas
  ["Nico Hulkenberg", HUL],
  ["Kevin Magnussen", MAG],

  // Mclaren
  ["Lando Norris", NOR],
  ["Oscar Piastri", PIA],

  // Mercedes
  ["Lewis Hamilton", HAM],
  ["George Russell", RUS],

  // RB Honda
  ["Daniel Ricciardo", RIC],
  ['Liam Lawson', 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png'],
  ["Yuki Tsunoda", TSU],

  // Red Bull Honda
  ["Sergio Perez", PER],
  ["Max Verstappen", VER],

  // Sauber
  ["Valtteri Bottas", BOT],
  ["Zhou Guanyu", ZHO],

  // Williams
  ["Alexander Albon", ALB],
  ["Franco Colapinto", "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png"],
  ["Logan Sargeant", SAR],
])
