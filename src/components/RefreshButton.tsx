import * as React from "react"
import {
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaRedoAlt } from "react-icons/fa"

type RefreshButtonProps = Omit<IconButtonProps, "aria-label">

export const RefreshButton: React.FC<RefreshButtonProps> = (props) => {

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<FaRedoAlt />}
      aria-label={`Refresh`}
      onClick={() => window.location.reload()}
      {...props}
    />
  )
}
