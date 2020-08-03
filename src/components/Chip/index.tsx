import React from 'react'
import { Chip } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  /** Text displayed within chip */
  label: React.ReactNode
  /** event fired when click on tag */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  /** event fired when x icon clicked on chip */
  onDelete?: () => void
  /** Element displayed within chip */
  icon?: React.ReactElement
  /** Additional classname on chip */
  className?: string
}

const TestChip = ({ label, onClick, onDelete, icon, className, ...rest }: Props) => {
  return (
    <Chip
      {...rest}
      onClick={onClick}
      onDelete={onDelete}
      label={label}
      size="small"
      className={className}
      avatar={icon}
      deleteIcon={<CloseIcon />}
      variant="outlined"
    />
  )
}

export default TestChip
