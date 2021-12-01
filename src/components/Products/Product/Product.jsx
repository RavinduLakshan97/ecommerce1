import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage';
import { typography } from '@material-ui/system';

import useStyles from './styles'; 

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={Product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {Product.name}
                    </Typography>
                    <Typography variant="h5">
                        {Product.price}
                    </Typography>
                </div>
                <typography variant="body2" color="textSecondary">{product.description}</typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Product
