import { useEffect, useRef, useState } from "react";
import { Color, Fog, PerspectiveCamera, Scene } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import countries from "../../data/globe.json";

/* ---------- CONFIG ---------- */
const CAMERA_Z = 320;
const RING_SPEED = 3;

/* ---------- GLOBE ---------- */
function Globe({ data, globeConfig }) {
  const globeRef = useRef();
  const groupRef = useRef();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setReady(true);
    }
  }, []);

  /* ---------- MATERIAL ---------- */
  useEffect(() => {
    if (!ready) return;

    const mat = globeRef.current.globeMaterial();
    mat.color = new Color(globeConfig.globeColor);
    mat.emissive = new Color("#220038");
    mat.emissiveIntensity = 0.25;
    mat.shininess = 1.1;
  }, [ready]);

  /* ---------- DATA ---------- */
  useEffect(() => {
    if (!ready) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.4)
      .hexPolygonColor(() => "rgba(255,255,255,0.08)")
      .showAtmosphere(true)
      .atmosphereColor("#6b21a8")
      .atmosphereAltitude(0.15);

    globeRef.current
      .arcsData(data)
      .arcColor((d) => d.color)
      .arcAltitude(0.3)
      .arcStroke(0.6)
      .arcDashLength(0.6)
      .arcDashGap(4)
      .arcDashInitialGap((d) => d.order * 2)
      .arcDashAnimateTime(4000);

    globeRef.current
      .pointsData(data)
      .pointLat((d) => d.startLat)
      .pointLng((d) => d.startLng)
      .pointColor((d) => d.color)
      .pointRadius(1.8)
      .pointsMerge(true);

    globeRef.current
      .ringsData(data)
      .ringColor((d) => d.color)
      .ringMaxRadius(5)
      .ringPropagationSpeed(RING_SPEED)
      .ringRepeatPeriod(2000);
  }, [ready, data]);

  return <group ref={groupRef} />;
}

/* ---------- RENDER CONFIG ---------- */
function RendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor("#020617", 1);
  }, [gl, size]);

  return null;
}

/* ---------- WORLD ---------- */
export function World() {
  const scene = new Scene();
  scene.fog = new Fog("#020617", 400, 2000);

  const arcs = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 28.6139,
      endLng: 77.209,
      color: "#a855f7",
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 35.6895,
      endLng: 139.6917,
      color: "#38bdf8",
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 40.7128,
      endLng: -74.006,
      color: "#22c55e",
    },
  ];

  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(50, 1.2, 180, 1800)}
    >
      <RendererConfig />

      {/* LIGHTING */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[200, 200, 200]} intensity={1.1} />
      <pointLight position={[-300, 100, 300]} intensity={1.2} color="#a855f7" />

      {/* GLOBE */}
      <Globe
        data={arcs}
        globeConfig={{
          globeColor: "#0f172a",
        }}
      />

      {/* CONTROLS */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
