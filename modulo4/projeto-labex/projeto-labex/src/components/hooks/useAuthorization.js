import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useAuthorization () {

    const navigate = useNavigate();
    const { token } = localStorage

   
    useEffect(() => {
        if (token === null || token === undefined) {
           const goToLogin = (navigate) => {
            navigate("/login")
           }
           goToLogin(navigate);
        }
    }, []);

    return token;
    
  };