import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const Home = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            
           
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>NetBeans Cafe</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>View</Item>
                    <Item>Total Orders Today: 12</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Actions</Item>
                    <Item>
                        <Button>Place Order</Button>
                    </Item>
                    <Item>
                        <Button>Place Order</Button>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home