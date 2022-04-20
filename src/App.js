import React, {useState} from "react";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/core"
import {Button} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import {Icon} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root' : {
      margin: theme.spacing(1),
    }
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [inputField, setInputField] = useState([
    {firstName: '', lastName: ''}
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("InputField", inputField)
  }

  const handleChangeInput = (index, event) => {
    const values = [...inputField]
    values[index][event.target.name] = event.target.value
    setInputField(values)
  }

  const handleAddFields = () => {
    setInputField([...inputField, { firstName: '', lastName: ''}])
  }

  return (
    <Container>
      <h1>Add Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputField.map((inputField, index) => (
          <div>
            <TextField name='firstName' label=' First Name' value={inputField.firstName} variant='filled' onChange={event => handleChangeInput(index, event)} />
            <TextField name='lastName' label=' Last Name' value={inputField.lastName} variant='filled' onChange={event => handleChangeInput(index, event)} />
            <IconButton>
              <RemoveIcon />

            </IconButton>
            <IconButton onClick={() => handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button className={classes.button} variant="contained" color="primary" type="submit" endIcon={<Icon>send</Icon>} onSubmit={handleSubmit}>Send</Button>
      </form>
    </Container>
  );
}

export default App;
