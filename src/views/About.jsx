import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#4553ff" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} fill={colors.white} left="50%" top="75%" />
        <SVG icon="triangle" width={8} stroke={colors.white} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} fill={colors.white} left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.white} left="70%" top="60%" />
      <SVG icon="box" width={6} fill={colors.white} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.white} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.white} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
