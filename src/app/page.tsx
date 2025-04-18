"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
  CircularProgress,
  Pagination,
  Fab,
  Tooltip,
} from "@mui/material"
import { ThemeProvider, createTheme} from "@mui/material/styles"
import { motion, AnimatePresence } from "framer-motion"
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
} from "@mui/icons-material"
import Navbar from "./_components/Navbar"
import PokemonCard from "./_components/PokemonCard"

interface Pokemon {
    name: string
    type: string 
    types?: string[]
    image?: string
    height?: number
    weight?: number
    abilities?: string[]
    stats?: { name: string; value: number }[]
  }

interface PokemonApiResponse {
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    stat: {
      name: string;
    };
    base_stat: number;
  }>;
}

interface TypeApiResponse {
  pokemon: Array<{
    pokemon: {
      name: string;
    };
  }>;
}

const pokemonData: Pokemon[] = [
  { name: "Pikachu", type: "Electric" },
  { name: "Charizard", type: "Fire" },
  { name: "Bulbasaur", type: "Grass" },
  { name: "Squirtle", type: "Water" },
  { name: "Jigglypuff", type: "Fairy" },
  { name: "Eevee", type: "Normal" },
  { name: "Mewtwo", type: "Psychic" },
  { name: "Snorlax", type: "Normal" },
  { name: "Gengar", type: "Ghost" },
  { name: "Gyarados", type: "Water" },
  { name: "Dragonite", type: "Dragon" },
  { name: "Machamp", type: "Fighting" },
  { name: "Alakazam", type: "Psychic" },
  { name: "Arcanine", type: "Fire" },
  { name: "Lapras", type: "Water" },
  { name: "Vaporeon", type: "Water" },
  { name: "Jolteon", type: "Electric" },
  { name: "Flareon", type: "Fire" },
  { name: "Articuno", type: "Ice" },
  { name: "Zapdos", type: "Electric" },
  { name: "Moltres", type: "Fire" },
  { name: "Mew", type: "Psychic" },
  { name: "Typhlosion", type: "Fire" },
  { name: "Ampharos", type: "Electric" },
]

const pokemonTypes = [
  "Electric",
  "Fire",
  "Grass",
  "Water",
  "Normal",
  "Psychic",
  "Ghost",
  "Dragon",
  "Dark",
  "Fairy",
  "Fighting",
  "Ice",
]

const typeColors = {
  Electric: { main: "#FCD34D", gradient: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)", icon: <ElectricBolt /> },
  Fire: {
    main: "#F87171",
    gradient: "linear-gradient(135deg, #F87171 0%, #DC2626 100%)",
    icon: <LocalFireDepartment />,
  },
  Grass: { main: "#6EE7B7", gradient: "linear-gradient(135deg, #6EE7B7 0%, #059669 100%)", icon: <Grass /> },
  Water: { main: "#60A5FA", gradient: "linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)", icon: <Water /> },
  Normal: { main: "#D1D5DB", gradient: "linear-gradient(135deg, #D1D5DB 0%, #9CA3AF 100%)", icon: <Pets /> },
  Psychic: { main: "#F472B6", gradient: "linear-gradient(135deg, #F472B6 0%, #DB2777 100%)", icon: <Psychology /> },
  Ghost: { main: "#A78BFA", gradient: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)", icon: <Nightlight /> },
  Dragon: { main: "#7DD3FC", gradient: "linear-gradient(135deg, #7DD3FC 0%, #0284C7 100%)", icon: <Air /> },
  Dark: { main: "#6B7280", gradient: "linear-gradient(135deg, #6B7280 0%, #374151 100%)", icon: <Nightlight /> },
  Fairy: { main: "#FBCFE8", gradient: "linear-gradient(135deg, #FBCFE8 0%, #EC4899 100%)", icon: <AutoAwesome /> },
  Fighting: { main: "#FB923C", gradient: "linear-gradient(135deg, #FB923C 0%, #EA580C 100%)", icon: <Pets /> },
  Ice: { main: "#93C5FD", gradient: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)", icon: <Water /> },
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3B82F6", 
    },
    secondary: {
      main: "#F59E0B", 
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B",
      secondary: "#64748B",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          padding: "10px 20px",
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: 4,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        },
      },
    },
  },
})

