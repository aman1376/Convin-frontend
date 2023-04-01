
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import { useSelector, useDispatch } from 'react-redux';
import { allBuckets, addBucket } from '../features/bucketSlice';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js'
import Cards from './Cards'
import {IconButton, Toolbar} from "@mui/material";
import { Close}  from '@mui/icons-material'
import ListItem from './ListItem.jsx'

const Width = 240;

const handleClose = (dispatch, open) => dispatch(toggleDrawer(!open))

function BucketView() {
  const [cards, setCards] = React.useState([]);
  const [active, setActive] = React.useState(-1);
  const [drawerWidth] = React.useState(Width)
  const [deleteCardClicked, rerenderOnce] = React.useState(false)

  const buckets = useSelector(allBuckets)
  const mobileOpen = useSelector(selectToggler)
  const dispatch = useDispatch()

    const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <IconButton onClick={()=>{
          dispatch(addBucket())
        }}>
          <div className='sidebar-header' style={{alignItems:'center',display:'flex'}}>
            <span>Add Buckets</span>
          </div>
        </IconButton>
        <IconButton
            onClick={() => handleClose(dispatch, mobileOpen)}
            sx={{ display: { sm: 'none' }}}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <List>
        {buckets.map((bucket, index) => {
          const bgColor = active === index ? "#2196f3":"";
          if((deleteCardClicked) && (active === index)){
            setCards(bucket.cards)
            rerenderOnce(false);
          }
          return (
              <ListItem rerenderOnce={rerenderOnce} initialEditValue={bucket.initialEdit} key={bucket.id} index={index} bucket={bucket} bgColor={bgColor} setActive={setActive} setCards={setCards} active={active} />
          )
        })}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' ,backgroundColor:'whitesmoke',height:'100vh'}}>
          <Drawer
            variant="permanent"
            sx={{
              margin:'10px 5px 10px 10px',
              border:'2px solid whitesmoke',
              borderRadius:'10px',
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {  width: drawerWidth, position: 'relative', height: '75vh', pb: '6rem', overflowY:'auto',borderRadius:'10px',boxShadow:'0 1px 4px rgba(0, 0, 0, 0.24)' },
            }}
            open
          >
            {drawer}
          </Drawer>
      <Cards rerenderOnce={rerenderOnce} bucketIndex={active} cards={cards} />
    </div>
  );
}

export default BucketView;