import React from 'react'

import HomeIcon from '@material-ui/icons/Home';

export default function WebsiteIcon({ fontSize }) {

  // Default font size to 2.1875rem if not specified
  const fontSizeFinal = !fontSize ? '2.1875rem' : fontSize

  return (
      <HomeIcon
        fontSize="large"
        style={{ color: 'inherit',
                 fontSize: fontSizeFinal
              }}
      />
  )
}