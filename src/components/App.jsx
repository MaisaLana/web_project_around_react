import { useState, useEffect } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import API from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    (async () => {
      await API.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await API.editProfile(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) =>{
    (async () =>{
      await API.editImageProfile(data).then((newData) =>{
        setCurrentUser (newData);
        handleClosePopup();
      });
    })();
  }

  function handleOpenPopup(popupSelected) {
    setPopup(popupSelected);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
