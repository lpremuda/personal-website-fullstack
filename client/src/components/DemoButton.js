import React from 'react'

import ButtonLink from './ButtonLink'

export default function DemoButton({ href, disableBtn }) {

  return (
    <ButtonLink
      href={href}
      variant="contained"
      color="secondary"
      size="large"
      disableBtn={disableBtn}
    >
      View Demo
    </ButtonLink>
  )
} 