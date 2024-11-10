'use client'
import React from 'react'
import Image from 'next/image'
import { Skills } from './Skills'

function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-auto w-11/12 md:w-5/6 mt-10 mb-10 pb-12 p-4 pt-8 bg-[rgba(26,26,26,0)] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(245,245,245,0.197)]">
        <center>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">About Me</h1>
        </center>
        <div id="profile" className="flex flex-col items-center md:flex-row md:items-start px-4 sm:px-12 md:px-[130px] mt-8 gap-8 md:gap-12">
          <div className="flex justify-center">
            <Image className="h-32 w-32 sm:h-40 sm:w-40 md:h-64 md:w-64 rounded-full" src="/beluga.jpg" alt="Profile" width={256} height={256} />
          </div>
          <div className="w-full md:w-[700px] px-4 sm:px-0">
            <div className="text-justify text-white text-sm sm:text-base leading-relaxed">
              Hey there! I&apos;m <span className="font-bold">Nikhil Pulluri</span>, a Full Stack Web3 Developer who&apos;s all about building decentralized, modern applications. I love combining
              front-end and back-end skills with blockchain technology to create secure and scalable solutions that are future-ready.
              <br />
              <br />
              I&apos;m currently pursuing a BTech in Computer Science and Engineering at SRM University AP, Andhra Pradesh. Along the way, I&apos;ve dived into JavaScript, React, Node.js, Solidity,
              Ethereum, and more. What excites me about Web3 is the chance to solve complex challenges and bring innovative ideas to life through smart contracts and decentralized apps (dApps).
              <br />
              <br />
              When I&apos;m not knee-deep in code, you&apos;ll find me geeking out on the latest blockchain trends or tinkering with side projects to sharpen my skills. And when I&apos;m taking a
              break from tech, you can catch me playing Call of Duty Mobile 😅, cracking DSA problems, or chilling with a good movie.
            </div>
          </div>
        </div>
        {/* Skills section - hidden on mobile */}
        <center className="mt-16 hidden md:block">
          <div className="w-full md:px-8">
            <Skills />
          </div>
        </center>
      </div>
    </div>
  )
}

export default About
