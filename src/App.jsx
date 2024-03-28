import { Stats, OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { useControls, button } from 'leva'
import TWEEN from '@tweenjs/tween.js'
import annotations from './annotations.json'

function Arena({ controls }) {
  const { nodes, materials } = useGLTF('/models/2.glb')

  const { camera } = useThree()

  useControls('Camera', () => {
    console.log('creating buttons')

    // using reduce
    const _buttons = annotations.reduce(
      (acc, { title, position, lookAt }) =>
        Object.assign(acc, {
          [title]: button(() => {
            // change target
            new TWEEN.Tween(controls.current.target)
              .to(
                {
                  x: lookAt.x,
                  y: lookAt.y,
                  z: lookAt.z
                },
                2100
              )
              .easing(TWEEN.Easing.Cubic.Out)
              .start()

            // change camera position
            new TWEEN.Tween(camera.position)
              .to(
                {
                  x: position.x,
                  y: position.y,
                  z: position.z
                },
                2000
              )
              .easing(TWEEN.Easing.Cubic.Out)
              .start()
          })
        }),
      {}
    )
    return _buttons
  })

  return (
    <group dispose={ null }>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Floor.geometry }
        material={ materials.White }
        scale={ [4, 0.2, 4] }
        material-envMapIntensity={ 0.4 }
        onDoubleClick={ ({ point }) => {
          new TWEEN.Tween(controls.current.target)
            .to(
              {
                x: point.x,
                y: point.y,
                z: point.z
              },
              1000
            )
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
        } }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Bed_frame.geometry }
        material={ materials.Frame }
        position={ [-2.66, 0.203, 2.206] }
      />
      <group position={ [-2.66, 0.875, 2.206] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube011.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube011_1.geometry }
          material={ materials.Pillow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube011_2.geometry }
          material={ materials.Blanket }
        />
      </group>
      <group position={ [-2.66, 1.337, 3.599] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube012.geometry }
          material={ materials.Blanket }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube012_1.geometry }
          material={ materials.Pillow }
        />
      </group>
      <group position={ [-0.007, 0.204, 3.486] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube008.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube008_1.geometry }
          material={ materials.Blanket }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube008_2.geometry }
          material={ materials['Pin picture.001'] }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Pillow001.geometry }
        material={ materials.Pillow }
        position={ [0.153, 1.239, 3.649] }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Pillow002.geometry }
        material={ materials.Pillow }
        position={ [0.59, 1.285, 3.771] }
        rotation={ [-1.18, 0.143, 0.13] }
      />
      <group position={ [2.63, 0.204, 3.657] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube016.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube016_1.geometry }
          material={ materials['Pin picture.001'] }
        />
      </group>
      <group position={ [-3.23, 0.198, -1.541] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube017.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube017_1.geometry }
          material={ materials['Pin picture.001'] }
        />
      </group>
      <group position={ [3.378, 1.88, 3.675] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube020.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube020_1.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube020_2.geometry }
          material={ materials.Blue }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube020_3.geometry }
          material={ materials.Yellow }
        />
      </group>
      <group position={ [2.587, 2.612, 3.682] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube022.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube022_1.geometry }
          material={ materials.Yellow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube022_2.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube022_3.geometry }
          material={ materials.Blue }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Coffe_table.geometry }
        material={ materials.Frame }
        position={ [1.197, 0.554, -0.881] }
      />
      <group position={ [1.186, 0.208, -0.871] } rotation={ [0, 0.455, 0] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Plane.geometry }
          material={ materials.Pillow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Plane_1.geometry }
          material={ materials.White }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Cushion.geometry }
        material={ materials.Blanket }
        position={ [2.772, 0.282, -0.848] }
        rotation={ [0, 0.349, 0] }
      />
      <group position={ [3.394, 1.271, 3.672] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube028.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube028_1.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube028_2.geometry }
          material={ materials.Blue }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube028_3.geometry }
          material={ materials.Yellow }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Cushion001.geometry }
        material={ materials.Blanket }
        position={ [1.416, 0.282, -2.391] }
        rotation={ [-Math.PI, 1.403, -Math.PI] }
      />
      <group position={ [-3.568, 0.174, -3.313] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube035.geometry }
          material={ materials.Blanket }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube035_1.geometry }
          material={ materials.Pillow }
        />
      </group>
      <group position={ [2.496, 1.877, 3.672] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube040.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube040_1.geometry }
          material={ materials.Blue }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube040_2.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube040_3.geometry }
          material={ materials.Yellow }
        />
      </group>
      <group position={ [-1.738, 1.057, -1.254] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube052.geometry }
          material={ materials.Blanket }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube052_1.geometry }
          material={ materials.Frame }
        />
      </group>
      <group position={ [1.687, 0.667, -0.803] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder005.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder005_1.geometry }
          material={ materials.Coffe }
        />
      </group>
      <group position={ [1.306, 0.684, -1.454] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder006.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder006_1.geometry }
          material={ materials.Coffe }
        />
      </group>
      <group position={ [2.568, 1.491, 3.646] } rotation={ [0, 0.315, 0] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube015.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube015_1.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube015_2.geometry }
          material={ materials['Pin picture.002'] }
        />
      </group>
      <group position={ [1.911, 1.491, 3.646] } rotation={ [0, -0.354, 0] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube019.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube019_1.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube019_2.geometry }
          material={ materials['Pin picture'] }
        />
      </group>
      <group position={ [-3.654, 1.444, -1.056] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube021.geometry }
          material={ materials.Pillow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube021_1.geometry }
          material={ materials['Pin picture.001'] }
        />
      </group>
      <group position={ [-2.953, 1.441, -1.105] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube023.geometry }
          material={ materials.Pillow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube023_1.geometry }
          material={ materials['Pin picture.001'] }
        />
      </group>
      <group position={ [-3.659, 1.445, -2.442] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder.geometry }
          material={ materials.Coffe }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder_1.geometry }
          material={ materials.Blanket }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder_2.geometry }
          material={ materials.Leaves }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder_3.geometry }
          material={ materials.Frame }
        />
      </group>
      <mesh castShadow receiveShadow geometry={ nodes.Wall.geometry } material={ materials.White } />
      <group position={ [0.038, 2.932, 4.276] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube004.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube004_1.geometry }
          material={ materials.Material }
        />
      </group>
      <group position={ [-4.004, 3.051, -1.324] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050.geometry }
          material={ materials.White }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_1.geometry }
          material={ materials['Pin picture'] }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_2.geometry }
          material={ materials.Frame }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_3.geometry }
          material={ materials.Board }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_4.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_5.geometry }
          material={ materials['Pin picture.001'] }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_6.geometry }
          material={ materials.Yellow }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_7.geometry }
          material={ materials['Pin picture.002'] }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cube050_8.geometry }
          material={ materials.Blue }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={ nodes.Wallshelf.geometry }
        material={ materials.Frame }
        position={ [-3.77, 3.25, 2.269] }
      />
      <group position={ [-3.717, 3.193, 2.867] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder001.geometry }
          material={ materials.Red }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder001_1.geometry }
          material={ materials.Leaves }
        />
      </group>
      <group position={ [-3.74, 2.79, 1.657] }>
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder002.geometry }
          material={ materials.Blue }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={ nodes.Cylinder002_1.geometry }
          material={ materials.Leaves }
        />
      </group>
    </group>
  )
}

function Tween() {
  useFrame(() => {
    TWEEN.update()
  })
}

export default function App() {
  const ref = useRef()
  const { intensity, color, softness, contrast } = useControls({
    intensity: {
      value: 0.20,
      min: -0.5,
      max: 2,
      step: 0.01
    },
    color: '#ffffff',
  });



  return (
    <Canvas camera={ { position: [1, 15, -4] } } shadows>
      <directionalLight
        intensity={ 0.5 }
        castShadow={ true }
        shadow-bias={ -0.0001 }
        shadow-mapSize={ [2048, 2048] }
        position={ [40.0, 80.0, 70.0] }
        shadow-camera-left={ -30 }
        shadow-camera-right={ 20 }
        shadow-camera-top={ 20 }
        shadow-camera-bottom={ -20 }
      />
      <Environment files="/img/kloppenheim_05_puresky_8k.hdr" background />
      <OrbitControls ref={ ref } target={ [0, 1, 0] } />
      <directionalLight position={ [2, 1, 1] } intensity={ intensity } color={ color } />

      <Arena controls={ ref } />
      <Tween />
      <Stats />
    </Canvas>
  )
}
