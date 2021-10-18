import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UserDetailsDialog from './KYCDetailsDialog';
import RejectKYCReason from './RejectKYCDialog';
import DataTable from '../../components/DataTable';

let handleStateFunc, handleApproveKYCFunc, setSelectedUserFunc;
const columns = [
  {
    id: 'reqId', label: 'ID', sortable: true, align: 'left'
  },
  {
    id: 'accountNumber', label: 'Account Number', sortable: true, align: 'left'
  },
  {
    id: 'crnNumber', label: 'CRN Number', sortable: true, align: 'center'
  },
  {
    id: 'registeredBy', label: 'Registered By', sortable: true, align: 'right'
  },
  {
    id: 'registeredOn', label: 'Registered On', sortable: true, align: 'center'
  },
  {
    id: 'details',
    label: 'Details',
    sortable: false,
    component: ({ userData }) => {
      return (
        <Tooltip title="View Details">
          <IconButton
            onClick={() => {
              console.log("clicked")
              setSelectedUserFunc(userData);
              handleStateFunc('detailsDialog', true);
            }}
            style={{ padding: 0, color: '#056fcb' }}
          >
            <AssignmentIcon />
          </IconButton>
        </Tooltip>
      )
    }
  },
  {
    id: 'actions',
    label: 'Actions',
    sortable: false,
    component: ({ userData }) => {
      return (
        <>
          <Tooltip title="Approve">
            <IconButton
              onClick={() => {
                setSelectedUserFunc(userData);
                handleApproveKYCFunc();
              }}
              style={{ padding: 0, marginRight: 16, color: '#028b1a' }}
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
              style={{ padding: 0 }}
            >
              <CancelIcon />
            </IconButton>
          </Tooltip>
        </>
      )
    }
  },
];

function createData(reqId, name, panNumber, adharNumber, mobile, email) {
  return { reqId, registeredBy: name, registeredOn: new Date().toLocaleString(),accountNumber: 1001000001, crnNumber:"123456789A", mobileNumber: mobile, adharNumber, registeredMobile: mobile, panNumber, house_no:"Harsh Sagar",address_line_1:"Bhusari Colony",address_line_2:"Kothrud",city:"Pune",landmark:"Right Bhusari Colony",adharPhotoUrl:"blob:http://localhost:3000/b44aff41-8b90-48a3-ae87-b7e2804ee62d",userPicUrl:"blob:http://localhost:3000/afa44fea-632a-4ff7-9726-2f38878829c3"};
}

const rows = [
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
];

const useStyles = makeStyles({
  root: {
    // width: '60%',
  }
});

export default function KYCRequests() {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState({});
  useEffect(() => {
    handleStateFunc = handleState;
    handleApproveKYCFunc = handleApproveKYC;
    setSelectedUserFunc = setSelectedUser;
  }, [])

  const [state, setState] = useState({
    detailsDialog: false,
    rejectDialog: false,
    rejectComment: ''
  })

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
    console.log("KYC Approved");
  }

  const submitComment = (comment) => {
    setState({ ...state, rejectComment: comment, rejectDialog: false });
    console.log("KYC rejected with comment :", comment);
  }

  return (
    <Paper className={classes.root}>
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