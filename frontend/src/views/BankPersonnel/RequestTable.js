import { Box, IconButton, Typography } from "@material-ui/core";
import SimpleDataTable from "../../components/SimpleDataTable";
import { useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";
import Switch from "../../components/common/Switch";

export default function RequestTable({ filter, onShowInfo, onSettings }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [remark,setRemark] = useState()
    const data = [
        { reqId: 1, accountNumber: 1001000001, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: undefined,status:null },
        { reqId: 2, accountNumber: 1001000002, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:"Approved" },
        { reqId: 3, accountNumber: 1001000003, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:"Rejected"},
        { reqId: 4, accountNumber: 1001000004, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:null },
        { reqId: 5, accountNumber: 1001000005, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:null},
    ]

    const columns = [
        {
            title: "Request Id",
            field: "reqId",
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
            field: "mobileNumber",
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
                    <Box>
                      <IconButton onClick={() =>{}}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton onClick={() =>{}}>
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