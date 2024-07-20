import { Heading, ProfilePic, Section } from "blue-titanium-ui"
import { F1_DRIVERS } from "../../constants/Drivers/DriverConstants"
import DEFAULT_DRIVER_PIC from "../../assets/drivers/default-driver.png"
import "./DriverPic.css"

type PictureSizeType = "sm" | "md" | "lg"
type TextSizeType = "sm" | "md" | "lg" | "xl"

interface DriverPicProps {
  driverName: string
  caption: string
  size?: PictureSizeType
  textSize?: TextSizeType
}

export const DriverPic = ({
  driverName,
  caption,
  size = "md",
  textSize = "xl",
}: DriverPicProps) => {
  return (
    <Section
      direction="column"
      justify="center"
      align="center"
      isPrimary
      className="driver-sec"
    >
      <ProfilePic
        img={F1_DRIVERS.get(driverName) ?? DEFAULT_DRIVER_PIC}
        altText={driverName}
        size={size}
        addHover
      />
      <Heading size={textSize}>{caption}</Heading>
    </Section>
  )
}
