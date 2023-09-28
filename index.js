
let ar = Array.from(document.getElementsByClassName("box"))
let comm = document.getElementById("text");
let c =0;
let xt=0;
let zt=0;
let t=0;
let full =false;
let arr=["","","",
        "","","",
        "","",""];

console.log(ar)

const check = (v)=>{

        if((arr[0] == v && arr[1] == v && arr[2] == v) ||
            (arr[3] == v && arr[4] == v && arr[5] == v) ||
            (arr[6] == v && arr[7] == v && arr[8] == v) ||
            (arr[0] == v && arr[3] == v && arr[6] == v) ||
            (arr[1] == v && arr[4] == v && arr[7] == v) ||
            (arr[2] == v && arr[5] == v && arr[8] == v) ||
            (arr[0] == v && arr[4] == v && arr[8] == v) ||
            (arr[2] == v && arr[4] == v && arr[6] == v) 
            ){
            console.log(`${v} wins`);
            comm.innerText = `${v} wins`;
            full = true;
            document.querySelector(".r").innerText="Restart"
        }
        
}

function change(i){
    if(!full){
        ar[i].addEventListener("click",function(){
            this.innerText = "x"
            this.style.color = "#004225"
            arr[i]="x"
            let b = Math.floor(Math.random() *10);
            c=0;
            xt++;
            console.log(arr)
            if(zt<xt && xt<5){
                while(c!=1){
                    if(arr[b] == ""){
                        arr[b] = "o"
                        ar[b].innerText = "o"
                        ar[b].style.color = "#FFB000"
                        c=1;
                        zt++;
                        console.log(arr);
                    }
                    else{
                        b=Math.floor(Math.random() *10);
                    }
                }
            }
            check("x")
            check("o")
            
        })
    }

}

for(let j=0;j<9;j++){
    change(j);
}

document.querySelector(".r").addEventListener("click",()=>{
    arr=["","","",
        "","","",
        "","",""];
        for(let j=0;j<9;j++){
            ar[j].innerText = "";
        }
        full = false;
        comm.innerText = ``;
        xt=0
        zt=0
        document.querySelector(".r").innerText="Play"
})





