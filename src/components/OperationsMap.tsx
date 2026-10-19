import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Site = {
  name: string;
  country: string;
  note: string;
  coords: [number, number];
  primary?: boolean;
};

export const sites: Site[] = [
  { name: "Cape Town", country: "South Africa", note: "Group headquarters — 1st Floor, Cape Dahlia, West Beach", coords: [-33.8074, 18.4784], primary: true },
  { name: "Johannesburg", country: "South Africa", note: "Commercial & tender liaison", coords: [-26.2041, 28.0473] },
  { name: "Dar es Salaam", country: "Tanzania", note: "East Africa operational hub & port corridor", coords: [-6.7924, 39.2083], primary: true },
  { name: "Nairobi", country: "Kenya", note: "ICT & logistics corridor partnerships", coords: [-1.2864, 36.8172] },
  { name: "Lusaka", country: "Zambia", note: "Mining advisory & downstream projects", coords: [-15.3875, 28.3228] },
  { name: "Lubumbashi", country: "DRC", note: "Mineral logistics & procurement channels", coords: [-11.6876, 27.5026] },
  { name: "Kigali", country: "Rwanda", note: "Digital infrastructure advisory", coords: [-1.9441, 30.0619] },
  { name: "Kampala", country: "Uganda", note: "Petrochemical distribution facilitation", coords: [0.3476, 32.5825] },
];

const dot = (primary?: boolean) =>
  L.divIcon({
    className: "",
    // 44px transparent hit area (WCAG target size) wrapping the visible dot
    html: `<span style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;"><span style="display:block;width:${primary ? 18 : 12}px;height:${primary ? 18 : 12}px;border-radius:9999px;background:hsl(43 55% 55%);box-shadow:0 0 0 ${primary ? 6 : 4}px hsla(43,55%,55%,0.25);border:2px solid hsl(211 74% 16%)"></span></span>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });

const OperationsMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      center: [-12, 28],
      zoom: 4,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" rel="noopener noreferrer">CARTO</a>',
      maxZoom: 18,
    }).addTo(map);

    const group = L.featureGroup(
      sites.map((s) =>
        L.marker(s.coords, { icon: dot(s.primary), title: `${s.name}, ${s.country}` }).bindPopup(
          `<strong>${s.name} · ${s.country}</strong><br/>${s.note}`,
        ),
      ),
    ).addTo(map);

    map.fitBounds(group.getBounds().pad(0.25));

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        role="application"
        aria-label="Interactive map of Evenor Holdings operational locations across Sub-Saharan Africa"
        className="h-[380px] md:h-[560px] w-full max-w-3xl mx-auto border border-gold/30 bg-navy-deep z-0"
      />
      <p className="mt-3 text-white/50 text-xs font-light">
        Interactive map · scroll-zoom disabled for page comfort — pinch or use the +/− controls.
      </p>
    </div>
  );
};

export default OperationsMap;
