import { DRIVERS_SCRAP_CONF, IHtmlTag } from './scraper.models';
import { fetchWiki, formatTable, parsePageContent } from './scraper.utils';

const scrap = () =>
  DRIVERS_SCRAP_CONF.map(({ name, wikiKey, tableIds }) =>
    fetchWiki(wikiKey).then(parsePageContent)
  );

// scrap();

const table: IHtmlTag = {
  type: 'table',
  attrs: {
    'class-name': 'wikitable',
    style: {
      'text-align': 'center',
      'font-size': '85%'
    },
    'redactor-attributes': {
      class: 'wikitable',
      style: 'text-align:center; font-size:85%'
    },
    rows: 0,
    cols: 32,
    colWidths: [
      250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250,
      250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250,
      250, 250
    ]
  },
  uid: '9853ab7c9f0b48409b722684f98df972',
  children: [
    {
      type: 'tbody',
      attrs: {},
      uid: 'fc9087bc59f343b285f688a158c12b32',
      children: [
        {
          type: 'tr',
          attrs: {},
          uid: 'acc95909e5e54cd78bd8214c89983e1e',
          children: [
            {
              type: 'th',
              attrs: {},
              uid: '33ac0ae31024445bb7a7481de101a6c6',
              children: [
                {
                  text: 'Year\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '3e8e754586ce45b591a546cb8f63aeb5',
              children: [
                {
                  text: 'Entrant\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '3cd1e55afe7d4555a25a7c964b012a11',
              children: [
                {
                  text: '1\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '5ee5f7b6f1d74597a7bd938eaf2d95dd',
              children: [
                {
                  text: '2\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '78560eefe0ff465d9ee55193482fa61b',
              children: [
                {
                  text: '3\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '2f3ca20d52de4096af861ce16901fdf6',
              children: [
                {
                  text: '4\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'e9ea9eb0f9994465a9633b0548be89e4',
              children: [
                {
                  text: '5\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '13b00d1708014a33886a6404746c9526',
              children: [
                {
                  text: '6\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '16b094dfc21a46bd9c26ce7e689c706c',
              children: [
                {
                  text: '7\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'e4bf776e58404b909867c25b1ffe1d61',
              children: [
                {
                  text: '8\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '1561ebe7a90d4f6caa8784edcd76678b',
              children: [
                {
                  text: '9\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'f417e236a41541349f5733a9a2df5fd5',
              children: [
                {
                  text: '10\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '61bf3a427f7e4b0c8101b98af9bf30f3',
              children: [
                {
                  text: '11\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '8d5d89fb2dbd494da664bd0be960e759',
              children: [
                {
                  text: '12\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '7d5c6059be9b43ac808894e987e1a779',
              children: [
                {
                  text: '13\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'f9f32bf76546488a85acaa3b2e691af1',
              children: [
                {
                  text: '14\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '96fce2f7f68447b79874c963cd0f2fa0',
              children: [
                {
                  text: '15\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '6fe21ae2cb524175a13c512e5ab17878',
              children: [
                {
                  text: '16\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'b532dc36ed9e457ca077bc0bae506a53',
              children: [
                {
                  text: '17\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '2b26b5f922d64d43a78dbccd3236d385',
              children: [
                {
                  text: '18\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '4443dafaf1f94b8ea81929a011a6134e',
              children: [
                {
                  text: '19\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'e2e81f6e1c2c4beebb8e7eaa2b6ce884',
              children: [
                {
                  text: '20\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'b65a7b756b85416b8f768a73b35dd99a',
              children: [
                {
                  text: '21\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'dba4792c0e964b4cb271c09cf2cd3287',
              children: [
                {
                  text: '22\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '4740c67b758e4118a987ffb79b0b619e',
              children: [
                {
                  text: '23\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '99bdcbb2d07d44a58e97cc6b40109871',
              children: [
                {
                  text: '24\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '13ba74883eda444886f3d664e5afc4d9',
              children: [
                {
                  text: '25\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '25372dff1aaa4e4a9e97d40df37ff6f4',
              children: [
                {
                  text: '26\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'a4d4d60e679646eba681034b959d0e46',
              children: [
                {
                  text: '27\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'ad1f1d2439a344aeb9357fc1b736ecef',
              children: [
                {
                  text: '28\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'c9f9b1ab6607475f9784c26b0d2a07bf',
              children: [
                {
                  text: 'DC\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'a581a48c19d64a7c9a1f760d88230842',
              children: [
                {
                  text: 'Points\n'
                }
              ]
            }
          ]
        },
        {
          type: 'tr',
          attrs: {},
          uid: '426c34f20e8e44f89956b53f796bdc53',
          children: [
            {
              type: 'td',
              attrs: {},
              uid: 'ca2c8cdc13b74630a34221a1b285bd27',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Formula_2_Championship',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Formula_2_Championship',
                      title: '2023 Formula 2 Championship'
                    }
                  },
                  uid: '6b6acf44841f45d2913e29225b3ae97d',
                  children: [
                    {
                      text: '2023'
                    }
                  ]
                }
              ]
            },
            {
              type: 'th',
              attrs: {
                style: {},
                'redactor-attributes': {
                  nowrap: ''
                }
              },
              uid: 'e9d3445ccdfe47d0be11c550751261f5',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/Trident_Racing',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/Trident_Racing',
                      class: 'mw-redirect',
                      title: 'Trident Racing'
                    }
                  },
                  uid: 'fb7b8da3791a4c5aa719ba51a0e8fe39',
                  children: [
                    {
                      text: 'Trident'
                    }
                  ]
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '20c582c28dac49d19023ebdfa7111856',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Sakhir_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Sakhir_Formula_2_round',
                      title: '2023 Sakhir Formula 2 round'
                    }
                  },
                  uid: 'de849acf51564a20bf6d9000f59ad877',
                  children: [
                    {
                      text: 'BHR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '192d373bbfd9443ba9b4e7bafc3362a2'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '9bce6e947fb34ceeba69e53b22b41c96'
                },
                {
                  text: '13',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: '7b41e01bfbbe4d558bf6eaa2910a86b0',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Sakhir_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Sakhir_Formula_2_round',
                      title: '2023 Sakhir Formula 2 round'
                    }
                  },
                  uid: 'ed8f9e91bb6347acaecd360dd9e677c6',
                  children: [
                    {
                      text: 'BHR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '5dd71c2f0d454ce9a781e19a1c9d42da'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '995cacb960b74a5999c39b0cd9ecbd44'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '6e576d180810496eab7d539e1f76bc61',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Jeddah_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Jeddah_Formula_2_round',
                      title: '2023 Jeddah Formula 2 round'
                    }
                  },
                  uid: 'df440362254048d59a62b5695b5d8b7a',
                  children: [
                    {
                      text: 'JED'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'ac576ef1f49043c39d6709c37353fa8a'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'd6dd407d99b747c78ace6c2f4172a46a'
                },
                {
                  text: '17',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '8ebbcefaaccd47d687a2283f429e59d8',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Jeddah_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Jeddah_Formula_2_round',
                      title: '2023 Jeddah Formula 2 round'
                    }
                  },
                  uid: '11c4e069f5514d6b9d0ec9bfa26a6dcf',
                  children: [
                    {
                      text: 'JED'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'a1b9796aa64142cdaed046f2a2927ae3'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '8ee6901837bd4fda97f7893751956f29'
                },
                {
                  text: '14',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '98368027a17149bcb8f39880b5c6f465',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Melbourne_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Melbourne_Formula_2_round',
                      title: '2023 Melbourne Formula 2 round'
                    }
                  },
                  uid: 'cd8ddafe729842eebc2bc3f7eaa7467b',
                  children: [
                    {
                      text: 'MEL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '7a24cbc5262846daafcf8d1c29ca6300'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '398253bd2c074c4f8812bfd56f7876b7'
                },
                {
                  text: '16',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '312fc93450df4260b5eb30e72058a6c5',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Melbourne_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Melbourne_Formula_2_round',
                      title: '2023 Melbourne Formula 2 round'
                    }
                  },
                  uid: 'be8285efe98b471e8832d4e4ebd66f04',
                  children: [
                    {
                      text: 'MEL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'b10703dd23374c8bab447d73d9df085b'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'a1525cdbb7cb44cf931001a9e4922a9e'
                },
                {
                  text: '14',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: '9ba0747aa2c34833816e05a42b4beb45',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Baku_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Baku_Formula_2_round',
                      title: '2023 Baku Formula 2 round'
                    }
                  },
                  uid: '017d4984153e44328053e6f82fd7a492',
                  children: [
                    {
                      text: 'BAK'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'd1a921942a544dedbf71290e24446734'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'f45a2680d762462e8dda12b3efd728d9'
                },
                {
                  text: '8',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '6b840903d7f748d59dcd5909764be5b9',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Baku_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Baku_Formula_2_round',
                      title: '2023 Baku Formula 2 round'
                    }
                  },
                  uid: '26f73f6c743441e9a60b902164f32c13',
                  children: [
                    {
                      text: 'BAK'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'b37fa70a50a6434396772f056f0894e0'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'cd9131e69835428495833ca71017f6e6'
                },
                {
                  text: '17',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'f3918c210a4d44b3bb19a1051b4c5400',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Monte_Carlo_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Monte_Carlo_Formula_2_round',
                      title: '2023 Monte Carlo Formula 2 round'
                    }
                  },
                  uid: '217a9052269a4ab692ac0d469eb4b766',
                  children: [
                    {
                      text: 'MCO'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '4a15645e745145ce9fb2469181c971cd'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '354971c72756469fae0ea93493c6adde'
                },
                {
                  text: '12',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: '994fb022a07e45cb969c1c22acf422bc',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Monte_Carlo_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Monte_Carlo_Formula_2_round',
                      title: '2023 Monte Carlo Formula 2 round'
                    }
                  },
                  uid: '234f9a010064481e8e5bc92f79adf1a2',
                  children: [
                    {
                      text: 'MCO'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '08f825c7c2b64ab6b02bc9d560ac8c36'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'dc1f864c8d9f4531bb471ead0580e141'
                },
                {
                  text: '7',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '4f7aa3e324d2494488a0f786b44992a9',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Barcelona_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Barcelona_Formula_2_round',
                      title: '2023 Barcelona Formula 2 round'
                    }
                  },
                  uid: 'b05a299f51c840a7a845f99f7b8f9a2c',
                  children: [
                    {
                      text: 'CAT'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '9901ede41b96454297edbff6294730fa'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '41281647dde945c484c245c215763642'
                },
                {
                  text: '13',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '975a2b3b1114440e9f7af795d5cd3e3b',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Barcelona_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Barcelona_Formula_2_round',
                      title: '2023 Barcelona Formula 2 round'
                    }
                  },
                  uid: 'feec2ec4d52044d1b9c23ecd3aa425ee',
                  children: [
                    {
                      text: 'CAT'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'cc47147615184c1a95169a48c6b9e0a6'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '8e5c083fd3f74e938650b2103c440994'
                },
                {
                  text: '12',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: 'accb1b36215a4fc4af636c31e86dc037',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Spielberg_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Spielberg_Formula_2_round',
                      title: '2023 Spielberg Formula 2 round'
                    }
                  },
                  uid: '628cebc9e3e34caba9467160a389bcbf',
                  children: [
                    {
                      text: 'RBR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '4d6a6390f4d745a7a16ead348030ba3d'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '4a22f652f0b349e3a90ab139402bc1cb'
                },
                {
                  text: '5',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: 'af6060e8fa264eb5b42ba885e5ed99e5',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Spielberg_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Spielberg_Formula_2_round',
                      title: '2023 Spielberg Formula 2 round'
                    }
                  },
                  uid: 'e0c242fb4b5c4616a29e6235c99f3ee3',
                  children: [
                    {
                      text: 'RBR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '363b84f5734749fbb6f8bf7194050b12'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '1a5de768a7c54023a40ece68f0bd3546'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '4c5abbb56bb249a0a41e9d741c23e894',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Silverstone_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Silverstone_Formula_2_round',
                      title: '2023 Silverstone Formula 2 round'
                    }
                  },
                  uid: 'eff096e4f0584a35b5d21572e9021e45',
                  children: [
                    {
                      text: 'SIL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '047a33a387a94889afed42179174e576'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'ab7fc38a310044ecbb384862c513da9e'
                },
                {
                  text: '15',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: '1f17e0ab6b814e799e5213480309ee30',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Silverstone_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Silverstone_Formula_2_round',
                      title: '2023 Silverstone Formula 2 round'
                    }
                  },
                  uid: 'b6d3d7d3d4fc4ca9934ebdfff68947c2',
                  children: [
                    {
                      text: 'SIL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '08ef70f507c549e8a93cd1ee760c4432'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'abe4e07331364bd8873878b107d039e5'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '5f69ad632bd14ca3b414d31f9bd0df0c',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Budapest_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Budapest_Formula_2_round',
                      title: '2023 Budapest Formula 2 round'
                    }
                  },
                  uid: 'aace3b9c0cc44cef9d3559b2113d1991',
                  children: [
                    {
                      text: 'HUN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '48efd5d6abec4bc89009e345bbd6fbdc'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '353dc7b24b2f4180b3d83d0d8fd9d5b1'
                },
                {
                  text: '16',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '037287a83e2f48ec9eeccac958b01458',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Budapest_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Budapest_Formula_2_round',
                      title: '2023 Budapest Formula 2 round'
                    }
                  },
                  uid: '2d0de94f3df647319496c4d4166a184a',
                  children: [
                    {
                      text: 'HUN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'f2822c53685b4f949ae7a59ab9046037'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '28739bf36f7f4024bd259a0edcf20750'
                },
                {
                  text: '14',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '3cb43a6584474f08a0e980d4c73751a6',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Spa-Francorchamps_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Spa-Francorchamps_Formula_2_round',
                      title: '2023 Spa-Francorchamps Formula 2 round'
                    }
                  },
                  uid: 'cd46afa93adf4324b75925aac5cf4dfe',
                  children: [
                    {
                      text: 'SPA'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '197a6ba6a72f4864b41c00cac2d457ce'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'ecb2652091544f7ab8a970ad34e5cb7d'
                },
                {
                  text: '15',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: '106d5a949bb845d08fcc0f6247445611',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Spa-Francorchamps_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Spa-Francorchamps_Formula_2_round',
                      title: '2023 Spa-Francorchamps Formula 2 round'
                    }
                  },
                  uid: '73c8a72cf95e4879ba679a93f33be15e',
                  children: [
                    {
                      text: 'SPA'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'e64f8f5955914a84b1bcdf2dde54e7d9'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e19b53c4c0024826a8e2c1e329053567'
                },
                {
                  text: '9',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '9d9dcaf64b4e49569a8ba3cd08c2b14d',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Zandvoort_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Zandvoort_Formula_2_round',
                      title: '2023 Zandvoort Formula 2 round'
                    }
                  },
                  uid: '3c4a2415d06a47de800dc55c32622473',
                  children: [
                    {
                      text: 'ZAN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '7d5b25fddbc347c5b37becdaaed4bf41'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '0ab85367ae7b4483958a04f39b7d2ad0'
                },
                {
                  text: '14',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'dfb7e814b8354e07a8a9001ccafe0a0e',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Zandvoort_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Zandvoort_Formula_2_round',
                      title: '2023 Zandvoort Formula 2 round'
                    }
                  },
                  uid: 'f12abb5904594964a0cc71ae90fbb09f',
                  children: [
                    {
                      text: 'ZAN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'd98162aea672456eae246738dabf5ac7'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '46efd2aae72a43d387d24ae9dce6e078'
                },
                {
                  text: '11',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: '2fc74dfe6a3c419596776ad75ffb4e97',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Monza_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Monza_Formula_2_round',
                      title: '2023 Monza Formula 2 round'
                    }
                  },
                  uid: '17c56671566f42a9844ecdf39654b383',
                  children: [
                    {
                      text: 'MNZ'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'ab461a33fbbe489aac362526e583ccc9'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e8cd875aa1324db39c805829620af97d'
                },
                {
                  text: '8',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: 'fcb7a45cba0342faaa2f4add60e4fa25',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Monza_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Monza_Formula_2_round',
                      title: '2023 Monza Formula 2 round'
                    }
                  },
                  uid: '83bab1772d4440a88bcce13c3f2e9832',
                  children: [
                    {
                      text: 'MNZ'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '6fdaaade25c9419394efd5ed11d2c8d2'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '4cbdc6ecf4c94d888a72ddb95296dbcb'
                },
                {
                  text: '10',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'd97a0c69837a4b72be4b4a76c19cf8ca',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Yas_Island_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Yas_Island_Formula_2_round',
                      title: '2023 Yas Island Formula 2 round'
                    }
                  },
                  uid: '6b9c9226b5024302a125f4f0c9a564f7',
                  children: [
                    {
                      text: 'YMC'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'e79d1119fb7942e89e22c0284e808ebe'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '5d43e86367b14194a6d703691036948e'
                },
                {
                  text: '11',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'a715ce2e0ee844488f054f39cfe25aa7',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2023_Yas_Island_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2023_Yas_Island_Formula_2_round',
                      title: '2023 Yas Island Formula 2 round'
                    }
                  },
                  uid: 'b25dd9c255eb4c26b007308ba30b2208',
                  children: [
                    {
                      text: 'YMC'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'dd799b9279d24d66904a7e1598418358'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '7c6cd7c729f44b2cb633509026d2b910'
                },
                {
                  text: '12',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {},
              uid: '820b226a6be24a5bbfa5cc9069b6d449',
              children: [
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {},
              uid: '547847f896b64d41ac4a4f662552b022',
              children: [
                {
                  text: ''
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '9396fe9e16984bbdb97381da0e7e261f',
              children: [
                {
                  text: '18th\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '9290ef1a3ca2450ca8c66baf42b465b2',
              children: [
                {
                  text: '15\n'
                }
              ]
            }
          ]
        },
        {
          type: 'tr',
          attrs: {},
          uid: 'a34ebd1855444ed99b63df9a4e709bac',
          children: [
            {
              type: 'td',
              attrs: {},
              uid: 'af732ae8c3b04fdbb2656130a255fb05',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Formula_2_Championship',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Formula_2_Championship',
                      title: '2024 Formula 2 Championship'
                    }
                  },
                  uid: '7069f66be5cd40839452b209b998c65b',
                  children: [
                    {
                      text: '2024'
                    }
                  ]
                }
              ]
            },
            {
              type: 'th',
              attrs: {
                style: {},
                'redactor-attributes': {
                  nowrap: ''
                }
              },
              uid: '6fb31f2c5a394b04acd95eccc6411128',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/Trident_Racing',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/Trident_Racing',
                      class: 'mw-redirect',
                      title: 'Trident Racing'
                    }
                  },
                  uid: '40b11e7bf922440a9b967182a4216cc5',
                  children: [
                    {
                      text: 'Trident'
                    }
                  ]
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: '4d11678bb5e6456fad7d21225e8d3613',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Sakhir_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Sakhir_Formula_2_round',
                      title: '2024 Sakhir Formula 2 round'
                    }
                  },
                  uid: 'd44c1c65738548289d08b106e98616ce',
                  children: [
                    {
                      text: 'BHR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'bbcaca92015c46afb4c82a35e5f25275'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'b1f41249d3184a9b9d6b7a0fbd53f6de'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '3278eab917a34284a393076131fc8f41',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Sakhir_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Sakhir_Formula_2_round',
                      title: '2024 Sakhir Formula 2 round'
                    }
                  },
                  uid: '1c2149902c7248a799b74e75ef3d807b',
                  children: [
                    {
                      text: 'BHR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '2d4b4b1b56014bf8b6ef2ad5ee0d7533'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '981cca8978cd481a89adfbed4cba245e'
                },
                {
                  text: '13',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(0, 0, 0)',
                  color: 'white'
                },
                'redactor-attributes': {
                  style: 'background:#000000; color:white;'
                }
              },
              uid: '3926a372e4974bf3995f320faa330734',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Jeddah_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Jeddah_Formula_2_round',
                      title: '2024 Jeddah Formula 2 round'
                    }
                  },
                  uid: '77f9e8094f7449ffa3abad6e9f8693db',
                  children: [
                    {
                      text: 'JED',
                      attrs: {
                        style: {
                          color: 'white'
                        }
                      }
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '26eb462dac3742d29593b95b6416fc66'
                    },
                    {
                      text: 'SPR',
                      attrs: {
                        style: {
                          color: 'white'
                        }
                      }
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '7657d0d4e7dc46509897c801dea331c5'
                },
                {
                  text: 'DSQ',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: 'a86494896057423b8df7f9836bcc00b1',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Jeddah_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Jeddah_Formula_2_round',
                      title: '2024 Jeddah Formula 2 round'
                    }
                  },
                  uid: '61d9e34581414222956de1e1d1470e03',
                  children: [
                    {
                      text: 'JED'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'e307f85adb2d45a0b7a2fd4e929fb8ba'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '452f55fdea03450f985d715b054f58af'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(255, 255, 191)'
                },
                'redactor-attributes': {
                  style: 'background:#FFFFBF;'
                }
              },
              uid: 'c9134baaa779446a86a81ac7876ac24d',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Melbourne_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Melbourne_Formula_2_round',
                      title: '2024 Melbourne Formula 2 round'
                    }
                  },
                  uid: '2359ce1ff30246e7852e42f7099d0592',
                  children: [
                    {
                      text: 'MEL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '2a5b2f2c9b794a2988b9f386c89bb5aa'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '2a570bc72b234aac9405faf5746b6e84'
                },
                {
                  text: '1',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '34641302dd2a41fda3322c9ceebe890e',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Melbourne_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Melbourne_Formula_2_round',
                      title: '2024 Melbourne Formula 2 round'
                    }
                  },
                  uid: '1f17d448698c422ebd797ff7aeaf2c10',
                  children: [
                    {
                      text: 'MEL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '8cbf977f95b14a39a7eb8a68ce1a5f03'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e1ec660cd55c4241821dae79d8832702'
                },
                {
                  text: '15',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(239, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#EFCFFF;'
                }
              },
              uid: '43cc4d4e75f343e0ade7acbb9e4829df',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Imola_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Imola_Formula_2_round',
                      title: '2024 Imola Formula 2 round'
                    }
                  },
                  uid: '77afdfdacb194a12b4d05de1cf34133f',
                  children: [
                    {
                      text: 'IMO'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '3c0c981e931b4cc1b34a29bc01ea6966'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'bb6feac3935c40fb933bebdba9a5d87c'
                },
                {
                  text: 'Ret',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '0ccffe7d37464f04b62fffdb9c5e958d',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Imola_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Imola_Formula_2_round',
                      title: '2024 Imola Formula 2 round'
                    }
                  },
                  uid: '7bf66a45fee74942bf4618e4cbafebd5',
                  children: [
                    {
                      text: 'IMO'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'e46c70221aa2498cbdb41948f329ea50'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e7aa0288518c46d9aa8ebf7d777d2309'
                },
                {
                  text: '18',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: '7459a64529ee4d82a6856865fdad340e',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Monte_Carlo_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Monte_Carlo_Formula_2_round',
                      title: '2024 Monte Carlo Formula 2 round'
                    }
                  },
                  uid: '1043cfd034a342879423b35ce947df3e',
                  children: [
                    {
                      text: 'MON'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'cd631a92a4d54fc7a0a436f347a4b86f'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '21cc0c9915ba42128d3e985437c7b808'
                },
                {
                  text: '6',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '76934f5240c84db7878d2c227586160a',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Monte_Carlo_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Monte_Carlo_Formula_2_round',
                      title: '2024 Monte Carlo Formula 2 round'
                    }
                  },
                  uid: 'a9c10721e1ed4931a100d14db5a9caa6',
                  children: [
                    {
                      text: 'MON'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'dacea7f0f2144d44aa66c96586a3b693'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '1e127a91a1464b208b355b114a49d0be'
                },
                {
                  text: '16',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '946f8a73597c48ab85cc7d5fd4c20317',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Barcelona_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Barcelona_Formula_2_round',
                      title: '2024 Barcelona Formula 2 round'
                    }
                  },
                  uid: 'ec398b9feca4407cbd62733428e27562',
                  children: [
                    {
                      text: 'CAT'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '4a380aeb76964a40b2ea2f2b78a03393'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '7b5566c5582f4f1baff249b0d96cfb5e'
                },
                {
                  text: '22',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '3215d79a031041769449a4acc94ea548',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Barcelona_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Barcelona_Formula_2_round',
                      title: '2024 Barcelona Formula 2 round'
                    }
                  },
                  uid: '2ec7bc56970045f89e0f8179fe6e80f8',
                  children: [
                    {
                      text: 'CAT'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '782aea70ed9647f8a0bfdd42d9f44614'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '2350e0f2fdbb4269a4710d952da8082f'
                },
                {
                  text: '17',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'c7d0b1e884f04619ba9dcc3c75f4ba47',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Spielberg_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Spielberg_Formula_2_round',
                      title: '2024 Spielberg Formula 2 round'
                    }
                  },
                  uid: 'ead98a7d7c444e7b8d681272f0cadf3a',
                  children: [
                    {
                      text: 'RBR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '010fe5685c6a4bf79fa81807154dc94c'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e0d73a471b7b43f598a10d955b8f79c1'
                },
                {
                  text: '21',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '9928d9716ad3415ebce577dbb029dd07',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Spielberg_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Spielberg_Formula_2_round',
                      title: '2024 Spielberg Formula 2 round'
                    }
                  },
                  uid: '4d0e6e7f71f743f1a08d8b894e9ebe95',
                  children: [
                    {
                      text: 'RBR'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '5bd843dd19154592b75b8bbc10078d83'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '7037fec702944150b8b460a35725988b'
                },
                {
                  text: '18',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(223, 255, 223)'
                },
                'redactor-attributes': {
                  style: 'background:#DFFFDF;'
                }
              },
              uid: 'b2444079c19348138b11656c935e4255',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Silverstone_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Silverstone_Formula_2_round',
                      title: '2024 Silverstone Formula 2 round'
                    }
                  },
                  uid: '7ff3a977e5fb4b6bb5127f035dff32d6',
                  children: [
                    {
                      text: 'SIL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '57ad2ce8d4cc48b7879fe1144e843d9c'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '790d769427ae42d3accad9055245bd26'
                },
                {
                  text: '8',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '9f6be2675a754e62a3ea5cd159f49b50',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Silverstone_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Silverstone_Formula_2_round',
                      title: '2024 Silverstone Formula 2 round'
                    }
                  },
                  uid: '549f67add28e41568eb28fabaa37e3d9',
                  children: [
                    {
                      text: 'SIL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '0c10e65415ac40ccbd3fdfce96366170'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '979f52ba6b4c4e2ea84b6083440be6c1'
                },
                {
                  text: '18',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'acf9b7d23cdb46369b0e4803cb2d6a46',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Budapest_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Budapest_Formula_2_round',
                      title: '2024 Budapest Formula 2 round'
                    }
                  },
                  uid: '13655d8e630a495fadf4b44a8e0a2621',
                  children: [
                    {
                      text: 'HUN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '180504aa13944c3ba1ae0033610153a2'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'e982f4e8a8e648ea8ad059bc29604efe'
                },
                {
                  text: '15',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'e645a460f0a84de282b803a23b5ccc1e',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Budapest_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Budapest_Formula_2_round',
                      title: '2024 Budapest Formula 2 round'
                    }
                  },
                  uid: 'a95695cc30a64aa4b5dc4270a32d877e',
                  children: [
                    {
                      text: 'HUN'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '6182724c3dc44e489790bbf3bf040150'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'a0c3d30c84a74933b636da94fa39cc83'
                },
                {
                  text: '11',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: '56fd2344e2254016b4c6c52227903cbf',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Spa-Francorchamps_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Spa-Francorchamps_Formula_2_round',
                      title: '2024 Spa-Francorchamps Formula 2 round'
                    }
                  },
                  uid: '200d65a948f545f1bfb0514da5030224',
                  children: [
                    {
                      text: 'SPA'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'f92ef2917f364cdabf1cbd98f1a13c42'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '3b0dd9371bb64de4909db83b1959f471'
                },
                {
                  text: '20',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {
                  background: 'rgb(207, 207, 255)'
                },
                'redactor-attributes': {
                  style: 'background:#CFCFFF;'
                }
              },
              uid: 'e9b9c70f79c648cca050a91ffabcd066',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Spa-Francorchamps_Formula_2_round',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Spa-Francorchamps_Formula_2_round',
                      title: '2024 Spa-Francorchamps Formula 2 round'
                    }
                  },
                  uid: '2f1369f39e2a4799bd46bd91abc9ca71',
                  children: [
                    {
                      text: 'SPA'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '2380bb6e161d406d9f9a21a9232afe3f'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'bd47c90748714732a14321f7f90a0ad0'
                },
                {
                  text: '14',
                  attrs: {
                    style: {
                      'font-size': '85%'
                    }
                  }
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: 'f5d041c2a7194ea78dc2e50bd8bc48c9',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Monza_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Monza_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Monza Formula 2 round'
                    }
                  },
                  uid: 'c7fa92340f1b48c8af914819eadafa43',
                  children: [
                    {
                      text: 'MNZ'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '14af080ab8674b53ad316272999fc02f'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '3d9ed39278d34d59bffd91c9d4cffa5a'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: 'ab3e7f8c876a4bc9952494cfb43a12f5',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Monza_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Monza_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Monza Formula 2 round'
                    }
                  },
                  uid: '3b08bb1f106240ff921cae87c7492302',
                  children: [
                    {
                      text: 'MNZ'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '9a610160bbf8490bad6c2e9b94605f57'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '7c8a34f42e9240b2a602e6c99460136c'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '83218362719e47acb57ca50aad8b71e4',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Baku_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Baku_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Baku Formula 2 round'
                    }
                  },
                  uid: '208d285ea2b44f0297cdaf07dc38511b',
                  children: [
                    {
                      text: 'BAK'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'be4246ee828847b2b736f0f4420b136c'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: 'f9651511776749aaa5e191c167bf4cd9'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '24ae6ab5f5e84548b69026a8c50a2d14',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Baku_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Baku_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Baku Formula 2 round'
                    }
                  },
                  uid: '56e28ffb985b4813a7c211a4ea578011',
                  children: [
                    {
                      text: 'BAK'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '1b73353898104cf1af499bf7a90c6c55'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '385655ce14464fadb8a5e794cfbdeb6f'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '8138f93106cc49418ae8f1b0747afa8b',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Losail_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Losail_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Losail Formula 2 round'
                    }
                  },
                  uid: '76afb28086a04c1582d32eea93ebf40c',
                  children: [
                    {
                      text: 'LSL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '7e068a108d144ccba505297f1e6394c2'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '20c4b92fe42744868e9b1453a260c113'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '1d2a357f7cfa4553b83d110dd0fcaa38',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Losail_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Losail_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Losail Formula 2 round'
                    }
                  },
                  uid: '0efebc9a99294ebca6814b1e6417d35d',
                  children: [
                    {
                      text: 'LSL'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '45c0429905584bfcb69cac3eb02522d9'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '31bfef6f6a4f47a7a299d0ab49f57448'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '84797a5f33a746e7b53e94e4d9d11fd8',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Yas_Island_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Yas_Island_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Yas Island Formula 2 round'
                    }
                  },
                  uid: '6a6a8297e68e4697b3e5fb6252d7df12',
                  children: [
                    {
                      text: 'YMC'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: 'b3b7b6aa84ed47559d1157425040da24'
                    },
                    {
                      text: 'SPR'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '1342594376d14fb19a9ba0a6653080cb'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'td',
              attrs: {
                style: {},
                'redactor-attributes': {
                  style: 'background:#;'
                }
              },
              uid: '0b4c8f994cd746e4825c9d5fed016b5f',
              children: [
                {
                  type: 'a',
                  attrs: {
                    url: '/wiki/2024_Yas_Island_Formula_2_round',
                    'class-name': 'mw-redirect',
                    style: {},
                    'redactor-attributes': {
                      href: '/wiki/2024_Yas_Island_Formula_2_round',
                      class: 'mw-redirect',
                      title: '2024 Yas Island Formula 2 round'
                    }
                  },
                  uid: '4082dfc78d414caa9f25b9e047265400',
                  children: [
                    {
                      text: 'YMC'
                    },
                    {
                      text: '\n',
                      break: false,
                      separaterId: '9e98dba8126d4b799bb8f606a12a7e2b'
                    },
                    {
                      text: 'FEA'
                    }
                  ]
                },
                {
                  text: '\n',
                  break: false,
                  separaterId: '30f928c1554b45eeb7dde9a8edeb22d2'
                },
                {
                  text: ''
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: 'c1a4cd93aa0c47c0b3384d27ac0d0f9d',
              children: [
                {
                  text: '21st*\n'
                }
              ]
            },
            {
              type: 'th',
              attrs: {},
              uid: '02af53a914784687a51985426880cd39',
              children: [
                {
                  text: '14*\n'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

formatTable(table);
