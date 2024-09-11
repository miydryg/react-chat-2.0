// type Mods = Record<string, boolean | string>;

export function classNames(
    cls,
    mods,
    aditional,
) {
    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([classNames]) => classNames),
    ].join(' ');
}