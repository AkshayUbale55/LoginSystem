import {
  List,
  ListItem,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from "../icons"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useEffect } from "react";

export const TaskList = (props) => {

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted")
    }
  }, [])
  return (
    <div className="m-auto w-96">
      <List >
        <ListItem ripple={false} className={`py-1 pr-1 pl-4 ${ props.completed ? 'bg-green-200 hover:bg-green-200' : 'bg-transparent'}`}>
          {props.taskName}
          <ListItemSuffix className="flex flex-row">
            <IconButton variant="text"  onClick={() => props.deleteTask(props.id)}>
              <Icon />
            </IconButton>
            <IconButton variant="text" >
              <CheckCircleOutlineRoundedIcon className={`${props.completed ? 'text-green-400' : 'text-inherit'}`} onClick={() => props.updateTask(props.id)} />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      </List>
    </div>

  )
}