import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RequestTable from './RequestTable';
import MoreInfo from './MoreInfo';
import { useDispatch } from 'react-redux';
import { DoGetCustomerDataAction, DoUpdateKYCStatusAction } from '../../redux/actions/bankPersonnelAction'
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
  return (
    <Paper >
      <MoreInfo open={showInfo} handleClose={handleCloseMoreInfo} userSpecificData={editData} />
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
            requestId: row.request_id
          }
          dispatch(DoUpdateKYCStatusAction({ userData: data, key: "user_request_approve" }))
        }}
        onReject={(remark, row) => {
          let data = {
            rejectionReason: remark,
            status: "Reject",
            requestId: row.request_id
          }
          dispatch(DoUpdateKYCStatusAction({ userData: data, key: "user_request_approve" }))
        }} />
    </Paper>
  );
}