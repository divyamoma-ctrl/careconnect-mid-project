


import { Box, Typography } from "@mui/material";
import {
  HeartHandshake,
  MessageCircleHeart,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";

const WriteToUs = () => {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: { xs: "auto", md: 600 },
        p: { xs: 3, sm: 4, md: 5 },
        borderRadius: 4,
        background:
          "linear-gradient(145deg, #FEF08A 0%, #FACC15 55%, #EAB308 100%)",
        color: "#171717",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "35px solid rgba(255,255,255,0.22)",
          top: -85,
          right: -75,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            mb: 3,
            borderRadius: 10,
            bgcolor: "rgba(255,255,255,0.55)",
          }}
        >
          <HeartHandshake size={18} />
          <Typography
            variant="caption"
            sx={{  fontWeight:700,
            letterSpacing:1.2}}
          
          >
            LET'S CONNECT
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            lineHeight: 1.15,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.3rem" },
          }}
        >
          Write to Us.
          <br />
          <Box component="span" sx={{ color: "#FFFFFF" }}>
            We're Listening.
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 420,
            color: "#404040",
            lineHeight: 1.9,
            mb: 4,
          }}
        >
          Every message matters. Whether you have a question, want to
          volunteer, explore a partnership, or learn about our work,
          we'd love to hear from you. Together, we can make a
          meaningful difference in the lives of women and children.
        </Typography>

        {/* Contact highlights */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box
              sx={{
                minWidth: 46,
                height: 46,
                borderRadius: 2.5,
                bgcolor: "#171717",
                color: "#FACC15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageCircleHeart size={23} />
            </Box>

            <Box>
              <Typography  sx={{ fontWeight:700,mb: 0.5 }}>
                Your Voice Matters
              </Typography>
              <Typography variant="body2" color="#525252">
                Share your questions, ideas, or feedback with our team.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box
              sx={{
                minWidth: 46,
                height: 46,
                borderRadius: 2.5,
                bgcolor: "#171717",
                color: "#FACC15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HandHeart size={23} />
            </Box>

            <Box>
              <Typography sx={{  fontWeight:700, mb: 0.5 }}>
                Be Part of the Change
              </Typography>
              <Typography variant="body2" color="#525252">
                Discover opportunities to support our women and child
                welfare initiatives.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom note */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 5,
          pt: 2.5,
          borderTop: "1px solid rgba(23,23,23,0.18)",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight:600,}}>
          Every connection can inspire change.
        </Typography>
        <ArrowUpRight size={19} />
      </Box>
    </Box>
  );
};

export default WriteToUs;
