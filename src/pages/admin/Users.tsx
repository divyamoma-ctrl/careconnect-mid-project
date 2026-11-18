

import {
  Box,
  Chip,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";

const users = [
  {
    $id: "user-1",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "9876543210",
    role: "Donor",
    status: "active",
  },
  {
    $id: "user-2",
    name: "Ananya Das",
    email: "ananya@gmail.com",
    phone: "9876543211",
    role: "Volunteer",
    status: "active",
  },
  {
    $id: "user-3",
    name: "Rahul Roy",
    email: "rahul@gmail.com",
    phone: "9876543212",
    role: "Donor",
    status: "inactive",
  },
];

const AdminUsers = () => {
  return (
    <Container maxWidth="xl">
      {/* Header */}
      <Box sx={{mb:3}}>
        <Typography variant="h5">
          Users
        </Typography>

        <Typography variant="body2" color="text.secondary">
          View and manage registered users.
        </Typography>
      </Box>

      {/* Users Table */}
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
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "action.hover" }}>
              <TableCell sx={{ fontWeight: 700 }}>User</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.$id} hover>
                <TableCell>
                  <Box sx={{display:"flex", alignItems:"center", gap:1.5}}>
                    <Avatar
                      sx={{
                        width: 38,
                        height: 38,
                        bgcolor: "primary.main",
                        fontSize: 14,
                      }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>

                    <Typography variant="body2" sx={{fontWeight:600}}>
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.phone}</TableCell>

                <TableCell>
                  <Chip
                    label={user.role}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={user.status === "active" ? "Active" : "Inactive"}
                    size="small"
                    color={user.status === "active" ? "success" : "default"}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminUsers;