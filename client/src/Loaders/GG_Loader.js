import solIcon from "../Assets/CharIcons/sol.jpg";
import solPortrait from "../Assets/CharImage/GGST_SOL.png";

import milliaIcon from "../Assets/CharIcons/millia.jpg";
import milliaPortrait from "../Assets/CharImage/GGST_MILLIA.png";

import gioIcon from "../Assets/CharIcons/giovanna.jpg";
import gioPortrait from "../Assets/CharImage/GGST_GIOVANNA.png";

export let characters = [
        {
            "id": 1,
            "charName": "Sol Badguy",
            icon: solIcon,
            portrait: solPortrait,
            "type": "Balanced",
            "tag": "#GGST_SO",
            "description": "A blunt and short-tempered man. He only speaks when required, and uses as few words as he can get away with. He's not very good at explaining things, so he prefers to express himself with his aggressive behavior and attitude. While most see him as selfish and violent, those closest to him accept him for who he is.",
            "moves": {
                "normals": {
                    "5P": { 
                        "damage": "28", 
                        "startup": "4f", 
                        "active": "5f", 
                        "recovery": "9f", 
                        "onblock": "-2f"
                    },
                    "5K": {
                        "damage": "14,28",
                        "startup": "3f",
                        "active": "1f,3f",
                        "recovery": "25f",
                        "onblock": "-14f"
                    },
                    "c.S": {
                        "damage": "44",
                        "startup": "7f",
                        "active": "6f",
                        "recovery": "10f",
                        "onblock": "+3f"
                    },
                    "f.S": {
                        "damage": "36",
                        "startup": "10f",
                        "active": "2f",
                        "recovery": "13f",
                        "onblock": "+2f"
                    },
                    "5H": {
                        "damage": "52",
                        "startup": "11f",
                        "active": "4f",
                        "recovery": "25f",
                        "onblock": "-5f"
                    },
                    "5D": {
                        "damage": "50[62]",
                        "startup": "20~28[28]f",
                        "active": "3f",
                        "recovery": "27f",
                        "onblock": "-15[-10]f"
                    },
                    "2P": {
                        "damage": "22",
                        "startup": "5f",
                        "active": "4f",
                        "recovery": "8f",
                        "onblock": "-2f"
                    },
                    "2K": {
                        "damage": "28",
                        "startup": "6f",
                        "active": "3f",
                        "recovery": "11f",
                        "onblock": "-2f"
                    },
                    "2S": {
                        "damage": "34",
                        "startup": "10f",
                        "active": "3f",
                        "recovery": "18f",
                        "onblock": "-7f"
                    },
                    "2H": {
                        "damage": "46",
                        "startup": "11f",
                        "active": "5f",
                        "recovery": "31f",
                        "onblock": "-17f"
                    },
                    "2D": {
                        "damage": "26",
                        "startup": "10f",
                        "active": "3f",
                        "recovery": "18f",
                        "onblock": "-4f"
                    },
                    "j.P": {
                        "damage": "24",
                        "startup": "5f",
                        "active": "3f",
                        "recovery": "8f",
                        "onblock": ""
                    },
                    "j.K": {
                        "damage": "30",
                        "startup": "6f",
                        "active": "3f",
                        "recovery": "20f",
                        "onblock": ""
                    },
                    "j.S": {
                        "damage": "36",
                        "startup": "10f",
                        "active": "3f",
                        "recovery": "23f",
                        "onblock": ""
                    },
                    "j.H": {
                        "damage": "24x2",
                        "startup": "11f",
                        "active": "4f,8f",
                        "recovery": "0f",
                        "onblock": ""
                    },
                    "j.D": {
                        "damage": "45",
                        "startup": "9f",
                        "active": "3f",
                        "recovery": "17f",
                        "onblock": ""
                    }
                },
                "commandNormals": {
                    "6P": {
                        "damage": "36",
                        "startup": "9f",
                        "active": "5f",
                        "recovery": "20f",
                        "onblock": "-11f"
                    },
                    "6S": {
                        "damage": "55",
                        "startup": "15f",
                        "active": "6f",
                        "recovery": "20f",
                        "onblock": "-7f"
                    },
                    "6H": {
                        "damage": "60",
                        "startup": "9f",
                        "active": "3f",
                        "recovery": "38f",
                        "onblock": "-22f"
                    }
                },
                "specials": {
                    "Gun Flame": {
                        "damage": "40→35→30→30",
                        "startup": "20f",
                        "active": "10f,10f,10f,10f",
                        "recovery": "54f",
                        "onblock": "-8f",
                        "input": "236P"
                    },
                    "Gun Flame Feint": {
                        "damage": "-",
                        "startup": "-",
                        "active": "-",
                        "recovery": "30f",
                        "onblock": "-",
                        "input": "214P"
                    },
                    "Volcanic Viper S": {
                        "damage": "40",
                        "startup": "7f",
                        "active": "2(3)4f",
                        "recovery": "17+10f after landing ",
                        "onblock": "-22",
                        "input": "623S"
                    },
                    "Volcanic Viper S(AIR)": {
                        "damage": "40",
                        "startup": "7f",
                        "active": "2(3)4f",
                        "recovery": "Until landing+10f",
                        "onblock": "-",
                        "input": "623S"
                    },
                    "Volcanic Viper H": {
                        "damage": "35,40[35,100] ",
                        "startup": "13f",
                        "active": "2(3)11f",
                        "recovery": "17+10f after landing ",
                        "onblock": "-26",
                        "input": "623S"
                    },
                    "Volcanic Viper H(AIR)": {
                        "damage": "35,40[35,100] ",
                        "startup": "13f",
                        "active": "2(3)11f",
                        "recovery": "Until landing+10f",
                        "onblock": "-",
                        "input": "623S"
                    },
                    "Bandit Revolver": {
                        "damage": "20,25",
                        "startup": "16f",
                        "active": "6f",
                        "recovery": "23+9f after landing ",
                        "onblock": "-7",
                        "input": "236K"
                    },
                    "Bandit Revolver(AIR)": {
                        "damage": "20,25",
                        "startup": "10f",
                        "active": "6f",
                        "recovery": "Until landing+9f",
                        "onblock": "-",
                        "input": "236K"
                    },
                    "Bandit Bringer": {
                        "damage": "50",
                        "startup": "30f",
                        "active": "7f",
                        "recovery": "12f after landing ",
                        "onblock": "-2",
                        "input": "214K"
                    },
                    "Bandit Bringer(AIR)": {
                        "damage": "40",
                        "startup": "30f",
                        "active": "Until landing",
                        "recovery": "Until landing+12f",
                        "onblock": "-",
                        "input": "214K"
                    },
                    "Wild Throw": {
                        "damage": "120",
                        "startup": "6f",
                        "active": "2f",
                        "recovery": "41f",
                        "onblock": "-",
                        "input": "623K"
                    },
                    "Night Raid Vortex": {
                        "damage": "45[55]",
                        "startup": "15f~31[32]f",
                        "active": "2f",
                        "recovery": "32[26]f",
                        "onblock": "-17",
                        "input": "214S (Hold OK)"
                    },
                    "Fafnir": {
                        "damage": "65",
                        "startup": "24f",
                        "active": "3f",
                        "recovery": "16f",
                        "onblock": "+11",
                        "input": "41236H"
                    }
                },
                "overdrives": {
                    "Tyrant Rave": {
                        "damage": "70, 100[70, 130]",
                        "startup": "5+2f",
                        "active": "3f",
                        "recovery": "16f",
                        "onblock": "-34",
                        "input": "632146H"
                    },
                    "Heavy Mob Cemetary": {
                        "damage": "40, 161",
                        "startup": "13+7f",
                        "active": "49f",
                        "recovery": "84f",
                        "onblock": "-",
                        "input": "214214H"
                    }
                }
            }
        },
        {
            "id": 2,
            "charName": "Millia Rage",
            icon: milliaIcon,
            portrait: milliaPortrait,
            "type": "High Speed",
            "tag": "GGST_MI",
            "description": "She is silent and cold. However, since leaving the Guild, she no longer works only for profit as she once did. Now that she lives among ordinary people, Millia's come to feel a wider range of emotions. She may not show it in her words or actions, but she's found herself able to sympathize with others. When faced with an uncertain situation,she can even look like a normal girl her age sometimes.",
            "moves": {
                "normals": {
                    "5P": { 
                        "damage": "20", 
                        "startup": "7f", 
                        "active": "5f", 
                        "recovery": "7f", 
                        "onblock": "-2f"
                    },
                    "5K": {
                        "damage": "24",
                        "startup": "7f",
                        "active": "3f",
                        "recovery": "12f",
                        "onblock": "-3f"
                    },
                    "c.S": {
                        "damage": "15x2",
                        "startup": "7f",
                        "active": "3f,3f",
                        "recovery": "16f",
                        "onblock": "-2f"
                    },
                    "f.S": {
                        "damage": "30",
                        "startup": "10f",
                        "active": "2f",
                        "recovery": "19f",
                        "onblock": "-7f"
                    },
                    "5H": {
                        "damage": "42",
                        "startup": "12f",
                        "active": "4f",
                        "recovery": "23f",
                        "onblock": "-8f"
                    },
                    "5D": {
                        "damage": "40[50]",
                        "startup": "20[28]f",
                        "active": "3f",
                        "recovery": "26f",
                        "onblock": "-15[-10]f"
                    },
                    "2P": {
                        "damage": "18",
                        "startup": "5f",
                        "active": "2f",
                        "recovery": "10f",
                        "onblock": "-2f"
                    },
                    "2K": {
                        "damage": "18",
                        "startup": "6f",
                        "active": "3f",
                        "recovery": "12f",
                        "onblock": "-3f"
                    },
                    "2S": {
                        "damage": "28",
                        "startup": "11f",
                        "active": "2f",
                        "recovery": "18f",
                        "onblock": "-6f"
                    },
                    "2H": {
                        "damage": "45",
                        "startup": "14f",
                        "active": "7f",
                        "recovery": "17f",
                        "onblock": "-7f"
                    },
                    "2D": {
                        "damage": "30",
                        "startup": "12f",
                        "active": "3f",
                        "recovery": "22f",
                        "onblock": "-11f"
                    },
                    "j.P": {
                        "damage": "16",
                        "startup": "5f",
                        "active": "4f",
                        "recovery": "12f",
                        "onblock": ""
                    },
                    "j.K": {
                        "damage": "20",
                        "startup": "6f",
                        "active": "4f",
                        "recovery": "12f",
                        "onblock": ""
                    },
                    "j.S": {
                        "damage": "32",
                        "startup": "7f",
                        "active": "4f",
                        "recovery": "14f",
                        "onblock": ""
                    },
                    "j.H": {
                        "damage": "35",
                        "startup": "8f",
                        "active": "10f",
                        "recovery": "25f",
                        "onblock": ""
                    },
                    "j.D": {
                        "damage": "35",
                        "startup": "9f",
                        "active": "7f",
                        "recovery": "27f",
                        "onblock": ""
                    }
                },
                "commandNormals": {
                    "6P": {
                        "damage": "26",
                        "startup": "9f",
                        "active": "9f",
                        "recovery": "22f",
                        "onblock": "-11f"
                    },
                    "6K": {
                        "damage": "35",
                        "startup": "28f",
                        "active": "2f",
                        "recovery": "14f",
                        "onblock": "-2f"
                    },
                    "6H": {
                        "damage": "20,40",
                        "startup": "17f",
                        "active": "5f(13f)4f",
                        "recovery": "23f",
                        "onblock": "-8f"
                    }
                },
                "specials": {
                    "Tandem Top S": {
                        "damage": "35",
                        "startup": "12f",
                        "active": "14f",
                        "recovery": "48f",
                        "onblock": "-14f",
                        "input": "236S"
                    },
                    "Tandem Top H": {
                        "damage": "32x2",
                        "startup": "73f",
                        "active": "28f,6f",
                        "recovery": "55f",
                        "onblock": "-14f",
                        "input": "236H"
                    },
                    "Bad Moon": {
                        "damage": "5*N,31",
                        "startup": "11f",
                        "active": "Until Ground",
                        "recovery": "20f+12f",
                        "onblock": "-21",
                        "input": "j.236P"
                    },
                    "Iron Savior": {
                        "damage": "43",
                        "startup": "20f",
                        "active": "till corner",
                        "recovery": "17f+10f",
                        "onblock": "-12",
                        "input": "214P"
                    },
                    "Turbo Fall": {
                        "damage": "",
                        "startup": "14f",
                        "active": "",
                        "recovery": "12f after landing",
                        "onblock": "",
                        "input": "j.236K"
                    },
                    "Mirazh": {
                        "damage": "",
                        "startup": "f",
                        "active": "",
                        "recovery": "28f",
                        "onblock": "",
                        "input": "214K"
                    },
                    "Lust Shaker": {
                        "damage": "7*3~9",
                        "startup": "17f",
                        "active": "1[(3)1]*2~8f",
                        "recovery": "16",
                        "onblock": "-5F,-7F,-9F",
                        "input": "214S"
                    },
                    "Kapel": {
                        "damage": "30",
                        "startup": "13f",
                        "active": "",
                        "recovery": "30",
                        "onblock": "-4f",
                        "input": "236K"
                    }
                },
                "overdrives": {
                    "Winger": {
                        "damage": "20*5,60",
                        "startup": "6+1f",
                        "active": "10f(9f)15f",
                        "recovery": "30f",
                        "onblock": "-22",
                        "input": "632146H"
                    },
                    "Septum Voices": {
                        "damage": "20*2,60",
                        "startup": "4+5f",
                        "active": "till corner",
                        "recovery": "43f",
                        "onblock": "+8",
                        "input": "236236S"
                    }
                }
            }
        },
        {
            "id": 3,
            "charName": "Giovanna",
            icon: gioIcon,
            portrait: gioPortrait,
            "type": "Rushdown",
            "tag": "#GGST_GI",
            "description": "She’s an officer in the special operations unit that protects the President of the United States. She’s careful with her words, but still manages to come off as rude and irreverent due to her attitude. Deep down, though, she means well. She’s especially friendly with children and animals. During battle, she allows her wolf spirit companion “Rei” to possess her and amazes her opponent with inhuman speed.",
            "moves": {
                "normals": {
                    "5P": { 
                        "damage": "26 (27) [28]", 
                        "startup": "4f", 
                        "active": "3f", 
                        "recovery": "9f", 
                        "onblock": "-2f"
                    },
                    "5K": {
                        "damage": "30 (31) [33]",
                        "startup": "6f",
                        "active": "4f",
                        "recovery": "10f",
                        "onblock": "-2f"
                    },
                    "c.S": {
                        "damage": "40 (42) [44]",
                        "startup": "7f",
                        "active": "6f",
                        "recovery": "10f",
                        "onblock": "+3f"
                    },
                    "f.S": {
                        "damage": "10, 10, 16 [11, 11, 17] ",
                        "startup": "9f",
                        "active": "2(6)2(6)2f",
                        "recovery": "16f",
                        "onblock": "-4"
                    },
                    "5H": {
                        "damage": "45 (47) [49]",
                        "startup": "10f",
                        "active": "3f",
                        "recovery": "19f",
                        "onblock": "-5f"
                    },
                    "5D": {
                        "damage": "45 (47) [49] [56 (58) [61] ] ",
                        "startup": "20[28]f",
                        "active": "4[4]f",
                        "recovery": "25[25]f",
                        "onblock": "-15[-10]f"
                    },
                    "2P": {
                        "damage": "22 (23) [24]",
                        "startup": "5f",
                        "active": "2f",
                        "recovery": "10f",
                        "onblock": "-2f"
                    },
                    "2K": {
                        "damage": "28 (29) [30]",
                        "startup": "6f",
                        "active": "3f",
                        "recovery": "11f",
                        "onblock": "-2f"
                    },
                    "2S": {
                        "damage": "16, 18 [17, 19]",
                        "startup": "9f",
                        "active": "3(5)3f",
                        "recovery": "15f",
                        "onblock": "-6f"
                    },
                    "2H": {
                        "damage": "40 (42) [44]",
                        "startup": "11f",
                        "active": "6f",
                        "recovery": "21f",
                        "onblock": "-8f"
                    },
                    "2D": {
                        "damage": "40 (42) [44]",
                        "startup": "17f",
                        "active": "10f",
                        "recovery": "7f",
                        "onblock": "-3f"
                    },
                    "j.P": {
                        "damage": "20 (21) [22]",
                        "startup": "6f",
                        "active": "5f",
                        "recovery": "9f",
                        "onblock": ""
                    },
                    "j.K": {
                        "damage": "25 (26) [27]",
                        "startup": "6f",
                        "active": "3f",
                        "recovery": "19f",
                        "onblock": ""
                    },
                    "j.S": {
                        "damage": "30 (31) [33]",
                        "startup": "7f",
                        "active": "3f",
                        "recovery": "24f",
                        "onblock": ""
                    },
                    "j.H": {
                        "damage": "35 (36) [38]",
                        "startup": "8f",
                        "active": "5f",
                        "recovery": "18f",
                        "onblock": ""
                    },
                    "j.D": {
                        "damage": "25,25 (26,26) [27,27]",
                        "startup": "7f",
                        "active": "3(7)3f",
                        "recovery": "18f",
                        "onblock": ""
                    }
                },
                "commandNormals": {
                    "6P": {
                        "damage": "32 (33) [35]",
                        "startup": "13f",
                        "active": "8f",
                        "recovery": "15f",
                        "onblock": "-9"
                    },
                    "6H": {
                        "damage": "32 (33) [35], 28 (28) [30], 29 (31) [32]",
                        "startup": "17f, 11f, 13f",
                        "active": "9f",
                        "recovery": "15f",
                        "onblock": "-10, -11, -16"
                    }
                },
                "specials": {
                    "Sepultura": {
                        "damage": "45 (47) [49]",
                        "startup": "13f",
                        "active": "3f",
                        "recovery": "20f",
                        "onblock": "-4",
                        "input": "214K"
                    },
                    "Trovão": {
                        "damage": "48 (50) [52]",
                        "startup": "27f",
                        "active": "7f",
                        "recovery": "15f",
                        "onblock": "+2",
                        "input": "236K"
                    },
                    "Sol Nascente": {
                        "damage": "40 (42) [44]",
                        "startup": "7f",
                        "active": "14f",
                        "recovery": "21f",
                        "onblock": "-15",
                        "input": "623S"
                    },
                    "Sol Poente": {
                        "damage": "30 (31) [33]",
                        "startup": "4[30]f",
                        "active": "6(20)3f",
                        "recovery": "10f",
                        "onblock": "+4",
                        "input": "214S"
                    },
                    "Sol Poente(AIR)": {
                        "damage": "30 (31) [33]",
                        "startup": "4[30]f",
                        "active": "6(20)3f",
                        "recovery": "Until landing +4f",
                        "onblock": "+4",
                        "input": "214S"
                    }
                },
                "overdrives": {
                    "Ventania": {
                        "damage": "168[176]",
                        "startup": "4+3f",
                        "active": "",
                        "recovery": "",
                        "onblock": "-37",
                        "input": "632146H"
                    },
                    "Tempestade": {
                        "damage": "140[150]",
                        "startup": "3+1f",
                        "active": "Until landing",
                        "recovery": "",
                        "onblock": "+6",
                        "input": "j.236236H"
                    }
                }
            }
        }
    ]
