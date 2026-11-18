



// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";

// import { divIcon } from "leaflet";
// import type { EmergencyCategory, EmergencyServiceType } from "../../types/type/emergency.type";



// interface EmergencyMapProps {
//   latitude: number;
//   longitude: number;
//   emergencyServices: EmergencyServiceType[];
// }

// // Marker styles for each category
// const categoryStyles: Record<
//   EmergencyCategory,
//   { label: string; color: string }
// > = {
//   hospital: {
//     label: "H",
//     color: "#DC2626",
//   },
//   police: {
//     label: "P",
//     color: "#2563EB",
//   },
//   blood_bank: {
//     label: "B",
//     color: "#9333EA",
//   },
//   ambulance: {
//     label: "A",
//     color: "#EA580C",
//   },
// };

// // Create a custom Leaflet icon
// const createServiceIcon = (category: EmergencyCategory) => {
//   const style = categoryStyles[category];

//   return divIcon({
//     className: "",
//     html: `
//       <div style="
//         width: 32px;
//         height: 32px;
//         background-color: ${style.color};
//         color: white;
//         border: 2px solid white;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 14px;
//         font-weight: bold;
//         box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//       ">
//         ${style.label}
//       </div>
//     `,
//     iconSize: [32, 32],
//     iconAnchor: [16, 16],
//   });
// };

// // Current location marker
// const userLocationIcon = divIcon({
//   className: "",
//   html: `
//     <div style="
//       width: 18px;
//       height: 18px;
//       background-color: #0EA5E9;
//       border: 4px solid white;
//       border-radius: 50%;
//       box-shadow: 0 2px 6px rgba(0,0,0,0.4);
//     "></div>
//   `,
//   iconSize: [18, 18],
//   iconAnchor: [9, 9],
// });

// const EmergencyMap = ({
//   latitude,
//   longitude,
//   emergencyServices,
// }: EmergencyMapProps) => {
//   const position: [number, number] = [latitude, longitude];

//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       scrollWheelZoom={true}
//       style={{
//         height: "500px",
//         width: "100%",
//         borderRadius: "16px",
//       }}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* User's current location */}
//       <Marker
//         position={position}
//         icon={userLocationIcon}
//       >
//         <Popup>
//           Your current location
//         </Popup>
//       </Marker>

//       {/* Nearby emergency service markers */}
//       {emergencyServices.map((service) => (
//         <Marker
//           key={`${service.category}-${service.id}`}
//           position={[service.latitude, service.longitude]}
//           icon={createServiceIcon(service.category)}
//         >
//           <Popup>
//             <div>
//               <h3 className="font-bold">
//                 {service.name}
//               </h3>

//               <p className="capitalize">
//                 {service.category.replace("_", " ")}
//               </p>

//               {service.address && (
//                 <p>{service.address}</p>
//               )}

//               {service.phone && (
//                 <a href={`tel:${service.phone}`}>
//                   Call: {service.phone}
//                 </a>
//               )}
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default EmergencyMap;






import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { divIcon } from "leaflet";

import type {
  EmergencyCategory,
  EmergencyServiceType,
} from "../../types/type/emergency.type";

interface EmergencyMapProps {
  latitude: number;
  longitude: number;
  emergencyServices: EmergencyServiceType[];
  selectedServiceKey: string | null;
  onSelectService: (key: string) => void;
}

// Category marker styles
const categoryStyles: Record<
  EmergencyCategory,
  { label: string; color: string }
> = {
  hospital: { label: "H", color: "#DC2626" },
  police: { label: "P", color: "#2563EB" },
  blood_bank: { label: "B", color: "#9333EA" },
  ambulance: { label: "A", color: "#EA580C" },
};

// Create emergency service marker
const createServiceIcon = (
  category: EmergencyCategory,
  isSelected: boolean
) => {
  const style = categoryStyles[category];

  return divIcon({
    className: "",
    html: `
      <div style="
        width: ${isSelected ? "42px" : "32px"};
        height: ${isSelected ? "42px" : "32px"};
        background-color: ${style.color};
        color: white;
        border: ${isSelected ? "4px solid #FDE68A" : "2px solid white"};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      ">
        ${style.label}
      </div>
    `,
    iconSize: [isSelected ? 42 : 32, isSelected ? 42 : 32],
    iconAnchor: [
      isSelected ? 21 : 16,
      isSelected ? 21 : 16,
    ],
  });
};

// User location marker
const userLocationIcon = divIcon({
  className: "",
  html: `
    <div style="
      width: 18px;
      height: 18px;
      background-color: #0EA5E9;
      border: 4px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// Move map when a service is selected
const MapFocus = ({
  selectedService,
  latitude,
  longitude,
}: {
  selectedService: EmergencyServiceType | undefined;
  latitude: number;
  longitude: number;
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedService) {
      map.flyTo(
        [selectedService.latitude, selectedService.longitude],
        16,
        { duration: 0.8 }
      );
    } else {
      map.flyTo(
        [latitude, longitude],
        13,
        { duration: 0.8 }
      );
    }
  }, [selectedService, latitude, longitude, map]);

  return null;
};

const EmergencyMap = ({
  latitude,
  longitude,
  emergencyServices,
  selectedServiceKey,
  onSelectService,
}: EmergencyMapProps) => {
  const position: [number, number] = [latitude, longitude];

  // Find selected emergency service
  const selectedService = emergencyServices.find(
    (service) =>
      `${service.category}-${service.id}` === selectedServiceKey
  );

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: "620px",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      {/* Move map when a service is selected */}
      <MapFocus
        selectedService={selectedService}
        latitude={latitude}
        longitude={longitude}
      />

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User location */}
      <Marker position={position} icon={userLocationIcon}>
        <Popup>Your current location</Popup>
      </Marker>

      {/* Emergency service markers */}
      {emergencyServices.map((service) => {
        const serviceKey = `${service.category}-${service.id}`;

        const isSelected = selectedServiceKey === serviceKey;

        return (
          <Marker
            key={serviceKey}
            position={[service.latitude, service.longitude]}
            icon={createServiceIcon(service.category, isSelected)}
            eventHandlers={{
              click: () => onSelectService(serviceKey),
            }}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{service.name}</h3>

                <p className="capitalize">
                  {service.category.replace("_", " ")}
                </p>

                {service.address && <p>{service.address}</p>}

                {service.phone && (
                  <a href={`tel:${service.phone}`}>
                    Call: {service.phone}
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EmergencyMap;
