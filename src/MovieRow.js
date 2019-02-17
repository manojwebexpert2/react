import React from 'react';

class MovieRow extends React.Component{

viewMovie()
{
    //console.log("View movie  clicked "+ this.props.title);
    const url="https://www.themoviedb.org/movie/"+this.props.id;
    window.location.href=url;
}    
render(props)
{

    return <table key={this.props.id}>
    <tbody>
      <tr>
        <td>
          <img
            style={{ width: 120 }}
            src={this.props.img}
            alt={this.props.title}
          />
        </td>
        <td><h3>{this.props.title}</h3><p>{this.props.desc}</p><p><input type="button" value="view" onClick={this.viewMovie.bind(this)}/></p></td>
      </tr>
    </tbody>
  </table>

}


}
export default MovieRow;