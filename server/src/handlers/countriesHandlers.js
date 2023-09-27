const getAllCountries = (req, res) =>{
    const {name} = req.query;
    if (name){
        if (name.toLowerCase() === "kenya"){
            return res.status(200).send("Si se encontró");
        }
        else{
            return res.status(404).send("No se encontró");
        } 
    }
    
    res.status(200).send("Todos los paises");
}

const getCountryHandler = (req, res) =>{
    const {id} = req.params;
    const country = req.body;

    res.status(200).send(`Pais: ${country.name}, ${country.capital}, ${country.activities}`)
}

const searchCountry = async (req, res) =>{
    const {name} = req.query;

    if (name.toLowerCase() === "kenya"){
        return res.status(200).send("Si se encontró");
    }
    else{
        return res.status(404).send("No se encontró");
    }
}





module.exports = {
    getAllCountries,
    getCountryHandler,
    searchCountry,

}