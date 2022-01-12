const sampleTestOutput = 

[{
"o1":'',
"o2":'',
"o3":''
}]


const testCasesOutput = (state = sampleTestOutput, action) => {
    switch(action.type){
        case "sampleTestsOutput":
           console.log(action.output)
           state = action.output;
           return state;
        default:
          return state;
      }
}


export default testCasesOutput