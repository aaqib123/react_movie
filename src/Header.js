import React from 'react';
import './App.css';

class Header extends React.Component {
    render() {
        return (<table className="App-header">
            <tbody>
                <tr>
                    <td>
                        <img src="#" alt="too poor for logos" />
                    </td>
                    <td>
                        The Movie Searcher
                    </td>
                </tr>
            </tbody>
        </table>);

    }
}

export default Header