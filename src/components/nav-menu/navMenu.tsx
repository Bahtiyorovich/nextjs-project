import { IconButton, Menu, MenuItem } from "@mui/material"
import { MouseEvent, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import HdIcon from '@mui/icons-material/Hd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import { Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const NavMenu = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  
  const open = Boolean(anchorEl)

  const handleOpen = (evt: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="md:!hidden">
        <Tooltip title="menu">
          <IconButton onClick={handleOpen}>
            <MoreVertIcon sx={{color: 'white'}}/>  
          </IconButton>
        </Tooltip>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem className="d-flex gap-3">
            <CameraOutdoorIcon/>
            <span>Home</span>
          </MenuItem>
          <MenuItem className="d-flex gap-3">
            <HdIcon/>
            <span>Movies</span>
          </MenuItem>
          <MenuItem className="d-flex gap-3">
            <LiveTvIcon/>
            <span>TV Shows</span>
          </MenuItem><MenuItem className="d-flex gap-3">
            <FiberNewIcon/>
            <span>News</span>
          </MenuItem>
        </Menu>
    </div>
  )
}

export default NavMenu