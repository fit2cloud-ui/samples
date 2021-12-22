export const listTree = [{
    id: "Accessories",
    name: "Accessories",
    length: 11,
    children: [{
        name: "Accessories - 总计",
        length: 13,
        total: true,
      },
      {
        name: "red",
        length: 3,
      },
      {
        name: "yellow",
        length: 6,
      },
      {
        name: "white",
        length: 5,
      },
      {
        name: "green",
        length: 5,
      },
    ],
  },
  {
    id: "Bikes",
    name: "Bikes",
    length: 5,
    children: [{
        name: "Bikes - 总计",
        length: 12,
        total: true,
      },
      {
        name: "white",
        length: 5,
      },
      {
        name: "red",
        length: 3,
      },
      {
        name: "green",
        length: 5,
      },
      {
        name: "yellow",
        length: 6,
      },
      {
        name: "blue",
        length: 4,
      },
      {
        name: "purple",
        length: 6,
      },
    ],
  },
  {
    id: "Clothing",
    name: "Clothing",
    length: 8,
    children: [{
        name: "Clothing - 总计",
        length: 15,
        total: true,
      },
      {
        name: "yellow",
        length: 6,
      },
      {
        name: "blue",
        length: 4,
      },
      {
        name: "white",
        length: 5,
      },
      {
        name: "purple",
        length: 6,
      },
      {
        name: "red",
        length: 3,
      },
      {
        name: "green",
        length: 5,
      },
    ],
  },
  {
    id: "Components",
    name: "Components",
    length: 10,
    children: [{
        name: "Components - 总计",
        length: 18,
        total: true,
      },
      {
        name: "red",
        length: 3,
      },
      {
        name: "green",
        length: 5,
      },
      {
        name: "blue",
        length: 4,
      },
      {
        name: "white",
        length: 5,
      },
    ],
  },
  {
    id: "Cars",
    name: "Cars",
    length: 4,
    children: [{
        name: "Cars - 总计",
        length: 12,
        total: true,
      },
      {
        name: "green",
        length: 5,
      },
      {
        name: "white",
        length: 5,
      },
      {
        name: "red",
        length: 3,
      },
      {
        name: "blue",
        length: 4,
      },
    ],
  },
]

export const pivotTableData = {
  rows: [{
      id: "Accessories",
      name: "Accessories",
      length: 11,
      children: [{
          name: "Accessories - 总计",
          length: 13,
          total: true,
        },
        {
          name: "red",
          length: 3,
        },
        {
          name: "yellow",
          length: 6,
        },
        {
          name: "white",
          length: 5,
        },
        {
          name: "green",
          length: 5,
        },
      ],
    },
    {
      id: "Cars",
      name: "Cars",
      length: 4,
      children: [{
          name: "Cars - 总计",
          length: 12,
          total: true,
        },
        {
          name: "green",
          length: 5,
        },
        {
          name: "white",
          length: 5,
        },
        {
          name: "red",
          length: 3,
        },
        {
          name: "blue",
          length: 4,
        },
      ],
    },
  ],
  columns: [{
      name: "Components",
      length: 10,
      children: [{
          name: "Components - 总计",
          length: 18,
          total: true,
        },
        {
          name: "red",
          length: 3,
        },
        {
          name: "green",
          length: 5,
        },
        {
          name: "blue",
          length: 4,
        },
        {
          name: "white",
          length: 5,
        },
      ],
    },
    {
      name: "Bikes",
      length: 5,
      children: [{
          name: "Bikes - 总计",
          length: 12,
          total: true,
        },
        {
          name: "white",
          length: 5,
        },
        {
          name: "red",
          length: 3,
        },
        {
          name: "green",
          length: 5,
        },
        {
          name: "yellow",
          length: 6,
        },
        {
          name: "blue",
          length: 4,
        },
        {
          name: "purple",
          length: 6,
        },
      ],
    },
  ],
}

export const rightHeaderColumn = [{
  pId: "Components",
  name: "red",
  length: 3,
  width: 300,
  height: 28,
  top: 0,
  left: 0,
  children: [{
      pId: "Bikes",
      name: "white",
      length: 5,
      width: 50,
      top: 28,
      height: 56,
      left: 0
    },
    {
      pId: "Bikes3",
      name: "red",
      length: 3,
      width: 50,
      top: 28,
      height: 56,
      left: 50
    },
    {
      pId: "Bikes4",
      name: "green",
      length: 5,
      width: 50,
      height: 56,
      top: 28,
      left: 100
    },
    {
      name: "Bikes - 总计",
      length: 5,
      width: 150,
      top: 28,
      left: 150,
      height: 56,
      total: true,
    },
  ]
}, {
  pId: "Components",
  length: 5,
  width: 250,
  top: 0,
  height: 28,
  left: 300,
  children: [{
      pId: "Bikes2",
      name: "white",
      length: 5,
      width: 50,
      height: 56,
      top: 28,
      left: 300,
    },
    {
      pId: "Bikes3",
      name: "red",
      length: 5,
      width: 50,
      height: 56,
      top: 28,
      left: 350,
    },
    {
      pId: "Bikes4",
      name: "green",
      length: 5,
      width: 50,
      height: 56,
      top: 28,
      left: 400,
    },
    {
      name: "Bikes - 总计",
      length: 5,
      width: 100,
      height: 56,
      top: 28,
      left: 450,
      total: true,
    },
  ],
}, {
  name: "Components - 总计",
  length: 5,
  width: 150,
  top: 0,
  height: 84,
  left: 550,
  total: true,
}, ]

export const leftHeaderRow = [{
  pId: "Accessories",
  name: "red",
  length: 3,
  width: 82,
  height: 112,
  left: 0,
  top: 0,
  children: [{
      pId: "Cars",
      name: "white",
      length: 5,
      width: 78,
      height: 28,
      left: 82,
      top: 0,
    },
    {
      pId: "Cars",
      name: "red",
      length: 3,
      width: 78,
      height: 28,
      left: 82,
      top: 28,
    },
    {
      pId: "Cars",
      name: "green",
      length: 5,
      width: 78,
      height: 28,
      left: 82,
      top: 56,
    },
    {
      name: "Cars - 总计",
      length: 5,
      total: true,
      width: 78,
      height: 28,
      left: 82,
      top: 84,
    },
  ]
}, {
  pId: "Accessories",
  name: "blue",
  length: 5,
  width: 78,
  height: 84,
  top: 112,
  left: 0,
  children: [{
      pId: "Cars",
      name: "white",
      length: 5,
      width: 78,
      height: 28,
      top: 112,
      left: 82,
    },
    {
      pId: "Cars",
      name: "red",
      length: 5,
      width: 78,
      height: 28,
      top: 140,
      left: 82,
    },
    {
      pId: "Cars",
      name: "green",
      length: 5,
      width: 78,
      height: 28,
      top: 168,
      left: 82,
    },
    {
      name: "Cars - 总计",
      length: 5,
      width: 78,
      height: 28,
      top: 196,
      left: 82,
      total: true,
    },
  ],
}, {
  name: "Accessories - 总计",
  length: 5,
  width: 168,
  height: 28,
  top: 224,
  left: 0,
  total: true,
}, ]
