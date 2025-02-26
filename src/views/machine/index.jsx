//react
import {useEffect, useState} from "react";

// material-ui
import {Box} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TabList from "./machine-tab";
import PropTypes from "prop-types";

const MachinePage = ({initialValue}) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList content="tab" value={value} handleChange={handleChange}/>
            </Box>
            <TabList content="content" value={value}/>
        </MainCard>
    )
};

MachinePage.propTypes = {
    initialValue: PropTypes.string
};

export default MachinePage;