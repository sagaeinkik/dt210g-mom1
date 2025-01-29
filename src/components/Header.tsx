//Scss
import "./Header.scss"; 

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

            <p>{ title }</p>
          </div>
        </header>
    </>
  )
}

export default Header