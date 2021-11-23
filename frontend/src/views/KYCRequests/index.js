import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UserDetailsDialog from './KYCDetailsDialog';
import RejectKYCReason from './RejectKYCDialog';
import DataTable from '../../components/DataTable';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';

let handleStateFunc, setSelectedUserFunc, setApproveKYCFunc;
const columns = [
  {
    id: 'reqId', label: 'ID', sortable: true, align: 'left',
    component: ({ userData }) => (
      <Link
        component="button"
        variant="body2"
        style={{ "color": "#0072E5" }}
        underline="always"
        onClick={() => {
          setSelectedUserFunc(userData);
          handleStateFunc('detailsDialog', true);
        }}
      >
        {userData.reqId}
      </Link>
    )
  },
  {
    id: 'accountNumber', label: 'Account Number', sortable: true, align: 'center'
  },
  {
    id: 'crnNumber', label: 'CRN Number', sortable: true, align: 'right'
  },
  {
    id: 'registeredBy', label: 'Registered By', sortable: true, align: 'right'
  },
  {
    id: 'registeredOn', label: 'Registered On', sortable: true, align: 'right'
  },
  {
    id: 'status', label: 'Status', sortable: true, align: 'right'
  },
  {
    id: 'actions',
    label: 'Actions',
    sortable: false,
    component: ({ userData }) => (
      <>
        <Tooltip title="Approve">
          <IconButton
            onClick={() => {
              setSelectedUserFunc(userData);
              setApproveKYCFunc(true);
            }}
            disabled={userData.status != "Pending"}
            style={{ padding: 0, marginRight: 16, color: userData.status === "Pending" && "#028b1a" }}
          >
            <CheckCircleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Reject">
          <IconButton
            onClick={() => {
              setSelectedUserFunc(userData);
              handleStateFunc('rejectDialog', true);
            }}
            color="secondary"
            disabled={userData.status != "Pending"}
            style={{ padding: 0 }}
          >
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </>
    )
  }
];

function createData(reqId, name, panNumber, adharNumber, mobile, email, houseNo, address_line_1, address_line_2, city, landmark) {
  return { reqId, status: "Pending", registeredBy: name, registeredOn: new Date().toLocaleString(), accountNumber: 1001000001, crnNumber: panNumber, mobileNumber: mobile, adharNumber, registeredMobile: mobile, panNumber, house_no: houseNo, address_line_1: address_line_1, address_line_2: address_line_2, city: city, landmark: landmark, adharPhotoUrl: "blob:http://localhost:3000/b44aff41-8b90-48a3-ae87-b7e2804ee62d", userPicUrl: "blob:http://localhost:3000/afa44fea-632a-4ff7-9726-2f38878829c3" };
}
var dataRows = []
//let userList = localStorage.getItem('userList');
function UpdateUserList() {
  dataRows = []
  const userList = useSelector((state) => state.auth && state.auth.userlist || [])
  console.log(userList)
  //let userArray=JSON.parse(userList);

  for (let i = 0; i < userList.length; i++) {
    dataRows.push(
      createData(
        userList[i]["accountNumber"],
        userList[i]["registeredMobile"],
        userList[i]["panNumber"],
        userList[i]["adharNumber"],
        userList[i]["mobileNumber"],
        "dummy mail",
        userList[i]["house_no"],
        userList[i]["address_line_1"],
        userList[i]["address_line_2"],
        userList[i]["city"],
        userList[i]["landmark"]
      )
    )
  }
}
//console.log(userArray[0])
/*
let data1=userArray.map((i)=>createData(
  userArray[i]["accountNumber"],
  userArray[i]["registeredMobile"],
  userArray[i]["panNumber"],
  userArray[i]["adharNumber"],
  userArray[i]["mobileNumber"],
  "dummy mail"  
  ))
 */
