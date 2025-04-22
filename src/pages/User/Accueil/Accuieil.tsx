import HeaderClient from '../../../Components/header/HeaderClient'
import Home from './Home'

type Props = {}

export default function Accuieil({}: Props) {
  return (
    <>
      <HeaderClient />
      <Home />
    </>
  )
}