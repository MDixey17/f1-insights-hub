import { Section } from "blue-titanium-ui"
import { TrackImage } from "../TrackImage/TrackImage"
import { F1_CIRCUITS } from "../../constants/Circuits/CircuitConstants"
import { DriverPic } from "../DriverPic/DriverPic"

export const MostRecentRace = () => {
  return (
    <Section justify="center" align="center" isPrimary wrap="wrap">
      <DriverPic driverName="Oscar Piastri" caption="1st" />
      <DriverPic driverName="Lando Norris" caption="2nd" />
      <DriverPic driverName="Lewis Hamilton" caption="3rd" />
      <TrackImage
        imagePath={F1_CIRCUITS.get("Hungary") ?? ""}
        trackName="Hungary"
      />
    </Section>
  )
}
