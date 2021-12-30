import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RequestTable from './RequestTable';
import MoreInfo from './MoreInfo';
export default function BankPersonnel() {
  const [showInfo, setShowInfo] = useState(false)
  const [editData, setEditData] = useState()

  const handleCloseMoreInfo = () => {
    setShowInfo(false)
  }
  return (
    <Paper >
      <MoreInfo open={showInfo} handleClose={handleCloseMoreInfo} userSpecificData={editData} />
      <RequestTable
        onShowInfo={(row) => {
          console.log(row)
          setEditData(row)
          setShowInfo(true)
        }} />
    </Paper>
  );
}