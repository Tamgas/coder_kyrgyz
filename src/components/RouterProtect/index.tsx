import { Navigate } from "react-router-dom"
import { isUserLogeddin } from "../../utils"

interface RouterProtectorProps {
    children :  React.ReactNode
}

const RouterProtector:React.FC<RouterProtectorProps> = ({children}) => {
    const isLoggedIn = isUserLogeddin()
    if(isLoggedIn) {
        return <>{children}</>
    }
    return <Navigate to={'/auth'}/>
}

export default RouterProtector;