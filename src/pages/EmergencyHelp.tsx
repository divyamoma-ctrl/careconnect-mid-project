
import { useEffect, useState } from "react";
import {
  MapPinned,
  Phone,
  Hospital,
  Shield,
  Droplets,
  Ambulance,
  MapPin,
} from "lucide-react";

import EmergencyMap from "../components/home/EmergencyMap";

import type {
  EmergencyServiceType,
  UserLocationType,
  EmergencyCategory,
} from "../types/type/emergency.type";

import { getNearbyEmergencyServices } from "../services/helper/emergency.function";

// Category filter options
const categoryOptions = [
  { label: "All", value: "all", icon: MapPinned },
  { label: "Hospitals", value: "hospital", icon: Hospital },
  { label: "Police", value: "police", icon: Shield },
  { label: "Blood Banks", value: "blood_bank", icon: Droplets },
  { label: "Ambulance", value: "ambulance", icon: Ambulance },
] as const;

// Category colors and labels
const categoryStyles: Record<
  EmergencyCategory,
  { label: string; color: string }
> = {
  hospital: {
    label: "Hospital",
    color: "bg-red-100 text-red-700",
  },
  police: {
    label: "Police Station",
    color: "bg-blue-100 text-blue-700",
  },
  blood_bank: {
    label: "Blood Bank",
    color: "bg-purple-100 text-purple-700",
  },
  ambulance: {
    label: "Ambulance",
    color: "bg-orange-100 text-orange-700",
  },
};

