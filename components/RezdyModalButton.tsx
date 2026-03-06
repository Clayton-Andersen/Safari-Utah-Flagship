'use client'

import Script from 'next/script'

type Props = {
  label: string
  href?: string
}

export default function RezdyModalButton({
  label,
  href = 'https://safariutah.rezdy.com',
}: Props) {
  return (
    <>
      <Script
        src="https://safariutah.rezdy.com/pluginJs?script=modal"
        strategy="afterInteractive"
      />
      <a className="rezdy rezdy-modal rezdy-booking-button" href={href}>
        {label}
      </a>
    </>
  )
}
