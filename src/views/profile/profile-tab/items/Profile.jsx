//react
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

// material-ui
import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// project imports
import SubCard from "../../../../ui-component/cards/SubCard";
import UserBadge from "../../../../ui-component/Badge";
import {gridSpacing} from 'store/constant';
import Divider from "@mui/material/Divider";

import {dateBeauty} from "../../../../utils/date-beauty";
import {PermIdentity} from "@mui/icons-material";


const ProfileTab = () => {

    const {profile} = useSelector((state) => state.profile);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (profile) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [profile]);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={4}>
                <SubCard title={<UserBadge picSize="sm"/>}>
                    {!loading && (
                        <Box display="flex" alignItems="center" flexDirection="column" sx={{overflow: 'auto'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <Grid container alignItems="center">
                                        <Grid item xs={2}>
                                            <MailOutlineIcon fontSize="small"/>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="subtitle2">{profile.email}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>)}
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={8}>
                <SubCard title="Account Details">
                    {!loading && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid container alignItems="center">
                                    <Grid item xs={4}>
                                        <Typography variant="h5">
                                            <PermIdentity/>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1">{profile.name} {profile.surname}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Divider/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid container alignItems="center">
                                    <Grid item xs={4}>
                                        <Typography variant="h5">
                                            Registration Date:
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1">{dateBeauty(profile.registrationDate)}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>)}
                </SubCard>
            </Grid>
        </Grid>)
};


export default ProfileTab;