const object = {
    name: 'Andrew',
    surname: 'Duraev',
    age: 25,
    address: {
        village: 'Atrat',
        street: 'Pushkin',
        houseNumber: 46,
        room: {
            roomNumber: 4
        }
    }
}

function makeObjectDeepCopy(copingObject) {
    const copiedObject = {};

    for (let key in copingObject) {
        if (typeof copingObject[key] === 'object') {
            copiedObject[key] = makeObjectDeepCopy(copingObject[key]);
            continue;
        }
        copiedObject[key] = copingObject[key];
    }
    return copiedObject;
}

makeObjectDeepCopy(object);