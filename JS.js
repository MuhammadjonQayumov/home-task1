//cw1
// function SumPolygon(a){
//     return (a-2)*180
// }
// console.log(SumPolygon(6));

//cw2
// function Sum(a,b){
//     return a+b
// }
// console.log(Sum(2,5));

//cw3
// function Max(a,b,c){
//     if(a>b && a>c)return a
//     else if(b>a && b>c)return b
//     else return c
// }
// console.log(Max(6,10,3));

//cw4 
// function Even(a){
//     return (a+2)-(a%2)
// }
// console.log(Even(57));

// cw5
// function Sum(a,b){
//     let sum=0
//     for(let i=a; i<=b; i++)
//     {
//         sum+=i
//     }
//     return sum
// }
// console.log(Sum(1,5));

//cw6
// function centery(a){
//     if(a%100==0)return a/100
//     else return Math.floor(a/100)+1
// }
// console.log(centery(2000));

//cw7
// function convert(a){
//     return a*60
// }
// console.log(convert(5));

//cw8
// function Even(a,b){
//     let sum=""
//     for(let i=a; i<=b; i++){
//         if(i%2==0){
//             sum+=i+" "
//         }
//     }
//     return sum
// }
// console.log(Even(3,6));

//cw9
// function Sqrt(a,b){
//     let sum=""
//     let c=0
//     for(let i=a; i<=b; i++){
//         c=Math.sqrt(i)
//         if(c==Math.floor(c))
//         sum+=i+" "
//     }
//     return sum
// }
// console.log(Sqrt(2,16));


//cw10
// function Hypotinuse(a,b){
//     return Math.sqrt((a*a)+(b*b))
// }
// console.log(Hypotinuse(4,4))

//cw11
// function Factorial(a){
//     sum=1
//     for(let i=1; i<=a; i++){
//         sum*=i
//     }
//     return sum
// }
// console.log(Factorial(5));

//cw12
// function Polindrom(a){
//     let b=0
//     for(let i=a; i>0;)
//     {
//         b+=i%10;
//         b=b*10
//         i=Math.floor(i/10)
//     }
//     b=Math.floor(b/10)
//     if(b==a)return "YES"
//     else return "NO"
// }
// console.log(Polindrom(121));

//cw13
// function Polindrom(a,b){
//     let cnt=0
//     let c=0
//     for(let i=a; i>0;)
//     {
//         c=i%10
//         if(c==b)cnt++
//         i=Math.floor(i/10)
//     }
//     return cnt
// }
// console.log(Polindrom(121,1));






//hw1
// function circuitPower(a,b){
//     return a*b
// }
// console.log(circuitPower(480,20));

//hw2
// function divisibleByFive(a){
//     return a%5==0
// }
// console.log(divisibleByFive(-55));

//hw3
// function dividesEvenly(a,b){
//     let c = Math.floor(a/b)
//     let d = a/b
//     return c==d
// }
// console.log(dividesEvenly(85,4));

//hw4
// function points(a,b){
//     return (a*2)+(b*3)
// }
// console.log(points(2,2));

//hw5
// function isSumeNum(a,b){
//     return a==b
// }
// console.log(isSumeNum(10,10));

//hw7
// function NegInPos(a){
//     return Math.abs(a)
// }
// console.log(NegInPos(-1));

//hw8
// function longestTime(h,m,secund){
//     let hourse = (h*60)*60
//     let minute = m*60
//     if(hourse>minute && hourse>secund)return h
//     else if(minute>hourse && minute>secund)return m
//     else return secund
// }
// console.log(longestTime(15,955,59400));

//hw9
// function largestSwap(a){
//     let b = (a%10)*10
//     b += Math.floor(a/10)
//     return a>=b
// }
// console.log(largestSwap(99));

//hw10
// function solveForExp(a,b){
//     let cnt=0
//     for(let i=b; i>=a;){
//         i = Math.floor(i/a)
//         cnt++
//     }
//     return cnt
// }
// console.log(solveForExp(9,3486784401));
