const uuid = Math.floor(Math.random() * 1000);
const id = Math.floor(Math.random() * 100000);
let newUUID = Math.floor(Math.random() * 1000);

export const bodyValue = { 
    "entity_id" : id,
    "name": "entity" + uuid, 
    "entity_type": "application" + uuid, 
    "description": "description of entity" + uuid, 
    "is_verified": false, 
    "department_id": 3 
}

export const updateBodyValue = { 
    "name": "entity" + newUUID, 
    "entity_type": "application" + uuid, 
    "description": "description of entity" + uuid, 
    "is_verified": false, 
    "department_id": 3 
}
