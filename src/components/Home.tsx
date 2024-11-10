'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

function Home() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 blur-3xl"
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {show && (
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="max-w-5xl mx-auto text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="relative inline-block">
                <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">Hello 👋🏼</div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-muted-foreground">This is</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Nikhil Pulluri</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Crafting digital experiences through elegant code and innovative solutions
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-center justify-center gap-4 mt-8">
                <Link href="https://github.com/Nikhil-Pulluri?tab=repositories">
                  <Button variant="default" size="lg">
                    View Projects
                  </Button>
                </Link>
                <Link href="mailto:nikhilpulluri7810@gmail.com">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex items-center justify-center gap-6 mt-12">
                <a href="https://github.com/Nikhil-Pulluri" className="text-muted-foreground hover:text-primary transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/nikhil-sri-ram-pulluri-03bb64211/" className="text-muted-foreground hover:text-primary transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="https://x.com/NikhilPulluri3" className="text-muted-foreground hover:text-primary transition-colors">
                  <TwitterIcon className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
