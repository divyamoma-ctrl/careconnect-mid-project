
import { useState } from "react";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import {
  Search,
  Eye,
  X,
  Users,
} from "lucide-react";

const volunteerApplications = [
  {
    id: 1,
    name: "Ananya Sharma",
    email: "ananya@gmail.com",
    phone: "9876543210",
    roleTitle: "Weekend Child Tutor & Mentor",
    skills: "Teaching, Communication",
    availability: "Weekends",
    message: "I love teaching children and helping them learn.",
    status: "Pending",
    appliedOn: "2026-11-14",
  },
  {
    id: 2,
    name: "Priya Das",
    email: "priya@gmail.com",
    phone: "9876543211",
    roleTitle: "Digital Storyteller & Campaigner",
    skills: "Content Writing, Social Media",
    availability: "Flexible",
    message: "I want to contribute through digital awareness campaigns.",
    status: "Approved",
    appliedOn: "2026-11-15",
  },
  {
    id: 3,
    name: "Riya Sen",
    email: "riya@gmail.com",
    phone: "9876543212",
    roleTitle: "Pro-Bono Legal Counsel",
    skills: "Legal Research, Documentation",
    availability: "Weekdays",
    message:
      "I am interested in supporting women and children through legal guidance.",
    status: "Pending",
    appliedOn: "2026-11-16",
  },
];

// Application type
interface VolunteerApplication {
  id: number;
  name: string;
  email: string;
  phone: string;
  roleTitle: string;
  skills: string;
  availability: string;
  message: string;
  status: string;
  appliedOn: string;
}

const VolunteerApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [applications, setApplications] =
    useState<VolunteerApplication[]>(volunteerApplications);

  const [selectedApplication, setSelectedApplication] =
    useState<VolunteerApplication | null>(null);

  // Search applications
  const filteredApplications = applications.filter((application) => {
    return (
      application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.roleTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Open details dialog
  const handleViewApplication = (
    application: VolunteerApplication
  ) => {
    setSelectedApplication(application);
  };

  // Close details dialog
  const handleCloseDialog = () => {
    setSelectedApplication(null);
  };

  // Change application status
  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedApplications = applications.map((application) => {
      if (application.id === id) {
        return {
          ...application,
          status: newStatus,
        };
      }

      return application;
    });

    setApplications(updatedApplications);

    // Update selected application inside dialog also
    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({
        ...selectedApplication,
        status: newStatus,
      });
    }
  };

  // Status color
  const getStatusColor = (status: string) => {
    if (status === "Approved") {
      return "success";
    }

    if (status === "Rejected") {
      return "error";
    }

    return "warning";
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>

      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#292524" }}
          >
            Volunteer Applications
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#78716C", mt: 0.5 }}
          >
            View and manage submitted volunteer applications.
          </Typography>
        </Box>

        <Chip
          icon={<Users size={16} />}
          label={`${applications.length} Applications`}
          sx={{
            bgcolor: "#FEF3C7",
            color: "#92400E",
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Search */}
      {/* <Card
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          border: "1px solid #E7E5E4",
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Search by name, email or volunteer role..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} color="#78716C" />
                </InputAdornment>
              ),
            },
          }}
        />
       
      </Card> */}


<Card
  elevation={0}
  sx={{
    p: 2,
    mb: 3,
    border: "1px solid #E7E5E4",
    borderRadius: 2,
    bgcolor: "#FFFFFF",
  }}
>
  {/* Search TextField here */}
  <TextField
  fullWidth
  size="small"
  placeholder="Search..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      bgcolor: "#FFFFFF",
      "& fieldset": {
        borderColor: "#E7E5E4",
      },
      "&:hover fieldset": {
        borderColor: "#D6D3D1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D97706",
      },
    },
  }}
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <Search size={18} color="#78716C" />
        </InputAdornment>
      ),
    },
  }}
/>
</Card>

      {/* Applications Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: "1px solid #E7E5E4",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 850 }}>

          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              {[
                "Applicant",
                "Email",
                "Phone",
                "Volunteer Role",
                "Availability",
                "Applied On",
                "Status",
                "Action",
              ].map((heading) => (
                <TableCell
                  key={heading}
                  sx={{
                    fontWeight: 700,
                    color: "#44403C",
                    whiteSpace: "nowrap",
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((application) => (
                <TableRow key={application.id} hover>

                  <TableCell>
                    <Typography
                      sx={{ fontWeight: 600, color: "#292524" }}
                    >
                      {application.name}
                    </Typography>
                  </TableCell>

                  <TableCell>{application.email}</TableCell>

                  <TableCell>{application.phone}</TableCell>

                  <TableCell sx={{ minWidth: 190 }}>
                    {application.roleTitle}
                  </TableCell>

                  <TableCell>{application.availability}</TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {application.appliedOn}
                  </TableCell>

                  {/* Change Status */}
                  <TableCell>
                    <TextField
                      select
                      size="small"
                      value={application.status}
                      onChange={(event) =>
                        handleStatusChange(
                          application.id,
                          event.target.value
                        )
                      }
                      sx={{ minWidth: 125 }}
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Approved">Approved</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </TextField>
                  </TableCell>

                  {/* View Application */}
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<Eye size={16} />}
                      onClick={() =>
                        handleViewApplication(application)
                      }
                      sx={{
                        textTransform: "none",
                        borderColor: "#D97706",
                        color: "#92400E",
                        "&:hover": {
                          borderColor: "#B45309",
                          bgcolor: "#FFFBEB",
                        },
                      }}
                    >
                      View
                    </Button>
                  </TableCell>

                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 5 }}>
                  <Typography color="text.secondary">
                    No volunteer applications found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </TableContainer>

      {/* Application Details Dialog */}
      <Dialog
        open={selectedApplication !== null}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 700,
          }}
        >
          Application Details

          <IconButton onClick={handleCloseDialog} size="small">
            <X size={20} />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {selectedApplication && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Applicant Name
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.name}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Email Address
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.email}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Phone Number
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.phone}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Applied Volunteer Role
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.roleTitle}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Skills
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.skills || "Not provided"}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Availability
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.availability}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Why do you want to volunteer?
                </Typography>
                <Typography sx={{ lineHeight: 1.7 }}>
                  {selectedApplication.message}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Application Status
                </Typography>
                <Box sx={{ mt: 0.5 }}>
                  <Chip
                    label={selectedApplication.status}
                    color={getStatusColor(selectedApplication.status)}
                    size="small"
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="caption" color="text.secondary">
                  Applied On
                </Typography>
                <Typography variant="h6">
                  {selectedApplication.appliedOn}
                </Typography>
              </Box>

            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            sx={{
              bgcolor: "#D97706",
              textTransform: "none",
              "&:hover": { bgcolor: "#B45309" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default VolunteerApplications;
