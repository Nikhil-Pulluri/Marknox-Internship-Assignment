'use client'
import React from 'react'
import { Skills } from './Skills'

function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-auto w-5/6 mt-[80px] mb-10 pb-12 p-4 pt-8 bg-[rgba(26,26,26,0)] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(245,245,245,0.197)]">
        {' '}
        {/* Keep vertical padding */}
        <center>
          <h1 className="text-white text-4xl md:text-6xl font-bold">About Me</h1>
        </center>
        <div id="profile" className="flex flex-col items-center md:flex-row md:items-start px-[130px] mt-12  gap-12 space-y-6 md:space-y-0">
          {' '}
          {/* Removed space-x-8 */}
          <div>
            <img className="h-40 w-40 md:h-64 md:w-64 rounded-full" src="/beluga.jpg" alt="meh" />
          </div>
          <div className="w-full md:w-[700px]">
            <div className="text-justify text-white">
              Hey there! I'm <span className="font-bold">Nikhil Pulluri</span>, a Full Stack Web3 Developer who's all about building decentralized, modern applications. I love combining front-end and
              back-end skills with blockchain technology to create secure and scalable solutions that are future-ready.
              <br />
              <br />
              I'm currently pursuing a BTech in Computer Science and Engineering at SRM University AP, Andhra Pradesh. Along the way, I've dived into JavaScript, React, Node.js, Solidity, Ethereum,
              and more. What excites me about Web3 is the chance to solve complex challenges and bring innovative ideas to life through smart contracts and decentralized apps (dApps).
              <br />
              <br />
              When I'm not knee-deep in code, you'll find me geeking out on the latest blockchain trends or tinkering with side projects to sharpen my skills. And when I'm taking a break from tech,
              you can catch me playing Call of Duty Mobile 😅, cracking DSA problems, or chilling with a good movie.
            </div>
          </div>
        </div>
        {/* Skills section - hidden on mobile */}
        <center className="mt-24 px-8 hidden md:block">
          <div>
            <Skills />
          </div>
        </center>
      </div>
    </div>
  )
}

export default About
