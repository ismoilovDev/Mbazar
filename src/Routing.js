import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './Styles/main.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Login from './Pages/Login/Login';
import Registation from './Pages/Regestration/Registration'
import MainPage from './Pages/MainPage/MainPage';
import MolPage from "./Pages/MolPage/MolPage";
import TuyaPage from "./Pages/TuyaPage/TuyaPage";
import OtPage from "./Pages/OtPage/OtPage";
import EchkiPage from "./Pages/EchkiPage/EchkiPage";
import QoyPage from "./Pages/QoyPage/QoyPage";
import TovuqPage from "./Pages/TovuqPage/TovuqPage";
import MolOzuqiPage from "./Pages/MolOzuqiPage/MolOzuqiPage";
import AddAdver from "./Pages/AddAdver/AddAdver";
import SingleContent from "./components/SingleContent/SingleContent";
import http from "./Services/getData";
import Loader from "./components/Loader/Loader";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MyAdds from './Pages/MyAdds/MyAdds';


function App() {
  const [lastes, setLastes] = useState([]);
  const [views, setViews] = useState([]);
  const [mol, setMol] = useState([]);
  const [ot, setOt] = useState([]);
  const [tuya, setTuya] = useState([]);
  const [echki, setEchki] = useState([]);
  const [qoy, setQoy] = useState([]);
  const [tovuq, setTovuq] = useState([]);
  const [molOzuqi, setMolOzuqi] = useState([]);
  const [result, setResult] = useState([]);

  const userId = window.localStorage.getItem('user_id')
  // GET Data ->
  useEffect(() => {
    getData();
    getDataMol();
    getDataTuya();
    getDataOt();
    getDataEchki();
    getDataQoy();
    getDataTovuq();
    getDataMolOzuqi();
  },
    // eslint-disable-next-line
  [result])

  const getData = async () => {
    await http.get('/animal')
      .then((res) => {
        setLastes(res.data.data.lastes);
        setViews(res.data.data.views);
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }

  const getDataMol = async () => {
    await http.get('/animals/1')
      .then((res) => {
        setMol(res.data.data.animals);
        console.log(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }
  const getDataTuya = async () => {
    await http.get('/animals/2')
      .then((res) => {
        setTuya(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  const getDataOt = async () => {
    await http.get('/animals/3')
      .then((res) => {
        setOt(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  const getDataEchki = async () => {
    await http.get('/animals/4')
      .then((res) => {
        setEchki(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  const getDataQoy = async () => {
    await http.get('/animals/5')
      .then((res) => {
        setQoy(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  const getDataTovuq = async () => {
    await http.get('/animals/6')
      .then((res) => {
        setTovuq(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  const getDataMolOzuqi = async () => {
    await http.get('/animals/7')
      .then((res) => {
        setMolOzuqi(res.data.data.animals);
      })
      .catch(err => console.log(err));
  }

  if (lastes.length === 0 && views.length === 0) {
    return <Loader></Loader>
  }


  return (
    <Router>
      <Header
        setResult={setResult}
        userId={userId}
      ></Header>
      <Switch>
        <Route exact path="/">
          <MainPage
            lastes={lastes}
            views={views}
          />
        </Route>
        <Route path="/qaramol">
          <MolPage
            data={mol}
          />
        </Route>
        <Route path="/tuya">
          <TuyaPage
            data={tuya}
          />
        </Route>
        <Route path="/ot">
          <OtPage
            data={ot}
          />
        </Route>
        <Route path="/echki">
          <EchkiPage
            data={echki}
          />
        </Route>
        <Route path="/qoy">
          <QoyPage
            data={qoy}
          />
        </Route>
        <Route path="/tovuq">
          <TovuqPage
            data={tovuq}
          />
        </Route>
        <Route path="/mol-ozuqi">
          <MolOzuqiPage
            data={molOzuqi}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            data={result}
          />
        </Route>
        <Route path="/add-reklama">
          <AddAdver
            userId={userId}
            setLastes={setLastes}
          />
        </Route>
        <Route path="/my-adds">
          <MyAdds
            userId={userId}
          />
        </Route>
        <Route path="/product/:id" component={SingleContent} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registation} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
