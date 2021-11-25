import { useCallback, useEffect } from "react";
import {useParams} from "react-router-dom";
import React from "react";
// function Detail() {
//     const {id}= useParams()


//     const getMovie = async()=>{
//         const json= await(
//             await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
//             console.log(json);
//     };
    
//     useEffect(()=>{
//       getMovie();  
//     },[]);
//     return <h1>Detail</h1>;
//   }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
  export default Detail;