import { useState } from "react";

import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Avatar,
  Chip,
  Card,
} from "@mui/material";

import { Search, Plus } from "lucide-react";

import { campaigns } from "../../services/json/campaign.json";

const Campaigns = () => {
  const [search, setSearch] = useState("");

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.title.toLowerCase().includes(search.toLowerCase()) ||
      campaign.category.toLowerCase().includes(search.toLowerCase()),
  );

  const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

  return (
    <Container maxWidth="xl">
      {/* Header */}
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
          <Typography variant="h5">Campaigns</Typography>

          <Typography variant="body2" color="text.secondary">
            View and monitor all campaigns.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Plus size={18} />}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add Campaign
        </Button>
      </Box>

      {/* Search */}
      {/* <Box sx={{ mb: 3 }}>
        <TextField
          size="small"
          placeholder="Search campaigns..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          sx={{ width: { xs: "100%", sm: 350 } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={18} />
                </InputAdornment>
              ),
            },
          }}
        />
    
      </Box> */}

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
  value={search}
  onChange={(event) => setSearch(event.target.value)}
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

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 850 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 700 }}>Image</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Campaign Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Target Amount</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Raised Amount</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.$id} hover>
                  <TableCell>
                    <Avatar
                      src={campaign.image}
                      alt={campaign.title}
                      variant="rounded"
                      sx={{
                        width: 60,
                        height: 50,
                        borderRadius: 2,
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {campaign.title}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={campaign.category}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell>{formatINR(campaign.targetAmount)}</TableCell>

                  <TableCell>
                    <Typography color="success.main" sx={{ fontWeight: 600 }}>
                      {formatINR(campaign.raisedAmount)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={campaign.status ? "Active" : "Inactive"}
                      size="small"
                      color={campaign.status ? "success" : "default"}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                  <Typography color="text.secondary">
                    No campaigns found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Campaigns;
