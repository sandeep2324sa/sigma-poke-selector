'use client'

import React, { useState } from 'react'
// import {
//   ThemeProvider,
//   createTheme,
//   CssBaseline,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   CardActions,
// } from '@mui/material'
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Tabs,
  Tab,
  Autocomplete,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Pagination,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fab,
  useMediaQuery,
  Tooltip,
} from "@mui/material"
import {
  Search,
  Add,
  Clear,
  Send,
  Refresh,
  LocalFireDepartment,
  Water,
  Grass,
  ElectricBolt,
  Psychology,
  Nightlight,
  Air,
  Pets,
  AutoAwesome,
  Menu as MenuIcon,
  Home,
  CatchingPokemon,
  EmojiEvents,
  Settings,
  Logout,
  LightMode,
  GitHub,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material"
import { AnimatePresence, motion } from 'framer-motion'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 6,
        backgroundColor: "#1E293B",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4 
        }}>
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 33.333%' },
            minWidth: { xs: '100%', md: '33.333%' }
          }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CatchingPokemon sx={{ fontSize: 28, mr: 1, color: "#3B82F6" }} />
              <Typography variant="h6" fontWeight="bold">
                PokeSelector
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
              The ultimate Pokémon team builder application. Create your dream team and become the very best trainer!sadywef
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "white" }}>
                <GitHub />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ 
            flex: { xs: '1 1 50%', md: '1 1 16.666%' },
            minWidth: { xs: '50%', md: '16.666%' }
          }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Explore
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: "none" }}>
              {["Home", "Pokédex", "Team Builder", "Tournaments"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Typography
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      "&:hover": { color: "white", textDecoration: "underline" },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ 
            flex: { xs: '1 1 50%', md: '1 1 16.666%' },
            minWidth: { xs: '50%', md: '16.666%' }
          }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: "none" }}>
              {["Documentation", "API", "Privacy Policy", "Terms of Service"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Typography
                    variant="body2"
                    component="a"
                    href="#"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      "&:hover": { color: "white", textDecoration: "underline" },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '1 1 33.333%' },
            minWidth: { xs: '100%', md: '33.333%' }
          }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
              Get the latest Pokémon updates and features straight to your inbox.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                sx={{
                  flexGrow: 1,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    borderRadius: 2,
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #3B82F6, #8B5CF6)",
                  color: "white",
                  borderRadius: 2,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <Typography variant="body2">© {new Date().getFullYear()} PokéSelector. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
