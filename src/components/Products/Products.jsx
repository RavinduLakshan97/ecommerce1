import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://rukminim1.flixcart.com/image/332/398/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=50'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--saK2nRv---/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,q_auto,w_1200,x_833,y_803/https://reviewed-production.s3.amazonaws.com/1588384493638/macbook-hero-ii.jpg'},
];

const Products = () => {
    return(
        <main> 
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} /> 
            </Grid>
        ))}
        </Grid>
    </main>
    );
   
}

export default Products;