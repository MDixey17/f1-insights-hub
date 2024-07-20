import { Section } from "blue-titanium-ui"
import { DriverPic } from "../DriverPic/DriverPic"
import "./Podium.css"

interface PodiumProps {
  podium: string[]
}

export const Podium = ({ podium }: PodiumProps) => {
  return (
    <Section direction="row" justify="space-around" isPrimary>
      <div className="podium-2nd">
        <DriverPic driverName={podium[1]} caption="2nd" />
      </div>
      <div className="podium-1st">
        <DriverPic driverName={podium[0]} caption="1st" />
      </div>
      <div className="podium-3rd">
        <DriverPic driverName={podium[2]} caption="3rd" />
      </div>
    </Section>
  )
}
