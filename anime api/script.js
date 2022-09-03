// api key="33584ce841c68b68bab881b93200085c"
//api=https://anime-facts-rest-api.herokuapp.com/api/v1
let aname=document.getElementById('txt1').value;
console.log(aname);
var url=`https://anime-facts-rest-api.herokuapp.com/api/v1/${aname}`


function foo(){
    var aniurl=fetch(url)
    .then((result)=>result.json())
    .then((anidata)=>{console.log(anidata)
        console.log((anidata.data.length))
        var parentdiv2=document.createElement('div')
    parentdiv2.setAttribute('id','mark1')
    parentdiv2.setAttribute('class','flex-container')
        for (i=0; i<anidata.data.length; i++)
    {
        if(aname==aname){
            let cc=anidata.data[i].fact
    console.log(cc)
    var ptag= document.createElement('ul');
    ptag.setAttribute('id','mark2')
    ptag.innerHTML=`<li>${cc}</li>`
    parentdiv2.append(ptag)
    document.body.append(parentdiv2)
        }
    else{
        alert("Invalid input")
    }
    
    
    }
    
    
    })
}
  
