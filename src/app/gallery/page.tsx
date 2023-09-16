'use client';

import Image from 'next/image'
import Container from '../components/Container'
import ParticlesBackground from '../components/ParticlesBackground';
import GallerySection from './components/gallery/Gallery';


export default function Gallery() {
  return (
   <Container>
    <GallerySection />
   </Container>
  )
}
