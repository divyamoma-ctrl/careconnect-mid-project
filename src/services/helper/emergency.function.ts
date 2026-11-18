// import type {
//   EmergencyCategory,
//   EmergencyServiceType,
// } from "../../types/type/emergency.type";

// // Type of data received from OpenStreetMap
// interface OverpassElementType {
//   id: number;
//   lat?: number;
//   lon?: number;
//   center?: {
//     lat: number;
//     lon: number;
//   };
//   tags?: Record<string, string>;
// }

// interface OverpassResponseType {
//   elements: OverpassElementType[];
// }

// export const getNearbyEmergencyServices = async (
//   latitude: number,
//   longitude: number,
// ): Promise<EmergencyServiceType[]> => {
//   const query = `
//     [out:json][timeout:25];
//     (
//       nwr(around:5000,${latitude},${longitude})["amenity"~"^(hospital|police|blood_bank|ambulance_station)$"];
//       nwr(around:5000,${latitude},${longitude})["healthcare"~"^(hospital|blood_bank)$"];
//     );
//     out center tags;
//   `;

//   const response = await fetch("https://overpass-api.de/api/interpreter", {
//     method: "POST",
//     body: new URLSearchParams({ data: query }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch emergency services.");
//   }

//   const data: OverpassResponseType = await response.json();

//   const services: EmergencyServiceType[] = data.elements
//     .map((item) => {
//       const tags = item.tags || {};

//       const amenity = tags.amenity;
//       const healthcare = tags.healthcare;

//       let category: EmergencyCategory | null = null;

//       if (amenity === "hospital" || healthcare === "hospital") {
//         category = "hospital";
//       } else if (amenity === "police") {
//         category = "police";
//       } else if (amenity === "blood_bank" || healthcare === "blood_bank") {
//         category = "blood_bank";
//       } else if (amenity === "ambulance_station") {
//         category = "ambulance";
//       }

//       const lat = item.lat ?? item.center?.lat;
//       const lon = item.lon ?? item.center?.lon;

//       if (!category || lat === undefined || lon === undefined) {
//         return null;
//       }

//       return {
//         id: item.id,
//         name: tags.name || "Unnamed Emergency Service",
//         latitude: lat,
//         longitude: lon,
//         category,
//         phone:
//           tags.phone ||
//           tags["contact:phone"] ||
//           tags["contact:mobile"] ||
//           tags.mobile ||
//           tags["phone:emergency"],
//         address: [tags["addr:street"], tags["addr:city"]]
//           .filter(Boolean)
//           .join(", "),
//       };
//     })
//     .filter((item) => item !== null);

//   return services;
// };





import type {
  EmergencyCategory,
  EmergencyServiceType,
} from "../../types/type/emergency.type";

// Type of data received from OpenStreetMap
interface OverpassElementType {
  id: number;
  lat?: number;
  lon?: number;
  center?: {
    lat: number;
    lon: number;
  };
  tags?: Record<string, string>;
}

interface OverpassResponseType {
  elements: OverpassElementType[];
}

export const getNearbyEmergencyServices = async (
  latitude: number,
  longitude: number
): Promise<EmergencyServiceType[]> => {
  const query = `
    [out:json][timeout:25];
    (
      nwr(around:5000,${latitude},${longitude})["amenity"~"^(hospital|police|blood_bank|ambulance_station)$"];
      nwr(around:5000,${latitude},${longitude})["healthcare"~"^(hospital|blood_bank)$"];
    );
    out center tags;
  `;

  const response = await fetch(
    "https://overpass-api.de/api/interpreter",
    {
      method: "POST",
      body: new URLSearchParams({ data: query }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch emergency services.");
  }

  const data: OverpassResponseType = await response.json();

  console.log("========== OVERPASS API RESPONSE ==========");
  console.log("Total elements received:", data.elements.length);

  const services = data.elements
    .map((item): EmergencyServiceType | null => {
      const tags = item.tags || {};

      // Debug: inspect all tags for each service
      console.log("-----------------------------------");
      console.log("Service ID:", item.id);
      console.log("Service Name:", tags.name || "Unnamed");
      console.log("All Available Tags:", tags);

      // Debug: inspect phone-related tags
      console.log("Phone:", tags.phone);
      console.log("Contact Phone:", tags["contact:phone"]);
      console.log("Contact Mobile:", tags["contact:mobile"]);
      console.log("Mobile:", tags.mobile);
      console.log("Emergency Phone:", tags["phone:emergency"]);

      const amenity = tags.amenity;
      const healthcare = tags.healthcare;

      let category: EmergencyCategory | null = null;

      if (amenity === "hospital" || healthcare === "hospital") {
        category = "hospital";
      } else if (amenity === "police") {
        category = "police";
      } else if (
        amenity === "blood_bank" ||
        healthcare === "blood_bank"
      ) {
        category = "blood_bank";
      } else if (amenity === "ambulance_station") {
        category = "ambulance";
      }

      const lat = item.lat ?? item.center?.lat;
      const lon = item.lon ?? item.center?.lon;

      if (!category || lat === undefined || lon === undefined) {
        return null;
      }

      const phone =
        tags.phone ||
        tags["contact:phone"] ||
        tags["contact:mobile"] ||
        tags.mobile ||
        tags["phone:emergency"];

      console.log("Final Extracted Phone:", phone || "Not Available");

      return {
        id: item.id,
        name: tags.name || "Unnamed Emergency Service",
        latitude: lat,
        longitude: lon,
        category,
        phone,
        address: [
          tags["addr:street"],
          tags["addr:city"],
        ]
          .filter(Boolean)
          .join(", "),
      };
    })
    .filter(
      (item): item is EmergencyServiceType => item !== null
    );

  console.log("========== FINAL SERVICES ==========");
  console.table(
    services.map((service) => ({
      id: service.id,
      name: service.name,
      category: service.category,
      phone: service.phone || "Not Available",
    }))
  );

  return services;
};
