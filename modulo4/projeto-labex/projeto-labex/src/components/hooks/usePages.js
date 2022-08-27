import { useNavigate } from "react-router-dom";

export function usePages() {
    const navigate = useNavigate();

    const goToCreateTrip = () => {
      navigate("/admin/trips/create")
    }
    
    const goToTripDetails = (id) => {
      navigate(`/admin/trips/${id}`)
    }
    
    const goToLogin = () => {
      navigate("/login")
    }
    
    const goToHomePage = () => {
      navigate("/")
    }
    return {
        goToCreateTrip,
        goToTripDetails,
        goToLogin,
        goToHomePage,
    }
}
