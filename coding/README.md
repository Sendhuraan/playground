var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};
console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k'));

/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/