import {
    List,
    ListItem,
    ListItemSuffix,
    IconButton,
  } from "@material-tailwind/react";
import { Icon } from "../icons"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export const TaskList = (props)=>{
    return (
    <div className="m-auto w-96">
   <List >
    <ListItem ripple={false} className={`py-1 pr-1 pl-4 ${props.completed ? 'bg-green-200 hover:bg-green-200': 'bg-transparent'}`}>
      {props.taskName}
      <ListItemSuffix className="flex flex-row">
        <IconButton variant="text" color="purple-gray" onClick={()=> props.deleteTask(props.id)}>
          <Icon /> 
        </IconButton>
        <IconButton variant="text" color="purple-gray">
        <CheckCircleOutlineRoundedIcon className={`${props.completed ? 'text-green-400': 'text-inherit'}`} onClick={()=> props.updateTask(props.completed)}/>
        </IconButton>
      </ListItemSuffix>
    </ListItem>
  </List>
  </div>

)}