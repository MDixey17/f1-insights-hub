import { Heading, Section } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { TrackImage } from "../TrackImage/TrackImage"
import { F1_CIRCUITS } from "../../constants/Circuits/CircuitConstants"
import { Podium } from "../Podium/Podium"
import { CircuitUtils } from "../../utils/circuitUtils"
import "./Circuit.css"
import { DriverPic } from "../DriverPic/DriverPic"

export const Circuit = () => {
  const { circuit } = useParams()
  const circuitData = CircuitUtils.getCircuitData(circuit ?? "")

  // TODO:
  // 1. DONE
  // 2. DONE
  // 3. New section - Previous Winners - get default driver pic if the driver is retired (unlikely with Hamilton and Verstappen)
  // 4. World Record Lap - who, when, and the record
  // 5. Styling changes

  return (
    <>
      <Section
        isPrimary
        direction="column"
        justify="center"
        align="center"
        divider
      >
        <Heading isBlue size="xl" className="circuit-header">
          {circuitData?.grandPrixName}
        </Heading>
        {circuitData && circuitData.raceResults.length > 0 && (
          <Section isPrimary justify="space-evenly" align="center" wrap="wrap">
            <div>
              <Podium podium={circuitData?.raceResults ?? []} />
            </div>
            <TrackImage
              imagePath={F1_CIRCUITS.get(circuit ?? "") ?? ""}
              trackName={""}
            />
          </Section>
        )}
        {circuitData && circuitData.raceResults.length === 0 && (
          <TrackImage
            imagePath={F1_CIRCUITS.get(circuit ?? "") ?? ""}
            trackName={""}
          />
        )}
      </Section>
      {circuitData && (
        <>
          <Section
            justify="space-around"
            align="center"
            divider
            isPrimary
            wrap="wrap"
          >
            <Heading isBlue size="xl">
              Circuit Data
            </Heading>
            <div>
              <p className="circuit-data-p">
                <strong>Location: </strong>
                {circuitData.trackName}
                <br />
                <br />
                <strong>Number of Laps: </strong>
                {circuitData.numberOfLaps}
                <br />
                <br />
                <strong>Circuit Length: </strong>
                {circuitData.circuitLength} km
                <br />
                <br />
                <strong>Race Distance: </strong>
                {circuitData.raceDistance} km
                <br />
              </p>
            </div>
          </Section>
          <Section direction="column" divider isPrimary>
            <div className="previous-winner-container">
              <Section direction="row" align="center" isPrimary wrap="wrap">
                <Heading size="xl" isBlue className="previous-winner-text">
                  Previous Winners
                </Heading>
                {circuitData.recentWinners.map((recentWinner) => (
                  <DriverPic
                    driverName={recentWinner.driver}
                    caption={recentWinner.year}
                    size="sm"
                    textSize="lg"
                  />
                ))}
              </Section>
            </div>
            <div>
              <p className="world-record-lap">
                <strong>World Record: </strong>
                {circuitData.fastestLap.driver}{" "}
                {`(${circuitData.fastestLap.year})`} -{" "}
                {circuitData.fastestLap.time}
              </p>
            </div>
          </Section>
        </>
      )}
    </>
  )
}
