import { animated, useSpring } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { IceCream } from "./Beach/IceCream";
import { Palm } from "./Beach/Palm";
import { VolleyBall } from "./Beach/VolleyBall";
import Burger from "./Food/Burger";
import Cannon from "./Food/Cannon";
import { HotDog } from "./Food/HotDog";
import { TargetStand } from "./Food/TargetStand";
import { BookCase } from "./Haunted/BookCase";
import { Cauldron } from "./Haunted/Cauldron";
import { Fence } from "./Haunted/Fence";
import { Witch } from "./Haunted/Witch";
import { FerrisWheel } from "./Park/FerrisWheel";
import { Podium } from "./Park/Podium";
import { ShipLight } from "./Park/ShipLight";

const STEP_DURATION = 5000;

export const Carousel = (props) => {
  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: STEP_DURATION,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: STEP_DURATION,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    immediate: true,
  });

  return (
    <>
      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <animated.group rotation-y={carouselRotation}>
          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"white"} />
            <cylinderBufferGeometry args={[12, 12, 4, 64]} />
          </mesh>
          <mesh scale={[1, 6, 24]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh scale={[24, 6, 1]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {/* PARK */}
          <>
            <Podium position={[1, 0, 10]} rotation-y={Math.PI / 2} />
            <FerrisWheel position={[6, 0, 2]} scale={[3, 3, 3]} />
            <Float speed={5} floatIntensity={0.3}>
              <ShipLight
                position={[5, 0.66, 6]}
                scale={[0.5, 0.5, 0.5]}
                rotation-x={-Math.PI / 16}
                rotation-y={-Math.PI}
              />
            </Float>
          </>
          {/* FOOD */}
          <>
            <Burger position={[3, 4, -10]} scale={[3, 3, 3]} />
            <Burger position={[3, 4, -3]} scale={[3, 3, 3]} />
            <Burger position={[10, 4, -3]} scale={[3, 3, 3]} />
            <Cannon
              position={[10, 0, -3]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI / 2}
            />
            <TargetStand
              position={[2, 0, -3]}
              scale={[1, 1, 1]}
              rotation-y={Math.PI / 2}
            />
            <HotDog
              position={[4, 1, -7]}
              scale={[4, 4, 4]}
              rotation-y={-Math.PI / 8}
            />
          </>
          {/* HAUNTED */}
          <>
            <Float speed={5} floatIntensity={0.1}>
              <Witch
                position={[-4, 3, -5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI * 1.25}
              />
            </Float>
            <BookCase
              position={[-7, 0, -1.5]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI}
            />
            <Float speed={3} floatIntensity={0.005}>
              <Fence
                position={[-7.5, 2, -7.5]}
                scale={[1.6, 1.6, 1.6]}
                rotation-y={Math.PI / 4}
              />
            </Float>
            <Float speed={-1} floatIntensity={0.01}>
              <Cauldron position={[-2.8, 1, -8]} scale={[1.9, 1.9, 1.9]} />
            </Float>
          </>
          {/* BEACH */}
          <>
            <Palm scale={[3, 3, 3]} position={[-1, 0, 1]} />
            <Palm
              scale={[2.8, 2.6, 2.6]}
              position={[-7, 0, 0]}
              rotation-y={Math.PI / 6}
            />
            <VolleyBall />
            <IceCream position={[-10, 4, 3]} scale={[3, 3, 3]} />
            <IceCream position={[-8, 4, 8]} scale={[3, 3, 3]} />
            <IceCream position={[-3, 4, 10]} scale={[3, 3, 3]} />
          </>
        </animated.group>
      </group>
    </>
  );
};
