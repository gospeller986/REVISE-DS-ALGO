import './App.css';
import { Time } from './Time';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme)=>({ 

  root : {
    
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent : "center" ,
    justifyItems :"center" ,
    display : "flex" ,
    maxHeight : "100vh",
    marginTop : "20vh",
    
  }, 

  container : {
    backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))` ,
    justifyContent : "center" ,
    justifyItems :"center" ,
    borderRadius : "50px",
    maxWidth : "100vh",
    padding : "20px",
  },

 })) ;

function App() {
  const classes = useStyles();
  const randomNum = Math.floor(Math.random() * Math.floor(Time.length))
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
       <div className={classes.root}>
       <div className={classes.container}>
            <h1>ALGO : {Time[randomNum].FIELD1}</h1>
		       	<h2>WORSTCASE TIME COMPLEXITY:{Time[randomNum].FIELD2}</h2>
             <Button variant="contained" onClick={refreshPage}>Click to revise!</Button>
        </div>
      </div>
     </div>
  );
}

export default App;
