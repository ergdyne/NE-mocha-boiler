import express from 'express'

//Entry point
const app = express()
app.get('/foo', function (req, res) {

  function foo(){
    return 'hello'
  }

  try {
    res.status(200).send(foo())
  }catch(error){
    res.status(400).send(`Could not find conversion for "${units}"`)
  }
})
app.get('*', (req, res) => { res.send('not found') })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}!`))
