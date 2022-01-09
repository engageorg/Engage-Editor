
const sampleTestsArray = [
    {
        "i1": "",
        "o1": ""
    },
    {
        "i2": "",
        "o2": ""
    },
    {
        "i3": "",
        "o3": ""
    },
]


const sampleTests = (state = sampleTestsArray, action) => {
    switch(action.type){
        case "updateSampleTests":
          state = action.sampleTests;
          return state;
        default:
          return state;
      }
}


export default sampleTests