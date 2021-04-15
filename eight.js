var obj = [
    {"id" : 4 , "name" : "abc"},
    {"id" : 10 , "name" : "ab2"},
    {"id" : 5 , "name" : "ab3"},
    {"id" : 6 , "name" : "abc5"}
]

const sorted = obj.sort(
    (a,b)=> a.id > b.id ? 1 : -1
)


console.log(sorted)