import React from 'react'
import { NumberHistoryButtonContainer } from './styles';

const History = ({children}) => {
  return (
    <NumberHistoryButtonContainer>
        {children}
    </NumberHistoryButtonContainer>
  )
}

export { History };