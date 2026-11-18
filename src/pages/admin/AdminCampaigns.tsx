
// import { useState } from "react";

// import {
//   Box,
//   Button,
//   Container,
//   InputAdornment,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
//   Avatar,
//   Chip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
// } from "@mui/material";

// import { Search, Plus, X } from "lucide-react";

// import { campaigns } from "../../services/json/campaign.json";
// import CampaignDialogForm from "../../components/campains/CampaignDialogForm";

// const AdminCampaigns = () => {
//   const [search, setSearch] = useState("");
//   const [openDialog, setOpenDialog] = useState(false);

//   const filteredCampaigns = campaigns.filter(
//     (campaign) =>
//       campaign.title.toLowerCase().includes(search.toLowerCase()) ||
//       campaign.category.toLowerCase().includes(search.toLowerCase()),
//   );

//   const formatINR = (amount: number) =>
//     `₹${amount.toLocaleString("en-IN")}`;

//   return (
//     <Container maxWidth="xl">
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: { xs: "flex-start", sm: "center" },
//           flexDirection: { xs: "column", sm: "row" },
//           gap: 2,
//           mb: 3,
//         }}
//       >
//         <Box>
//           <Typography variant="h5" fontWeight={700}>
//             Campaigns
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             View and monitor all campaigns.
//           </Typography>
//         </Box>

//         <Button
//           variant="contained"
//           startIcon={<Plus size={18} />}
//           onClick={() => setOpenDialog(true)}
//           sx={{
//             borderRadius: 2,
//             textTransform: "none",
//             fontWeight: 600,
//           }}
//         >
//           Add Campaign
//         </Button>
//       </Box>

//       {/* Search */}
//       <Box sx={{ mb: 3 }}>
//         <TextField
//           size="small"
//           placeholder="Search campaigns..."
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//           sx={{ width: { xs: "100%", sm: 350 } }}
//           slotProps={{
//             input: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search size={18} />
//                 </InputAdornment>
//               ),
//             },
//           }}
//         />
//       </Box>

//       {/* Campaign Table */}
//       <TableContainer
//         component={Paper}
//         elevation={0}
//         sx={{
//           border: 1,
//           borderColor: "divider",
//           borderRadius: 3,
//           overflowX: "auto",
//         }}
//       >
//         <Table sx={{ minWidth: 850 }}>
//           <TableHead>
//             <TableRow sx={{ bgcolor: "action.hover" }}>
//               <TableCell sx={{ fontWeight: 700 }}>Image</TableCell>
//               <TableCell sx={{ fontWeight: 700 }}>
//                 Campaign Name
//               </TableCell>
//               <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
//               <TableCell sx={{ fontWeight: 700 }}>
//                 Target Amount
//               </TableCell>
//               <TableCell sx={{ fontWeight: 700 }}>
//                 Raised Amount
//               </TableCell>
//               <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <TableRow key={campaign.$id} hover>
//                   <TableCell>
//                     <Avatar
//                       src={campaign.image}
//                       alt={campaign.title}
//                       variant="rounded"
//                       sx={{
//                         width: 60,
//                         height: 50,
//                         borderRadius: 2,
//                       }}
//                     />
//                   </TableCell>

//                   <TableCell>
//                     <Typography variant="body2" fontWeight={600}>
//                       {campaign.title}
//                     </Typography>
//                   </TableCell>

//                   <TableCell>
//                     <Chip
//                       label={campaign.category}
//                       size="small"
//                       variant="outlined"
//                     />
//                   </TableCell>

//                   <TableCell>
//                     {formatINR(campaign.targetAmount)}
//                   </TableCell>

//                   <TableCell>
//                     <Typography
//                       color="success.main"
//                       fontWeight={600}
//                     >
//                       {formatINR(campaign.raisedAmount)}
//                     </Typography>
//                   </TableCell>

//                   <TableCell>
//                     <Chip
//                       label={
//                         campaign.status === "active"
//                           ? "Active"
//                           : "Completed"
//                       }
//                       size="small"
//                       color={
//                         campaign.status === "active"
//                           ? "success"
//                           : "default"
//                       }
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                   <Typography color="text.secondary">
//                     No campaigns found.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Campaign Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         fullWidth
//         maxWidth="sm"
//       >
//         <DialogTitle
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             fontWeight: 700,
//           }}
//         >
//           Add New Campaign

//           <IconButton onClick={() => setOpenDialog(false)}>
//             <X size={20} />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent dividers>
//           <CampaignDialogForm
//             onClose={() => setOpenDialog(false)}
//           />
//         </DialogContent>
//       </Dialog>
//     </Container>
//   );
// };

// export default AdminCampaigns;





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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";

import { Search, Plus, X, Edit, Trash2 } from "lucide-react";

import { toast } from "sonner";

import { campaigns as initialCampaigns } from "../../services/json/campaign.json";

