import foodServices from "../services/food-services.js";

async function select(req, res) {
  const data = await foodServices.selectAllFoods();

  if (data.status === 500) {
    res.status(500).send(data.err);
  } else {
    res.status(200).json(data);
  }
}

async function insert(req, res) {
  const body = req.body;
  const data = await foodServices.postFood(body.title, body.image, body.price);

  if (data.status === 500) {
    res.status(500).send(data.err);
  } else {
    res.status(201).json(data);
  }
}

async function update(req, res) {
  const data = await foodServices.putFood(req.params.id, req.body);

  if (data.status === 500) {
    res.status(500).send(data.err);
  } else {
    res.status(201).json(data);
  }
}

async function delet(req, res) {
  const data = await foodServices.deleteFood(req.params.id);

  if (data.status === 500) {
    res.status(500).send(data.err);
  } else {
    res.status(201).json(data);
  }
}

export default { select, insert, update, delet };
