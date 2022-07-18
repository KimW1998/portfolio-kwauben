
import { Button } from "react-bootstrap";


const ButtonSocial = (props: { social: string ; }) => { 
    return (
<div className="Small-Text">
    <Button className="ButtonSocial">{props.social}</Button>
</div>
    );
}
  
  
  export default ButtonSocial;