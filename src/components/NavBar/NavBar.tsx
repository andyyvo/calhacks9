import { Button } from "../Button/Button";
import { Nav } from "./Nav";

/**
 * i'm introducing a wrapper here because i figured that i only need one instance of the nav bar so this serves as that global component
 */

/** wrapper component for Nav */
export const NavBar: React.FunctionComponent = () => {
  const handleOnClick = () => {

  }

  const menuOptions = (
    <>
      <Button
        variant="link"
        backgroundColor="blue"
        color="#393A40"
        padding="large"
        onClick={handleOnClick}
      >
        How It Works
      </Button>
      <Button
        variant="link"
        backgroundColor="red"
        color="#393A40"
        padding="large"
        onClick={handleOnClick}
      >
        About Us
      </Button>
    </>
  );

  const menuLogo = (
    // <Logo color="dark" size="small" />
    <></>
  );

  return (
    <Nav
      logo={menuLogo}
      menu={menuOptions}
    />
  );
}