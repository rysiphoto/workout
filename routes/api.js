const router = router("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    });
});

router.put("/api/workouts/:id", ({ body, params }) => {
  Workout.findByIdAndUpdate(params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    });
});

app.delete("/delete/:id", (req, res) => {
  db.Workout.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.Workout.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});
