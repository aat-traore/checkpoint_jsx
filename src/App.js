import './App.css';
import Lieu from './Component/Profile/Adress';
import Names from './Component/Profile/FullName';
import Pro from './Component/Profile/ProfilPhoto';
import imge from './Component/Profile/assets/moi.jpeg';

function App() {
  return (
    <>
    <Pro  fullName="Adji Adoiuma traore" bio="Depuis son retour à l’île " 
    profession="developpeur" > ./assets/moi.jpeg </Pro>
    <Names/> 
    <Lieu/>

    </>
  );
}

export default App;
