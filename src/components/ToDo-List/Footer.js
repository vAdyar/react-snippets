import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {/* <a href='/about'>About</a>   This creates a page reload*/}
            <Link to="/">Home</Link> | <Link to="/state">State</Link> | <Link to="/effect">Effect</Link> | <Link to="/api">API</Link> | <Link to="/api2">API2</Link> | <Link to="/context">Context</Link> | <Link to="/reducer">Reducer</Link> | <Link to="/callback">Callback</Link> | <Link to="/memo">Memo</Link> | <Link to="/ref">Ref</Link> 
            
        </footer>
    )
}

export default Footer
