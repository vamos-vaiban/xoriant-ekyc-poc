import { Box, IconButton, Typography } from "@material-ui/core";
import SimpleDataTable from "../../components/SimpleDataTable";
import { useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";
import Switch from "../../components/common/Switch";

export default function RequestTable({ filter, onEdit, onSettings }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [remark,setRemark] = useState()
    const data = [
        { reqId: 1, accountNumber: 1001000001, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:null },
        { reqId: 2, accountNumber: 1001000002, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:"Approved" },
        { reqId: 3, accountNumber: 1001000003, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:"Rejected"},
        { reqId: 4, accountNumber: 1001000004, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:null },
        { reqId: 5, accountNumber: 1001000005, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:null},
    ]
    const [limit, setLimit] = useState(15);
    const [offset, setOffset] = useState(0);
    const [order, setOrder] = useState({ id: -1, direction: "asc" });
    const [sortAscending, setSortAscending] = useState(false);
    const userData = useSelector(state => state.auth)
    //const uiData = useSelector((state) => state.ui);

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
            // render: data => {
            //     return <Typography>{data["group_name"]}</Typography>
            // }
        },
        {
            title: "CRN Number",
            field: "crnNumber",
            align: "center",
            sorting: false,
            // render: data => {
            //     let emails = data["users"]
            //         .map(user => user["email"]).join(", ");
            //     return <>{emails}</>;
            // }
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
            // render: data => {
            //     return <Typography>{data["privacy_type_name"]}</Typography>
            // }
        },

        {
            title: "Status",
            align: "center",
            field: "is_active",
            //customSort: (a, b) => a.is_active - b.is_active,
            render: eventData => {
                return (
                    <Switch
                        status={eventData.status}
                        // isDisabled={!(userData.channel_manage_profile_page)}
                        dialogText={"To reject this KYC request, please enter your comment here."}
                        showTitle={eventData.status == null ? "pending" : eventData.status }
                        onChangeRemark = {(event)=>{setRemark(event.target.value)}}
                        onChange={(status) => {
                            debugger
                            let currentDataId = eventData.reqId
                        data.map((item)=>{
                            if(item.reqId == currentDataId){
                                item.status = status == true? "Approved" : "Reject"
                            }
                        })
                     
                        }}

                    />
                );
            }
        },
      
        
        {
            title: "Action",
            align: "center",
            sorting: false,
            render: data => {
                return (
                    <>
                      <IconButton onClick={() =>{}}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton onClick={() =>{}}>
                            <ClearIcon />
                        </IconButton>
                        {/* <IconButton onClick={() => onEdit(data)} disabled = {!(userData.channel_manage_profile_page)}>
                            <Edit />
                        </IconButton> */}
                    </>
                );
            }
        }
    ];


    const updateData = query => {

        // dispatch(EMDoGetChannelAdminChannelListAction(query));
    };

    // useEffect(() => {
    //     updateData("?");
    // }, []);

    // useEffect(() => {
    //     const query = [];
    //     if (limit !== 0) {
    //         query.push(`limit=${limit}`);
    //     }
    //     if (filter) {
    //         query.push(`search=${filter}`);
    //     }
    //     if (offset !== 0 && !filter) {
    //         query.push(`offset=${offset}`);
    //     }
    //     if (order.id !== -1) {
    //         if (sortAscending === false) {
    //             order.direction = "asc"
    //             query.push(
    //                 `ordering=${order.direction === "desc" ? "-" : ""}${columns[order.id - 1].field
    //                 }`
    //             );
    //             setSortAscending(true)
    //         } else {
    //             order.direction = "desc"
    //             query.push(
    //                 `ordering=${order.direction === "desc" ? "-" : ""}${columns[order.id - 1].field
    //                 }`
    //             );
    //             setSortAscending(false)
    //         }
    //     }
    //     updateData("?" + query.join("&"));
    // }, [limit, filter, offset, order]);

    return (
        <Box p={2} >

            <SimpleDataTable
                columns={columns}
                data={data}
                // count={data["count"] || 0}
                updatePageAndPageSizeAndOrder={(page, pageSize, order) => {
                    // setOffset(page * limit);
                    // setLimit(pageSize);
                    // setOrder(order)
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