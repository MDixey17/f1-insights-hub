import { Section } from "blue-titanium-ui"
import { DriverPic } from "../DriverPic/DriverPic"
import "./Podium.css"
import { DriverResult } from "../../models/F1Insights/CircuitResponse"

interface PodiumProps {
  results: DriverResult[]
}

export const Podium = ({ results }: PodiumProps) => {
  return results.length > 2 ? (
    <Section direction="row" justify="space-around" isPrimary>
      <div className="podium-2nd">
        <DriverPic
          driverName={
            results.find((result) => result.position === 2)!.driverName
          }
          caption="2nd"
        />
      </div>
      <div className="podium-1st">
        <DriverPic
          driverName={
            results.find((result) => result.position === 1)!.driverName
          }
          caption="1st"
        />
      </div>
      <div className="podium-3rd">
        <DriverPic
          driverName={
            results.find((result) => result.position === 3)!.driverName
          }
          caption="3rd"
        />
      </div>
    </Section>
  ) : (
    <></>
  )
}
