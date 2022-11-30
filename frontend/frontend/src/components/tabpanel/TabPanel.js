import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import './TabPanel.css'
import TabPanel1 from './TabPanel1';
import TabPanel2 from './TabPanel2';
import TabPanel3 from './TabPanel3';
import Header from '../header/Header';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Header/>
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      className="outerbox"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        className="tabs"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab className='tablist' label="Dashboard" {...a11yProps(0)} />
        <Tab className='tablist' label="Inventory" {...a11yProps(1)} />
        <Tab className='tablist' label="Products" {...a11yProps(2)} /> 
      </Tabs>
      <TabPanel className='tabpanelList' value={value} index={0}>
          <TabPanel1/>
      </TabPanel>
      <TabPanel className='tabpanelList' value={value} index={1}>
        <TabPanel2 />
      </TabPanel>
      <TabPanel className='tabpanelList' value={value} index={2}>
        <TabPanel3 />
      </TabPanel> 
     
    </Box>
    </div>
    
  );
}

export default VerticalTabs
