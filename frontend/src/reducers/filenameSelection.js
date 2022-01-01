
const DSAFiles = [
    {
        "type": "file",
        "name": "main.cpp",
        "id": "sa1GQ3eYSvOv1kRvhEoQV",
        "content": 
`#include<bits/stdc++.h>
#include<ext/pb_ds/assoc_container.hpp>
#include<ext/pb_ds/tree_policy.hpp>

#pragma GCC optimize("Ofast,no-stack-protector")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,tune=native")
#pragma GCC optimize("unroll-loops")
 
using namespace __gnu_pbds;
using namespace std;
 
#define ll                long long
#define ff                first
#define ss                second
#define pb                push_back
#define mp                make_pair
#define pii               pair<int,int>
#define vi                vector<int>
#define mii               map<int,int>
#define pqb               priority_queue<int>
#define pqs               priority_queue<int, vector<int>, greater<int>>
#define setbits(x)        __buildin_popcountll(x)
#define mod               1000000007
#define inf               1e18
#define sqr(x)            ((x)*(x))
#define ps(x,y)           fixed<<setprecision(y)<<x
#define mk(arr,n,type)    type *arr=new type[n];
#define w(t)              int t; cin>>t; while(t--)
const int MN = 2e5+7;
//array of vectors
vector<int> v[MN];
 
 
 
 
int main()
{
ios_base::sync_with_stdio(false);
cin.tie(NULL);
cout.tie(NULL);
    int q;
    cin>>q;
  while(q--){

  }
  return 0;
}`

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



const file = (state = DSAFiles[0], action) => {
    switch(action.type){
      case "changecontent":
        state.content = action.content;
        return state;
      case "addfile":
        DSAFiles.push(action.file)
        state = DSAFiles.at(-1);
        return state;
      case "changename":
        state.name = action.name;
        return state;
      default:
        return state;
    }
}


export default file;