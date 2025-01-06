import Grid from "@mui/material/Grid";
import {gridSpacing} from "../../../store/constant";
import MainCard from "../../../ui-component/cards/MainCard";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    iframeContainer: {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // Aspect ratio 16:9
        height: 0,
        overflow: 'hidden',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    },
}));

export const SupervisorDashboard = () => {
    const url = import.meta.env.VITE_APP_GRAFANA_URL;
    const classes = useStyles();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <MainCard>
                            <div className={classes.iframeContainer}>
                                <iframe
                                    src={url}
                                    className={classes.iframe}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SupervisorDashboard;
