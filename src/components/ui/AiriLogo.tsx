import Image from 'next/image'

interface AiriLogoProps {
  size?: 16 | 20 | 40 | 48
  className?: string
}

export default function AiriLogo({ size = 40, className = '' }: AiriLogoProps) {
  const src = size <= 20 ? '/images/airi-logo-sm.webp' : '/images/airi-logo-md.webp'

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
    />
  )
}
