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
  }, [ready, globeConfig.globeColor]);

  /* ---------- DATA ---------- */
  useEffect(() => {
    if (!ready) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.4)
      .hexPolygonColor(() => "rgba(255,255,255,0.08)")
      .showAtmosphere(true)
      .atmosphereColor("#3a228a")
      .atmosphereAltitude(0.25);

    globeRef.current
      .arcsData(data)
      .arcColor((d) => d.color)
      .arcAltitude(0.3)
      .arcStroke(0.6)
      .arcDashLength(0.6)
      .arcDashGap(4)
      .arcDashInitialGap((d) => d.order * 2)
      .arcDashAnimateTime(1000);

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
    gl.setClearColor("#000000", 1);
  }, [gl, size]);

  return null;
}

/* ---------- WORLD ---------- */
export function World() {
  const scene = new Scene();
  scene.fog = new Fog("#000000", 400, 2000);

  const arcs = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 28.6139,
      endLng: 77.209,
      color: "#ff007f", // Pink
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 35.6895,
      endLng: 139.6917,
      color: "#00f3ff", // Cyan
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 40.7128,
      endLng: -74.006,
      color: "#00ff41", // Matrix Green
    },
    {
        order: 4,
        startLat: 19.0760,
        startLng: 72.8777,
        endLat: 55.7558,
        endLng: 37.6173,
        color: "#ffdd00", // Yellow
    },
    {
        order: 5,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: 48.8566,
        endLng: 2.3522,
        color: "#ff4d00", // Orange
    },
    {
        order: 6,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 34.0522,
        endLng: -118.2437,
        color: "#bf00ff", // Purple
    },
    {
        order: 7,
        startLat: 52.5200,
        startLng: 13.4050,
        endLat: -26.2041,
        endLng: 28.0473,
        color: "#ffffff", // White
    }
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
          globeColor: "#000000",
          atmosphereColor: "#ffffff",
          showAtmosphere: true,
          atmosphereAltitude: 0.1,
        }}
      />

      {/* CONTROLS */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.0}
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
