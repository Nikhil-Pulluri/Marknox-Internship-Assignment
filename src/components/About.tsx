'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Skills } from './Skills'
import Image from 'next/image'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <div className="dark flex items-center justify-center min-h-screen py-10">
      <div className="h-auto w-11/12 md:w-5/6 mt-10 mb-10 pb-12 p-4 pt-8 bg-[rgba(26,26,26,0)] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(245,245,245,0.197)]">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }} className="text-center">
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold 
                       bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-12 md:px-[130px] mt-8 gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64">
            <Image src="/beluga.jpg" width={200} height={200} alt="Profile" className="rounded-full object-cover w-full h-full border-4 border-white/10 shadow-lg" />
            <motion.div
              animate={{
                boxShadow: ['0 0 0 0 rgba(255,255,255,0.1)', '0 0 0 20px rgba(255,255,255,0)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full md:w-[700px] px-4 sm:px-0">
            <div className="text-justify text-white text-sm sm:text-base leading-relaxed space-y-4">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                Hey there! I&apos;m <span className="font-bold text-blue-400">Nikhil Pulluri</span>, a Full Stack Web3 Developer who&apos;s all about building decentralized, modern applications. I
                love combining front-end and back-end skills with blockchain technology to create secure and scalable solutions that are future-ready.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                I&apos;m currently pursuing a BTech in Computer Science and Engineering at SRM University AP, Andhra Pradesh. Along the way, I&apos;ve dived into JavaScript, React, Node.js, Solidity,
                Ethereum, and more. What excites me about Web3 is the chance to solve complex challenges and bring innovative ideas to life through smart contracts and decentralized apps (dApps).
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                When I&apos;m not knee-deep in code, you&apos;ll find me geeking out on the latest blockchain trends or tinkering with side projects to sharpen my skills. And when I&apos;m taking a
                break from tech, you can catch me playing Call of Duty Mobile 😅, cracking DSA problems, or chilling with a good movie.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-16">
          <div className="w-full px-4 md:px-8">
            <Skills />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
