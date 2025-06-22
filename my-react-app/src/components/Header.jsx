

function Header(props) {

    
  const style = {
    color: "yellow",
  };

    console.log(props);
    return <h1 style={style}>Hello there mate, {props.name} {props.color}</h1>
}

export default Header;