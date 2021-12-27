const DSAFiles = [
    {
        "type": "file",
        "name": "main.cpp",
        "id": "sa1GQ3eYSvOv1kRvhEoQV",
        "content": "//some comments"
    },
    {
        "type": "file",
        "name": "main.py",
        "id": "6zgImNpHX5gcQq9AMCsGF",
        "content": "#some comments"
    },
    {
        "type": "file",
        "name": "main.js",
        "id": "wjS-tGoSLre8AUnuLXiim",
        "children": [],
        "content": "//some comments"
    },
    {
        "type": "file",
        "name": "main.c",
        "id": "o-KZ6TIhTfeClAUkKFhwF",
        "children": [],
        "content": "aman"
    }
]


const file = (state = DSAFiles[1], action) => {
    switch(action.type){
      case "changecontent":
        state.content = action.content;
        return state;
      default:
        return state;
    }
}


export default file;