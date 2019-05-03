import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map( ctrl => {
            return <BuildControl
                key={ctrl.type}
                label={ctrl.label}
                ingredientAdded={ () => props.ingredientAdded(ctrl.type)}
                ingredientRemoved={ () => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        })}
    </div>
);

export default buildControls;