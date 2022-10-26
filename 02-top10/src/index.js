// Ejercicio basico

exports.topWords = (text) => {

    // tokeniza
    const res=[], directory = {};
    text.toLowerCase().match(/([a-z]+'[a-z]+)|([a-z]*)\w/g).forEach(token=>{
        directory[token] = directory[token] ? directory[token]+1 : 1;
    })
    
    // construye el arreglo
    Object.keys(directory).forEach(key=>res.push({word: key, count: directory[key]}));

    // ordena y limita el resultado
    return res.sort((a,b)=> b.count-a.count != 0 ? b.count - a.count : a.word > b.word ? 1 : -1).slice(0,10);    
    
}