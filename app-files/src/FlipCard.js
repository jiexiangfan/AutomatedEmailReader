import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FlipCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ mb: 1.5 }}>
          Log in with your google account to mark all your emails as read.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Log in</Button>
      </CardActions>
    </Card>
  );
};

export default FlipCard;