// Calculate straight-line distance in kilometres
const calculateDistance = (
  userLat: number,
  userLon: number,
  serviceLat: number,
  serviceLon: number
): number => {
  const earthRadius = 6371;

  const toRadians = (degree: number) => (degree * Math.PI) / 180;

  const latDifference = toRadians(serviceLat - userLat);
  const lonDifference = toRadians(serviceLon - userLon);

  const a =
    Math.sin(latDifference / 2) ** 2 +
    Math.cos(toRadians(userLat)) *
      Math.cos(toRadians(serviceLat)) *
      Math.sin(lonDifference / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
};

const EmergencyHelp = () => {
  // User location
  const [userLocation, setUserLocation] =
    useState<UserLocationType | null>(null);

  // Emergency services
  const [emergencyServices, setEmergencyServices] =
    useState<EmergencyServiceType[]>([]);

  // Selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Selected map marker / service card
  const [selectedServiceKey, setSelectedServiceKey] =
    useState<string | null>(null);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(true);
  const [isServicesLoading, setIsServicesLoading] = useState(false);

  const [isError, setIsError] = useState("");
  const [servicesError, setServicesError] = useState("");

  // Step 1: Get user's current location
  useEffect(() => {
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        setIsError("Geolocation is not supported by your browser.");
        setIsLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          setIsLoading(false);
        },
        (error) => {
          if (error.code === 1) {
            setIsError("Location permission denied. Please allow location access.");
          } else if (error.code === 2) {
            setIsError("Your location is currently unavailable.");
          } else if (error.code === 3) {
            setIsError("Location request timed out. Please try again.");
          } else {
            setIsError("Unable to get your location.");
          }

          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    };

    getUserLocation();
  }, []);

  // Step 2: Fetch nearby emergency services
  useEffect(() => {
    if (!userLocation) return;

    const fetchEmergencyServices = async () => {
      try {
        setIsServicesLoading(true);
        setServicesError("");

        const services = await getNearbyEmergencyServices(
          userLocation.latitude,
          userLocation.longitude
        );

        setEmergencyServices(services);
      } catch (error) {
        console.error("Emergency services error:", error);

        setServicesError(
          "Unable to fetch nearby emergency services. Please try again."
        );
      } finally {
        setIsServicesLoading(false);
      }
    };

    fetchEmergencyServices();
  }, [userLocation]);

  // Step 3: Filter services by category
  const filteredServices =
    selectedCategory === "all"
      ? emergencyServices
      : emergencyServices.filter(
          (service) => service.category === selectedCategory
        );

  // Step 4: Sort services by nearest distance
  const sortedServices = userLocation
    ? [...filteredServices].sort((a, b) => {
        const distanceA = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          a.latitude,
          a.longitude
        );

        const distanceB = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          b.latitude,
          b.longitude
        );

        return distanceA - distanceB;
      })
    : [];

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Emergency Help
          </h1>

          <p className="mt-2 text-gray-600">
            Find nearby hospitals, police stations,
            blood banks and ambulance services.
          </p>
        </div>

        {/* Emergency Helpline */}
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-3">
            <Phone className="text-red-600" />

            <div>
              <h3 className="font-bold text-red-700">
                Emergency Helpline: 112
              </h3>

              <p className="text-sm text-red-600">
                Call directly in an emergency.
              </p>

              <a
                href="tel:112"
                className="mt-1 inline-block text-sm font-semibold text-red-700 underline"
              >
                Call 112
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Services Heading */}
        <div className="mb-4 flex items-center gap-2">
          <MapPinned className="text-amber-600" />

          <h2 className="text-xl font-semibold">
            Find Nearby Services
          </h2>
        </div>

        {/* Location Loading */}
        {isLoading && (
          <p className="rounded-lg bg-white p-6 text-center text-gray-600">
            Getting your current location...
          </p>
        )}

        {/* Location Error */}
        {isError && (
          <p className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {isError}
          </p>
        )}

        {/* Map and Service Cards */}
        {userLocation && (
          <>
            <p className="mb-3 text-sm text-green-700">
              Your current location has been detected.
            </p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-start">

              {/* LEFT SIDE: MAP */}
              <div className="min-w-0">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Emergency Services Map
                </h3>

                <EmergencyMap
                  latitude={userLocation.latitude}
                  longitude={userLocation.longitude}
                  emergencyServices={emergencyServices}
                  selectedServiceKey={selectedServiceKey}
                  onSelectService={setSelectedServiceKey}
                />

                {/* Map Legend */}
                <div className="mt-4 flex flex-wrap gap-4 rounded-xl bg-white p-4 shadow-sm">
                  {[
                    { label: "Your Location", color: "bg-sky-500" },
                    { label: "Hospital", color: "bg-red-600" },
                    { label: "Police", color: "bg-blue-600" },
                    { label: "Blood Bank", color: "bg-purple-600" },
                    { label: "Ambulance", color: "bg-orange-600" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`h-3 w-3 rounded-full ${item.color}`}
                      />

                      <span className="text-xs text-gray-700">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: SERVICE CARDS */}
              <div className="min-w-0">

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Nearby Services
                  </h3>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    {sortedServices.length} Found
                  </span>
                </div>

                {/* Category Filters */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {categoryOptions.map((category) => {
                    const Icon = category.icon;

                    const isActive =
                      selectedCategory === category.value;

                    return (
                      <button
                        key={category.value}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category.value);
                          setSelectedServiceKey(null);
                        }}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "bg-white text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <Icon size={14} />
                        {category.label}
                      </button>
                    );
                  })}
                </div>

                {/* Scrollable Service Cards */}
                <div className="max-h-[620px] space-y-3 overflow-y-auto pr-2">

                  {/* Services Loading */}
                  {isServicesLoading && (
                    <p className="rounded-lg bg-white p-6 text-center text-gray-600">
                      Finding nearby emergency services...
                    </p>
                  )}

                  {/* Services Error */}
                  {servicesError && (
                    <p className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                      {servicesError}
                    </p>
                  )}

                  {/* Service List */}
                  {!isServicesLoading &&
                    !servicesError &&
                    (sortedServices.length > 0 ? (
                      sortedServices.map((service) => {
                        const distance = calculateDistance(
                          userLocation.latitude,
                          userLocation.longitude,
                          service.latitude,
                          service.longitude
                        );

                        const style =
                          categoryStyles[service.category];

                        const serviceKey =
                          `${service.category}-${service.id}`;

                        const isSelected =
                          selectedServiceKey === serviceKey;

                        return (
                          <div
                            key={serviceKey}
                            className={`rounded-xl border bg-white p-4 transition ${
                              isSelected
                                ? "border-amber-500 shadow-md ring-1 ring-amber-200"
                                : "border-gray-200 shadow-sm hover:border-gray-300"
                            }`}
                          >
                            {/* Card Selection */}
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedServiceKey(serviceKey)
                              }
                              className="w-full text-left"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  <div className="rounded-lg bg-gray-100 p-2">
                                    <MapPin
                                      size={20}
                                      className="text-gray-700"
                                    />
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-gray-900">
                                      {service.name}
                                    </h4>

                                    <span
                                      className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-medium ${style.color}`}
                                    >
                                      {style.label}
                                    </span>
                                  </div>
                                </div>

                                <span className="whitespace-nowrap text-xs font-semibold text-green-700">
                                  {distance.toFixed(2)} km
                                </span>
                              </div>

                              {service.address && (
                                <p className="mt-3 text-sm text-gray-500">
                                  {service.address}
                                </p>
                              )}

                              {isSelected && (
                                <p className="mt-2 text-xs font-semibold text-amber-700">
                                  Selected on map
                                </p>
                              )}
                            </button>

                            {/* Phone Number */}
                            <div className="mt-3 border-t border-gray-100 pt-3">
                              {service.phone ? (
                                <a
                                  href={`tel:${service.phone}`}
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
                                >
                                  <Phone size={15} />
                                  {service.phone}
                                </a>
                              ) : (
                                <p className="text-xs text-gray-400">
                                  Phone number not available
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      !isServicesLoading &&
                      !servicesError && (
                        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                          <MapPinned
                            size={30}
                            className="mx-auto mb-3 text-gray-400"
                          />

                          <p className="font-medium text-gray-700">
                            No services found
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Try selecting another category.
                          </p>
                        </div>
                      )
                    ))}
                </div>
              </div>
            </div>
          </>
        )}

        <p className="mt-6 text-xs text-gray-500">
          Service listings are based on OpenStreetMap data. Details and
          phone numbers may be incomplete or outdated. In an immediate
          emergency, call 112.
        </p>
      </div>
    </section>
  );
};

export default EmergencyHelp;
