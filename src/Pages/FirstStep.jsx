import * as React from 'react';
import Header from '../components/Header'
import { Button, Link, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system';
import VerticalLinearStepper from '../components/VerticalLinearStepper';

const projects = [
    {
      value: 'A',
      label: 'Proyecto A',
    },
    {
      value: 'B',
      label: 'Proyecto B',
    },
    {
      value: 'C',
      label: 'Proyecto C',
    },
    {
      value: 'D',
      label: 'Proyecto D',
    },
  ];

export const FirstStep = () => {
    const [currency, setCurrency] = React.useState('A');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    return (
    <div>
        <Header/>
        <div style={{display: 'flex'}}>
            <VerticalLinearStepper step={0}/>
            <div>
                <h1>Datos de la aplicación</h1>
                <h2>Datos principales</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        id="outlined-select-currency"
                        select
                        label="Aplicación"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select your lorem"
                        >
                        {projects.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Proyecto"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your lorem"
                        >
                        {projects.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Arquitecto"
                            value={currency}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your lorem"
                            >
                            {projects.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción técnica de la solución"
                            multiline
                            rows={4}
                            variant="outlined"
                            >
                        </TextField>
                        <TextField
                            id="outlined-multiline-static"
                            label="Objetivos del proyecto"
                            multiline
                            rows={4}
                            variant="outlined"
                            >
                        </TextField>
                    </div>
                </Box>
                <h2>Usuarios</h2>
                <Link to="/step2">
                    <Button variant="contained" color="primary">
                        Continuar
                    </Button>
                </Link>
            </div>
        </div>

    </div>
    )
}