export default function PokemonSelector() {
  const [filterType, setFilterType] = useState(0)
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([])
  const [currentSelection, setCurrentSelection] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [page, setPage] = useState(1)
  const itemsPerPage = 4
  const [displayedPokemons, setDisplayedPokemons] = useState<Pokemon[]>([])
  const totalPages = submitted ? Math.ceil(selectedPokemons.length / itemsPerPage) : 0

  useEffect(() => {
    if (submitted) {
      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      setDisplayedPokemons(selectedPokemons.slice(startIndex, endIndex))
    }
  }, [page, selectedPokemons, submitted])

  const handleFilterChange = (event: React.SyntheticEvent, newValue: number) => {
    setFilterType(newValue)
    setCurrentSelection(null)
    setSelectedPokemons([])
    setSubmitted(false)
    setDisplayedPokemons([])
    setPage(1)
  }

  const fetchPokemonData = async (name: string): Promise<Pokemon | null> => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      const data = await res.json() as PokemonApiResponse
  
      return {
        name: data.name,
        type: data?.types[0]?.type?.name ? 
          data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1) : 
          "Normal",
        types: data.types.map((t) => t.type.name),
        image: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map((a) => a.ability.name),
        stats: data.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
      }
      
    } catch (err) {
      console.error(`Failed to fetch ${name}:`, err)
      return null
    }
  }

  const fetchPokemonsByType = async (type: string): Promise<Pokemon[]> => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`)
      const data = await res.json() as TypeApiResponse
  
      const pokemons: Pokemon[] = []
  
      const selectedEntries = data.pokemon.slice(0, 10)
  
      for (const entry of selectedEntries) {
        const name = entry.pokemon.name
        const pokemonDetails = await fetchPokemonData(name)
        if (pokemonDetails) {
          pokemons.push(pokemonDetails)
        }
      }
  
      return pokemons
    } catch (err) {
      console.error("Error fetching Pokémons by type:", err)
      return []
    }
  }
  

const handleAdd = async () => {
    if (!currentSelection) return
  
    if (filterType === 0) {
      // Search by name
      const exists = selectedPokemons.find(p => p.name.toLowerCase() === currentSelection.toLowerCase())
      if (!exists) {
        setIsLoading(true)
        const fetched = await fetchPokemonData(currentSelection)
        if (fetched) {
          setSelectedPokemons(prev => [...prev, fetched])
        }
        setIsLoading(false)
        setCurrentSelection(null)
      }
    } else {

      setIsLoading(true)
      const fetchedByType = await fetchPokemonsByType(currentSelection)

      const newOnes = fetchedByType.filter(
        p => !selectedPokemons.some(sp => sp.name === p.name)
      )
  
      setSelectedPokemons(prev => [...prev, ...newOnes])
      setIsLoading(false)
      setCurrentSelection(null)
    }
  }
  
  

  const handleSubmit = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setPage(1)
      setDisplayedPokemons(selectedPokemons.slice(0, itemsPerPage))
    }, 1500)
  }

  const handleClearTags = () => {
    const currentDisplayed = [...displayedPokemons]
    setSelectedPokemons([])
    
    if (submitted && currentDisplayed.length > 0) {
      setTimeout(() => {
        setDisplayedPokemons(currentDisplayed)
      }, 0)
    }
  }

  const handleClearPokemons = () => {
    setSubmitted(false)
    setDisplayedPokemons([])
  }

  const handleDelete = (pokemonToDelete: Pokemon) => {
    setSelectedPokemons(selectedPokemons.filter((pokemon) => pokemon.name !== pokemonToDelete.name))
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        position: "relative",
      }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/024/625/582/non_2x/cute-yellow-mouse-character-background-free-vector.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
          zIndex: 0,
        }} />
        
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          zIndex: 1,
        }} />
        
        <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar/>

          <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                mb: 6,
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)",
                borderRadius: 4,
                p: 4,
                color: "white",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(5px)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  zIndex: 0,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Pokemon Selector
                </Typography>
                <Typography variant="body1">Select your favorite Pokémon and build your dream team!</Typography>
              </Box>
            </Box>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                position: "relative",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
                <Tabs
                  value={filterType}
                  onChange={handleFilterChange}
                  aria-label="filter tabs"
                  centered
                  sx={{
                    "& .MuiTabs-indicator": {
                      height: 3,
                      borderRadius: 1.5,
                    },
                  }}
                >
                  <Tab label="Search by Name" icon={<Search />} iconPosition="start" sx={{ fontWeight: 600 }} />
                  <Tab label="Search by Type" icon={<Search />} iconPosition="start" sx={{ fontWeight: 600 }} />
                </Tabs>
              </Box>

              <Box sx={{ p: 2 }}>
                {filterType === 0 ? (
                  <Autocomplete
                    value={currentSelection}
                    onChange={(event, newValue) => {
                      setCurrentSelection(newValue)
                    }}
                    options={pokemonData.map((p) => p.name)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Pokémon"
                        variant="outlined"
                        fullWidth
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    )}
                  />
                ) : (
                  <Autocomplete
                    value={currentSelection}
                    onChange={(event, newValue) => {
                      setCurrentSelection(newValue)
                    }}
                    options={pokemonTypes}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Pokémon Type"
                        variant="outlined"
                        fullWidth
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                      />
                    )}
                  />
                )}
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: 24,
                  bottom: -28,
                  zIndex: 2,
                }}
              >
                <Tooltip title="Add Pokémon">
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={handleAdd}
                    disabled={!currentSelection}
                    sx={{
                      background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                      },
                    }}
                  >
                    <Add />
                  </Fab>
                </Tooltip>
              </Box>
            </Paper>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                gap: { xs: 2, sm: 2 },
                mt: 5,
                mb: 4,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                disabled={selectedPokemons.length === 0 || isLoading}
                startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                sx={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                  },
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Submit Team
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleClearTags}
                disabled={selectedPokemons.length === 0}
                startIcon={<Clear />}
                sx={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  },
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Clear Tags
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearPokemons}
                disabled={!submitted}
                startIcon={<Refresh />}
                sx={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                  },
                  px: { xs: 2, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Reset
              </Button>
            </Box>

            <AnimatePresence>
              {selectedPokemons.length > 0 && (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  sx={{ mb: 4, overflow: "hidden" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      backgroundColor: "rgba(255, 255, 255, 0.85)",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Selected Pokemons:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                      {selectedPokemons.map((pokemon) => {
                        const typeInfo = typeColors[pokemon.type as keyof typeof typeColors] || typeColors.Normal
                        return (
                          <Chip
                            key={pokemon.name}
                            label={pokemon.name}
                            onDelete={() => handleDelete(pokemon)}
                            sx={{
                              background: typeInfo.gradient,
                              color: "white",
                              fontWeight: "bold",
                              "& .MuiChip-deleteIcon": {
                                color: "white",
                              },
                            }}
                          />
                        )
                      })}
                    </Box>
                  </Paper>
                </Box>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {submitted && (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      backgroundColor: "rgba(255, 255, 255, 0.85)",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Your Pokemon Team
                    </Typography>

                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { 
                        xs: '1fr', 
                        sm: 'repeat(2, 1fr)', 
                        md: 'repeat(4, 1fr)' 
                      },
                      gap: 3
                    }}>
                      {displayedPokemons.map((pokemon, index) => (
                        <Box key={pokemon.name}>
                          <PokemonCard pokemon={pokemon} index={index} typeColors={typeColors}/>
                        </Box>
                      ))}
                    </Box>

                    {totalPages > 1 && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 4,
                          pt: 2,
                          borderTop: "1px solid #E2E8F0",
                        }}
                      >
                        <Pagination
                          count={totalPages}
                          page={page}
                          onChange={handlePageChange}
                          color="primary"
                          size="large"
                          showFirstButton
                          showLastButton
                          sx={{
                            "& .MuiPaginationItem-root": {
                              fontWeight: 600,
                            },
                          }}
                        />
                      </Box>
                    )}
                  </Paper>
                </Box>
              )}
            </AnimatePresence>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
