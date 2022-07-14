import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Button } from "react-bootstrap";


const ButtonSocial = (props: { social: string ; }) => { 
    return (
<div className="test-tekst">
    <Button className="ButtonSocial">{props.social}</Button>
</div>
    );
}
  
  
  export default ButtonSocial;