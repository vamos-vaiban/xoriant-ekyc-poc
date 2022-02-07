import { useState, useEffect } from "react";
import MaterialTable from 'material-table';
import { useSelector } from "react-redux";
import { fontWeight } from "@mui/system";

export default function EMSimpleDatatable({
  columns,
  data,
  options,
  count,
  updatePageAndPageSizeAndOrder,
  enableCustomPagination
}) {
  const uiData = useSelector((state) => state.ui);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [defaultpageSize, setdefaultpageSize] = useState(5);
  const [order, setOrder] = useState({ id: -1, direction: "asc" });

  //execute the query whenever the page or page size changes
  useEffect(() => { 
    updatePageAndPageSizeAndOrder(page, pageSize, order);
  }, [page, pageSize, order]);
  return (
    <div style={{
      fontFamily: "Hind Vadodara",
fontStyle: "normal",
fontWeight: "500",
fontSize: "2.1vh",
background:"rgba(235, 235, 235, 0.3)",
borderRadius:"22px 22px 0 0"
    }}>
      
     <MaterialTable 
        // icons={EMIcons}
        title={"KYC Requests"}
        isLoading={uiData.loading}
        totalCount={count}
        onOrderChange={(id, direction) => {
          if (id !== -1) {
            setOrder({ id, direction })
          }
        }}
        options={{
          pageSize: pageSize,
          pageSizeOptions:[defaultpageSize*1,defaultpageSize*2,defaultpageSize*3],
          exportButton: {
            csv: true,
            pdf: false
          },
          ...options,
          exportButton:true,
          exportAllData:true,
          search: true,
          showTitle: false,
          toolbar: true,
          emptyRowsWhenPaging: false,
          showEmptyDataSourceMessage: !uiData.loading,
          draggable : false,
          sorting : true,
         
          headerStyle: {
            backgroundColor: "#ff3300",
            color: "white",
            padding : '7px 14px',
            width:100,
            height:"7.5vh",
            fontWeight:"500",
            fontFamily: "Hind Vadodara",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "2.6vh",
            '&:hover': {
              backgroundColor: 'white',
              opacity: [0.9, 0.8, 0.7],
            },
          },
        }}
        localization={{
          pagination: {
            // labelDisplayedRows:`${page+1}-${Math.floor(count/pageSize+1) }`,

            labelRowsSelect: "",
          },
        }}
        page={page}
        components={{
          Container: "div",
        }}
        onPageChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
          
        }}
        columns={[
        //   {
        //     title: "Sr. No.",
        //     align: "center",
        //     sorting: false,
        //     render: (rowData) => {
        //       return (rowData.tableData.id + 1) + (pageSize * page)
        //     }
        //   },
          ...columns]}
        data={data}
    />
    </div>

  );
}

