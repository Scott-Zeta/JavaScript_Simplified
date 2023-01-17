class Phone{
constructor(
    type,
    color,
    owner,
    power
){
    this.type = type
    this.color = color
    this.owner = owner
    this.power = power
}
pressPower(){
    this.power = !this.power
}
}

export default Phone