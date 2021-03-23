import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  margin: {
    paddingTop:34,
  },
}));

export default function Search() {
  
  const classes = useStyles();

  const [input, setInput] = useState("");

  const handleSearch = (e)=>{
    setInput(e.target.value);
    console.log(input);
  }

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} justify="center" alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item sm={6}>
            <TextField id="product_input" label="Producto / ID" fullWidth value={input} onChange={handleSearch} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}