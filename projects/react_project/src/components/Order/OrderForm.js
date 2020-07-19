import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./Order.css";
import Grid from "@material-ui/core/Grid";


const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008}
];

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: [],
            take_profits: [],
            stop_losses: [],
        };
        this.refe = React.createRef()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    handleChange(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render() {
        const {classes} = this.props;
        return (
            <div onClick={this.handleClick}>
                <form noValidate autoComplete="off" id="orderform">
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <Card className="Card">
                                <h1>Take buys</h1>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={this.state.symbols}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => <TextField {...params} label="Combo box"
                                                                        variant="outlined"/>}
                                />
                                <TextField
                                    id="price"
                                    label="Price"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <TextField
                                    id="giving"
                                    label="Giving"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <TextField
                                    id="getting"
                                    label="Getting"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <div>
                                    <Typography id="discrete-slider" gutterBottom>
                                        % of depo:
                                    </Typography>
                                    <Slider
                                        defaultValue={10}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="on"
                                        step={5}
                                        min={10}
                                        max={100}
                                    />
                                </div>
                                <Button variant="contained" color="primary">
                                    Add takebuy
                                </Button>
                            </Card>
                            <Card className="Card">
                                <h1>Take Profits</h1>
                                <TextField
                                    id="price"
                                    label="Price"
                                    defaultValue="Enter Value"
                                    helperText="Price"
                                    variant="outlined"
                                />
                                <div>
                                    <Typography id="discrete-slider" gutterBottom>
                                        % of Take Profit:
                                    </Typography>
                                    <Slider
                                        defaultValue={10}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="on"
                                        step={5}
                                        min={10}
                                        max={100}
                                    />
                                </div>
                                <div>
                                    <Typography id="discrete-slider" gutterBottom>
                                        % of order:
                                    </Typography>
                                    <Slider
                                        defaultValue={10}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="on"
                                        step={5}
                                        min={10}
                                        max={100}
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Checkbox color="primary"/>}
                                        label="% TRS (trailing stop)"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Checkbox color="primary"/>}
                                        label="% SS (step stop)"
                                        labelPlacement="start"
                                    />
                                </div>
                                <Button variant="contained" color="primary">
                                    Add TP
                                </Button>
                            </Card>
                            <Card className="Card">
                                <h1>Stop losses</h1>
                                <TextField
                                    id="price"
                                    label="Price"
                                    defaultValue="Enter Value"
                                    helperText="Price"
                                    variant="outlined"
                                />
                                <Slider
                                    defaultValue={10}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="on"
                                    step={10}
                                    min={10}
                                    max={110}
                                />
                            </Card>
                        </Grid>
                        <Button variant="contained" color="primary">
                            Create Order
                        </Button>
                    </Grid>
                </form>
            </div>
        );
    }
}


export default OrderForm