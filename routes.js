const Answer = require('./models/Answer');

module.exports = {
    routes: app => {
        app.post('/send-answer', async function (req, res) {
            try {
                const newAnswer = new Answer(req.body);
                await newAnswer.save();
                res.json({ok: true});
            } catch (e) {
                res.json({ok: false});
            }

        })

        app.get('/answers', async function (req, res) {
            try {
                const response = await Answer.find();
                res.json(response);
            } catch (e) {
                res.json({ok: false});
            }

        })
    }
}