import CampaignDialogForm from "../../components/campains/CampaignDialogForm";

import type { CampaignFormDataType } from "../../types/interface/campaignDialogForm.interface";

type CampaignType = (typeof initialCampaigns)[number];

const AdminCampaigns = () => {
  const [campaigns, setCampaigns] = useState<CampaignType[]>(initialCampaigns);

  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  const [editingCampaign, setEditingCampaign] =
    useState<CampaignType | null>(null);

  const [deleteCampaign, setDeleteCampaign] =
    useState<CampaignType | null>(null);

  // Search campaigns
  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.title.toLowerCase().includes(search.toLowerCase()) ||
      campaign.category.toLowerCase().includes(search.toLowerCase()),
  );

  // Format currency
  const formatINR = (amount: number) =>
    `₹${amount.toLocaleString("en-IN")}`;

  // Open Add Dialog
  const handleAddCampaign = () => {
    setEditingCampaign(null);
    setOpenDialog(true);
  };

  // Open Edit Dialog
  const handleEditCampaign = (campaign: CampaignType) => {
    setEditingCampaign(campaign);
    setOpenDialog(true);
  };

  // Close Add / Edit Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCampaign(null);
  };

  // Add or Update Campaign
  const handleSaveCampaign = (
    data: CampaignFormDataType,
    image: File | null,
  ) => {
    if (editingCampaign) {
      // Update existing campaign
      setCampaigns((previousCampaigns) =>
        previousCampaigns.map((campaign) =>
          campaign.$id === editingCampaign.$id
            ? {
                ...campaign,
                ...data,
                image: image
                  ? URL.createObjectURL(image)
                  : campaign.image,
              }
            : campaign,
        ),
      );

      toast.success("Campaign updated successfully!");
    } else {
      // Add new campaign
      const newCampaign: CampaignType = {
        $id: Date.now().toString(),
        ...data,
        image: image ? URL.createObjectURL(image) : "",
      };

      setCampaigns((previousCampaigns) => [
        newCampaign,
        ...previousCampaigns,
      ]);

      toast.success("Campaign added successfully!");
    }

    handleCloseDialog();
  };

  // Delete Campaign
  const handleDeleteCampaign = () => {
    if (!deleteCampaign) return;

    setCampaigns((previousCampaigns) =>
      previousCampaigns.filter(
        (campaign) => campaign.$id !== deleteCampaign.$id,
      ),
    );

    toast.success("Campaign deleted successfully!");
    setDeleteCampaign(null);
  };

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
          <Typography variant="h5" >
            Campaigns
          </Typography>

          <Typography variant="body2" color="text.secondary">
            View and monitor all campaigns.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Plus size={18} />}
          onClick={handleAddCampaign}
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
      <Box sx={{ mb: 3 }}>
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
      </Box>

      {/* Campaign Table */}
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
        <Table sx={{ minWidth: 950 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 700 }}>Image</TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Campaign Name
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Target Amount
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>
                Raised Amount
              </TableCell>

              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>

              <TableCell sx={{ fontWeight: 700 }} align="center">
                Actions
              </TableCell>
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
                    <Typography variant="body2" sx={{fontWeight:600}}>
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

                  <TableCell>
                    {formatINR(campaign.targetAmount)}
                  </TableCell>

                  <TableCell>
                    <Typography color="success.main" sx={{fontWeight:600}}>
                      {formatINR(campaign.raisedAmount)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={
                        campaign.status === "active"
                          ? "Active"
                          : "Completed"
                      }
                      size="small"
                      color={
                        campaign.status === "active"
                          ? "success"
                          : "default"
                      }
                    />
                  </TableCell>

                  {/* Actions */}
                  <TableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 0.5,
                      }}
                    >
                      <Tooltip title="Edit Campaign">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => handleEditCampaign(campaign)}
                        >
                          <Edit size={18} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete Campaign">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => setDeleteCampaign(campaign)}
                        >
                          <Trash2 size={18} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  <Typography color="text.secondary">
                    No campaigns found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add / Edit Campaign Dialog */}
      <Dialog
        open={openDialog}
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
          {editingCampaign ? "Edit Campaign" : "Add New Campaign"}

          <IconButton onClick={handleCloseDialog}>
            <X size={20} />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <CampaignDialogForm
            onClose={handleCloseDialog}
            onSave={handleSaveCampaign}
            initialData={editingCampaign || undefined}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!deleteCampaign}
        onClose={() => setDeleteCampaign(null)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle sx={{fontWeight:700}}>
          Delete Campaign?
        </DialogTitle>

        <DialogContent>
          <Typography color="text.secondary">
            Are you sure you want to delete{" "}
            <strong>{deleteCampaign?.title}</strong>? This action cannot be
            undone.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => setDeleteCampaign(null)}
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteCampaign}
            sx={{ textTransform: "none" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminCampaigns;