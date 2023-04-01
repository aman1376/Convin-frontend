import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import HistoryCard from './HistoryCard'
import { selectAllHistory, clearHistory } from '../features/historySlice'
import { useDispatch, useSelector } from 'react-redux'

const History = () => {
  const [modalComponent, setModal] = useState("");
  const dispatch = useDispatch()
  const historyArr = useSelector(selectAllHistory)
  const handleClearHistory = () => { 
    dispatch(clearHistory());
  }
  return (
    <Box sx={{ position: 'relative', p: '1rem', display: 'flex', flexDirection: 'column' }}>
      <Button onClick={()=>handleClearHistory()} sx={{right:0}}><Typography variant="h6" color='black'>Clear History</Typography></Button>
      <Grid sx={{ height: '100%' ,mt: '1rem', py: '1rem', px: "2rem", alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           historyArr.map((card, index)=>{
                return (
                  <HistoryCard  id={card.id} index={index} key={card.id + index} title={card.title} link={card.link} time={card.now} setModal={setModal} /> /* TODO: time */
                )
           })
        }
      </Grid>
      {modalComponent}
    </Box>
  )
}

export default History