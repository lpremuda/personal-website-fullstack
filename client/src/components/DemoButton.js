import React from 'react'

import ButtonLink from './ButtonLink'

export default function DemoButton({ href }) {

  return (
    <ButtonLink
      href={href}
      variant="contained"
      color="secondary"
      size="large"
    >
      View Demo
    </ButtonLink>
  )
} 