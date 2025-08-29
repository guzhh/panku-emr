export const mockData = {
  version: "0.9.114",
  data: {
    header: [
      {
        value: "\n",
        size: 22,
        bold: true,
        rowFlex: "center"
      },
      {
        value: "",
        type: "title",
        valueList: [
          {
            value: "测试第一人民医院",
            size: 22,
            bold: true,
            rowFlex: "center"
          }
        ],
        level: "third"
      },
      {
        value: "",
        type: "table",
        trList: [
          {
            height: 33,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "姓名：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_oycwll_8q7adcugunfguv",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.039.00"
                      },
                      placeholder: "患者姓名",
                      size: 14
                    },
                    controlId: "4fb8e1c6-0f96-72d7-7882-61b4783e22d0"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 2,
                value: [
                  {
                    value: "入  院  记  录",
                    size: 21,
                    color: "#000000",
                    rowFlex: "center"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "住院号：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "right"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "right",
                    control: {
                      conceptId: "concept_rgputi4akzkomfk_i9dtz",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE01.00.014.00"
                      },
                      placeholder: "住院号",
                      size: 14,
                      minWidth: 130
                    },
                    controlId: "9b9c0261-0db9-7786-f7a2-21af5d46b0c3"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 33
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "科别：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept__jbfp4anrpirnvehlaqxn",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE08.10.026.00.022"
                      },
                      placeholder: "科别",
                      size: 14
                    },
                    controlId: "c81142f5-7e6c-085d-c1f2-62ab0c25fdfb"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: " 床    号：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "right"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "right",
                    control: {
                      conceptId: "concept_yfovmy27ieuibf5jcmqov",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE99.10.004.033"
                      },
                      placeholder: "患者床号",
                      size: 14,
                      minWidth: 130
                    },
                    controlId: "9fde94d1-4f29-0963-53a3-2d8b012ad8c3"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 32
          }
        ],
        borderType: "empty",
        width: 693,
        height: 65,
        colgroup: [
          {
            width: 231.33333333333334
          },
          {
            width: 231.33333333333334
          },
          {
            width: 230.33333333333334
          }
        ],
        id: "7aafa12c-2f58-4368-3fde-13234595736d"
      },
      {
        value: "\n",
        type: "separator",
        dashArray: [],
        width: 694
      }
    ],
    main: [
      {
        value: "",
        type: "table",
        trList: [
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "姓名：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_tcsvmnvuufcozzkhleqgf",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.039.00"
                      },
                      placeholder: "姓名",
                      size: 14
                    },
                    controlId: "0f3c1084-3071-30ae-2d42-2acf847e5baf"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "性别：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_bgsgxvamaxrx5uke9xzf3",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.040.00"
                      },
                      isMultiSelect: false,
                      placeholder: "性别",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: "男"
                        },
                        {
                          code: "2",
                          value: "女"
                        },
                        {
                          code: "3",
                          value: "未知"
                        }
                      ],
                      size: 14,
                      code: null
                    },
                    controlId: "ec8657a3-35cf-64fc-f500-419ab449db24"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 27
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "年龄：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_2pfumszuisg6s954tgsxe",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.026.00"
                      },
                      placeholder: "年龄",
                      size: 14
                    },
                    controlId: "76fdf394-2ee0-7a6f-f7ab-73555685615b"
                  },
                  {
                    value: "岁",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "民族：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_6lyspv8crefa8ggrdmbvj",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.025.00"
                      },
                      isMultiSelect: false,
                      placeholder: "民族",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: " 汉族"
                        },
                        {
                          code: "2",
                          value: " 满族"
                        },
                        {
                          code: "3",
                          value: " 蒙古族"
                        },
                        {
                          code: "4",
                          value: " 回族"
                        },
                        {
                          code: "5",
                          value: " 藏族"
                        },
                        {
                          code: "6",
                          value: " 维吾尔族"
                        },
                        {
                          code: "7",
                          value: " 苗族"
                        },
                        {
                          code: "8",
                          value: " 彝族"
                        },
                        {
                          code: "9",
                          value: " 壮族"
                        },
                        {
                          code: "10",
                          value: " 布依族"
                        },
                        {
                          code: "11",
                          value: " 朝鲜族"
                        },
                        {
                          code: "12",
                          value: " 侗族"
                        },
                        {
                          code: "13",
                          value: " 瑶族"
                        },
                        {
                          code: "14",
                          value: " 白族"
                        },
                        {
                          code: "15",
                          value: " 土家族"
                        },
                        {
                          code: "16",
                          value: " 哈尼族"
                        },
                        {
                          code: "17",
                          value: " 哈萨克族"
                        },
                        {
                          code: "18",
                          value: " 傣族"
                        },
                        {
                          code: "19",
                          value: " 黎族"
                        },
                        {
                          code: "20",
                          value: " 僳族"
                        },
                        {
                          code: "21",
                          value: " 佤族"
                        },
                        {
                          code: "22",
                          value: " 羌族"
                        },
                        {
                          code: "23",
                          value: " 撒拉族"
                        },
                        {
                          code: "24",
                          value: " 畲族"
                        },
                        {
                          code: "25",
                          value: " 仡佬族"
                        },
                        {
                          code: "26",
                          value: " 锡伯族"
                        },
                        {
                          code: "27",
                          value: " 高山族"
                        },
                        {
                          code: "28",
                          value: " 水族"
                        },
                        {
                          code: "29",
                          value: " 保安族"
                        },
                        {
                          code: "30",
                          value: " 门巴族"
                        },
                        {
                          code: "31",
                          value: " 乌孜别克族"
                        },
                        {
                          code: "32",
                          value: " 阿昌族"
                        },
                        {
                          code: "33",
                          value: " 纳西族"
                        },
                        {
                          code: "34",
                          value: " 柯尔克孜族"
                        },
                        {
                          code: "35",
                          value: " 土族"
                        },
                        {
                          code: "36",
                          value: " 达斡尔族"
                        },
                        {
                          code: "37",
                          value: " 赫哲族"
                        },
                        {
                          code: "38",
                          value: " 羌族"
                        },
                        {
                          code: "39",
                          value: " 塔吉克族"
                        },
                        {
                          code: "40",
                          value: " 怒族"
                        },
                        {
                          code: "41",
                          value: " 东乡族"
                        },
                        {
                          code: "42",
                          value: " 鄂温克族"
                        },
                        {
                          code: "43",
                          value: " 蒙古族"
                        },
                        {
                          code: "44",
                          value: " 德昂族"
                        },
                        {
                          code: "45",
                          value: " 裕固族"
                        },
                        {
                          code: "46",
                          value: " 京族"
                        },
                        {
                          code: "47",
                          value: " 塔塔尔族"
                        },
                        {
                          code: "48",
                          value: " 独龙族"
                        },
                        {
                          code: "49",
                          value: " 鄂伦春族"
                        },
                        {
                          code: "50",
                          value: " 赫哲族"
                        },
                        {
                          code: "51",
                          value: " 俄罗斯族"
                        },
                        {
                          code: "52",
                          value: " 布朗族"
                        },
                        {
                          code: "53",
                          value: " 毛南族"
                        },
                        {
                          code: "54",
                          value: " 撒拉族"
                        },
                        {
                          code: "55",
                          value: " 珞巴族"
                        },
                        {
                          code: "56",
                          value: " 基诺族"
                        }
                      ],
                      size: 14
                    },
                    controlId: "43013dc1-f393-1641-8caf-a300ae92de67"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 26
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "婚姻：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_x50bgqqqqe30xxzmvt5mg",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.018.00"
                      },
                      isMultiSelect: false,
                      placeholder: "婚姻",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: "已婚"
                        },
                        {
                          code: "2",
                          value: "未婚"
                        }
                      ],
                      size: 14
                    },
                    controlId: "3b53ba2d-1ba2-80b5-9ed6-d91cf45e47d6"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "籍贯: ",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_jxrxeim4xuz13mflkcc_y",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.009.01.008"
                      },
                      placeholder: "籍贯",
                      size: 14
                    },
                    controlId: "f52145fa-d357-b2c1-fffa-f3324adc148b"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 31
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "职业：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept__0ttf6qmjlvb0hxop26tz",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.052.00"
                      },
                      isMultiSelect: true,
                      placeholder: "职业",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: "农民"
                        },
                        {
                          code: "2",
                          value: "工人"
                        },
                        {
                          code: "3",
                          value: "公务员"
                        }
                      ],
                      size: 14,
                      code: null
                    },
                    controlId: "c70d728a-48e8-2f94-f993-4fe3e80d85e0"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "身份证号：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_lglpnjfjetyfklrdqn4bl",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.030.00"
                      },
                      placeholder: "身份证号",
                      size: 14
                    },
                    controlId: "815e7fc1-2fff-0eb2-ca10-f0671ddd6c2b"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 24
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "住址：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_ermlzpeiwizodjbbtc9jt",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.009.01.009"
                      },
                      placeholder: "住址",
                      size: 14
                    },
                    controlId: "3fdf8fb0-46b4-9722-7752-cc75b0ee97c1"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "工作单位：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept__3kb7z_uz6nytywyhowsu",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.004.00"
                      },
                      placeholder: "工作单位",
                      size: 14
                    },
                    controlId: "5ede5aa0-c050-f5bb-25ed-1dab8eecff40"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 24
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "联系电话：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_gdv2gxzwddfkeuzupbe_q",
                      type: "text",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.01.010.00.015"
                      },
                      placeholder: "请输入",
                      size: 14
                    },
                    controlId: "fcfc18e6-7102-17f1-73f1-3ab641c38fb1"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "入院情况: ",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_i2jttryf0mjwjvgvk4wyh",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: null
                      },
                      isMultiSelect: false,
                      placeholder: "请选择",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: "一般"
                        },
                        {
                          code: "2",
                          value: "严重"
                        }
                      ],
                      size: 14
                    },
                    controlId: "b03fb25b-62ca-423f-04bc-3eecaea8e0ce"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 23
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "入院时间：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_zn7wutuwl025rcsvx_4lb",
                      type: "date",
                      value: [],
                      extension: {
                        dataElementCode: "DE06.00.092.00"
                      },
                      placeholder: "入院时间",
                      isCustomPopup: true,
                      dateFormat: "yyyy-MM-dd hh:mm:ss",
                      size: 14
                    },
                    controlId: "d13d4792-e217-7ce1-e843-fd0ffa717624"
                  }
                ],
                verticalAlign: "middle"
              },
              {
                colspan: 1,
                rowspan: 1,
                value: [
                  {
                    value: "病历采集时间：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_m_dnvvcrwffn_xtg0n5kr",
                      type: "date",
                      value: [],
                      extension: {
                        dataElementCode: "DE06.00.218.00.015"
                      },
                      placeholder: "病历采集时间",
                      isCustomPopup: true,
                      dateFormat: "yyyy-MM-dd hh:mm:ss",
                      size: 14
                    },
                    controlId: "c2d7d953-1390-cfef-2529-089f70642d72"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 26
          },
          {
            height: 32,
            tdList: [
              {
                colspan: 2,
                rowspan: 1,
                value: [
                  {
                    value: "病史陈述者：",
                    size: 14,
                    color: "#000000",
                    rowFlex: "left"
                  },
                  {
                    value: "",
                    type: "control",
                    rowFlex: "left",
                    control: {
                      conceptId: "concept_0oumfsrnuahlodfhrka0z",
                      type: "select",
                      value: [],
                      extension: {
                        dataElementCode: "DE02.10.024.00.005"
                      },
                      isMultiSelect: false,
                      placeholder: "病史陈述者",
                      isCustomPopup: true,
                      valueSets: [
                        {
                          code: "1",
                          value: "本人"
                        },
                        {
                          code: "2",
                          value: "夫妻"
                        },
                        {
                          code: "3",
                          value: "父母"
                        }
                      ],
                      size: 14
                    },
                    controlId: "5b48e6db-b824-4310-953b-14689e65f6b2"
                  }
                ],
                verticalAlign: "middle"
              }
            ],
            minHeight: 26
          }
        ],
        borderType: "empty",
        width: 694,
        height: 256,
        colgroup: [
          {
            width: 347
          },
          {
            width: 347
          }
        ],
        id: "dabf0383-50e2-30c4-35d3-a4a875f27f8c"
      },
      {
        value: "\n",
        color: "#000000",
        rowFlex: "center"
      },
      {
        value: "入 院 记 录",
        size: 16,
        bold: true,
        rowFlex: "center"
      },
      {
        value: "\n",
        size: 14,
        bold: true,
        color: "#000000",
        rowFlex: "center"
      },
      {
        value: "\n      主诉：",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_mlhbnjxmtoua7i_dea8os",
          type: "text",
          value: [],
          extension: {
            dataElementCode: "DE99.10.014.033"
          },
          placeholder: "主诉",
          size: 14
        },
        controlId: "95fcf271-8b06-9268-9585-4274750f88e2"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      现病史",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_flc4urscz_kpmm9rhs8cg",
          type: "text",
          value: [
            {
              value: "患者于7天前患者无明显诱因",
              type: "text",
              size: 14,
              rowFlex: "left"
            },
            {
              value: "出现咽喉疼痛",
              type: "text",
              size: 14,
              rowFlex: "left",
              groupIds: ["1"]
            },
            {
              value:
                "、吞咽时疼痛加重伴有痰性分泌物，体温37度,无咳嗽、头晕、头痛、胸闷等其他不适，在当地诊所给予抗炎药物治疗(具体不详)，效果差，症状渐加重，今为求治疗现来我院就诊，以“扁桃体周脓肿”收住我科。患者发病以来神志清，精神欠佳，饮食差，睡眠欠佳，大小便正常，体重无明显减轻。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: "DE02.10.008.00"
          },
          placeholder: "现病史",
          size: 14
        },
        controlId: "2c79ad2c-e75a-055a-9502-7f242891e499"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      既往史",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_meb28cltndnvhv0xv9mdk",
          type: "text",
          value: [
            {
              value:
                "高血压病10年(口服硝苯地平片)否认心血管疾病，否认脑血管疾病，否认肺部疾病，否认肾脏疾病，否认内分泌疾病，否认“肝炎、结核、伤寒等”传染病史，否认手术及外伤史，否认输血、献血史，否认食物过敏史，否认药物过敏史。预防接种随社会进行。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: "DE02.10.026.00"
          },
          placeholder: "请输入内容",
          size: 14
        },
        controlId: "96417924-0855-be51-d611-98abe568a86b"
      },
      {
        value: "",
        type: "dataImage",
        size: 14,
        rowFlex: "left",
        width: 128,
        height: 128,
        conceptId: "data_image_2ifbostw0opzu_jrvuq1k",
        imgDisplay: "float-top",
        imgFloatPosition: {
          x: 595,
          y: 633,
          pageNo: 0
        },
        imageData: {
          type: "qr-code",
          data: {
            value: "-"
          }
        },
        dataImageUrl:
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMSIgeT0iMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjciIHk9IjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjE5IiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMjUiIHk9IjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNTUiIHk9IjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2NyIgeT0iMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iODUiIHk9IjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI5MSIgeT0iMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijk3IiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTAzIiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTA5IiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTE1IiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTIxIiB5PSIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMSIgeT0iNyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSI3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNTUiIHk9IjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2MSIgeT0iNyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjY3IiB5PSI3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iODUiIHk9IjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMjEiIHk9IjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEzIiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjE5IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjI1IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQ5IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjU1IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjY3IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijg1IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijk3IiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwMyIgeT0iMTMiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDkiIHk9IjEzIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTIxIiB5PSIxMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTMiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMjUiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzciIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNTUiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjciIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iODUiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTciIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTAzIiB5PSIxOSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwOSIgeT0iMTkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMjEiIHk9IjE5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxOSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIyNSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2MSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3MyIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI5NyIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDMiIHk9IjI1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTA5IiB5PSIyNSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEyMSIgeT0iMjUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIzMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSIzMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSIzMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijg1IiB5PSIzMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEyMSIgeT0iMzEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIzNyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjciIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTMiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMjUiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzEiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzciIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNDkiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjEiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNzMiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iODUiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTEiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTciIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTAzIiB5PSIzNyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwOSIgeT0iMzciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMTUiIHk9IjM3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTIxIiB5PSIzNyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQ5IiB5PSI0MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjU1IiB5PSI0MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjY3IiB5PSI0MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSI0MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEiIHk9IjQ5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNyIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIyNSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0MyIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0OSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2MSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2NyIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3OSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iNDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDkiIHk9IjQ5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNyIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxOSIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIyNSIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iNTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDkiIHk9IjU1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTE1IiB5PSI1NSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjciIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzciIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNDMiIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjEiIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNzMiIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTciIHk9IjYxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTIxIiB5PSI2MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEiIHk9IjY3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNyIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxOSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0MyIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0OSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDkiIHk9IjY3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTE1IiB5PSI2NyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEyMSIgeT0iNjciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEzIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjI1IiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjMxIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQzIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjU1IiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjYxIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijg1IiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijk3IiB5PSI3MyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwOSIgeT0iNzMiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMjEiIHk9IjczIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNDkiIHk9Ijc5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjEiIHk9Ijc5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjciIHk9Ijc5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNzkiIHk9Ijc5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTEiIHk9Ijc5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTAzIiB5PSI3OSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEiIHk9Ijg1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNyIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxOSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIyNSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0OSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2MSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2NyIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3OSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI5MSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDMiIHk9Ijg1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTA5IiB5PSI4NSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjExNSIgeT0iODUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjM3IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQ5IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjU1IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjY3IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjczIiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijc5IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjkxIiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijk3IiB5PSI5MSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwMyIgeT0iOTEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMTUiIHk9IjkxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxOSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIyNSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI0OSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2NyIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3OSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI4NSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI5MSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDMiIHk9Ijk3IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTA5IiB5PSI5NyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEyMSIgeT0iOTciIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIxMDMiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iMTAzIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjEwMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjI1IiB5PSIxMDMiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iMTAzIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iODUiIHk9IjEwMyIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEwOSIgeT0iMTAzIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTE1IiB5PSIxMDMiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIxMDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iMTA5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjEwOSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjI1IiB5PSIxMDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzNyIgeT0iMTA5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNDkiIHk9IjEwOSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjYxIiB5PSIxMDkiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3MyIgeT0iMTA5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iOTciIHk9IjEwOSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjEyMSIgeT0iMTA5IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMSIgeT0iMTE1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzciIHk9IjExNSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQ5IiB5PSIxMTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI1NSIgeT0iMTE1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNjEiIHk9IjExNSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijg1IiB5PSIxMTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMDkiIHk9IjExNSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjExNSIgeT0iMTE1IiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTIxIiB5PSIxMTUiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxIiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI3IiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMyIgeT0iMTIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTkiIHk9IjEyMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjI1IiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIzMSIgeT0iMTIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMzciIHk9IjEyMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9IjQ5IiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI2MSIgeT0iMTIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iNzMiIHk9IjEyMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjxyZWN0IHg9Ijg1IiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSI5NyIgeT0iMTIxIiBoZWlnaHQ9IjYiIHdpZHRoPSI2IiBmaWxsPSIjMDAwMDAwIi8+PHJlY3QgeD0iMTA5IiB5PSIxMjEiIGhlaWdodD0iNiIgd2lkdGg9IjYiIGZpbGw9IiMwMDAwMDAiLz48cmVjdCB4PSIxMjEiIHk9IjEyMSIgaGVpZ2h0PSI2IiB3aWR0aD0iNiIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==",
        id: "a3961879-c53e-be4f-7212-ee025aa7f258"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      个人史",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_r58u2sqgttjb_tiety_y7",
          type: "text",
          value: [],
          extension: {
            dataElementCode: "DE02.10.026.00"
          },
          placeholder: "个人史",
          size: 14
        },
        controlId: "fa814aad-b115-3207-783f-1e2387d99378"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      婚姻史",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_nu4eaks85hyzzijcxmuhg",
          type: "text",
          value: [],
          extension: {
            dataElementCode: "DE02.10.098.00"
          },
          placeholder: "婚姻史",
          size: 14
        },
        controlId: "e7561c34-c020-305d-c3c3-6b095fdeed73"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      婚姻史",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_a_ntzpeoxj6tettiu5wzk",
          type: "text",
          value: [],
          extension: {
            dataElementCode: "DE02.10.103.00"
          },
          placeholder: "家族史",
          size: 14
        },
        controlId: "2edf3f89-adba-e9ae-4aec-f41f19d348fd"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "center"
      },
      {
        value: "体 格 检 查",
        size: 16,
        bold: true,
        rowFlex: "center"
      },
      {
        value: "\n\n      一般情况：",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_1wvwgzybt82jexhslldd8",
          type: "text",
          value: [
            {
              value: "发育正常:营养良好:平卧位;面色红润:面容及表情痛苦:神志清楚 ;言语流利:检查时合作。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: null
          },
          placeholder: "请输入内容",
          size: 14
        },
        controlId: "521fb653-3408-fcf3-8ef9-3ac020c9fde8"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      皮肤",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_ir8ruq5tpuhnhnsggogs6",
          type: "text",
          value: [],
          extension: {
            dataElementCode: null
          },
          placeholder: "皮肤描述",
          size: 14
        },
        controlId: "914c8374-b5e6-1b69-8042-4a9c1339ef83"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      淋巴结",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept__eicvcazepi3wxhw66t_r",
          type: "text",
          value: [
            {
              value: "全身或局部浅表淋巴结有无肿大（部位、大小、数目、压痛、硬度、移动性、瘘管、疤痕等）。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: null
          },
          placeholder: "淋巴结",
          size: 14
        },
        controlId: "d5fb3db5-f1bb-3d80-85ef-ffd5dcaa043c"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      头部及五官",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_qoxfz6_goxp2dvt_1vavs",
          type: "text",
          value: [
            {
              value:
                "头颅无畸形，五官端正，颜面无浮肿，眼球结膜无充血，巩膜无黄染，双侧瞳孔等大等圆，直径约3mm，对光反应灵敏，双侧眼球无震颤；耳廓无畸形，外耳道无异常分泌物，乳突区无压痛，双耳听力正常，鼻腔通畅，鼻中隔无弯曲，鼻腔内无异常分泌物，觉灵敏，各副鼻窦区无压痛；口唇无发绀，咽部粘膜急性充血，右侧扁桃体二度肿大，表面未见脓性分泌物，左侧咽腭弓、软腭高度红肿，悬雍垂肿胀偏向右侧，扁桃体被推往下方，伸舌居中。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: null
          },
          placeholder: "头颅及五官",
          size: 14
        },
        controlId: "383e9493-b870-b703-32d2-dfba5ebdc984"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "      颈部",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_trv_sf4mxup4fzf96fd7r",
          type: "text",
          value: [
            {
              value:
                "对称，无强直、压痛、运动受限、肿块，气管居中;甲状腺未触及肿大，未触及结节、震颤、压痛、杂音等，颈静脉无充盈，肝颈静脉回流征阴性。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: null
          },
          placeholder: "颈部",
          size: 14
        },
        controlId: "233f5719-8fb4-025c-5e67-78ba12394410"
      },
      {
        value: "\n",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "       胸部",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "：",
        size: 14,
        rowFlex: "left"
      },
      {
        value: "",
        type: "control",
        rowFlex: "left",
        control: {
          conceptId: "concept_e4islpi5uahximgjifyfd",
          type: "text",
          value: [
            {
              value:
                "胸廓无畸形，胸壁无压痛，双侧呼吸运动度相等，触诊语颤双侧相等，未触及胸膜摩擦感，叩诊双肺呈清音，听诊双肺呼吸音清，未闻及干湿性罗音，心前区无隆起，心尖动不能明视，未触及心包摩擦感，心前区无震颤，叩诊心脏相对浊音界相对正常，心率75次/分，律齐，P2=A2，心脏各瓣膜区未闻及杂音。",
              type: "text",
              size: 14,
              rowFlex: "left"
            }
          ],
          extension: {
            dataElementCode: null
          },
          placeholder: "胸部",
          size: 14
        },
        controlId: "a45f52a5-4562-45fc-3ec4-8e13fea41799"
      },
      {
        value: "\n\n\n",
        rowFlex: "left"
      },
      {
        value:
          "data:image/jpeg;base64,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zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwrpgSARG6iqGzVA/uoQNMa5SZvM6c5ej8fVqBZFUcODDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzw0P5SSLOKSnmhftl+/BJv8ATUkxPw8CAv3LyErp8X+H0888888888888888888888888888888888888888888888888888888888888888888888888888888Oip6xZNSrVkV9L2HWSBlt0815LUsquzHfM5MV1bS68888888888888888888888888888888888888888888888888888888888888888888888888888888sQwAwUfYpoxRbufVDNIy3JOgeojD8qaQGs/UWt8Nc8888888888888888888888888888888888888888888888888888888888888888888888888888888881BTdF7Ly+xkhKYMwc+HSitglAk9x5itWny9bAj8888888888888888888888888888888888888888888888888888888888888888888888888888888888IeivwyAS8pFizvdDgNrkRKxXJJVfyE1ikMkUX008888888888888888888888888888888888888888888888888888888888888888888888888888888888OC01ULWNxqMyu/ia0qkIP/AA1ngolulBRoD47cKfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLkDd1kboeFBcdz3MRH0Qo+kHPhWugVTJk+AYKfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKm8M7JgP8D6MOkbxwenIgPYSSSehi9wcHxCRPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOoWA9SbrLPtBt0963r8gxYkSfQbXgDGEYGdVPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLmyhUDM2tCaXetyRlFCbInr8DuCF0vbPH/cZfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGBxC7PlxA1A77DIYG1uQDkYQY3oV1WpTAOGHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNCXUoWi6IcYbsDYbOQcDUf/HX6lTg+QozKC6vPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPONXS1Nv1Vx/lzUO4kvNmPrIWQyaMQlE5OmZHy/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPEnQhqgSMVbjz+W60u+JjFYrTp2rNTvesV2hRHFPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPLJEVLCob/cmUXBVBeCjyy3ynwkAgWI/ingIP9AVvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPAPPHxIABzwJnxvqJAWc36dBXSk6TiZRat4DLAywjcVvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLJJJSU9FRUA6oXQ4RHD5kAxIC7yf8A/hCH8pRXc72Zn7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy4oBqgwxKLz2hwkLhNXgSaULg43kUEcRhcT9PomEjzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyhXl4g+VRAR2Zm8SMQAabPzSjZsWnPx4uIGSZTRPrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz5ny/EGa9mgLIS93FpkjUDC1IWo052JtY6a8787RabDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzIyj5UsDyMLpbeCrB9kdw4qHA2gi2kXduz0C/hk8IkozzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxQlrXudVdz5B9dZ+u9H1/wCK2dflXjihljKhigU2FMCg2c4888888888888888888888888888888888888888888888888888888888888888888888888888ImD7dxFwUrG8lk6QjhS6BHXg/DJUxMZYFz4mQ4y4d6R+cQ88888888888888888888888888888888888888888888888888888888888888888888888888p649y+2XJ0ixNZrxeYlQrekzYTSIP3+zg/NRPXO8j8FX0M8888888888888888888888888888888888888888888888888888888888888888888888888oaXPlUfXKzD0BCdjTBfZR+0qdh80lUTzVNJFVwpxDPgKdU88888888888888888888888888888888888888888888888888888888888888888888888888ole9s3xnpAzF1/3e1BdbKpUK6aQSLyIllSeSngV2Ym3nqU88888888888888888888888888888888888888888888888888888888888888888888888888o4OObM6uYbPK8ThgQ1Q/BxyC1vPDps/iE+itDy7Udsjgic88888888888888888888888888888888888888888888888888888888888888888888888888o+1eT5Ye+NfS/Qqvaq9W7GvhgWNl5KQkfw6lY87XuFw/oe88888888888888888888888888888888888888888888888888888888888888888888888888oWQhfVaNPHsreXybGLCMCvSY+Jqtn3kWTYGIpRCvuU0b1o88888888888888888888888888888888888888888888888888888888888888888888888888oVkxsBgM+vKwWQDRXfAjraamVvym7PqGTlRAndMd/tOcND88888888888888888888888888888888888888888888888888888888888888888888888888oe68z1dBOtlOYilLrydi+Ba0U1+LmTgz3V7QqBSUZuTpFN88888888888888888888888888888888888888888888888888888888888888888888888888oq94DOhIHDiRr2rPWwpc5uAOQj/AM7i5z8csUNmH7UA2rkKPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLNKAb7ASPR9GcPgJ5HSQKfKONHy+1KvoM0MKLqo1imTqupvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOOWGUz9QFlztQO1Mhp855xhlKBtotem3XaObFFJIzed8fvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLJEpQheQkLYJ+46+odSylo2yml2lFp7Zuq+vLhlv9i+lPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKKSQca9Kcv5+jq6MHCLrw5OR5BzZBKGZ06JB4zU0xGHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPGCBNTqEfj5aLVx+N+TEGM1b55Zoc7slpZdEj9r3qHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHBWYQRKEXeEcRvSkLYXfeES9dXXXEW/msuMPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPLHHONDPHHHNcxoFgt69QiToINHDDHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNNEAHCNCIHGGPCMBPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOLJDHPPPPPPPPPLHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPOICrPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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",
        type: "image",
        rowFlex: "left",
        width: 234.1222631171782,
        height: 131.69377300341273,
        id: "3846813d-0dc8-d34c-e0a6-9da900426a9e"
      },
      {
        value: "\n月经史示例：\n",
        size: 14,
        bold: true,
        rowFlex: "left"
      },
      {
        value: "",
        type: "dataImage",
        size: 14,
        rowFlex: "left",
        width: 200,
        height: 150,
        conceptId: "data_image_menstrual_history_example",
        imgDisplay: "float-top",
        imgFloatPosition: {
          x: 100,
          y: 100,
          pageNo: 0
        },
        imageData: {
          type: "mh",
          data: {
            menarcheAge: 13,
            isRegular: "Y",
            cycleDays: 28,
            periodDays: 5,
            lastMenstruationDate: "2023-07-15",
            bloodVolume: "M",
            dysmenorrhea: "L",
            abnormalSymptoms: "无异常",
            isPregnant: "",
            remarks: "月经规律，偶有轻度痛经"
          }
        }
      },
      {
        value: "\n",
        size: 14,
        bold: false,
        rowFlex: "left"
      }
    ],
    footer: []
  },
  options: {
    mode: "design",
    locale: "zhCN",
    defaultType: "TEXT",
    defaultColor: "#000000",
    defaultFont: "Microsoft YaHei",
    defaultSize: 16,
    minSize: 5,
    maxSize: 72,
    defaultRowMargin: 1,
    defaultBasicRowMarginHeight: 8,
    defaultTabWidth: 32,
    width: 794,
    height: 1123,
    scale: 1,
    pageGap: 20,
    underlineColor: "#000000",
    strikeoutColor: "#FF0000",
    rangeAlpha: 0.3,
    rangeColor: "#8BC7AD",
    rangeMinWidth: 5,
    searchMatchAlpha: 0.6,
    searchMatchColor: "#FFFF00",
    searchNavigateMatchColor: "#AAD280",
    highlightAlpha: 0.6,
    highlightMarginHeight: 8,
    resizerColor: "#4182D9",
    resizerSize: 5,
    marginIndicatorSize: 35,
    marginIndicatorColor: "#BABABA",
    margins: [50, 50, 50, 50],
    pageMode: "paging",
    renderMode: "speed",
    defaultHyperlinkColor: "#0000FF",
    paperDirection: "vertical",
    inactiveAlpha: 0.6,
    historyMaxRecordCount: 100,
    wordBreak: "break-word",
    printPixelRatio: 3,
    maskMargin: [0, 0, 0, 0],
    letterClass: ["A-Za-z"],
    contextMenuDisableKeys: [],
    shortcutDisableKeys: [],
    scrollContainerSelector: ".editor-center-body",
    pageOuterSelectionDisable: false,
    pageNumber: {
      bottom: 60,
      size: 12,
      font: "Microsoft YaHei",
      color: "#000000",
      rowFlex: "center",
      format: "{pageNo} / {pageCount}",
      numberType: "arabic",
      disabled: false,
      startPageNo: 1,
      fromPageNo: 0,
      maxPageNo: null
    },
    placeholder: {
      data: "请输入正文",
      color: "#DCDFE6",
      opacity: 1,
      size: 16,
      font: "Microsoft YaHei"
    },
    control: {
      placeholderColor: "#9c9b9b",
      bracketColor: "#1772F6",
      prefix: "[",
      postfix: "]",
      borderWidth: 1,
      borderColor: "#000000",
      activeBackgroundColor: "",
      disabledBackgroundColor: "#C7EDCC",
      existValueBackgroundColor: "",
      noValueBackgroundColor: "#C7EDCC"
    },
    table: {
      tdPadding: [0, 0, 0, 0],
      defaultTrMinHeight: 10,
      defaultColMinWidth: 20,
      defaultBorderColor: "#000000"
    },
    zone: {
      tipDisabled: false
    },
    header: {
      top: 0,
      inactiveAlpha: 1,
      maxHeightRadio: "half",
      disabled: false,
      editable: true
    },
    modeRule: {
      print: {
        imagePreviewerDisabled: false
      },
      readonly: {
        imagePreviewerDisabled: false
      },
      form: {
        controlDeletableDisabled: true
      }
    },
    cursor: {
      width: 2,
      color: "#165DFF",
      dragWidth: 2,
      dragColor: "#0000FF",
      dragFloatImageDisabled: false
    },
    group: {
      opacity: 0.2,
      backgroundColor: "#FADC19",
      activeOpacity: 0.4,
      activeBackgroundColor: "#FADC19",
      disabled: false,
      deletable: true
    },
    footer: {
      bottom: 30,
      inactiveAlpha: 1,
      maxHeightRadio: "half",
      disabled: false,
      editable: true
    },
    watermark: {
      data: "",
      type: "text",
      width: 0,
      height: 0,
      color: "#AEB5C0",
      opacity: 0.3,
      size: 200,
      font: "Microsoft YaHei",
      repeat: false,
      gap: [10, 10],
      numberType: "arabic"
    },
    checkbox: {
      width: 14,
      height: 14,
      gap: 5,
      lineWidth: 1,
      fillStyle: "#5175f4",
      strokeStyle: "#ffffff",
      verticalAlign: "bottom"
    },
    radio: {
      width: 14,
      height: 14,
      gap: 5,
      lineWidth: 1,
      fillStyle: "#5175f4",
      strokeStyle: "#000000",
      verticalAlign: "bottom"
    },
    title: {
      defaultFirstSize: 26,
      defaultSecondSize: 24,
      defaultThirdSize: 22,
      defaultFourthSize: 20,
      defaultFifthSize: 18,
      defaultSixthSize: 16
    },
    pageBreak: {
      font: "Microsoft YaHei",
      fontSize: 12,
      lineDash: [3, 1]
    },
    background: {
      color: "#FFFFFF",
      image: "",
      size: "cover",
      repeat: "no-repeat",
      applyPageNumbers: []
    },
    lineBreak: {
      disabled: true,
      color: "#CCCCCC",
      lineWidth: 1.5
    },
    separator: {
      lineWidth: 1,
      strokeStyle: "#000000"
    },
    lineNumber: {
      size: 12,
      font: "Microsoft YaHei",
      color: "#000000",
      disabled: true,
      right: 20,
      type: "continuity"
    },
    pageBorder: {
      color: "#000000",
      lineWidth: 1,
      padding: [0, 5, 0, 5],
      disabled: true
    },
    badge: {
      top: 0,
      left: 5
    }
  }
};

export const mockCommentData = [
  {
    id: "1",
    groupId: "1",
    content: "就我个人来说, 随机一段废话对我的意义, 不能不说非常重大. 我认为, 问题的关键究竟为何? 那么, 随机一段废话的发生, ",
    rangeText: "出现咽喉疼痛",
    createUser: "张三丰",
    createTime: "2023-08-20 23:10:55"
  }
];
