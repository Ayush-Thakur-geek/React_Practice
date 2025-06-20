function Header(props) {
    console.log(props);
    return <h1>Hello there mate, {props.name} {props.color}</h1>
}

export default Header;