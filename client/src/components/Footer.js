import React from "react"
import socialLinks from '../constants/social_links';

const Footer = React.forwardRef(({ref}) => {

    return(
        <footer className = "footer">
            <div ref = {ref} >
                <div className = 'social-links'> 
                    {socialLinks.map(link => {
                        return(
                            <a href = {link.url} key = {link.id } className = 'social-link'> 
                                {link.icon}
                            </a>
                        )
                    })}
                </div>
                <div> 
                    © {new Date().getFullYear()},
                    {` `}
                    React 
                </div>
                <div className="section"></div>
            </div>
        </footer>
    )

});

export default Footer;
