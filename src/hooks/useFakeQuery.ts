export const useFakeQuery = () => `
[
  {
    "name": "First_Node",
    "subnodes": [
      {
        "name": "Subnode",
        "subnodes": []
      },
      {
        "name": "subnode_with_items",
        "subnodes": [
          {
            "name": "item1",
            "subnodes": []
          },
          {
            "name": "item2",
            "subnodes": []
          },
          {
            "name": "item3",
            "subnodes": []
          },
          {
            "name": "item4",
            "subnodes": [
              {
                "name": "item4_1",
                "subnodes": []
              },
              {
                "name": "item4_2",
                "subnodes": []
              },
              {
                "name": "item4_3",
                "subnodes": []
              }
            ]
          },
          {
            "name": "item5",
            "subnodes": []
          }
        ]
      },
      {
        "name": "Another_subnode",
        "subnodes": []
      }
    ]
  },
  {
    "name": "Second_Node",
    "subnodes": [
      {
        "name": "Subnode_of_Second_Node",
        "subnodes": []
      },
      {
        "name": "Another_subnode_of_Second_Node",
        "subnodes": []
      }
    ]
  }
]  
`
