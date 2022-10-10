import * as React from 'react';
import { Button, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
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

export const ThirdStep = () => {
    const [currency, setCurrency] = React.useState('A');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    return (
    <div>
        <div style={{display: 'flex'}}>
            <VerticalLinearStepper step={2}/>
            <div>
                <h1>Deudas y servicios</h1>
                <h2>Deuda técnica</h2>
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
                <Link to="/step3">
                    <Button variant="contained" color="primary">
                    Continuar
                    </Button>
                </Link>
                <Link to="/step2">
                    <Button variant="text" >
                        Regresar
                    </Button>
                </Link>
            </div>
        </div>

    </div>
    )
}