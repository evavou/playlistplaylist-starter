const videos = [
  {
    title: 'tomorrow, you\'ll feel better',
    id: 'or2SriWNolI',
    mixeur: 'drift away ambiance',
    tags: ['ost', 'games'],
    hours: 6,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Zelda BotW - A Storm in Hyrule',
    id: 'clsohrBp8l0',
    mixeur: 'maich',
    tags: ['ost', 'games'],
    hours: 4,
    minutes: 0,
    tier: 2
  },
  {
    title: 'mario kart bops for speeding on the highway',
    id: 'ZuitJHmqwOY',
    mixeur: 'ninchrisu',
    tags: ['ost', 'games'],
    hours: 1,
    minutes: 34,
    tier: 2
  },
  {
    title: 'a cold night in minecraft',
    id: 'Z44UEdoH59Q',
    mixeur: 'voxel 4k',
    tags: ['ost', 'games'],
    hours: 5,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Ghibli Jazz',
    id: '7lq6e4Lu4B8',
    mixeur: 'jazzne',
    tags: ['ost', 'japan'],
    hours: 10,
    minutes: 37,
    tier: 2
  },
  {
    title: 'pov: you\'re lying in grass on a peaceful summer day',
    id: 'G8M8WJ10ITU',
    mixeur: 'shadowtracks',
    tags: ['ost', 'japan'],
    hours: 0,
    minutes: 34,
    tier: 2
  },
  {
    title: 'minecraft music for studying',
    id: 'vCTRNKPJr40',
    mixeur: 'beforephantoms',
    tags: ['ost', 'games'],
    hours: 3,
    minutes: 0,
    tier: 2
  },
  {
    title: 'pov: you left zelda music playing in another room...',
    id: '1WiuxWRaQpY',
    mixeur: 'sleepy frisk',
    tags: ['ost', 'games'],
    hours: 6,
    minutes: 53,
    tier: 2
  },
  {
    title: 'winter 2004 ambient music to relax',
    id: 'bepGYHbvIKI',
    mixeur: 'zerofuturism',
    tags: ['ambient'],
    hours: 3,
    minutes: 0,
    tier: 1
  },
  {
    title: 'The Dreampools',
    id: 'p1wjN_Vk4HY',
    mixeur: 'zerofuturism',
    tags: ['ambient'],
    hours: 3,
    minutes: 0,
    tier: 1
  },
  {
    title: 'Deep Focus Study -40Hz',
    id: '0l0mK7Pr6sQ',
    mixeur: 'mindflow',
    tags: ['ambient'],
    hours: 1,
    minutes: 0,
    tier: 3
  },
  {
    title: 'Fireplace 10 hours full HD',
    id: 'L_LUpnjgPso',
    mixeur: 'fireplace',
    tags: ['ambient'],
    hours: 10,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Aquatic Ambience',
    id: 'KQTVYrP1v5M',
    mixeur: 'jordan',
    tags: ['ambient', 'wtf'],
    hours: 1,
    minutes: 0,
    tier: 1
  },
  {
    title: 'i have no ennemies loop dog',
    id: 'Fnbd5z8kJFk',
    mixeur: 'lrkv',
    tags: ['ambient'],
    hours: 1,
    minutes: 1,
    tier: 2
  },
  {
    title: 'Fish Spinning to Funky Town Extended for 10 hours',
    id: '6_hl8AB7Uf0',
    mixeur: 'breezy',
    tags: ['ambient'],
    hours: 10,
    minutes: 0,
    tier: 3
  },
  {
    title: 'wii shop music',
    id: 'bPkNXF9NJcs',
    mixeur: 'xokiller15',
    tags: ['ambient'],
    hours: 24,
    minutes: 0,
    tier: 3
  },
  {
    title: '1 hour of Shreksophone',
    id: 'wqAp4h7cjoM',
    mixeur: '10 hours music',
    tags: ['ambient', 'wtf'],
    hours: 1,
    minutes: 0,
    tier: 1
  },
  {
    title: 'dancin 24 hours',
    id: 'iPaBUhIsslA',
    mixeur: 'hotdogster',
    tags: ['ambient'],
    hours: 24,
    minutes: 0,
    tier: 3
  },
  {
    title: 'Dance Till You\'re Dead 24 Hours',
    id: 'q02c6dGjevo',
    mixeur: 'hotdogster',
    tags: ['ambient'],
    hours: 24,
    minutes: 0,
    tier: 3
  },
  {
    title: 'Portal Radio - Still Alive',
    id: 'DnyZ1cy0vso',
    mixeur: 'skrill',
    tags: ['ambient', 'games'],
    hours: 10,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Portal Radio Uncompressed',
    id: 'qAQahr6Eddg',
    mixeur: 'dynamagon',
    tags: ['ambient', 'games'],
    hours: 10,
    minutes: 0,
    tier: 3
  },
  {
    title: 'Feathers Nujabes Instrumental',
    id: 'zerLkXxKGbg',
    mixeur: 'hikari',
    tags: ['ambient'],
    hours: 1,
    minutes: 0,
    tier: 2
  },
  {
    title: 'safe place',
    id: '0c-qvLx5Xf0',
    mixeur: 'nobody',
    tags: ['peace'],
    hours: 4,
    minutes: 47,
    tier: 2
  },
  {
    title: 'Need to focus? This playlist will help you lock in.',
    id: 'BruVjAw1Tnc',
    mixeur: 'founder fm',
    tags: ['chill'],
    hours: 1,
    minutes: 49,
    tier: 2
  },
  {
    title: '90s Style Ambient Jungle Mix',
    id: 'Nh9BrD3xIeU',
    mixeur: 'mostly hairless',
    tags: ['energy'],
    hours: 1,
    minutes: 45,
    tier: 2
  },
  {
    title: 'Hyperdrive Boogie',
    id: 'pbTO0w-fWKE',
    mixeur: 'hyperdrive sound',
    tags: ['jazz'],
    hours: 1,
    minutes: 0,
    tier: 3
  },
  {
    title: 'Japanese Jazz Fusion for driving at night in Google Street View',
    id: 'G8XvG1RwOD8',
    mixeur: 'sandristas 009',
    tags: ['jazz', 'japan'],
    hours: 1,
    minutes: 21,
    tier: 3
  },
  {
    title: 'nintendo frutiger aero chill mix',
    id: 'v3gOQbh32Pg',
    mixeur: 'ninchrisu',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 16,
    tier: 3
  },
  {
    title: 'Sonic & Chill',
    id: 'Amo-w9r29YA',
    mixeur: 'dunk diction',
    tags: ['energy', 'games'],
    hours: 0,
    minutes: 43,
    tier: 1
  },
  {
    title: 'Chill & Relaxing Pok mon Music Mix',
    id: 'YMEblRM4pGc',
    mixeur: 'beacori',
    tags: ['chill', 'games', 'games'],
    hours: 1,
    minutes: 1,
    tier: 2
  },
  {
    title: 'remember when lofi hip-hop still sounded like this.',
    id: '617L_MOB37k',
    mixeur: 'the bootleg boy 2',
    tags: ['lofi'],
    hours: 1,
    minutes: 0,
    tier: 1
  },
  {
    title: 'POV: you found this cool mixtape at end of the world',
    id: '_HY9wyLjRDE',
    mixeur: 'yaman ege music',
    tags: ['jazz', 'japan'],
    hours: 2,
    minutes: 11,
    tier: 1
  },
  {
    title: '4 Hours of Indie Game Music',
    id: 'KuBCTi6NnNM',
    mixeur: 'krub',
    tags: ['chill', 'games'],
    hours: 4,
    minutes: 0,
    tier: 2
  },
  {
    title: 'You are a spy who is about to be exposed',
    id: 'khRJMiquAjA',
    mixeur: 'april',
    tags: ['energy'],
    hours: 0,
    minutes: 40,
    tier: 1
  },
  {
    title: 'a gran turismo vibe mix.',
    id: 'Rm8Isn0jP6E',
    mixeur: 'volante',
    tags: ['chill', 'games'],
    hours: 0,
    minutes: 54,
    tier: 1
  },
  {
    title: 'Calm Nintendo games music to finish the day',
    id: '15bZlN0LrFg',
    mixeur: 'vapid',
    tags: ['chill', 'games', 'nintendo'],
    hours: 1,
    minutes: 47,
    tier: 2
  },
  {
    title: 'chill and nostalgic wii music',
    id: 'Pn61zKFkf2A',
    mixeur: 'miffynoa',
    tags: ['chill', 'games', 'nintendo'],
    hours: 1,
    minutes: 11,
    tier: 2
  },
  {
    title: 'got worries?',
    id: 'z670UNsWx0s',
    mixeur: 'room waves',
    tags: ['chill'],
    hours: 1,
    minutes: 28,
    tier: 2
  },
  {
    title: 'Himiko Kikuchi - Flying Beagle (1987)',
    id: 'HHOn8u-c2wk',
    mixeur: 'captain chef',
    tags: ['chill', 'japan'],
    hours: 0,
    minutes: 42,
    tier: 2
  },
  {
    title: 'Nintendo music that\'s very Nintendo',
    id: 'k7UsX8aQkN4',
    mixeur: 'vipid',
    tags: ['chill', 'games', 'nintendo'],
    hours: 1,
    minutes: 7,
    tier: 2
  },
  {
    title: 'Goofy goober playlist',
    id: 'oUI_tVU77cw',
    mixeur: 'starzz',
    tags: ['chill'],
    hours: 0,
    minutes: 32,
    tier: 3
  },
  {
    title: 'Goofy goober playlist 2',
    id: '5CfOSjjrztA',
    mixeur: 'starzz',
    tags: ['chill'],
    hours: 0,
    minutes: 31,
    tier: 3
  },
  {
    title: 'having a good time with your silly cat',
    id: 'uvTs7YPIkhA',
    mixeur: 'kora',
    tags: ['chill'],
    hours: 0,
    minutes: 23,
    tier: 3
  },
  {
    title: 'you have found the mythical seal cave',
    id: 'WCs-7HmA9Qk',
    mixeur: 'azali',
    tags: ['chill'],
    hours: 8,
    minutes: 0,
    tier: 2
  },
  {
    title: 'wake up! it\'s 2000s again - frutiger aero/nostalgic playlist',
    id: 'Cz2YCRmDOFk',
    mixeur: 'nostalgate',
    tags: ['chill'],
    hours: 1,
    minutes: 38,
    tier: 3
  },
  {
    title: 'remember when lofi hip-hop was smooth like this.',
    id: 'm8WjnuhoeDg',
    mixeur: 'the bootleg boy 2',
    tags: ['lofi'],
    hours: 1,
    minutes: 2,
    tier: 2
  },
  {
    title: 'remember when lofi hip-hop felt like this.',
    id: 'NvBmd-waMQg',
    mixeur: 'the bootleg boy 2',
    tags: ['lofi'],
    hours: 1,
    minutes: 1,
    tier: 2
  },
  {
    title: 'at cafe [LoFi Hip hop Jazz mix]',
    id: '7nMsw5twDLs',
    mixeur: 'tswizzie',
    tags: ['lofi'],
    hours: 0,
    minutes: 52,
    tier: 2
  },
  {
    title: 'lofi type beat',
    id: 'cbuZfY2S2UQ',
    mixeur: 'yanu_',
    tags: ['lofi'],
    hours: 2,
    minutes: 50,
    tier: 2
  },
  {
    title: 'Night Drive mix hip hop lofi',
    id: 'zW5wpJY1rgQ',
    mixeur: 'mimi lofi chill',
    tags: ['lofi'],
    hours: 24,
    minutes: 0,
    tier: 2
  },
  {
    title: 'old songs but it\'s lofi remix',
    id: 'BrnDlRmW5hs',
    mixeur: 'lo-fi music',
    tags: ['lofi'],
    hours: 0,
    minutes: 24,
    tier: 2
  },
  {
    title: 'A Very Silly Playlist That Will Tickle Your Brain',
    id: '8Jk_5Yry_SE',
    mixeur: 'sandristas 009',
    tags: ['lofi'],
    hours: 0,
    minutes: 42,
    tier: 2
  },
  {
    title: 'It\'s 4 a.m. in 1987 and you can\'t sleep.',
    id: 'kNq5zKoYfc8',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 2,
    tier: 2
  },
  {
    title: 'Late night office',
    id: '_psqZ5ciP30',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 0,
    tier: 2
  },
  {
    title: 'It\'s always 4 a.m.',
    id: 'QDF26jiK2-s',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 1,
    tier: 2
  },
  {
    title: 'It\'s 1987 and you tsayed at the office',
    id: 'AcQ3Di2Gewc',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 7,
    tier: 2
  },
  {
    title: 'It\'s 1983 and you\'re stuck in the office',
    id: 'WWL2dHMIty4',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Midnight Chill',
    id: 'mM5ymA4H_Qs',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 8,
    tier: 2
  },
  {
    title: 'Late night chill 3',
    id: 'pEbtkVr5eBc',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Futur we never had',
    id: 'iolNgnouVv4',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 0,
    tier: 2
  },
  {
    title: 'Back to the 80s',
    id: 'Yf7-z6P9Q94',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 51,
    tier: 2
  },
  {
    title: 'oh finally, winter is here',
    id: 'hoCHcHkS7hY',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 4,
    minutes: 24,
    tier: 2
  },
  {
    title: 'Late night Vaporwave',
    id: 'A93NU9_iw6Q',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 24,
    tier: 1
  },
  {
    title: 'chill, it\'s 1986',
    id: 'SmnLu-K4ygg',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 5,
    minutes: 2,
    tier: 2
  },
  {
    title: '1993 blue hour',
    id: 'aGNZFZmgjVw',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 29,
    tier: 2
  },
  {
    title: 'Late night chill',
    id: 'O5-WIDPNrFk',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 27,
    tier: 2
  },
  {
    title: 'late night chill 2',
    id: 'GW3B30KQczs',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 2,
    tier: 2
  },
  {
    title: 'Late night work',
    id: '80Zv7K3LaUU',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 2,
    tier: 2
  },
  {
    title: '1992 late night work',
    id: 'FkFE2H2loPg',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 1,
    minutes: 19,
    tier: 2
  },
  {
    title: 'pov: it\'s Halloween in 1983',
    id: 'q-UxqnAcFkg',
    mixeur: 'utopic dreamer',
    tags: ['peace'],
    hours: 6,
    minutes: 29,
    tier: 2
  },
  {
    title: 'Le Fishe Playlist (Animated)',
    id: 'bbcPLei01Ls',
    mixeur: 'rain and dirt',
    tags: ['jazz', 'wtf', 'french'],
    hours: 0,
    minutes: 59,
    tier: 1
  },
  {
    title: 'Le Fishe Au Chocolat Playlist (Animated)',
    id: 'QW2fIqZTpUE',
    mixeur: 'rain and dirt',
    tags: ['jazz', 'wtf', 'french'],
    hours: 0,
    minutes: 58,
    tier: 1
  },
  {
    title: 'Music for places where I wish I could eat the Kirkland Costco Hotdog',
    id: '06880nn9DoA',
    mixeur: 'rain and dirt',
    tags: ['energy', 'wtf'],
    hours: 0,
    minutes: 58,
    tier: 1
  },
  {
    title: 'Chilling in the Poolrooms...',
    id: 'H6XvgqSwBZw',
    mixeur: 'rain and dirt',
    tags: ['chill', 'wtf'],
    hours: 0,
    minutes: 55,
    tier: 1
  },
  {
    title: 'listening to luv sic pt.2 but also other songs',
    id: 'sgIYJooKO8c',
    mixeur: 'rain and dirt',
    tags: ['chill'],
    hours: 1,
    minutes: 1,
    tier: 1
  },
  {
    title: 'morning routine house mix',
    id: '8B4soa7z098',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 44,
    tier: 1
  },
  {
    title: 'this house mix finds you',
    id: 'pHrGDXEBPGs',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 55,
    tier: 1
  },
  {
    title: 'underground deep house mix',
    id: 'WMG2EEregSk',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 41,
    tier: 2
  },
  {
    title: 'underground deep house mix pt.2',
    id: '5RvZvMmenHA',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 47,
    tier: 2
  },
  {
    title: 'underground deep house mix pt.3',
    id: 'L6UMfrrSPgg',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 49,
    tier: 2
  },
  {
    title: 'deep house mix for a good time',
    id: '868eZTy-OuY',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 1,
    minutes: 28,
    tier: 2
  },
  {
    title: 'jazzy house mix',
    id: 'OkMi6fCAxyU',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 36,
    tier: 2
  },
  {
    title: 'sunny morning house mix',
    id: 'vU5enfCmHpo',
    mixeur: 'gesus8',
    tags: ['house'],
    hours: 0,
    minutes: 46,
    tier: 2
  },
  {
    title: 'i can\'t explain and i wont even try',
    id: 'dY5NwUk2nIw',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 47,
    tier: 1
  },
  {
    title: 'ambience that\'s always there for you',
    id: 'Kbip8GQ6XQw',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 48,
    tier: 2
  },
  {
    title: 'peace',
    id: 'T1dV08Wervc',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 46,
    tier: 1
  },
  {
    title: 'don\'t stress about things you can\'t control',
    id: '8fjrv9l6FDU',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 20,
    tier: 1
  },
  {
    title: 'calm',
    id: 'Zv83ljtR-oc',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 31,
    tier: 1
  },
  {
    title: 'Ambient3k',
    id: 'XjeJkMk4_Pc',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 45,
    tier: 1
  },
  {
    title: 'Ambient4k',
    id: 'YUQqeV2NYOU',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 1,
    minutes: 0,
    tier: 1
  },
  {
    title: 'all you need',
    id: 'nheHwBByImg',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 51,
    tier: 1
  },
  {
    title: 'let it all go',
    id: 'CVeYI-gmX00',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 33,
    tier: 1
  },
  {
    title: 'zoned out',
    id: '1W1-nPXEVKk',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 41,
    tier: 1
  },
  {
    title: 'give your brain a break',
    id: '6cEPhoy6nKE',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 44,
    tier: 1
  },
  {
    title: 'relax',
    id: 'B-gZrtWNX-A',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 35,
    tier: 1
  },
  {
    title: 'escape',
    id: 'R2HINFeXKpo',
    mixeur: 'ambient2k',
    tags: ['peace'],
    hours: 0,
    minutes: 35,
    tier: 1
  },
  {
    title: 'pure video game bops for locking in',
    id: 'NyQCiqfkTA8',
    mixeur: 'denz1000',
    tags: ['energy', 'games'],
    hours: 0,
    minutes: 49,
    tier: 1
  },
  {
    title: 'MORE video game bops for locking in',
    id: 'tIsiYbJLwIg',
    mixeur: 'denz1000',
    tags: ['energy', 'games'],
    hours: 0,
    minutes: 56,
    tier: 1
  },
  {
    title: 'even MORE video game bops for locking in',
    id: 'RBjOql8hcA0',
    mixeur: 'denz1000',
    tags: ['energy', 'games'],
    hours: 0,
    minutes: 54,
    tier: 1
  },
  {
    title: 'rally house for throwin it sideways',
    id: 'AiqaEMchDAA',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 0,
    minutes: 51,
    tier: 1
  },
  {
    title: 'rally house 5.0',
    id: 'oqXXgf0mbe4',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 0,
    minutes: 57,
    tier: 3
  },
  {
    title: 'rally house that goes down smooth',
    id: '4wnPud4kBVE',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 0,
    minutes: 54,
    tier: 3
  },
  {
    title: '4 hours of french house for genuinely spacing out',
    id: 'f9BKkGN56KY',
    mixeur: 'denz1000',
    tags: ['house', 'french'],
    hours: 4,
    minutes: 14,
    tier: 3
  },
  {
    title: 'nonstop uk garage dubs to bump to',
    id: 'lFuErjQKoYg',
    mixeur: 'denz1000',
    tags: ['energy'],
    hours: 0,
    minutes: 59,
    tier: 3
  },
  {
    title: 'rally house to get low poly to',
    id: 'AAR7Kl_n9oM',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 0,
    minutes: 46,
    tier: 3
  },
  {
    title: 'french house to whimsically vibe to',
    id: '48wo5KINI_g',
    mixeur: 'denz1000',
    tags: ['house', 'french'],
    hours: 0,
    minutes: 44,
    tier: 3
  },
  {
    title: 'rally house for cruising into the void',
    id: 'zd9pOoICt34',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 1,
    minutes: 29,
    tier: 3
  },
  {
    title: 'french house to goof off to',
    id: '-AgKZEBkDFA',
    mixeur: 'denz1000',
    tags: ['house', 'french'],
    hours: 0,
    minutes: 55,
    tier: 3
  },
  {
    title: '2000s edits that i found on my ipod',
    id: '60HwwaAVFu0',
    mixeur: 'denz1000',
    tags: ['energy'],
    hours: 0,
    minutes: 50,
    tier: 3
  },
  {
    title: 'speedy house for gettin twisted',
    id: '9XDVROQ3rJI',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 0,
    minutes: 56,
    tier: 3
  },
  {
    title: 'french house for acting foolish',
    id: 'uIPto58mfWw',
    mixeur: 'denz1000',
    tags: ['house', 'french'],
    hours: 0,
    minutes: 52,
    tier: 3
  },
  {
    title: '5 hours of rally house for hittin the bricks',
    id: 'JFbHgOyogcg',
    mixeur: 'denz1000',
    tags: ['house'],
    hours: 4,
    minutes: 33,
    tier: 3
  },
  {
    title: 'future funk to get analog to',
    id: '6aPR9MFAMDI',
    mixeur: 'denz1000',
    tags: ['energy'],
    hours: 0,
    minutes: 53,
    tier: 3
  },
  {
    title: 'french house for nonchalantly groovin',
    id: '6OGp_lZT2tM',
    mixeur: 'denz1000',
    tags: ['house', 'french'],
    hours: 0,
    minutes: 47,
    tier: 3
  },
  {
    title: 'Upbeat & chill Nintendo aquarium playlist to get to work!',
    id: 'nRxhBM9b0yE',
    mixeur: 'vanille',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 21,
    tier: 2
  },
  {
    title: 'Nintendo music mix to cure your depression',
    id: 'NugaoOcwblM',
    mixeur: 'vanille',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 3,
    tier: 2
  },
  {
    title: 'Nintendo Upbeat music to work in the morning.',
    id: 'WjdM1gmMMvQ',
    mixeur: 'vanille',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 27,
    tier: 2
  },
  {
    title: 'Nintendo music while you procrastinate',
    id: 'JRr_Smyf7xw',
    mixeur: 'vanille',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 9,
    tier: 2
  },
  {
    title: '2 hours of chill video game music',
    id: 'JJis0sld2cM',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 0,
    tier: 2
  },
  {
    title: 'video game BANGERS pt. 3',
    id: 'YRz7WMZ7uqo',
    mixeur: 'alf',
    tags: ['chill', 'games'],
    hours: 4,
    minutes: 0,
    tier: 2
  },
  {
    title: 'UPBEAT video game music pt. 2',
    id: 'hc8Iys3KKLo',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 1,
    minutes: 0,
    tier: 2
  },
  {
    title: 'chill video game music pt. 3',
    id: 'pu3SfD4jpkU',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 0,
    tier: 2
  },
  {
    title: 'chill video game music pt. 5',
    id: 'kySPF3bwQPE',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 1,
    tier: 2
  },
  {
    title: 'chill video game music pt. 4',
    id: '_AZKN9sRx2I',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 3,
    tier: 2
  },
  {
    title: 'chill video game music pt. 6',
    id: 'ZIHq06bGHlQ',
    mixeur: 'alf',
    tags: ['chill', 'games', 'nintendo'],
    hours: 2,
    minutes: 2,
    tier: 2
  },
];

export default videos;