'use client';

import Image from 'next/image'
import Container from './components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import HomeSection from './components/home/Home';
import PortfolioSection from './components/portfolio/Portfolio';

export default function Home() {
  return (
   <Container>
    <HomeSection />
    <PortfolioSection />
   </Container>
  )
}
