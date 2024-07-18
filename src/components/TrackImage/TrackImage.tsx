import { Heading, Section } from "blue-titanium-ui"
import "./TrackImage.css"

interface TrackImageProps {
  imagePath: string
  trackName: string
}

export const TrackImage = ({ imagePath, trackName }: TrackImageProps) => {
  return (
    <Section
      isPrimary
      direction="column"
      justify="center"
      align="center"
      className="track-img-container"
    >
      <img src={imagePath} alt={trackName} />
      <Heading size="lg">{trackName}</Heading>
    </Section>
  )
}
