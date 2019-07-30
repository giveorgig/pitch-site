import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../images/triangle.svg'

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl font-sans text-white mb-8 tracking-normal relative inline-block`};
`

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-sans text-white mb-6 tracking-normal`};
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
`
