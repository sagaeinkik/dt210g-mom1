//Scss
import "./Header.scss"; 
import banner from "../assets/images/banner.jpg"

//Interface för att ta emot props
interface HeaderProps {
  title: string;
}

//Header-komponenten
const Header = ({ title }: HeaderProps ) => {
  return (
    <>
        <header>
          <div className="text-content">
            <p id="top">{ title }</p>
            <p id="bottom">{ title }</p>
          </div>
          <img src={banner} alt="Manchester-spår i pist" />
        </header>
    </>
  )
}

export default Header