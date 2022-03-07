import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RequestTable from './RequestTable';
import MoreInfo from './MoreInfo';
import { useDispatch,useSelector } from 'react-redux';
import { DoGetCustomerDataAction, DoUpdateKYCStatusAction } from '../../redux/actions/bankPersonnelAction'
import { Box} from '@material-ui/core';
import { CallReceived } from '@material-ui/icons';
export default function BankPersonnel() {
  const [showInfo, setShowInfo] = useState(false)
  const [editData, setEditData] = useState()
  const dispatch = useDispatch()
  const handleCloseMoreInfo = () => {
    setShowInfo(false)
  }
  useEffect(() => {
    dispatch(DoGetCustomerDataAction({ key: "fetch_customer_data" }))
  }, [])
  const BankPersonnelStyles = makeStyles({
    statCard: {
      width: "22.9vw",
      height: "9.9vh",
      backgroundColor: "#F5F5F5",
      borderRadius: "13px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      fontFamily: "Hind Vadodara",
      fontWeight: "bold",
      fontSize: "1.8vw",
      lineHeight: "52px",
    },
    stats: {
      display: "flex",
      justifyContent: "space-around",
      width: "98vw",
    }
  })
  const classes = BankPersonnelStyles()
  const current = new Date();
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }
  const date = `${current.getDate()}  ${months[current.getMonth()+1]} ${current.getFullYear()}`;
  const data =useSelector(state=>state.bankPersonnel.customers)
  const Calc=(arr,stat)=>{
    let cnt=0
    arr.map((i)=>{
      if(i.status==stat){
        cnt=cnt+1
      }
    })
    return cnt
  }
  return (
    <Box className='BankPersonnelContent' style={{
      marginLeft:"-19vw"
    }}>
      <MoreInfo open={showInfo} handleClose={handleCloseMoreInfo} userSpecificData={editData} />
      <Box className='BankPersonnelContent__Stats' class={classes.stats}>
        <Box className={classes.statCard + " BankPersonnelContent__StatCard"} >

          Pending Requests
          <Box sx={{
            display: 'flex',
            backgroundColor: "#ED2024",
            width: "2px",
            height: "4vh"
          }} className='Navigation__Divider1'>
          </Box>
          <Box>
          {Calc(data,"Pending")}
          </Box>
        </Box>
        <Box className={classes.statCard + " BankPersonnelContent__StatCard"} >
          Accepted Requests
          <Box sx={{
                    display:'flex',
                    backgroundColor:"#ED2024",
                    width:"2px",
                    height:"4vh"
                    }} className='Navigation__Divider1'>        
        </Box>
        <Box>
          {Calc(data,"Approve")}
          </Box>
        </Box>
        <Box className={classes.statCard + " BankPersonnelContent__StatCard"} >
          Rejected Requests

          <Box sx={{
                    display:'flex',
                    backgroundColor:"#ED2024",
                    width:"2px",
                    height:"4vh"
                    }} className='Navigation__Divider1'>        
        </Box>
        {Calc(data,"Reject")}
        </Box>
        <Box className={classes.statCard + " BankPersonnelContent__StatCard"} >{date}
          <Box sx={{
            display: 'flex',
            backgroundColor: "#ED2024",
            width: "2px",
            height: "4vh"
          }} className='Navigation__Divider1'>
          </Box>
          <Box>
            {current.getHours()} : {current.getMinutes()}
          </Box>
        </Box>

      </Box>
      <RequestTable
        onShowInfo={(row) => {
          console.log(row)
          setEditData(row)
          setShowInfo(true)
        }}
        onApprove={(row) => {
          let data = {
            rejectionReason: "NA",
            status: "Approve",
            RequestId: row.request_id
          }
          dispatch(DoUpdateKYCStatusAction({ userData: data, key: "user_request_approve" }))
        }}
        onReject={(remark, row) => {
          let data = {
            rejectionReason: remark,
            status: "Reject",
            RequestId: row.request_id
          }
          dispatch(DoUpdateKYCStatusAction({ userData: data, key: "user_request_approve" }))
        }} />
    </Box>
  );
}