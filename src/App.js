import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import noGlasses from './persons/maxence.png';
import glasses from './persons/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
import { useState } from 'react';
function App() {
  let colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [count, setCount] = useState(1);
  const [likeColor, setLikeColor] = useState('');
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleLike = () => {
    setCount(count + 1);
    let randomIndex = Math.floor(Math.random() * colorArray.length);
    setLikeColor(colorArray[randomIndex]);
    console.log('here', likeColor);
  };
  return (
    <div>
      <div>
        <h1 className="title">Cards</h1>
        <IdCard
          lastName="George"
          firstName="Joshua"
          gender="male"
          height={180}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1 className="title">Greeting:</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <h1 className="title">Random:</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1 className="title">Box Color:</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1 className="title">Credit Card:</h1>
        <div className="ccDiv">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
      <div>
        <h1 className="title">Stars:</h1>
        <Rating>2</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h1 className="title">Driver Card:</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <h1 className="title">Like Button:</h1>
        <LikeButton
          color={likeColor}
          count={count}
          countIncrease={handleLike}
        />
      </div>
      <div>
        <h1 className="title">Clickable Picture:</h1>
        <ClickablePicture
          clicked={handleClick}
          click={click}
          img={noGlasses}
          imgClicked={glasses}
        />
      </div>
      <div>
        <h1 className="title">Dice:</h1>
        <Dice />
      </div>
      <div>
        <h1 className="title">Carousel</h1>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div>
        <h1 className="title">Numbers Table</h1>
        <NumbersTable limit={12} />
      </div>
      <div>
        <h1 className="title">Facebook</h1>
        <Facebook />
      </div>
      <div>
        <h1 className="title">Signup Page</h1>
        <SignupPage />
      </div>
      <div>
        <h1 className="title">RGB Color Picker</h1>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
