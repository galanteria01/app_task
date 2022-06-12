import { Flex } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { RefreshButton } from './RefreshButton'

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'}>
      <RefreshButton />
      <ColorModeSwitcher />
    </Flex>
  )
}

export default Navbar