import { Box, IconButton, Typography } from "@material-ui/core";
import SimpleDataTable from "../../components/SimpleDataTable";
import { useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";
import Switch from "../../components/common/Switch";
import DialogBox from "../../components/common/DialogBox";
import { makeStyles } from '@material-ui/core/styles';
export default function RequestTable({ onReject, onShowInfo, onApprove }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [remark,setRemark] = useState()
    const [open,setOpen]=useState(false)
    const [selectedData,setSelectedData]=useState()
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
            field: "crn",
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
            field: "insertedDate",
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
                        <IconButton disabled={data.status === "Reject"} onClick={() =>{setOpen(true)
                        setSelectedData(data)}}>
                            <ClearIcon />
                        </IconButton>
                        <IconButton  onClick={() => onShowInfo(data)}>
                            <InfoIcon />
                        </IconButton>
                    </Box>
                );
            }
        }
    ];

    const BankPersonnelTableStyle=makeStyles({
        table:{
            width:"90vw",
            maxHeight:"none"
        },
        tableContainer:{
            width:"100vw",
            display:"flex",
            justifyContent:"space-around",
            paddingTop:"5.85vh"
        }
    })
    const classes=BankPersonnelTableStyle()
  return (
        <Box p={2} >

<Box className={classes.tableContainer}>
        <Box className={classes.table}>
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
        </Box>       

<DialogBox 
shouldOpen={open}
dialogText={"You are about to reject this application, Please specify remark for the same."}
onSelect={setOpen}
onChangeRemark = {(event)=>{setRemark(event.target.value)}}
onClickHandler = {()=>{
    onReject(remark,selectedData)
    setOpen(false)
}}/>
        </Box>
    );
}