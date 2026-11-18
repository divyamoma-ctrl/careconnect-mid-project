import { Box, Chip, Divider, Typography } from "@mui/material";

import { Clock, MapPin } from "lucide-react";

interface VolunteerApplicationDetailsProps {
  role: {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: React.ElementType;
  };
}

const VolunteerApplicationDetails = ({
  role,
}: VolunteerApplicationDetailsProps) => {
  const RoleIcon = role.icon;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Role Header */}
      {/* <Box>
        <Chip
          label="Volunteer Opportunity"
          color="warning"
          size="small"
          sx={{
            fontWeight: 600,
            mb: 1,
          }}
        />

        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "14px",
            bgcolor: "#FEF3C7",
            color: "#92400E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <RoleIcon size={28} />
        </Box>

        <Typography variant="h6"  gutterBottom>
          {role.title}
        </Typography>

        <Chip
          label={role.category}
          variant="outlined"
          size="small"
        />
      </Box> */}

      <Box
        sx={{
          // backgroundColor: "#FFFBEB",

          borderRadius: "12px",
          p: 2,
        }}
      >
        {/* Icon, role title and category */}
        <Box>
          <Chip
            label="Volunteer Opportunity"
            color="warning"
            size="small"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Role Icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                minWidth: 56,
                borderRadius: "14px",
                bgcolor: "#FEF3C7",
                color: "#92400E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RoleIcon size={28} />
            </Box>

            {/* Role Title and Category */}
            <Box>
              <Typography variant="h6" gutterBottom>
                {role.title}
              </Typography>

              <Chip label={role.category} variant="outlined" size="small" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* About the Role */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          About This Opportunity
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {role.description}
        </Typography>
      </Box>

      <Divider />

      {/* Additional Information */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Why Volunteer With Us?
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
          {/* <HeartHandshake size={22} color="#D97706" /> */}

          <Box>
            <Typography sx={{ fontWeight: 600 }} variant="body2">
              Make a Difference
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Contribute your skills towards supporting women and children.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Clock size={22} color="#D97706" />

          <Box>
            <Typography sx={{ fontWeight: 600 }} variant="body2">
              Flexible Opportunities
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Explore opportunities that align with your availability.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <MapPin size={22} color="#D97706" />

          <Box>
            <Typography sx={{ fontWeight: 600 }} variant="body2">
              Community Impact
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Become part of a community working towards positive change.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          bgcolor: "#FFFBEB",
          p: 2,
          borderRadius: 2,
          lineHeight: 1.7,
        }}
      >
        Thank you for your interest in supporting our mission. Submit your
        application and our team will review your details.
      </Typography>
    </Box>
  );
};

export default VolunteerApplicationDetails;
