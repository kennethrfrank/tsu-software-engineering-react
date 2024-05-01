import "../App.css";
import { postResourcesTable } from "../DataObjects/ResourcesTableInterface";
function Footer() {
    return (
        <footer className="footer mt-auto has-background-dark pb-4 pt-4">
            <div className="content">
                
                <ul>
                
                    <li><a className="navbar-item" href="/">Home</a></li>
                    <li><a className="navbar-item" href="/about">About</a></li>
                    <li><a className="navbar-item" href="/inventory">Inventory</a></li>
                    <li><a className="navbar-item" href="/contact">Contacts</a></li>
                    <li><a className="navbar-item" href="/resources">Resources</a></li>
                    <li><a className="navbar-item" onClick={postResourcesTable}> Post Resources</a></li>
                    <li>
                        
                    </li>
                </ul>
                
            </div>
        </footer>
    );
}

export default Footer;