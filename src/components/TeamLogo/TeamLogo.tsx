import "./TeamLogo.css"

interface TeamLogoProps {
  image: string
  altText: string
  size: "sm" | "md" | "lg"
}

export const TeamLogo = ({ image, altText, size }: TeamLogoProps) => {
  return (
    <div className={`tl-container-${size}`}>
      <img src={image} alt={altText} className={`team-logo-${size}`} />
    </div>
  )
}
