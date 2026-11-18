import ContactForm from "../components/ContactUs/ContactForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import WriteToUs from "../components/ContactUs/WriteToUs";

const Contact = () => {
  return (
    <Box sx={{  py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>

          <h2 className="mt-3 font-[Fredoka] text-3xl font-bold text-neutral-900 sm:text-4xl">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <Typography color="text.secondary">
            We'd love to hear from you. Let's create positive change together.
          </Typography>
        </Box>

        <Grid container sx={{spacing:3, alignItems:"stretch"}}>
          <Grid size={{ xs: 12, md: 5 }}>
            <WriteToUs />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 4,
                p: { xs: 3, sm: 4, md: 5 },
                height: "100%",
              }}
            >
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
