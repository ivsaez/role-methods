export const Max = 100;
export const Min = 0;

export function random(maximum){
    let topValue = maximum + 1;
    return Math.floor(Math.random() * topValue);
}

export function critic(){
    let value = random(Max);
    let result = 0;

    if (value <= 10) result = -1;
    if (value >= 90) result = 1;

    return result;
}

export function hit(attack, defense){
    let attackValue = random(attack);
    let defenseValue = random(defense);

    let result = attackValue - defenseValue;

    if (result < Min) result = Min;

    return result;
}

export function against(first, second){
    if (first == Min) return false;
    if (second == Min) return true;

    let value = random(first + second);

    return value < first;
}

export function coin(){
    return against(50, 50);
}

export function check(percentage){
    return against(percentage, Max - percentage);
}