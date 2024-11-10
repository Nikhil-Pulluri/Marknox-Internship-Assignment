'use client'

import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground: React.FC = () => {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [particleValue, setParticleValue] = useState(600)

  // Initialize particles only once
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // Loads only the slim package to reduce bundle size
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Consider 768px as the breakpoint for mobile
      setParticleValue(200)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check for window size

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Function called when particles are loaded
  const particlesLoaded = (container?: Container): Promise<void> => {
    if (container) {
      console.log('Particles Loaded:', container)
    }
    return Promise.resolve()
  }

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: '#1a1a1a',
              },
              image: '',
              position: '50% 50%',
              repeat: 'no-repeat',
              size: 'cover',
              opacity: 1,
            },
            backgroundMask: {
              composite: 'destination-out',
              cover: {
                color: {
                  value: '#fff',
                },
                opacity: 1,
              },
              enable: false,
            },
            clear: true,
            defaultThemes: {},
            delay: 0,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: 'window',
              events: {
                onClick: {
                  enable: false,
                  mode: 'push',
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: 'circle',
                },
                onHover: {
                  enable: true,
                  mode: 'bubble',
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1,
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: 'ease-out-quad',
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 40,
                  duration: 2,
                  mix: false,
                  opacity: 8,
                  size: 6,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                  },
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: 'ease-out-quad',
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: 'ease-out-quad',
                    selectors: [],
                  },
                },
                slow: {
                  factor: 1,
                  radius: 0,
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: '#ffffff',
                      },
                      stop: {
                        value: '#000000',
                      },
                    },
                    radius: 100,
                  },
                  shadow: {
                    color: {
                      value: '#000000',
                    },
                    length: 2000,
                  },
                },
              },
            },
            manualParticles: [],
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: 'bounce',
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: '#ffffff',
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: [],
              },
              groups: {},
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: 'percent',
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: 'none',
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: 'bounce',
                  bottom: 'bounce',
                  left: 'bounce',
                  right: 'bounce',
                  top: 'bounce',
                },
                random: false,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                  width: 1920,
                  height: 1080,
                },
                limit: {
                  mode: 'delete',
                  value: 0,
                },
                value: particleValue,
              },
              opacity: {
                value: {
                  min: 0.05,
                  max: 0.4,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 2,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: {
                  value: '#000',
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: 'circle',
              },
              size: {
                value: 1,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: 'auto',
                  startValue: 'random',
                  destroy: 'none',
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: 'none',
                split: {
                  count: 1,
                  factor: {
                    value: 3,
                  },
                  rate: {
                    value: {
                      min: 4,
                      max: 9,
                    },
                  },
                  sizeOffset: true,
                  particles: {},
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: 'vertical',
                speed: 25,
              },
              tilt: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: 'clockwise',
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              life: {
                count: 0,
                delay: {
                  value: 0,
                  sync: false,
                },
                duration: {
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: 'clockwise',
                path: false,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: '#ffffff',
                },
                consent: false,
                distance: 30,
                enable: true,
                frequency: 1,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: '#000',
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              repulse: {
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,
            name: 'Polygon Mask',
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true,
              },
            },
            polygon: {
              draw: {
                enable: true,
                stroke: {
                  color: {
                    value: '#fff',
                  },
                  width: 1,
                  opacity: 0.2,
                },
              },
              enable: true,
              inline: {
                arrangement: 'equidistant',
              },
              move: {
                radius: 10,
                type: 'path',
              },
              scale: 0.5,
              type: 'inline',
              url: 'https://particles.js.org/images/smalldeer.svg',
              position: {
                x: 50,
                y: 50,
              },
            },
          }}
        />
      )}
    </>
  )
}

export default ParticleBackground
