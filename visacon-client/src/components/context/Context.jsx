import { createContext, useEffect, useState } from "react";

export const VisaProfile = createContext();

export default function Context({ children }) {
  const [advisaInfo, setadvisaInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allVisa, setAllVisa] = useState([]);

  useEffect(() => {
    const fetchVisaData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/get-visa");
        const viisa = await response.json();

        console.log("alllllllllll *context", viisa);
        setAllVisa(viisa);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVisaData();
  }, []);

  const visaInfo = {
    allVisa,
    advisaInfo,
    loading,
    setadvisaInfo,
    setLoading,
    setAllVisa,
  };
  return (
    <VisaProfile.Provider value={visaInfo}>{children}</VisaProfile.Provider>
  );
}
