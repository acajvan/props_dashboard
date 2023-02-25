import React from 'react'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core'
import { useParams, useNavigate } from '@pankod/refine-react-router-v6'
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material'
import { CustomButton } from 'components'

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;
  const PropertyDetails = data?.data ?? {};
  const isCurrentUser = (user?.email === PropertyDetails?.creator?.email)

  const handleDeleteProperty = () => {
    const response = window.confirm('Are you sure you want to delete this property?');
    if (response) {
      mutate({
        resource: 'properties',
        id: id as string,
      }, {
        onSuccess: () => {
          navigate('/properties');
        },
      })
  }
};


  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <Box borderRadius="15px" padding="20px" bgcolor="#fcfcfc" width="fit-content">
      <Typography fontSize={25} fontWeight={700} color="#11142d"> Details</Typography>
      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}>
        <Box flex={1} maxWidth={764}>
          <img src={PropertyDetails.photo} alt={PropertyDetails.title} height={546} style={{ objectFit: "cover", borderRadius: '10px' }} className="property_details-img" />
          <Box mt="15px">
            <Stack direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center">
              <Typography fontSize={18} fontWeight={500} color="#1142d" textTransform="capitalize">{PropertyDetails.propertyType}</Typography>
              <Box>{[1, 2, 3, 4, 5].map((star) => <Star key={`star-${star}`} sx={{ color: "#f2c94c" }} />)}</Box>
            </Stack>

            <Stack>
              <Stack direction="row" justifyContent="space-between" flexWrap="wrap" alignItems="center">
                <Box>

                  <Typography fontSize={22} fontWeight={600} color="#1142d" textTransform="capitalize">{PropertyDetails.title}</Typography>

                  <Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
                    <Place sx={{ color: "#808191" }} />
                    <Typography fontSize={14} color="#808191">{PropertyDetails.location}</Typography>
                  </Stack>
                </Box>

                <Box>
                  <Typography fontSize={18} fontWeight={600} color="#475be8">${PropertyDetails.price}</Typography>
                  <Stack direction="row" alignItems="flex-end" gap={1}>
                    <Typography fontSize={14} mb={0.5} color="#808191">per month</Typography>
                  </Stack>
                </Box>
              </Stack>
              <Stack mt="25px" direction="column" gap="10px"> Description:
                <Typography fontSize={18} color="#808191">{PropertyDetails.description}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box width="100%" flex={1} maxWidth={326} display="flex" flexDirection="column" gap="20px">
          <Stack width="100%" p={2} direction="column" alignItems="center" border="1px solid #E4E4E4" borderRadius={2} gap="10px">
            <Stack mt={2} justifyContent="center" alignItems="center" textAlign="center">
              <img src={PropertyDetails.creator.avatar} alt="avatar" width={90} height={90} style={{ borderRadius: '100%', objectFit: 'cover'}} />
              <Box mt="15px">
                <Typography fontSize={18} fontWeight={600} color="#11142D">{PropertyDetails.creator.name}</Typography>
                <Typography fontSize={14} color="#808191">{PropertyDetails.creator.email}</Typography>
                <Typography fontSize={14} color="#808191">Agent</Typography>
              </Box>
              <Stack mt="15px" direction="row" alignItems="center" gap={1}>
                <Place sx={{color: "#808191"}} />
                <Typography fontSize={14} color="#808191">Iasi, Romania</Typography>
              </Stack>
                <Typography mt={1} fontSize={14} fontWeight={600} color="#11142d"> {PropertyDetails.creator.allProperties.length} Properties </Typography>

              <Stack width="100%" mt="25px" direction="row" flexWrap="wrap" gap={2}>
                <CustomButton 
                  title={!isCurrentUser ? 'Message' : 'Edit'} 
                  icon={!isCurrentUser ? <ChatBubble /> : <Edit />}
                  backgroundColor="#475BE8"
                  color="#fcfcfc"
                  fullWidth
                  handleClick={() => {
                    if (isCurrentUser) {
                      navigate(`/properties/edit/${PropertyDetails._id}`)
                    }
                  }}
                />
                <CustomButton 
                  title={!isCurrentUser ? 'Call' : 'Delete'}
                  backgroundColor={!isCurrentUser ? '#2ed480' : '#d42e2e'}
                  color="#fcfcfc"
                  fullWidth
                  icon={!isCurrentUser ? <Phone /> : <Delete />}
                  handleClick={() => {
                    if (isCurrentUser) handleDeleteProperty();
                  }}
                />

              </Stack>



            </Stack>

          </Stack>
        </Box>

      </Box>

    </Box>
  )
}

export default PropertyDetails
