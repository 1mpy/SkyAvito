import { Navigate, Outlet } from 'react-router-dom'
import { Wrapper } from '../../Wrapper/Wrapper'

function ProtectedRoute({ redirectPath = '/login', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={Boolean} />
  }

  return <Wrapper> <Outlet/> </Wrapper>
}

export default ProtectedRoute
