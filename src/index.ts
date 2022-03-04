export const Max = 100;
export const Min = 0;

export enum Critic {
    Low = -1,
    None = 0,
    High = 1
} 

export function random(maximum: number): number {
    let topValue = maximum + 1;
    return Math.floor(Math.random() * topValue);
}

export function randomFromList<T>(list: T[]): T {
    if(list.length === 1) return list[0];

    let index = random(list.length - 1)
    return list[index];
}

export function critic(): Critic{
    let value = random(Max);
    let result = Critic.None;

    if (value <= 10) result = Critic.Low;
    if (value >= 90) result = Critic.High;

    return result;
}

export function hit(attack: number, defense: number): number{
    let attackValue = random(attack);
    let defenseValue = random(defense);

    let result = attackValue - defenseValue;

    if (result < Min) result = Min;

    return result;
}

export function against(first: number, second: number): boolean{
    if (first == Min) return false;
    if (second == Min) return true;

    let value = random(first + second);

    return value < first;
}

export function coin(): boolean{
    return against(50, 50);
}

export function check(percentage: number): boolean{
    return against(percentage, Max - percentage);
}