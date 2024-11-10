'use client'
import LeetCodeProfile from '@/components/Leet'
import React from 'react'
import Card from '@/components/Card'

function Works() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="h-auto w-11/12 md:w-5/6 mt-[80px] mb-10 pb-12 p-4 pt-8 bg-[rgba(26,26,26,0)] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(245,245,245,0.197)]">
        <h1 className="animate-fade-in text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">My Works</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="space-y-6 animate-slide-up [animation-delay:200ms]">
            <Card
              project="XinRaise"
              desc="XinRaise is a groundbreaking platform built to empower innovators and small-scale businesses by providing a secure space to share ideas and access funding. Leveraging the power of the XDC Network, XinRaise offers a decentralized solution that ensures the integrity of ideas while facilitating direct engagement between creators and investors."
              git="https://github.com/Nikhil-Pulluri/XinRaise"
            />
            <Card
              project="TCP-Server-Cpp"
              desc="This project demonstrates the implementation of a basic TCP server using C++. The server communicates with a client application, providing options to access a database, perform calculations, or exit."
              git="https://github.com/Nikhil-Pulluri/TCP-Server-Cpp"
            />
          </div>

          <div className="space-y-6 animate-slide-up [animation-delay:400ms]">
            <Card
              project="Socio-Marketo"
              desc="Socio-Marketo is a decentralized social media platform that leverages blockchain technology to provide users with ownership and authenticity of their content. This repository contains the codebase for Socio-Marketo, including the smart contracts, web application built with Next.js, and mobile application built with Expo React Native."
              git="https://github.com/Nikhil-Pulluri/Socio-Marketo"
            />
            <Card
              project="Auto-Word-Completion"
              desc="An auto word completion tool using a TRIE (prefix tree) efficiently suggests word completions by storing words character by character. As users type, the tool quickly traverses the TRIE to predict possible words based on the input prefix. This approach ensures fast word lookups, making it ideal for applications like search engines or text editors."
              git="https://github.com/Nikhil-Pulluri/Auto-Word-Completion"
            />
          </div>

          <div className="animate-slide-up [animation-delay:600ms]">
            <LeetCodeProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
