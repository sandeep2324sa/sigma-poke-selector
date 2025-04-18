'use client'

import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material"
import {
  CatchingPokemon,
  GitHub,
  LinkedIn,
} from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"
import { motion } from 'framer-motion'

const Navbar = () => {
  const theme = useTheme()

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo + App Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <CatchingPokemon
              sx={{
                fontSize: 32,
                mr: 1,
                color: theme.palette.primary.main,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PokeSelector
            </Typography>
          </Box>
        </Box>

        {/* Right Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="GitHub">
            <IconButton
              component="a"
              href="https://github.com/sandeep2324sa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          </Tooltip>

          <Tooltip title="Twitter">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/sandeep-kishor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
