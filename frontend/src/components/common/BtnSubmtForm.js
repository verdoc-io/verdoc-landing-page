import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import R from '../resources/R'

const BtnSubmit = styled(Button)`
  && {
    width: 100%;
    max-width: 352px;
    height: 48px;
    font-size: 1em;
    border-width: 0;
    display: inline-block;
    text-transform: uppercase;
    color: ${R.colors.white};
    background-color: ${R.colors.primary};
    margin: 1.4rem 0;
    &:hover {
      background-color: ${R.colors.primary} !important;
      box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
    }
  }
`

const BtnSubmtForm = props => {
  return (
    <BtnSubmit data-testid="btn_submit" variant="outlined" size="large">
      {props.text}
    </BtnSubmit>
  )
}

export default BtnSubmtForm
