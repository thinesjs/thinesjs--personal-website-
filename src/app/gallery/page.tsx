'use client';

import Image from 'next/image'
import Container from '../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import ParticlesBackground from '../components/ParticlesBackground';
import GallerySection from './components/gallery/Gallery';


export default function Gallery() {
  return (
   <Container>
    <ParticlesBackground />
    <GallerySection />
   </Container>
  )
}