/*
  var dataRows=[]
for(let i=0;i<userArray.length;i++){
  dataRows.push(
    createData(
      userArray[i]["accountNumber"],
      userArray[i]["registeredMobile"],
      userArray[i]["panNumber"],
      userArray[i]["adharNumber"],
      userArray[i]["mobileNumber"],
      "dummy mail"  
      )
  )
}*/
// console.log(data1)
/*const dataRows = [
  createData(1, 'John Doe', 'INQPI3427M', '132417133454', '7305606399', 'john.doe@gmail.com'),
  createData(2, 'John Doe', 'CNQPI3427M', '140350033465', '7305606399', 'john.doe@gmail.com'),
  createData(3, 'John Doe', 'ITQPI3427M', '604839733445', '7305606399', 'john.doe@gmail.com'),
  createData(4, 'John Doe', 'USQPI3427M', '327167433443', '7305606399', 'john.doe@gmail.com'),
  createData(5, 'John Doe', 'CAQPI3427M', '376021033434', '7305606399', 'john.doe@gmail.com'),
  createData(6, 'John Doe', 'AUQPI3427M', '254754003457', '7305606399', 'john.doe@gmail.com'),
  createData(7, 'John Doe', 'DEQPI3427M', '830192003423', '7305606399', 'john.doe@gmail.com'),
  createData(8, 'John Doe', 'IEQPI3427M', '485700073958', '7305606399', 'john.doe@gmail.com'),
  createData(9, 'John Doe', 'MXQPI3427M', '126577693421', '7305606399', 'john.doe@gmail.com'),
  createData(10, 'John Doe', 'JPQPI3427M', '126317003407', '7305606399', 'john.doe@gmail.com'),
  createData(11, 'John Doe', 'FRQPI3427M', '670220003436', '7305606399', 'john.doe@gmail.com'),
  createData(12, 'John Doe', 'GBQPI3427M', '675457573427', '7305606399', 'john.doe@gmail.com'),
  createData(13, 'John Doe', 'RUQPI3427M', '146793743344', '7305606399', 'john.doe@gmail.com'),
  createData(14, 'John Doe', 'NGQPI3427M', '200962441347', '7305606399', 'john.doe@gmail.com'),
  createData(15, 'John Doe', 'BRQPI3427M', '210147212345', '7305606399', 'john.doe@gmail.com'),
  createData(
  userArray[0]["accountNumber"],
  userArray[0]["registeredMobile"],
  userArray[0]["panNumber"],
  userArray[0]["adharNumber"],
  userArray[0]["mobileNumber"],
  "dummy mail"  
  )
];
*/
const useStyles = makeStyles({
  root: {
    // width: '60%',
  }
});
export default function KYCRequests() {
  const classes = useStyles();
  const [rows, setRows] = useState(dataRows)
  const [selectedUser, setSelectedUser] = useState({});
  const [approveKYC, setApproveKYC] = useState(false);
  const [state, setState] = useState({
    detailsDialog: false,
    rejectDialog: false,
    rejectComment: ''
  })

  useEffect(() => {
    handleStateFunc = handleState;
    setSelectedUserFunc = setSelectedUser;
    setApproveKYCFunc = setApproveKYC;
    { }
    return () => {
      handleStateFunc = setSelectedUserFunc = setApproveKYCFunc = null;
    }
  }, [])

  //Handle approve KYC
  useEffect(() => {
    if (approveKYC) {
      handleApproveKYC();
    }
  }, [approveKYC])

  const handleState = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
  }

  const handlePageChange = () => { }

  const handlePageRowsChange = () => { }

  const closeDetailsDialog = () => {
    handleState('detailsDialog', false);
  }

  const closeRejectDialog = () => {
    setState({ ...state, rejectDialog: false, rejectComment: '' });
  }

  const handleApproveKYC = () => {
    changeKYCStatus('Approved');
    setApproveKYC(false);
  }

  const submitComment = (comment) => {
    changeKYCStatus('Rejected');
    setState({ ...state, rejectComment: comment, rejectDialog: false });
  }

  const changeKYCStatus = status => {
    const index = rows.findIndex(item => item.reqId === selectedUser.reqId);
    setRows([
      ...rows.slice(0, index),
      Object.assign({}, rows[index], { status: status }),
      ...rows.slice(index + 1)
    ]);
  }

  return (
    <Paper className={classes.root}>
      {UpdateUserList()}
      <DataTable
        columns={columns}
        data={rows}
        handlePageChange={handlePageChange}
        handlePageRowsChange={handlePageRowsChange}
      />
      <UserDetailsDialog
        open={state.detailsDialog}
        userData={selectedUser}
        closeDialog={closeDetailsDialog}
      />
      <RejectKYCReason
        open={state.rejectDialog}
        closeDialog={closeRejectDialog}
        submitComment={submitComment}
      />
    </Paper>
  );
}