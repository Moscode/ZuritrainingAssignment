const fetch = require('node-fetch')
const fs = require('fs')

const getApi = fetch('https://jsonplaceholder.typicode.com/posts').then(function(res){
    let value = ''
    return res.json()
}).then(function (data){
    console.log(data)
    value += data
    const stringVal = JSON.stringify(value);

    fs.writeFile('./Result/Post.json', stringVal, (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log('File successfully written to post.json in Result folder')
        }
    });
}).catch(function(err){
    console.log(err)
})