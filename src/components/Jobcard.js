import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Button, Link, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box 
        sx={{ 
          p: 3, 
          bgcolor: '#f5f5f5', 
          borderRadius: 1, 
          mr: 3, 
          borderRadius: '5px', 
          border: '1px solid #e0e0e0' 
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: '600', color: 'text.primary' }}>
            Job Type
          </Typography>
          
        </Box>
        <FormGroup sx={{ mt: 3 }}>
          {['Full Time', 'Part Time', 'Remote', 'Internship'].map((label) => (
            <FormControlLabel
              key={label}
              control={<Checkbox sx={{ color: 'primary.main' }} />}
              label={<Typography variant="body2" sx={{ opacity: 0.6 }}>{label}</Typography>}
            />
          ))}
        </FormGroup>
      </Box>
      <Card
        sx={{
          maxWidth: 1000,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          alignContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
          <Box sx={{ ml: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Microsoft
            </Typography>
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
              <Link href="/job-details" color="inherit" underline="none" sx={{ '&:hover': { opacity: 0.6 } }}>
                Need Senior MERN Stack Developer
              </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Chip label="Full Time" size="small" sx={{ bgcolor: 'background.default' }} />
              <Chip label="$5k - $7k" size="small" sx={{ bgcolor: 'background.default' }} />
              <Chip label="12 hours ago" size="small" sx={{ bgcolor: 'background.default' }} />
            </Box>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            href="/job-details"
            sx={{
              transition: 'background-color 0.5s, color 0.5s',
              '&:hover': {
                bgcolor: 'primary.contrastText',
                color: 'primary.main',
              },
            }}
          >
            View Job
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default JobCard;
