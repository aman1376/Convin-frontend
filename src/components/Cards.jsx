import React, { useRef, useState } from 'react'
import Card from './Card'
import {Box, Grid, IconButton} from "@mui/material";
import EditCard from './EditCard';
import Modal from "./Modal.jsx";
import { useDispatch } from 'react-redux';
import { addCard } from '../features/bucketSlice';

const Cards = ({cards, bucketIndex, rerenderOnce}) => {
  const dispatch = useDispatch()
  const [modalComponent, setComponent] = useState("")
  const editCardRef = useRef()

  const handleAddcard = () => {
    setComponent(<Modal onClose={() => { setComponent("")}} open={true} content={<EditCard ref={editCardRef} bucketIndex={bucketIndex} />} action={() => {
      const inputs = editCardRef.current.querySelectorAll('input')
      let title = inputs[0].value
      let link = inputs[1].value
      dispatch(addCard({title, link, bucketIndex}))
      rerenderOnce(true)
    }} actionText="Submit" />)
  }
  return (
    <Box sx={{ position: 'relative', flexGrow: 1, p: '1rem', display: 'flex', flexDirection: 'column' }}>
      <Grid sx={{ height: '100%' ,mt: '0.5rem', p: '1rem', alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           cards.map((card, index)=>{
                return (
                    <Card cardId={card.id} rerenderOnce={rerenderOnce} key={card.id} title={card.title} link={card.link} cardIndex={index} bucketIndex={bucketIndex} setModal={setComponent}  />
                )
           })
        }
      </Grid>
      {/* <Modal onClose={() => {}} open={true} content={<VideoPlayer />} action={() => {}} actionText="Submit" /> */}
      {modalComponent}
        {
            bucketIndex !== -1 &&
          <IconButton onClick={()=>handleAddcard(bucketIndex)} color="primary" aria-label="add" sx={{position:'fixed',top:'10px',right:'2.5rem',alignContent:'center',color:'white'}}>
            <div className='Add-Card' style={{display:'flex',alignItems:'center',color:'black',border:'1px', borderRadius:'5px',backgroundColor:'lightgray',boxShadow:' 0 1px 4px rgba(0, 0, 0, 0.24)',padding:'5px'}}>
              <span>Add-Card</span>
            </div>
          </IconButton>
        }
    </Box>
  )
}

export default Cards
