const bcrypt = require("bcrypt");


module.exports.hash = (data) => {
    return bcrypt.hash(data, 10);
}

module.exports.comparePassword = (plainPwd, encryptedPwd) => {
    return bcrypt.compare(plainPwd, encryptedPwd)
}

module.exports.buildQuery = (query) => {
    const isMinOrMax = (key) => key.endsWith("_min") || key.endsWith("_max");
    const assign = (object, key, value, type) => {
        const fieldName = key.split("_")[1];
        const tempValue = type == "date" ? new Date(value) : type == "int" ? Number.parseInt(value) :type == "double" ? Number.parseFloat(value): Boolean(value);
        if (isMinOrMax(key)) {
            const qualifier = key.split("_")[2];
            object[fieldName] = { ...object[fieldName] };
            object[fieldName][qualifier === "min" ? "$gte" : "$lte"] = tempValue;
        }
        else {
            object[fieldName] = tempValue;
        }
    };
    const keys = Object.keys(query);
    let value = {};
    for (let key of keys) {
        if (query[key] === "" || key === "orderBy" || key === "order" || key === "limit" || key === "page") continue;
        if (key.startsWith("id_")) {
            const fieldName = key.split("_")[1];
            if (key.endsWith("_array"))
                value[fieldName] = { "$all": query[key].split(";") };
            else
                value[fieldName] = query[key];

        }
        else if (key.startsWith("date_")) {
            assign(value, key, query[key], "date");
        }
        else if (key.startsWith("int_")) {
            assign(value, key, query[key], "int");
        }
        else if (key.startsWith("double_")) {
            assign(value, key, query[key], "double");
        }
        else if (key.startsWith("bool_")) {
            assign(value, key, query[key], "bool");
        }
        else {
            value[key] = new RegExp(query[key], "i");
        }
    }
    return value;
}