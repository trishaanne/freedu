import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockSchoolYear } from "../../data/mockDataFreEdu";
import { useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const SchoolYear = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { 
            field: "SchoolYear",
            headername: "School Year", 
            flex: 1, 
        }
    ];

    return (

        <Box m="20px">
            
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant = "h4" color={colors.freeduAccent[600]} fontWeight="bold">
                    School Year
                </Typography>

                <Button variant="contained" startIcon={<AddIcon />} sx={{borderRadius: 50, padding: 1.5, textTransform: 'Capitalize', backgroundColor: colors.freeduAccent[400], color: colors.freeduAccent[800]}}>
                    Add School Year
               </Button>
            </Box>

            <Box 
            m="40px 0 0 0" 
            height="60vh" 
            sx={{ 
                "& .MuiDataGrid-root": {
                    border: "none",
                    borderBottom: "none",
                    backgroundColor: colors.freeduAccent[100],
                    padding: '20px',
                },
                "& .MuiDataGrid-cell": {
                    color: colors.freeduAccent[600],
                },
                "& .name-column--cell": {
                    color: colors.freeduAccent[600],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.freeduAccent[100],
                    color: colors.freeduAccent[600],
                },
                "& .MuiDataGrid-vitualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.freeduAccent[100],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.freeduAccent[600]} !important`,
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: colors.freeduAccent[600],
                    fontWeight: "bolder"
                }
             }}
             >
                <DataGrid 
                    checkboxSelection
                    rows={mockSchoolYear}
                    columns={columns} 
                    components={{ Toolbar: GridToolbar }}
                 />
            </Box>
        </Box>
    );
};

export default SchoolYear;