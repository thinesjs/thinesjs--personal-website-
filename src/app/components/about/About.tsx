"use client";

import { About } from "@/app/interfaces/about";
import React from "react";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Engine from 'tsparticles-engine';

const AboutSection = () => {
  return (
    <div id="about" className="w-full">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <p className="inline text-4xl font-bold">
          About {String.fromCodePoint(Number("0x1F331"))}
        </p>
        <p className="py-6">A little about me!</p>
        <p className="text-justify text">
          Hey there! I&apos;m Thines Jai Shankar, a passionate Software Engineer {String.fromCodePoint(0x1F468, 0x200D, 0x1F4BB)}
          who thrives on creativity and innovation. What started as a childhood curiosity has blossomed into a
          full-fledged career that I absolutely love. Over the years, I&apos;ve honed
          my skills in various web development frameworks, mobile application frameworks, and I&apos;ve had the
          pleasure of working on some pretty cool projects that I&apos;m excited to
          share with you which you can take a look in <a href="/projects">[Projects]</a>. Join me on this journey as I continue to
          learn, grow, and create. Whether you&apos;re here to check out my latest
          projects, or just say hello, I&apos;m glad you stopped by. Let&apos;s connect and make something amazing together! {String.fromCodePoint(0x1FAF6)}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
