import { Section, Spinner } from "blue-titanium-ui"
import { TrackImage } from "../TrackImage/TrackImage"
import { F1_CIRCUITS } from "../../constants/Circuits/CircuitConstants"
import { DriverPic } from "../DriverPic/DriverPic"
import { useEffect, useState } from "react"
import { DriverResult } from "../../models/F1Insights/CircuitResponse"
import { useLoadingContext } from "../../contexts/LoadingContext"
import { F1InsightsService } from "../../services/f1InsightsService"

export const MostRecentRace = () => {
  const [isLoading, setLoading] = useLoadingContext()
  const [track, setTrack] = useState<string | undefined>(undefined)
  const [p1, setP1] = useState<DriverResult | undefined>(undefined)
  const [p2, setP2] = useState<DriverResult | undefined>(undefined)
  const [p3, setP3] = useState<DriverResult | undefined>(undefined)

  useEffect(() => {
    const getLastRace = async () => {
      setLoading(true)
      const lastRaceData = await F1InsightsService.getLastRace()
      setTrack(lastRaceData.location)
      const currentYear = new Date().getFullYear()
      const lastRaceResults = lastRaceData.previousResults.find(
        (previousResult) => previousResult.year === currentYear
      )
      const driver1 = lastRaceResults?.driverResults.find(
        (driver) => driver.position === 1
      )
      const driver2 = lastRaceResults?.driverResults.find(
        (driver) => driver.position === 2
      )
      const driver3 = lastRaceResults?.driverResults.find(
        (driver) => driver.position === 3
      )
      setP1(driver1)
      setP2(driver2)
      setP3(driver3)
      setLoading(false)
    }

    getLastRace()
  }, [setLoading])

  return (
    <Section justify="center" align="center" isPrimary wrap="wrap">
      {isLoading && <Spinner size="lg" className="home-spinner" />}
      {!isLoading && p1 && p2 && p3 && track && (
        <>
          <DriverPic driverName={p1.driverName} caption="1st" />
          <DriverPic driverName={p2.driverName} caption="2nd" />
          <DriverPic driverName={p3.driverName} caption="3rd" />
          <TrackImage
            imagePath={F1_CIRCUITS.get(track) ?? ""}
            trackName={track}
          />
        </>
      )}
      {!isLoading &&
        track &&
        p1 === undefined &&
        p2 === undefined &&
        p3 === undefined && (
          <TrackImage
            imagePath={F1_CIRCUITS.get(track) ?? ""}
            trackName={track}
          />
        )}
    </Section>
  )
}
