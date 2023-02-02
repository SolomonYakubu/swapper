import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      className="absolute top-0 right-0 bottom-0 left-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: true,
        background: {
          color: {
            value: "none",
          },
        },
        fpsLimit: 120,

        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 100,

              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#ef4444"],
          },
          links: {
            color: ["#ef4444"],
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 350,
          },
          opacity: {
            value: 0.2,
          },
          // shape: {
          //   type: ["circle", "star"],
          // },
          size: {
            value: { min: 1, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesBg;
