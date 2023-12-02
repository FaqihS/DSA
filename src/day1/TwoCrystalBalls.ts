export default function two_crystal_balls(breaks: boolean[]): number {

  let jumpAmount = Math.floor(Math.sqrt(breaks.length))

  let i = jumpAmount
  for(; i < breaks.length; i+=jumpAmount){
    if(breaks[i]) break
  }

  for(let j = i - jumpAmount; j <= i ;j++){
    if(breaks[j]) return j
  }

  return -1

}
