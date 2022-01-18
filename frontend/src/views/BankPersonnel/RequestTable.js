import { Box, IconButton, Typography } from "@material-ui/core";
import SimpleDataTable from "../../components/SimpleDataTable";
import { useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";
import Switch from "../../components/common/Switch";

export default function RequestTable({ onReject, onShowInfo, onApprove }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [remark,setRemark] = useState()
    const data =useSelector(state=>state.bankPersonnel.customers)

    const columns = [
        {
            title: "Request Id",
            field: "request_id",
            align: "center"
        },
        {
            title: "Account Number",
            field: "accountNumber",
            align: "center",
        },
        {
            title: "CRN Number",
            field: "crnNumber",
            align: "center",
            sorting: false,
        },
        {
            title: "Registered By",
            align: "center",
            field: "mobile_number",
            // sorting: true
        },
        {
            title: "Registered On",
            align: "center",
            field: "registeredOn",
        },

        {
            title: "Status",
            align: "center",
            field: "status",
        },
      
        
        {
            title: "Action",
            align: "center",
            sorting: false,
            render: data => {
                return (
                    <Box sx={{
                        display:"flex",
                        
                    }}>
                      <IconButton onClick={() =>onApprove(data)}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton onClick={() =>onReject(data)}>
                            <ClearIcon />
                        </IconButton>
                        <IconButton onClick={() => onShowInfo(data)}>
                            <InfoIcon />
                        </IconButton>
                    </Box>
                );
            }
        }
    ];

  return (
        <Box p={2} >

            <SimpleDataTable
                columns={columns}
                data={data}
                updatePageAndPageSizeAndOrder={(page, pageSize, order) => {
                  
                }}
                options={{
                    // exportButton: true,
                    headerStyle: {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.common.white,
                        fontWeight: "bold"
                    }
                }}
            />

        </Box>
    );
}