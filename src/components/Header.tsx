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
            <p>{ title }</p>
        </header>
    </>
  )
}

export default Header