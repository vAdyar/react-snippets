import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            {/* <a href='/about'>About</a>   This creates a page reload*/}
            <Link to="/about">About</Link> | <Link to="/api">API</Link> | <Link to="/context">Context</Link> 
            
        </footer>
    )
}

export default Footer
