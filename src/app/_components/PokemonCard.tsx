'use client'

import React from 'react'
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
} from "@mui/material"
import { motion } from 'framer-motion'

// Define Pokemon interface
interface Pokemon {
  name: string;
  type: string;
  image?: string;
  stats?: { name: string; value: number }[];
}

const variants = {
  initial: { opacity: 0, y: 60 },
  hover: { opacity: 1, y: 0 },
}

const PokemonCard = ({ pokemon, index, typeColors }: { 
  pokemon: Pokemon; 
  index: number; 
  typeColors: Record<string, { main: string; gradient: string; icon: React.ReactNode }> 
}) => {
    console.log("pokemon",pokemon)
  const typeInfo = typeColors[pokemon.type] ?? typeColors.Normal
  const defaultType = typeColors.Normal ?? { main: '#D1D5DB', gradient: 'linear-gradient(135deg, #D1D5DB 0%, #9CA3AF 100%)', icon: null }

  return (
    <Box
      sx={{ height: "100%", opacity: 0 }}
      component={motion.div}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        component={motion.div}
        whileHover="hover"
        initial="initial"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top Gradient Bar */}
        <Box
          sx={{
            background: typeInfo?.gradient ?? defaultType.gradient,
            height: "8px",
            width: "100%",
          }}
        />

        {/* Pokémon Image */}
        <CardMedia
          component="img"
          height="160"
          image={pokemon.image}
          alt={pokemon.name}
          sx={{ objectFit: "contain", p: 1 }}
        />

        {/* Stats as Bars */}
        <CardContent sx={{ flexGrow: 1, pb: 2 }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>

          <Box>
            {pokemon.stats?.map((stat: { name: string; value: number }) => (
              <Box key={stat.name} sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {stat.name.toUpperCase()}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={stat.value > 100 ? 100 : stat.value}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: '#E5E7EB',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: typeInfo?.main ?? defaultType.main,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </CardContent>

        {/* Type Hover Info */}
        <Box
          component={motion.div}
          variants={variants}
          transition={{ duration: 0.3 }}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: typeInfo?.gradient ?? defaultType.gradient,
            color: "#FFF",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {typeInfo?.icon}
          <Typography variant="body1" fontWeight="bold">
            {pokemon.type}
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default PokemonCard
