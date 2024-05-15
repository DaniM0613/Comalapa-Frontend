import {useState} from "react";
import ExploreRestaurant from "../../components/ExploreRestaurant/ExploreRestaurant";
import Header from "../../components/Header/Header"
import MenuDisplay from "../../components/MenuDisplay/MenuDisplay";
//import AppDownload from "../../components/AppDownload/AppDownload";


const Home = () => {

  const [category, setCategory] = useState('All');

  return (
    <div >
      <Header/>
      <ExploreRestaurant category={category} setCategory={setCategory}
      />
      <MenuDisplay category={category} />

    </div>
  )
}

export default Home

/*      <AppDownload/>*/