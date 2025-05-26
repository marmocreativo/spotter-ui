import React, { type ReactNode } from "react";
import {
  Portal,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Link,
  Container,
  Heading,
  Text,
  Image,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Switch, 
  FormControl,
  FormLabel,
  useTheme 
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { HamburgerIcon, CloseIcon,ArrowForwardIcon } from "@chakra-ui/icons";
import {  FaDiscord,
          FaLinkedin,
          FaGithub,
          FaTwitter,
          FaChevronUp,
          FaChevronDown,
          FaBolt,
          FaMobileAlt,
          FaRobot,
          FaDatabase,
          FaCreditCard,
          FaSign,
          FaUserPlus,
          FaPercent,
          FaShareAlt,
          FaStop,
          FaUniversity,
          FaShoppingCart,
          FaClock,
          FaDice,
          FaBitcoin,
          FaFolder,
          FaBookOpen,
          FaBook,
          FaTable,
          FaPencilAlt,
          FaVideo,
          FaBookmark,
          FaSearch,
          FaComment,
          FaFingerprint,
          FaBriefcase,
          FaQuestion,
          FaMousePointer,
          FaBroadcastTower,
          FaGlobe,
          FaCog,
          FaPlug,
          FaCompass,
          FaNetworkWired,
          FaAndroid,
          FaPhoneAlt
        } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";


const data = [
  { day: "Lun", brand: 98, brand_b: 95 },
  { day: "Mar", brand: 95, brand_b: 92 },
  { day: "Mié", brand: 92, brand_b: 89 },
  { day: "Jue", brand: 90, brand_b: 86 },
  { day: "Vie", brand: 88, brand_b: 83 },
  { day: "Sáb", brand: 85, brand_b: 80 },
  { day: "Dom", brand: 82, brand_b: 78 },
];

// Links para el menú de navegación
const Links = [
  {
    label: "Product",
    items: [
      { label: "Diagnóstico molecular", to: "/servicios/diagnostico" },
      { label: "Biopsia líquida", to: "/servicios/biopsia" },
    ],
  },
  {
    label: "Use Cases",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Guías", to: "/guias" },
    ],
  },
  {
    label: "Developers",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    label: "Demo",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    label: "Practice",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
];

// Json de ejemplo 
const jsonData = {
  "products": {
    "identification": {
      "data": {
        "visitorId": "8cfqwZA350CS3lqLmnxU",
        "requestId": "1748157372399.TvAewn",
        "browserDetails": {
          "browserName": "Opera",
          "browserMajorVersion": "119",
          "browserFullVersion": "119.0.0",
          "os": "Windows",
          "osVersion": "11",
          "device": "Other",
          "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 OPR/119.0.0.0"
        },
        "incognito": false,
        "ip": "189.203.37.197",
        "ipLocation": {
          "accuracyRadius": 10,
          "latitude": 19.4941,
          "longitude": -99.1088,
          "postalCode": "07059",
          "timezone": "America/Mexico_City",
          "city": {
            "name": "Gustavo Adolfo Madero"
          },
          "country": {
            "code": "MX",
            "name": "Mexico"
          },
          "continent": {
            "code": "NA",
            "name": "North America"
          },
          "subdivisions": [
            {
              "isoCode": "CMX",
              "name": "Mexico City"
            }
          ]
        },
        "timestamp": 1748157372408,
        "time": "2025-05-25T07:16:12Z",
        "url": "https://fingerprint.com/",
        "tag": {
          "referrerLink": "https://chatgpt.com/"
        },
        "confidence": {
          "score": 1,
          "revision": "v1.1"
        },
        "visitorFound": true,
        "firstSeenAt": {
          "global": "2025-05-23T22:19:44.727Z",
          "subscription": "2025-05-23T22:19:44.727Z"
        },
        "lastSeenAt": {
          "global": "2025-05-25T06:50:37.27Z",
          "subscription": "2025-05-25T06:50:37.27Z"
        }
      }
    },
    "botd": {
      "data": {
        "bot": {
          "result": "notDetected"
        },
        "meta": {
          "referrerLink": "https://chatgpt.com/"
        },
        "url": "https://fingerprint.com/",
        "ip": "189.203.37.197",
        "time": "2025-05-25T07:16:12.456Z",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 OPR/119.0.0.0",
        "requestId": "1748157372399.TvAewn"
      }
    },
    "rootApps": {
      "data": {
        "result": false
      }
    },
    "emulator": {
      "data": {
        "result": false
      }
    },
    "ipInfo": {
      "data": {
        "v4": {
          "address": "189.203.37.197",
          "geolocation": {
            "accuracyRadius": 10,
            "latitude": 19.4941,
            "longitude": -99.1088,
            "postalCode": "07059",
            "timezone": "America/Mexico_City",
            "city": {
              "name": "Gustavo Adolfo Madero"
            },
            "country": {
              "code": "MX",
              "name": "Mexico"
            },
            "continent": {
              "code": "NA",
              "name": "North America"
            },
            "subdivisions": [
              {
                "isoCode": "CMX",
                "name": "Mexico City"
              }
            ]
          },
          "asn": {
            "asn": "17072",
            "name": "TOTAL PLAY TELECOMUNICACIONES SA DE CV",
            "network": "189.203.36.0/22"
          },
          "datacenter": {
            "result": false,
            "name": ""
          }
        }
      }
    },
    "ipBlocklist": {
      "data": {
        "result": false,
        "details": {
          "emailSpam": false,
          "attackSource": false
        }
      }
    },
    "tor": {
      "data": {
        "result": false
      }
    },
    "vpn": {
      "data": {
        "result": false,
        "confidence": "high",
        "originTimezone": "America/Mexico_City",
        "originCountry": "unknown",
        "methods": {
          "timezoneMismatch": false,
          "publicVPN": false,
          "auxiliaryMobile": false,
          "osMismatch": false,
          "relay": false
        }
      }
    },
    "proxy": {
      "data": {
        "result": true
      }
    },
    "incognito": {
      "data": {
        "result": false
      }
    },
    "tampering": {
      "data": {
        "result": false,
        "anomalyScore": 0,
        "antiDetectBrowser": false
      }
    },
    "clonedApp": {
      "data": {
        "result": false
      }
    },
    "factoryReset": {
      "data": {
        "time": "1970-01-01T00:00:00Z",
        "timestamp": 0
      }
    },
    "jailbroken": {
      "data": {
        "result": false
      }
    },
    "frida": {
      "data": {
        "result": false
      }
    },
    "privacySettings": {
      "data": {
        "result": false
      }
    },
    "virtualMachine": {
      "data": {
        "result": false
      }
    },
    "rawDeviceAttributes": {
      "data": {
        "webGlExtensions": {
          "value": {
            "contextAttributes": "6b1ed336830d2bc96442a9d76373252a",
            "extensionParameters": "22fad1bae5d96011ed8c710f66905ce2",
            "extensions": "2ec6a06c62e232a16e719d1738edbc16",
            "parameters": "cf93c3299e76430d1b7c3bedeccc1cf9",
            "shaderPrecisions": "f223dfbcd580cf142da156d93790eb83",
            "unsupportedExtensions": []
          }
        },
        "forcedColors": {
          "value": false
        },
        "languages": {
          "value": [
            [
              "es-419"
            ]
          ]
        },
        "audio": {
          "value": 124.04347527516074
        },
        "osCpu": {},
        "indexedDB": {
          "value": true
        },
        "privateClickMeasurement": {},
        "hardwareConcurrency": {
          "value": 4
        },
        "math": {
          "value": "5f030fa7d2e5f9f757bfaf81642eb1a6"
        },
        "localStorage": {
          "value": true
        },
        "screenResolution": {
          "value": [
            1920,
            1080
          ]
        },
        "architecture": {
          "value": 255
        },
        "hdr": {
          "value": false
        },
        "emoji": {
          "value": {
            "bottom": 28,
            "font": "\"Times New Roman\"",
            "height": 17,
            "left": 8,
            "right": 1765.5,
            "top": 11,
            "width": 1757.5,
            "x": 8,
            "y": 11
          }
        },
        "timezone": {
          "value": "America/Mexico_City"
        },
        "reducedMotion": {
          "value": false
        },
        "touchSupport": {
          "value": {
            "maxTouchPoints": 0,
            "touchEvent": false,
            "touchStart": false
          }
        },
        "cpuClass": {},
        "fontPreferences": {
          "value": {
            "apple": 149.3125,
            "default": 149.3125,
            "min": 9.34375,
            "mono": 121.515625,
            "sans": 144.015625,
            "serif": 149.3125,
            "system": 147.859375
          }
        },
        "platform": {
          "value": "Win32"
        },
        "domBlockers": {},
        "fonts": {
          "value": [
            "Calibri",
            "Century",
            "Century Gothic",
            "Franklin Gothic",
            "Futura Bk BT",
            "MS Reference Specialty",
            "MS UI Gothic",
            "MT Extra",
            "Marlett",
            "Monotype Corsiva",
            "SCRIPTINA",
            "Segoe UI Light",
            "TRAJAN PRO"
          ]
        },
        "mathML": {
          "value": {
            "bottom": 25,
            "font": "\"Times New Roman\"",
            "height": 17,
            "left": 8,
            "right": 276.078125,
            "top": 8,
            "width": 268.078125,
            "x": 8,
            "y": 8
          }
        },
        "deviceMemory": {
          "value": 8
        },
        "webGlBasics": {
          "value": {
            "renderer": "WebKit WebGL",
            "rendererUnmasked": "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti (0x00001C82) Direct3D11 vs_5_0 ps_5_0, D3D11)",
            "shadingLanguageVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
            "vendor": "WebKit",
            "vendorUnmasked": "Google Inc. (NVIDIA)",
            "version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
          }
        },
        "cookiesEnabled": {
          "value": true
        },
        "sessionStorage": {
          "value": true
        },
        "plugins": {
          "value": [
            {
              "description": "Portable Document Format",
              "mimeTypes": [
                {
                  "suffixes": "pdf",
                  "type": "application/pdf"
                },
                {
                  "suffixes": "pdf",
                  "type": "text/pdf"
                }
              ],
              "name": "PDF Viewer"
            },
            {
              "description": "Portable Document Format",
              "mimeTypes": [
                {
                  "suffixes": "pdf",
                  "type": "application/pdf"
                },
                {
                  "suffixes": "pdf",
                  "type": "text/pdf"
                }
              ],
              "name": "Chrome PDF Viewer"
            },
            {
              "description": "Portable Document Format",
              "mimeTypes": [
                {
                  "suffixes": "pdf",
                  "type": "application/pdf"
                },
                {
                  "suffixes": "pdf",
                  "type": "text/pdf"
                }
              ],
              "name": "Chromium PDF Viewer"
            },
            {
              "description": "Portable Document Format",
              "mimeTypes": [
                {
                  "suffixes": "pdf",
                  "type": "application/pdf"
                },
                {
                  "suffixes": "pdf",
                  "type": "text/pdf"
                }
              ],
              "name": "Microsoft Edge PDF Viewer"
            },
            {
              "description": "Portable Document Format",
              "mimeTypes": [
                {
                  "suffixes": "pdf",
                  "type": "application/pdf"
                },
                {
                  "suffixes": "pdf",
                  "type": "text/pdf"
                }
              ],
              "name": "WebKit built-in PDF"
            }
          ]
        },
        "invertedColors": {},
        "vendorFlavors": {
          "value": [
            "chrome"
          ]
        },
        "openDatabase": {
          "value": false
        },
        "colorDepth": {
          "value": 24
        },
        "pdfViewerEnabled": {
          "value": true
        },
        "canvas": {
          "value": {
            "Geometry": "04448240937f45b2ccc629cd5715ee6e",
            "Text": "cf99116023dadba706cb4b684654f87b",
            "Winding": true
          }
        },
        "screenFrame": {
          "value": [
            0,
            0,
            50,
            0
          ]
        },
        "vendor": {
          "value": "Google Inc."
        },
        "dateTimeLocale": {
          "value": "es-MX"
        },
        "audioBaseLatency": {
          "value": -2
        },
        "contrast": {
          "value": 0
        },
        "colorGamut": {
          "value": "srgb"
        },
        "monochrome": {
          "value": 0
        }
      }
    },
    "highActivity": {
      "data": {
        "result": true,
        "dailyRequests": 7
      }
    },
    "locationSpoofing": {
      "data": {
        "result": false
      }
    },
    "suspectScore": {
      "data": {
        "result": 20
      }
    },
    "remoteControl": {
      "data": {
        "result": false
      }
    },
    "velocity": {
      "data": {
        "distinctIp": {
          "intervals": {
            "5m": 1,
            "1h": 1,
            "24h": 1
          }
        },
        "distinctLinkedId": {},
        "distinctCountry": {
          "intervals": {
            "5m": 1,
            "1h": 1,
            "24h": 1
          }
        },
        "events": {
          "intervals": {
            "5m": 1,
            "1h": 3,
            "24h": 7
          }
        },
        "ipEvents": {
          "intervals": {
            "5m": 1,
            "1h": 3,
            "24h": 7
          }
        },
        "distinctIpByLinkedId": {},
        "distinctVisitorIdByLinkedId": {}
      }
    },
    "developerTools": {
      "data": {
        "result": true
      }
    }
  }
};

// Componente de enlace
const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    as={RouterLink}
    to={to}
    px={3}
    py={2}
    rounded={"md"}
    _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}
  >
    {children}
  </Link>
);

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  return (
    <>
       {/** Menu */}
        <Box bg="#FAFAF8" px={4} zIndex={1000} position="relative">
          <Container maxW="container.xl">
            <Flex h={16} alignItems="center" justifyContent="space-between" position="relative">
              {/* Menú hamburguesa para móvil */}
              <IconButton
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="Abrir menú"
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />

              {/* Logo */}
              <Box fontWeight="bold" fontSize="lg" display="flex" alignItems="center" gap={2}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 944.7 623.7" height="20">
                  <circle fill="#008080" cx="150" cy="472.7" r="147.4" />
                  <circle fill="#F84960" cx="150" cy="150.8" r="147.4" />
                  <circle fill="#BCDDDE" cx="472.3" cy="472.7" r="147.4" />
                  <circle fill="#BCDDDE" cx="794.7" cy="472.7" r="147.4" />
                </svg>
                Spotter
              </Box>

              {/* Menú de navegación centrado */}
              <HStack
                spacing={2}
                alignItems="center"
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                display={{ base: "none", md: "flex" }}
              >
                {/** Menu Products */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Product
                        </Box>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          p={1}
                          boxShadow="md"
                          minW="600px"
                          _focus={{ outline: "none" }}
                          bg="#FAFAF8"
                          minH="250px"
                          borderRadius="xl"
                          zIndex={2500}
                        >
                          <Flex
                            bg="#fff"
                            border="1px solid"
                            borderColor="gray.300"
                            borderRadius="xl"
                            minH="250px"
                            height="full"
                            direction={"row"}
                          >
                            <Box flex={1} p={4}>
                              <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                                    CAPABILITIES
                              </Text>
                              {/**Menu Item */}
                              <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaFingerprint} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                <Box>
                                    <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Identification </Text>
                                    <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Industry-leading accuracy.</Text>
                                </Box>
                              </Flex>
                              {/**Menu Item */}
                              <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBolt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                <Box>
                                    <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Smart Signals </Text>
                                    <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> 100+ signals for fraud & user intent.</Text>
                                </Box>
                              </Flex>
                              {/**Menu Item */}
                              <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaMobileAlt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                <Box>
                                    <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Mobile Device Signals </Text>
                                    <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Identify suspicious mobile traffic.</Text>
                                </Box>
                              </Flex>
                              {/**Menu Item */}
                              <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaRobot} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                <Box>
                                    <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Bot Detection </Text>
                                    <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Prevent sophisticated attacks.</Text>
                                </Box>
                              </Flex>
                            </Box>
                            <Box flex={1} p={4}>
                              <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                                    PLATFORM
                              </Text>
                              {/**Menu Item */}
                              <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaDatabase} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                <Box>
                                    <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Device Intelligence </Text>
                                    <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Recognize web and mobile users.</Text>
                                </Box>
                              </Flex>
                              <Box h={"170px"} p={4} border={"1px solid"} borderColor="brand.500" borderRadius={"xl"}>
                                <Text fontSize={'11px'} color={"brand.500"} mb="20px">
                                  Whats new
                                </Text>
                                <Text fontSize={'14px'} fontWeight={"500"} color={"grey.500"}>
                                  Customizable insights
                                </Text>
                                <Text fontSize={'11px'} color={"grey.500"}>
                                  Understand site visitors: New Smart Signals data and suspect score weights
                                </Text>

                              </Box>
                            </Box>

                          </Flex>
                        </PopoverContent>
                      </Portal>
                    </Box>
                  </Popover>
                {/** Menu use Cases */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Use Cases
                        </Box>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          p={1}
                          boxShadow="md"
                          minW="800px"
                          _focus={{ outline: "none" }}
                          bg="#FAFAF8"
                          minH="250px"
                          borderRadius="xl"
                          zIndex={2500}
                        >
                          <Flex direction={"row"}>
                            <Flex
                              flex="3"
                              bg="#fff"
                              border="1px solid"
                              borderColor="gray.300"
                              borderRadius="xl"
                              minH="250px"
                              height="full"
                              direction={"row"}
                            >
                              <Box flex={1} p={4}>
                                <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                                      PROTECT
                                </Text>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaCreditCard} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Payment Fraud </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Reduce fraud. Increase real payments.</Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaSign} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Account Takeover </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Prevent attacks without hindering UX.</Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaMobileAlt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> SMS Fraud </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Stop SMS fraud and SMS pumping.</Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaUserPlus} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> New Account Fraud </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Stop repeat signups and trial abuse.</Text>
                                  </Box>
                                </Flex>
                              </Box>
                              <Box flex={1} p={4}>
                                <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                                      GROW
                                </Text>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaPercent} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Returning User Experience </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Tailor experiences. Remove friction.</Text>
                                  </Box>
                                </Flex>
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaShareAlt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Account Sharing Prevention </Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Convert users into paying customers.</Text>
                                  </Box>
                                </Flex>
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaStop} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Paywall</Text>
                                      <Text as="p" fontSize="12px" fontWeight="400" color="rgb(72, 73, 70)"> Eliminate bypass techniques.</Text>
                                  </Box>
                                </Flex>
                              </Box>

                            </Flex>
                            <Flex flex="2" p={0} direction={"column"}>
                                <Text as="h3" color="rgb(137, 137, 138)" p="4" pb='1' fontSize="12px" fontWeight="400" mb="8px">
                                      BY INDUSTRY
                                </Text>
                                {/**Menu Item */}
                                <Flex direction={"row"} px="2" py="4"  borderBottom="1px dashed"  borderColor="gray.200" _hover={{ bg: "#FFFFFF"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaUniversity} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Fintech </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} px="2" py="4"  borderBottom="1px dashed"  borderColor="gray.200" _hover={{ bg: "#FFFFFF"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaShoppingCart} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> eCommerce </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} px="2" py="4"  borderBottom="1px dashed"  borderColor="gray.200" _hover={{ bg: "#FFFFFF"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaClock} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Buy Now Pay Later (BNPL) </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} px="2" py="4"  borderBottom="1px dashed"  borderColor="gray.200" _hover={{ bg: "#FFFFFF"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaDice} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Online Gaming & Gambling </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} px="2" py="4"  borderBottom="1px dashed"  borderColor="gray.200" _hover={{ bg: "#FFFFFF"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBitcoin} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Cryptocurrency </Text>
                                  </Box>
                                </Flex>
                            </Flex>
                          </Flex>
                        </PopoverContent>
                      </Portal>
                    </Box>
                  </Popover>
                {/** Menu Developers */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Developers
                        </Box>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          p={1}
                          boxShadow="md"
                          minW="400px"
                          _focus={{ outline: "none" }}
                          bg="#FAFAF8"
                          minH="50px"
                          borderRadius="xl"
                          zIndex={2500}
                        >
                          <Flex
                            bg="#fff"
                            border="1px solid"
                            borderColor="gray.300"
                            borderRadius="xl"
                            minH="50px"
                            height="full"
                            direction={"column"}
                          >
                            <Flex direction={"row"}>
                              <Box flex={1} p={4}>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaFolder} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Documentation </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBookOpen} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> SDKs and Libraries </Text>
                                  </Box>
                                </Flex>
                              </Box>
                              <Box flex={1} p={4}>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBook} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Tutorials </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBookOpen} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> FingerprintJS vs Pro </Text>
                                  </Box>
                                </Flex>
                              </Box>
                            </Flex>
                            <Flex m="4" justify={"space-between"} p={4} border={"1px dashed"} borderColor={"grey.100"} borderRadius={"lg"}>
                              <HStack spacing={4}>
                                <Text fontSize="14px" fontWeight={"500"} color="rgb(98, 176, 109)">
                                  • All systems normal
                                </Text>
                              </HStack>
                              <HStack spacing={4}>
                                <Link href="https://discord.com" isExternal color="rgb(110, 111, 108)">
                                  <HStack spacing={1}>
                                    <Icon as={FaDiscord} boxSize={4} />
                                    <Text>Discord</Text>
                                  </HStack>
                                </Link>
                                <Link href="https://github.com" isExternal color="rgb(110, 111, 108)">
                                  <HStack spacing={1}>
                                    <Icon as={FaGithub} boxSize={4} />
                                    <Text>Github</Text>
                                  </HStack>
                                </Link>
                              </HStack>
                          </Flex>
                            

                          </Flex>
                          
                        </PopoverContent>
                      </Portal>
                    </Box>
                  </Popover>
                {/** Menu use Resources */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Resources
                        </Box>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          p={1}
                          boxShadow="md"
                          minW="800px"
                          _focus={{ outline: "none" }}
                          bg="#FAFAF8"
                          minH="250px"
                          borderRadius="xl"
                          zIndex={2500}
                        >
                          <Flex direction={"row"} gap={1}>
                            <Flex
                              flex="3"
                              bg="#fff"
                              border="1px solid"
                              borderColor="gray.300"
                              borderRadius="xl"
                              minH="250px"
                              height="full"
                              direction={"row"}
                            >
                              <Box flex={1} p={4}>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaTable} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Resources </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaPencilAlt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Blog </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaVideo} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Webinars </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBookmark} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> FAQ </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaSearch} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Case Studies </Text>
                                  </Box>
                                </Flex>
                              </Box>
                              <Box flex={1} p={4}>
                                
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaComment} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Press </Text>
                                  </Box>
                                </Flex>
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaFingerprint} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> About Us</Text>
                                  </Box>
                                </Flex>
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBriefcase} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Careers</Text>
                                  </Box>
                                </Flex>
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaQuestion} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Support</Text>
                                  </Box>
                                </Flex>
                              </Box>

                            </Flex>
                            <Flex flex="2" p={4} direction={"column"}
                              bg="#fff"
                              borderRadius="xl"
                              minH="250px"
                              height="full"
                               border={"1px solid"} borderColor="brand.500" 
                               >
                                <Text fontSize={'11px'} color={"brand.500"} mb="20px">
                                    Featured
                                  </Text>
                                  <Text fontSize={'14px'} fontWeight={"500"} color={"grey.500"}>
                                    Understanding Smart Signals
                                  </Text>
                            </Flex>
                          </Flex>
                        </PopoverContent>
                      </Portal>
                    </Box>
                  </Popover>
                {/** Menu Demo */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Demo
                        </Box>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          p={1}
                          boxShadow="md"
                          minW="200px"
                          _focus={{ outline: "none" }}
                          bg="#FAFAF8"
                          minH="50px"
                          borderRadius="xl"
                          zIndex={2500}
                        >
                          <Flex
                            bg="#fff"
                            border="1px solid"
                            borderColor="gray.300"
                            borderRadius="xl"
                            minH="50px"
                            height="full"
                            direction={"column"}
                          >
                            <Flex direction={"row"}>
                              <Box flex={1} p={4}>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaMousePointer} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Playground </Text>
                                  </Box>
                                </Flex>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaMobileAlt} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> Device Identification </Text>
                                  </Box>
                                </Flex>
                                <Box borderTop="1px dashed" borderColor="gray.200" my="4"></Box>
                                {/**Menu Item */}
                                <Flex direction={"row"} p="1" py="2" _hover={{ bg: "#FAFAF8", border: "1px dashed", borderColor: "gray.200", borderRadius: "8"}}>
                                  <Box> <Box
                                          p="6px"
                                          border="1px solid #e4e5e1"
                                          borderRadius="md"
                                          mr="10px"
                                          display="flex"
                                          justifyContent="center"
                                          alignItems="center"
                                          width="auto"
                                          height="auto"
                                        >
                                          <Icon as={FaBook} boxSize={3} color={"brand_b.500"} />
                                        </Box> </Box>
                                  <Box>
                                      <Text as="p" fontSize="14px" fontWeight="500" color="rgb(20, 20, 21)"> By Use Case </Text>
                                  </Box>
                                </Flex>
                              </Box>
                            </Flex>
                          </Flex>
                          
                        </PopoverContent>
                      </Portal>
                    </Box>
                  </Popover>
                {/** Menu Pricing */}
                  <Popover trigger="hover" placement="bottom">
                    <Box zIndex={1000}>
                      <PopoverTrigger>
                        <Box
                          px={3}
                          py={2}
                          cursor="pointer"
                          fontSize="13px"
                          fontWeight="medium"
                          color="#484946"
                          _hover={{ border: "1px solid #e4e5e1", borderRadius: "md" }}
                        >
                          Pricing
                        </Box>
                      </PopoverTrigger>
                    </Box>
                  </Popover>
                  

              </HStack>


              {/* Botones del lado derecho */}
              <HStack spacing={3}>
                <Button variant="ghost" colorScheme="brand" size="sm" mx={0}>
                  Login
                </Button>
                <Button variant="outline" colorScheme="brand" size="sm">
                  Contact Sales
                </Button>
                <Button colorScheme="brand" size="sm">
                  Get Started
                </Button>
              </HStack>
            </Flex>


            {/* Menú colapsable en móvil */}
            {isOpen && (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as="nav" spacing={4}>
                  {Links.map((group) =>
                    group.items.map((item) => (
                      <NavLink key={item.to} to={item.to}>
                        {item.label}
                      </NavLink>
                    ))
                  )}
                </Stack>
              </Box>
            )}
          </Container>
        </Box>
        {/** Hero */}
        <Box
            bg="transparent"
            px={4}
            minH="600px"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(-8deg, #FFFFFF 50%, #FAFAF8 50%)",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(-8deg, transparent calc(50% - .5px), #e4e5e1 calc(50% - .5px), #e4e5e1 calc(50% + .5px), transparent calc(50% - .5px))",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
          >
            <Container maxW="container.xl" pt="5%" pb="2%" borderX="0.5px dashed #e4e5e1">
              <Flex justifyContent="center" width="100%" align="center" justify="center" direction="column" textAlign="center">
                <Heading as="h1" size="2xl" mb={4}>
                  Identify <Text as="span" color="brand.500"> Every Visitor </Text>
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Stop fraud, detect bots, or delight customers. Identify good and bad<br/>
                  visitors with industry-leading accuracy - even if they're anonymous.
                </Text>
                <HStack spacing={3} my={4}>
                  <Button colorScheme="brand">
                    Get Started
                  </Button>
                  <Button variant="outline" colorScheme="brand">
                    Contact Sales
                  </Button>
                </HStack>
              </Flex>

              <Flex mt="50px" width="100%" minH="300px" height="100%">
                    <Box flex="1"  />
                    <Flex
                      flex="4"
                      bg="#fff"
                      p={2}
                      minH="300px"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      height={"100%"}
                      direction="column"
                    >
                      <Flex flex={1} alignItems="center" justifyContent="flex-end">
                        <Text
                          color="rgb(110, 111, 108)"
                          fontSize="9px"
                          textTransform="uppercase"
                          fontWeight="medium"
                          mr={2}
                        >
                          I'm a developer
                        </Text>
                        <Switch id="email-alerts" />
                      </Flex>
                      <Flex direction={'row'} flex={10} bg="rgb(250, 250, 248)" height={"full"} borderRadius={"lg"} border="1px solid" borderColor="gray.200">
                        <Flex direction={"column"} flex={2} p={3} bg="rgb(240, 240, 237)">
                          <Text fontSize={"11px"} color={"rgb(24, 25, 22)"} fontFamily={"monospace"} mb={4}>
                            Welcome to Fingerprint,<br/>
                            Visitor <Text as="span" color={"brand_b.500"} fontWeight={"600"}>8cfqwZA350CS3lqLmnxU!</Text>
                          </Text>
                          <Text fontSize={"11px"} color={"rgb(24, 25, 22)"} fontFamily={"monospace"} mb={4}>
                            It’s great to have you here.<br/>
                            This is visit number 14 using Opera.
                          </Text>
                          <Text fontSize={"11px"} color={"rgb(24, 25, 22)"} fontFamily={"monospace"} mb={4}>
                            Your current IP suggests you’re in<br/>
                            Gustavo Adolfo Madero, Mexico<br/>
                            What a beautiful place !
                          </Text>
                          <Text fontSize={"11px"} color={"rgb(24, 25, 22)"} fontFamily={"monospace"} mb={4}>
                            Curious to explore more? <Text as="span" color={"brand_b.500"} fontWeight={"600"}>Sign up</Text> for a<br/>
                            free trial and unlock all the features<br/>
                            we offer - without any commitment.
                          </Text>
                          <Text fontSize={"11px"} color={"rgb(24, 25, 22)"} fontFamily={"monospace"} mb={4}>
                            Hope we see you soon!
                          </Text>
                        </Flex>
                        
                        <Flex direction={'column'} flex={3} p={0}>
                          <Flex flex={1} p="3" borderTop="1px solid" borderColor="gray.200" justifyContent={"start"}  align="center">
                            <Text fontSize={"12px"}>
                              Hello, visitor ID <Text as="span" color={"brand_b.500"} fontWeight={"600"}>8cfqwZA350CS3lqLmnxU</Text>
                            </Text>
                          </Flex>
                          <Flex direction={"row"} flex={1} borderTop="1px solid" borderColor="gray.200" p={0}>
                            <Flex flex={2} direction={"column"} justifyContent={"center"} borderRight={"1px solid"} borderColor={"gray.300"}  align="start" p={2}>
                              <Text fontSize={"11px"}>Your visit summary</Text>
                              <Text fontSize={"11px"}>You visited 14 times</Text>
                            </Flex>
                            <Flex flex={1} direction={"column"} justifyContent={"center"} borderRight={"1px solid"} borderColor={"gray.300"}  align="start" p={2}>
                              <Text fontSize={"11px"}>Incognito</Text>
                              <Text fontSize={"11px"}>0 sessions</Text>
                            </Flex>
                            <Flex flex={1} direction={"column"} justifyContent={"center"} borderRight={"1px solid"} borderColor={"gray.300"}  align="start" p={2}>
                              <Text fontSize={"11px"}>IP address</Text>
                              <Text fontSize={"11px"}>1 IP</Text>
                            </Flex>
                            <Flex flex={1} direction={"column"} justifyContent={"center"}  align="start" p={2}>
                              <Text fontSize={"11px"}>Geolocation</Text>
                              <Text fontSize={"11px"}>1 location</Text>
                            </Flex>
                          </Flex>
                          <Flex flex={1} borderTop="1px solid" px={2} py="4" align={"center"} borderColor="gray.200">
                            <Text fontSize={"9px"} textTransform={"uppercase"}>Your visit history</Text>
                          </Flex>
                          <Flex direction={"row"} flex={1} borderTop="1px solid" borderColor="gray.200">
                            <Flex flex={1} direction={"column"} align={"center"}  borderRight={"1px solid"} borderColor={"gray.300"}>
                                <Icon as={FaChevronUp} color={"brand_b.500"} boxSize={3} height={"50px"} borderBottom="1px solid" borderColor="gray.200"/>
                                <Icon as={FaChevronDown} color={"brand_b.500"} boxSize={3} height={"50px"} />
                            </Flex>
                            <Flex flex={5} direction={"column"}  borderRight={"1px solid"} borderColor={"gray.300"}  justifyContent={"center"}>
                              <Box p={4} height="85px">
                                <Text fontSize={"11px"}>14 Hours Ago</Text>
                                <Text fontSize={"11px"}>Gustavo A. Madero</Text>
                              </Box>
                              <Box p={4} borderTop={"1px solid"} borderColor={"gray.300"}>
                                <Text fontSize={"11px"}>IP Adress 189.203.37.197</Text>
                              </Box>
                              <Box p={4} borderTop={"1px solid"} borderColor={"gray.300"}>
                                <Text fontSize={"11px"}>Browser Opera 119.0</Text>
                              </Box>
                            </Flex>
                            <Flex flex={6} direction={"column"}  borderRight={"1px solid"} borderColor={"gray.300"}>
                              <Box>
                                <Image
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-99.1088,19.4941,12.00,0/350x200?access_token=pk.eyJ1IjoidmFsdmUxIiwiYSI6ImNqeXUwdHlnejA5YzMzaHBnN3R4OXF1czEifQ.4-Wne3WDiafdfFGLSTkFiQ"
                                  alt="Mapa"
                                  objectFit="cover"
                                  width="100%"
                                  height="85px"
                                />  
                              </Box>
                              <Box p={4} borderTop={"1px solid"} borderColor={"gray.300"}>
                                <Text fontSize={"11px"}>IP Adress 189.203.37.197</Text>
                              </Box>
                              <Box p={4} borderTop={"1px solid"} borderColor={"gray.300"}>
                                <Text fontSize={"11px"}>Browser Opera 119.0</Text>
                              </Box>
                            </Flex>
                          </Flex>
                          
                        </Flex>
                      </Flex>
                      
                    </Flex>
                    <Box flex="1" p={4} display="flex" alignItems="flex-end" minH="300px" height="100%"  >
                      <Text fontSize="8px" textTransform="uppercase" fontFamily="mono" color="gray.500">
                        This is a demo. <br />
                        Production accuracy will be higher.
                      </Text>
                    </Box>
              </Flex>
            </Container>
        </Box>
        {/** Brands */}
        <Box bg="#fff">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1" borderBottom="0.5px dashed #e4e5e1">
            <Box textAlign="center" pb="5%">
              <Text fontSize="12px" letterSpacing="1.44px" fontWeight="400" textTransform="uppercase" color="gray.500" mb="40px">
                Trusted by 6000+ companies of all sizes
              </Text>

              <Flex
                gap={8}
                align="center"
                justify="center"
                wrap="wrap"
                width="100%"
              >
                {/* Logos */}
                <Box>
                   <Image src="/brands/dropbox.svg" alt="Dropbox logo" height="15px" />
                </Box>

                <Box>
                   <Image src="/brands/ramp.svg" alt="Ramp logo" height="15px" />
                </Box>

                <Box>
                   <Image src="/brands/westerunion.svg" alt="Wsterunion logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/ramp.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/checkout.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/usbank.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/trustpilot.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/rockstar.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/binance.svg" alt="ramp logo" height="15px" />
                </Box>
                <Box>
                   <Image src="/brands/tiktok.svg" alt="ramp logo" height="15px" />
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>
        {/** Use cases */}
        <Box bg="#fff">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1" borderBottom="0.5px dashed #e4e5e1">
            <Flex minH="400px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                <Text as="span" border="1px solid rgb(240, 240, 237)" p={1} borderRadius="lg" width="fit-content" fontFamily="mono" fontSize="12px" color="gray.500">
                  Use Cases_
                </Text>
                <Text as="h2" fontSize="36px" fontWeight="500" lineHeight="44px" letterSpacing="-0.73px" py="16px">
                  Build
                  <Text as="span" color="brand.500">safe</Text>
                  and <br/>
                  <Text as="span" color="brand.500">seamless</Text>
                  products
                </Text>
                <Text as="p" fontSize="16px" fontWeight="400" color="rgb(72, 73, 70)" mb="24px">
                  The device intelligence platform for visitor intent.
                  <b>Reduce friction</b> for the good guys. <b>Stop the bad guys.</b>
                </Text>
                <Button
                  variant="outline"
                  fontSize="12px"
                  colorScheme="gray"
                  size="sm"
                  bg="white"
                  borderColor="gray.300"
                  color="rgb(20, 20, 21)"
                  _hover={{ bg: "gray.50" }}
                  width="fit-content"
                >
                  See all Use Cases
                </Button>
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Accordion */}
        <Box bg="#fff">
          <Container maxW="container.xl" px={0} borderX="0.5px dashed #e4e5e1" borderBottom="0.5px dashed #e4e5e1">
            <Flex minH="100px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={0}>
                <Box width="80%" borderRight="0.5px dashed #e4e5e1">
                  <Accordion defaultIndex={[0]} allowToggle>
                    <AccordionItem>
                      <Box>
                        <AccordionButton px="32px" py="22px" >
                          <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaSign} boxSize={4} /></Box>
                          <Box as="span" flex="1" textAlign="left">
                            Account Takeover
                          </Box>
                          <AccordionIcon color="brand.500" />
                        </AccordionButton>
                      </Box>
                      <AccordionPanel pb={4}>
                        Identify and block login attempts using stolen credentials while recognizing legitimate users.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <Box>
                        <AccordionButton px="32px" py="22px"  border="none"  >
                          <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaCreditCard} boxSize={4} /></Box>
                          <Box as="span" flex="1" textAlign="left">
                            Payment Fraud
                          </Box>
                          <AccordionIcon color="brand.500" />
                        </AccordionButton>
                      </Box>
                      <AccordionPanel pb={4}>
                        Reduce fraudulent transactions and increase legitimate conversions with device intelligence signals.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <Box>
                        <AccordionButton px="32px" py="22px"  border="none" >
                          <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaMobileAlt} boxSize={4} /></Box>
                          <Box as="span" flex="1" textAlign="left">
                            SMS Fraud
                          </Box>
                          <AccordionIcon color="brand.500" />
                        </AccordionButton>
                      </Box>
                      <AccordionPanel pb={4}>
                        Prevent SMS pumping fraud attacks and SIM swapping scams with mobile device intelligence signals.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <Box>
                        <AccordionButton px="32px" py="22px"  border="none">
                          <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaRobot} boxSize={4} /></Box>
                          <Box as="span" flex="1" textAlign="left">
                            Bot Detection
                          </Box>
                          <AccordionIcon color="brand.500" />
                        </AccordionButton>
                      </Box>
                      <AccordionPanel pb={4}>
                        Detect malicious bots, automation tools, and other sophisticated threats to prevent real-time attacks.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </Flex>
              <Flex flex={1} p={0} gap={0} direction="row">
                <Flex flex={1} align="flex-end">
                  <Box width="85%">
                    <Image src="/accordion/acordion_1.svg" alt="Acordion 1" width="100%" height="auto" />
                  </Box>
                </Flex>
                <Flex flex={1} direction="column" height="100%">
                  <Flex direction="row" height="20%">
                    <Box flex={1} p="4"  borderLeft="1px solid" borderColor="brand.500">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        Visitor ID_
                      </Text>
                      <Text fontSize="12px" color="brand_b.500" fontWeight="600" fontFamily="mono">
                        Hu6Inke3rJKYJUdtH2seL
                      </Text>
                    </Box>
                    <Box flex={1} p="4" borderLeft="0.5px dashed #e4e5e1">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        Suspect Score
                      </Text>
                      <Text fontSize="12px" color="rgb(207, 50, 61)" fontFamily="mono">
                        20
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    borderLeft="1px solid"
                    borderColor="gray.700"
                    height="80%"
                    direction="column"
                    justify="space-between" // o "space-evenly"
                    borderTop="0.5px dashed #e4e5e1"
                  >
                    <Box p="20px">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        Geolocation_
                      </Text>
                      <Text fontSize="11px" color="rgb(72, 73, 70)" fontFamily="mono">
                        Prague, Czechia
                      </Text>
                    </Box>
                    <Box p="20px" bg="rgba(255, 236, 235, 0.2)">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        VPN_
                      </Text>
                      <Text fontSize="11px" color="rgb(136, 35, 41)" fontFamily="mono">
                        Detected
                      </Text>
                    </Box>
                    <Box p="20px" bg="rgba(255, 236, 235, 0.2)">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        Jailbroken Device_
                      </Text>
                      <Text fontSize="12px" color="rgb(207, 50, 61)" fontFamily="mono">
                        Detected
                      </Text>
                    </Box>
                    <Box p="20px" bg="rgba(255, 236, 235, 0.2)">
                      <Text fontSize="11px" color="rgb(140, 140, 137)" fontFamily="mono">
                        IP Blocklist_
                      </Text>
                      <Text fontSize="12px" color="rgb(207, 50, 61)" fontFamily="mono">
                        Detected
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Spacer */}
        <Box bg="#fff">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1">
            <Flex minH="128px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Why Fingerprint_ */}
        <Box
          bg="transparent"
            px={4}
            minH="600px"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(8deg, #FAFAF8 50%, #FFFFFF 50%)",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(8deg, transparent calc(50% - .5px), #e4e5e1 calc(50% - .5px), #e4e5e1 calc(50% + .5px), transparent calc(50% - .5px))",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
            borderTop="0.5px dashed #e4e5e1">
          <Container maxW="container.xl" p="0" borderX="0.5px dashed #e4e5e1">
            <Flex minH="500px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={3} p={4}>
                <Box bg="#ffffff" width="100%" height="100%" border="1px solid #e4e5e1" borderRadius={"lg"}>
                  <Box p="8">
                    <Text as="span" border="1px solid rgb(240, 240, 237)" p={1} borderRadius="lg" width="fit-content" fontFamily="mono" fontSize="12px" color="gray.500">
                      Why Fingerprint_
                    </Text>
                    <Text as="h2" fontSize="36px" fontWeight="500" lineHeight="44px" letterSpacing="-0.73px" py="16px">
                      The internet's most <br/>
                      <Text as="span" color="brand.500">safe</Text>
                      accurate  
                      <Text as="span" color="brand.500">seamless</Text>
                      visitor identifier
                    </Text>
                    <Text as="p" fontSize="16px" fontWeight="400" color="rgb(72, 73, 70)" mb="24px">
                      <b>Industry-leading accuracy</b> that lasts for months<br/>
                      or years, even when cookies are cleared.
                    </Text>
                    <Button
                      variant="outline"
                      fontSize="12px"
                      colorScheme="gray"
                      size="sm"
                      bg="white"
                      borderColor="gray.300"
                      color="rgb(20, 20, 21)"
                      _hover={{ bg: "gray.50" }}
                      width="fit-content"
                    >
                      Learn more
                    </Button>
                   <Box w="100%" h="300px" bg="white" mt="4" p={4} borderRadius="lg" boxShadow="md">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          {/* Oculta la retícula (grid) */}
                          <CartesianGrid stroke="transparent" />

                          {/* Eje X con color gris suave */}
                          <XAxis
                            dataKey="day"
                            tick={{ fill: "gray.200", fontSize: 12 }}
                            axisLine={{ stroke: "gray.200" }}
                            tickLine={{ stroke: "gray.200" }}
                          />

                          {/* Eje Y oculto completamente */}
                          <YAxis
                            hide={true}
                            domain={[70, 100]}
                            tickFormatter={(v) => `${v}%`}
                          />

                          <Tooltip
                            formatter={(v) => `${v}%`}
                            contentStyle={{ backgroundColor: "#fff", borderColor: "gray.200" }}
                            labelStyle={{ color: "gray.700" }}
                            itemStyle={{ color: "gray.700" }}
                          />

                          {/* Línea 1 (brand) */}
                          <Line
                            type="monotone"
                            dataKey="brand"
                            stroke={theme.colors.brand["500"]}
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          {/* Línea 2 (brand_b) */}
                          <Line
                            type="monotone"
                            dataKey="brand_b"
                            stroke={theme.colors.brand_b["500"]}
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>

                  </Box>
                </Box>
              </Flex>
              <Flex flex={2} p={4} direction={"column"}>
                <Box bg="#ffffff" flex={1} border="1px solid #e4e5e1" borderRadius={"lg"}>
                  <Flex direction={"row"} p="8">
                    <Box>
                      <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaMobileAlt} boxSize={4} /></Box>
                    </Box>
                    <Box>
                        <Text as="p" fontSize="16px" fontWeight="500" color="rgb(20, 20, 21)">
                          Any browser, any device.
                        </Text>
                        <Text as="p" fontSize="14px" fontWeight="400" color="rgb(72, 73, 70)">
                          Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy.
                        </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box bg="#ffffff" flex={2} my="2" border="1px solid #e4e5e1" borderRadius={"lg"}>
                    <Image src="/pattern.svg" alt="Acordion 1" width="100%" />
                    <Flex direction={"row"} p="8" alignSelf={"flex-end"}>
                      <Box>
                        <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaBroadcastTower} boxSize={4} /></Box>
                      </Box>
                      <Box>
                          <Text as="p" fontSize="16px" fontWeight="500" color="rgb(20, 20, 21)">
                            Identify all anonymous visitors.
                          </Text>
                          <Text as="p" fontSize="14px" fontWeight="400" color="rgb(72, 73, 70)">
                            Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.
                          </Text>
                      </Box>
                  </Flex>
                </Box>
                <Box bg="#ffffff" flex={1} border="1px solid #e4e5e1" borderRadius={"lg"}>
                    <Flex direction={"row"} p="8">
                    <Box>
                      <Box width="32px" height="32px" border="1px solid #e4e5e1" borderRadius="lg" mr="10px" p="0" display={'flex'} justifyContent={"center"} alignItems="center"> <Icon as={FaPercent} boxSize={4} /></Box>
                    </Box>
                    <Box>
                        <Text as="p" fontSize="16px" fontWeight="500" color="rgb(20, 20, 21)">
                          Delight your trusted users.
                        </Text>
                        <Text as="p" fontSize="14px" fontWeight="400" color="rgb(72, 73, 70)">
                          Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users.
                        </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
         {/** Customer Stories_ */}
        <Box bg="#FAFAF8">
          <Container maxW="container.xl" border="0.5px dashed #e4e5e1" borderBottom="0.5px dashed #e4e5e1">
            <Flex minH="300px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                <Text as="span" border="1px solid rgb(240, 240, 237)" p={1} borderRadius="lg" width="fit-content" fontFamily="mono" fontSize="12px" color="gray.500">
                  Customer Stories_
                </Text>
                <Text as="h2" fontSize="36px" fontWeight="500" lineHeight="44px" letterSpacing="-0.73px" py="16px">
                  Fight fraud with
                  <Text as="span" color="brand.500">Fingerprint</Text>
                  
                </Text>
                <Text as="p" fontSize="16px" fontWeight="400" color="rgb(72, 73, 70)" mb="24px">
                  See how our customers <b>stop fraud in real time for real results.</b>
                </Text>
                <Button
                  variant="outline"
                  fontSize="12px"
                  colorScheme="gray"
                  size="sm"
                  bg="white"
                  borderColor="gray.300"
                  color="rgb(20, 20, 21)"
                  _hover={{ bg: "gray.50" }}
                  width="fit-content"
                >
                  See all Case Studies
                </Button>
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box bg="#FAFAF8">
          <Container maxW="container.xl" p="0" border="0.5px dashed #e4e5e1" borderBottom="0.5px dashed #e4e5e1">
            <Flex minH="220px" gap={0}>
              <Flex direction="column" borderRight="0.5px dashed #e4e5e1" flex={1} p={4} align={"center"} alignItems={"flex-start"}>
                <Image src="/brands/dropbox.svg" alt="Dropbox logo" height="20px" my="30px"/>
                <Text as="p" fontSize="16px" fontWeight="400" color="rgb(72, 73, 70)" mb="24px">
                  Fingerprint helps Dropbox to <b>secure login and stop account takeovers.</b>
                </Text>
              </Flex>
              <Flex flex={2} p={"32px"} borderX="0.5px dashed #e4e5e1" direction="column" gap={4} bg="rgb(247, 247, 245)">
                <Text as="q" fontSize={"14px"} fontFamily={"mono"} color="rgb(20, 20, 21)">
                  We are very happy with the <strong>account takeover attacks that we could stop.</strong> Without Fingerprint it would have been much harder for us to identify these fraudsters.
                </Text>

                <Box padding={4} borderLeft={"1px solid"} borderColor={"brand.500"}>
                  <Text fontWeight="bold" fontSize={"12px"}>Prashanth Yerramilli</Text>
                  <Text fontSize={"12px"}>
                    Manager - Platform Abuse Team
                    <br />
                    <strong>@ Dropbox</strong>
                  </Text>
                  <Text color="gray.500" fontSize={"12px"}>Enterprise</Text>
                </Box>
              </Flex>
              <Box flex={1} p={4} position="relative" minH="100px">
                <Box position="absolute" top="0" left="0" width="171px" height="91px" zIndex={1}>
                  <Image src="/cases/folder_3.svg" alt="Folder 3" width="100%" height="100%" />
                </Box>
                <Box position="absolute" bottom="0px" left="0px" width="171px" height="135px" zIndex={2}>
                  <Image src="/cases/folder_2.svg" alt="Folder 2" width="100%" height="100%" />
                </Box>
                <Box position="absolute" top="0px" right="0px" width="196px" height="187px" zIndex={3}>
                  <Image src="/cases/folder_1.svg" alt="Folder 1" width="100%" height="100%" />
                </Box>
              </Box>
            </Flex>
            <Flex minH="85px" direction={"row"} gap={0}  borderTop="0.5px dashed #e4e5e1">
              <Flex align="center" justify="center" flex={1} borderRight="0.5px dashed #e4e5e1">
                <Image src="/brands/dropbox.svg" alt="Dropbox logo" height="20px" my="30px"/>
              </Flex>
              <Flex align="center" justify="center" flex={1}  borderRight="0.5px dashed #e4e5e1">
                <Image src="/brands/headout.svg" alt="Dropbox logo" height="20px" my="30px"/>
              </Flex>
              <Flex align="center" justify="center" flex={1}  borderRight="0.5px dashed #e4e5e1">
                <Image src="/brands/jumia.svg" alt="Dropbox logo" height="20px" my="30px"/>
              </Flex>
              <Flex align="center" justify="center" flex={1} >
                <Image src="/brands/checkout.svg" alt="Dropbox logo" height="20px" my="30px"/>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Spacer */}
        <Box bg="#FAFAF8">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1">
            <Flex minH="128px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** For Developers */}
        <Box
        
        px={4}
            minH="600px"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(-8deg, #FFFFFF 50%, #FAFAF8 50%)",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              height: "786px",
              transform: "translateY(-50px)",
              transition: "transform 0.8s ease",
              willChange: "transform",
              background: "linear-gradient(-8deg, transparent calc(50% - .5px), #e4e5e1 calc(50% - .5px), #e4e5e1 calc(50% + .5px), transparent calc(50% - .5px))",
              zIndex: -1, // Si necesitas que esté detrás del contenido
            }}
            >
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1"  h="100%">
            <Flex bg={"#1a1917"} gap={0} direction={"column"} border="1px solid #454542" borderRadius={"2xl"} >
              <Flex minH="400px" gap={0} direction={"row"} align="stretch" >
                {/**Columna izquierda */}
                <Flex flex={1} borderRight="0.5px dashed #2e2e2c" direction={"column"}>
                  {/**Botones de cerrado */}
                  <Flex height={"40px"} gap="2" mb="4" align={"center"} px="20px">
                    <Box
                      boxSize="10px"
                      borderRadius="full"
                      bg="#ff5f56" // rojo (cerrar)
                    />
                    <Box
                      boxSize="10px"
                      borderRadius="full"
                      bg="#ffbd2e" // amarillo (minimizar)
                    />
                    <Box
                      boxSize="10px"
                      borderRadius="full"
                      bg="#27c93f" // verde (expandir)
                    />
                  </Flex>
                  {/**Titulo */}
                  <Box p="8">
                      <Text as="span" bg="rgb(30, 30, 27)" border="1px solid rgb(35, 35, 33)" p={1} borderRadius="lg" width="fit-content" fontFamily="mono" fontSize="12px" color="rgb(101, 101, 99)">
                        For Developers_
                      </Text>
                      <Text as="h2" color={"#fff"} fontSize="36px" fontWeight="500" lineHeight="44px" letterSpacing="-0.73px" py="16px">
                      The 
                        <Text as="span" color="brand.500">original</Text><br/>
                        fingerprinting library 
                      </Text>
                      <Text as="p" fontSize="16px" fontWeight="400" color="rgb(183, 183, 180)" mb="24px">
                        <b>Over 100 bleeding-edge signals</b> , built by our world-class<br/>
                      research team. So powerful, our competitors use<br/>
                      Fingerprint open-source under the hood.

                      </Text>
                        <Link
                          href="https://github.com/tuusuario/turepo"
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          <Flex
                          width="fit-content" 
                            border="1px solid"
                            borderColor="rgb(46, 46, 44)"
                            borderRadius="md"
                            overflow="hidden"
                            fontSize="sm"
                            bg="rgb(39, 39, 37)"
                            color="rgb(183, 183, 180)"
                            boxShadow="sm"
                            _hover={{ bg: "gray.50" }}
                          >
                            {/* Parte izquierda: ícono + texto */}
                            <Flex
                              align="center"
                              px={3}
                              py={2}
                              gap={2}
                              borderRight="1px solid rgb(114, 114, 115)"
                            >
                              <FaGithub />
                              <Text>Star</Text>
                            </Flex>

                            {/* Parte derecha: contador */}
                            <Box px={3} py={2} fontWeight="medium">
                              24k+
                            </Box>
                          </Flex>
                        </Link>
                  </Box>
                  {/**tabla de links */}
                  <SimpleGrid columns={2} spacing={0}>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      VPN Detection
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      IP Geolocation
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      High-activity Device
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      Raw Device Attributes
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      IP Blocklist Matching
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      Geolocation Spoofing
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      Browser Bot Detection
                    </Link>
                    <Link color="rgb(160, 160, 157)" py="10px" border="0.5px dashed #2e2e2c" display="flex" justifyContent="center" alignItems="center">
                      Rooted Device Detection
                    </Link>
                    
                  </SimpleGrid>
                  <Link color="rgb(67, 67, 68)" py="10px" px="15%" border="0.5px dashed #2e2e2c" display="flex" justifyContent="start" alignItems="center">
                      See all Smart Signals 
                    </Link>
                </Flex>
                {/**Columna derecha */}
                <Flex flex={1} direction={"column"}>
                  <Box flex={1.2} borderBottom="0.5px dashed #2e2e2c"></Box>
                  <Box flex={1} p={3} borderBottom="0.5px dashed #2e2e2c">
                    <Box border={"1px solid #2e2e2c"} borderRadius={"2xl"} h={"full"}>
                      <Flex direction={"row"} gap={0}>
                        <Box flex={1} py="1" borderRight={"1px dashed #2e2e2c"} borderBottom={"1px dashed #2e2e2c"} textAlign={"center"} color={'rgb(208, 208, 208)'} fontSize={'12px'}>response.json</Box>
                        <Box flex={3} borderBottom={"1px dashed #2e2e2c"}></Box>
                      </Flex>
                      <Box
                        height="full"
                        maxHeight="250px"
                        overflow="auto"
                        p={4}
                        color={"rgb(136, 210, 195)"}
                        whiteSpace="pre-wrap"
                        fontFamily="monospace"
                        fontSize="sm"
                        sx={{
                          '&::-webkit-scrollbar': {
                            display: 'none',
                          },
                          '-ms-overflow-style': 'none', // IE y Edge
                          'scrollbar-width': 'none', // Firefox
                        }}
                      >
                        {JSON.stringify(jsonData, null, 2)}
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
              {/** Spacer */}
              <Flex bg="transparent">
                <Container maxW="container.xl" borderX="0.5px dashed #2e2e2c" borderBottom="0.5px dashed #2e2e2c">
                  <Flex minH="185px" gap={0}>
                    <Flex direction="column" justify="center" borderRight="0.5px dashed #2e2e2c" flex={1} p={4}> </Flex>
                      <Flex flex={1} direction={'row'} p={4}>
                        <Box flex={1} textAlign={"center"} display="flex" flexDirection="column" justifyContent="end">
                          <Text color={"#fff"} fontSize={"16px"} fontWeight={"600"}>
                            API and webhooks
                          </Text>
                          <Link color={"brand_b.500"} fontSize={"14px"} fontWeight={"400px"}>
                            Request API Key
                          </Link>
                        </Box>
                        <Box flex={1} textAlign={"center"} display="flex" flexDirection="column" justifyContent="end">
                          <Text color={"#fff"} fontSize={"16px"} fontWeight={"600"}>
                            SDKs and libraries
                          </Text>
                          <Link color={"brand_b.500"} fontSize={"14px"} fontWeight={"400px"}>
                            Check out the SDKs
                          </Link>
                        </Box>
                        <Box flex={1} textAlign={"center"} display="flex" flexDirection="column" justifyContent="end">
                          <Text color={"#fff"} fontSize={"16px"} fontWeight={"600"}>
                            Integrations
                          </Text>
                          <Link color={"brand_b.500"} fontSize={"14px"} fontWeight={"400px"}>
                            Explore integrations
                          </Link>
                        </Box>
                      </Flex>
                  </Flex>
                </Container>
              </Flex>
              {/** Icons */}
              <Flex direction={"row"} gap={0}>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_1.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_2.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_3.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_4.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_5.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_6.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_7.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_8.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_9.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_10.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_11.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_12.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_13.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_14.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" borderRight={"1px dashed #2e2e2c"} display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_15.svg" height="26px" />
                </Box>
                <Box flex={1} p="4" display={"flex"} justifyContent={'center'} alignItems={"center"}>
                    <Image src="/dev/dev_16.svg" height="26px" />
                </Box>
              </Flex>
              
              <Flex direction={"row"} minH={'50px'} gap={0} borderTop="1px dashed #2e2e2c">
                  <Flex flex={1} borderRight="1px dashed #2e2e2c"></Flex>
                  <Flex flex={1}></Flex>
              </Flex>
            </Flex>{/**Aqui termina el recuadro negro */}
          </Container>
        </Box>
        {/** Spacer */}
        <Box bg="#FFFFFF">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1">
            <Flex minH="98px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Numeralia */}
        <Box bg="#FFFFFF">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1" borderTop="0.5px dashed #e4e5e1">
            <Flex minH="227px" gap={0}>
              <Box borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                  <Text color={"brand.500"} fontSize={"30px"} fontWeight={"500"}>
                    250+
                  </Text>
                  <Text color={"rgb(72, 73, 70)"} fontSize={"13px"} fontWeight={"400"} fontFamily={"mono"}>
                    countries and territories <br/> where we identified devices_+
                  </Text>
              </Box>
              <Box borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                  <Text color={"brand.500"} fontSize={"30px"} fontWeight={"500"}>
                    2 Billion +
                  </Text>
                  <Text color={"rgb(72, 73, 70)"} fontSize={"13px"} fontWeight={"400"} fontFamily={"mono"}>
                    unique browsers and <br/> mobile devices identified_
                  </Text>
              </Box>
              <Box flex={1} p={4}>
                <Text color={"brand.500"} fontSize={"30px"} fontWeight={"500"}>
                    50 Million +
                  </Text>
                  <Text color={"rgb(72, 73, 70)"} fontSize={"13px"} fontWeight={"400"} fontFamily={"mono"}>
                    real-time device intelligence <br/> API events per day processed_
                  </Text>
              </Box>
            </Flex>
          </Container>
        </Box>
        {/** Premios */}
        <Box bg="#FFFFFF">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1" borderTop="0.5px dashed #e4e5e1">
            <Flex minH="227px" gap={0}>
              <Box flex={3} p="4" px={2}>
                <Flex p={4} borderColor={"brand.500"} border="1px solid" borderRadius={"2xl"} h="full" direction={"column"} justifyContent="center" >
                  <Text as="h2" color={"rgb(20, 20, 21)"} fontSize="36px" fontWeight="500" lineHeight="44px" letterSpacing="-0.73px" py="16px">
                      Identify your 
                        <Text as="span" color="brand.500">web </Text> and<br/>
                        <Text as="span" color="brand.500">mobile </Text> traffic in minutes
                      </Text>
                      <Text as="p" fontSize="16px" fontWeight="400" color="rgb(20, 20, 21)" mb="24px">
                        Collect visitor IDs and signals <b>instantly for free,</b><br/>
                        or reach out to our team for a demo.
                      </Text>
                      <HStack spacing={3} my={4}>
                        <Button colorScheme="brand">
                          Get Started
                        </Button>
                        <Button variant="outline" colorScheme="brand">
                          Contact Sales
                        </Button>
                      </HStack>
                </Flex>
                   
              </Box>
              <Flex direction={"column"} flex={1} p={4} px={2}>
                  <Box flex={1}  bg={"rgb(247, 248, 248)"} border="1px solid #e4e5e1" borderRadius={"2xl"} h="full">
                    <Image src="/premio_1.svg" alt="Dropbox logo" width={"100%"}/>
                  </Box>
                  <Box flex={1} my="3"  bg={"rgb(247, 248, 248)"} border="1px solid #e4e5e1" borderRadius={"2xl"} h="full">
                    <Image src="/premio_2.svg" alt="Dropbox logo" width={"100%"}/>
                  </Box>
                  <Box flex={1}  bg={"rgb(247, 248, 248)"} border="1px solid #e4e5e1" borderRadius={"2xl"} h="full">
                    <Image src="/premio_3.svg" alt="Dropbox logo" width={"100%"}/>
                  </Box>
              </Flex>
              <Box flex={2} p={4} px={1}>
                <Box flex={1} p={4} px={1}  bg={"rgb(247, 248, 248)"} border="1px solid #e4e5e1" borderRadius={"2xl"} h="full" position={"relative"} overflow={"hidden"}>
                      <Image src="/awards/med_1.svg" alt="Dropbox logo" position={"absolute"} top={"30%"} left={"-12%"} transform={"scale(0.7)"} opacity={"0.3"}/>
                      <Image src="/awards/med_2.svg" alt="Dropbox logo" position={"absolute"} top={"30%"} left={"11%"} transform={"scale(0.8)"} opacity={"0.7"}/>
                      <Image src="/awards/med_3.svg" alt="Dropbox logo" position={"absolute"} top={"30%"} left={"38%"}/>
                      <Image src="/awards/med_4.svg" alt="Dropbox logo" position={"absolute"} top={"30%"} right={"11%"} transform={"scale(0.8)"} opacity={"0.7"}/>
                      <Image src="/awards/med_5.svg" alt="Dropbox logo" position={"absolute"} top={"30%"} right={"-12%"} transform={"scale(0.7)"} opacity={"0.3"}/>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
        {/** Spacer */}
        <Box bg="#FFFFFF">
          <Container maxW="container.xl" borderX="0.5px dashed #e4e5e1" borderTop="0.5px dashed #e4e5e1">
            <Flex minH="98px" gap={0}>
              <Flex direction="column" justify="center" borderRight="0.5px dashed #e4e5e1" flex={1} p={4}>
                
              </Flex>
              <Flex flex={1} p={4}>
              </Flex>
            </Flex>
          </Container>
        </Box>
        {/** Footer */}
        <Box bg="#FFFFFF" borderTop="0.5px dashed #e4e5e1" pt={"56px"} pb={"24px"}>
            <Container maxW="container.xl" minH="380px">
              <Flex direction={"row"} gap={3}>
                <Flex flex={2} direction={"column"} justifyContent={"space-between"}>
                  <Box fontWeight="bold" fontSize="lg" display="flex" alignItems="center" gap={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 944.7 623.7" height="20">
                      <circle fill="#008080" cx="150" cy="472.7" r="147.4" />
                      <circle fill="#F84960" cx="150" cy="150.8" r="147.4" />
                      <circle fill="#BCDDDE" cx="472.3" cy="472.7" r="147.4" />
                      <circle fill="#BCDDDE" cx="794.7" cy="472.7" r="147.4" />
                    </svg>
                    Spotter
                  </Box>
                  
                  <Box width={"fit-content"}>
                    <Text as="p" color={"rgb(110, 111, 108)"} fontSize={"14px"} mb={2}>
                        Subscribe to our 
                        <Text as="span" color={'brand.500'}> newsletter_</Text>
                    </Text>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        placeholder="Email adress*"
                        borderColor="rgb(228, 229, 225)"
                        bg={"rgb(247, 248, 248)"}
                      />
                      <InputRightElement>
                        <Button h="1.75rem" size="sm" variant={"ghost"}>
                          <ArrowForwardIcon />
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </Flex>
                <Box flex={1}>
                  <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                        Product
                  </Text>
                  <VStack align="start" spacing={3}>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Device Intelligence Platform</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Smart Signals</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Integrations</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>FingerprintJS vs. Pro</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Demo</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Identification</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Pricing</Link>
                  </VStack>
                </Box>
                <Box flex={1}>
                  <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                        Use Cases
                  </Text>
                  <VStack align="start" spacing={3}>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>New Account Fraud</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Account Takeover</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Account Sharing Prevention</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>SMS Fraud</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Payment Fraud</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Paywall Enforcement</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Personalization</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Bot Detection</Link>
                  </VStack>
                </Box>
                <Box flex={1}>
                  <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                        Resources
                  </Text>
                  <VStack align="start" spacing={3}>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Resource Center</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Blog</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Case Studies</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Guides</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>FAQ</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Support Center</Link>
                  </VStack>
                </Box>
                <Box flex={1}>
                  <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                        Developers
                  </Text>
                  <VStack align="start" spacing={3}>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Documentation</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Tutorials</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>SDKs and Libraries</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>GitHub</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Discord Community</Link>
                  </VStack>
                </Box>
                <Box flex={1}>
                  <Text as="h3" color="rgb(137, 137, 138)" fontSize="12px" fontWeight="400" mb="8px">
                        Company
                  </Text>
                  <VStack align="start" spacing={3}>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>About us</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Careers <Text as="span" fontSize={"11px"} borderColor="brand.500" border={"1px solid"} p="1" bg="brand.100" borderRadius={"lg"}>We‘re hiring</Text></Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Press</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Partners</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>System status</Link>
                    <Link href="#" color="rgb(110, 111, 108)" fontSize={'14px'}>Security</Link>
                  </VStack>
                </Box>
              </Flex>
              <Flex direction={'row'} justifyContent={'space-between'} my="24px" bg="rgb(250, 250, 248)" py="6" px="4" borderRadius={"lg"} border={'1px solid rgb(240, 240, 237)'}>
                  <HStack spacing={4}>
                    <Text fontSize="sm" color="rgb(110, 111, 108)" pr="4" borderRight={'1px solid rgb(240, 240, 237)'}>
                      © 2025 FingerprintJS, Inc
                    </Text>
                    <Link color="brand.500" fontSize="sm" pr="4" borderRight={'1px solid rgb(240, 240, 237)'}>
                      Privacy policy
                    </Link>
                    <Link color="brand.500" fontSize="sm">
                      Terms and conditions
                    </Link>
                  </HStack>
                  <HStack spacing={4}>
                    <Text color="rgb(193, 193, 190)" fontSize="14px" fontWeight={"500"}>
                      Join our developer community on Discord
                    </Text>
                    <Link href="https://discord.com" isExternal color="rgb(110, 111, 108)">
                      <Icon as={FaDiscord} boxSize={6} />
                    </Link>
                    <Link href="https://linkedin.com" isExternal color="rgb(110, 111, 108)">
                      <Icon as={FaLinkedin} boxSize={6} />
                    </Link>
                    <Link href="https://x.com" isExternal color="rgb(110, 111, 108)">
                      <Icon as={FaTwitter} boxSize={6} />
                    </Link>
                    <Link href="https://github.com" isExternal color="rgb(110, 111, 108)">
                      <Icon as={FaGithub} boxSize={6} />
                    </Link>
                    <Text fontSize="14px" fontWeight={"500"} color="rgb(98, 176, 109)">
                      • All systems normal
                    </Text>
                  </HStack>
              </Flex>
            </Container>
        </Box>

    </>
  );
}
