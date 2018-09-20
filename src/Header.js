import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (<table className="App-header">
            <tbody>
                <tr>
                    <td className="header-logo-container">
                        <img  className="header-logo" src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F22%2F04%2F24%2F31%2Fb7bd820a-ecc0-4170-8f4e-3db2e73b0f4a%2F550250_artsigma.png?auto=format&ch=Width%2CDPR&w=250&h=250" alt="too poor for logos" />
                    </td>
                    <td className="header-title-container">
                        The Movie Searcher 
                    </td>
                </tr>
            </tbody>
        </table>);

    }
}

export default Header