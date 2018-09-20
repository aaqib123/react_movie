import React from 'react';

class MovieRow extends React.Component {
    render() {
        return  (<table key={this.props.movie.id} className="movie_row">
                <tbody>
                    <tr>
                        <td className="posters_row">
                            <img alt="# " className="posters_row_img" src={this.props.movie.poster_src} />
                        </td>
                        <td>
                            {this.props.movie.title}
                            <p>{this.props.movie.overview}</p>
                        </td>
                    </tr>
                </tbody>
            </table>);
       
    }
}

export default MovieRow