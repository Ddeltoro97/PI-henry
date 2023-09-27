const createActivityHandler = (req, res) =>{
    const {name, description, countries} = req.body;
    res.status(200).send("Actividad creada");
}

const activitiesHandler = (req, res) =>{
    const activities = req.body;

    res.status(200).send("Lista de actividades")
}

module.exports = {
    createActivityHandler,
}