import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RequestTable from './RequestTable';

export default function BankPersonnel() {
  return (
    <Paper >
        <RequestTable />
    </Paper>
  );
}