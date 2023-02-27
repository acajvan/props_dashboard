import React from 'react'
import { AgentCardProp, InfoBarProps } from 'interfaces/agent'
import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { Link } from '@pankod/refine-react-router-v6'

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} minWidth={{ xs: '100%', sm: 300 }} direction="row" gap={1.5}>
    {icon}
    <Typography fontSize={14} color="#808191">{name}</Typography>
  </Stack>
)

const AgentCard = ({ id, name, avatar, noOfProperties }: AgentCardProp) => {


  return (
    <Box
      component={Link}
      to={`/agents/show/${id}`}
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '20px',
        padding: '20px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)',
        }
      }}
    >
      <img src={avatar} alt="user" width={90} height={90} style={{ borderRadius: 8, objectFit: 'cover' }} />
      <Stack direction="column" justifyContent="space-between" flex={1} gap={{ sx: 4, sm: 2 }}>
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d"> {name} </Typography>
          <Typography fontSize={14} color="#808191"> Real-Estate Agent </Typography>
        </Stack>
        <Stack gap={2} direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <InfoBar icon={<EmailOutlined sx={{ color: "#808191" }} />} name="admin@cajvan.com" />
          <InfoBar icon={<Place />} name="Iasi" />
          <InfoBar icon={<Phone />} name="+40 711222333" />
          <InfoBar icon={<LocationCity />} name={`${noOfProperties} Properties`} />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCard
