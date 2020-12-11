const axios = require('axios')
const { MONGO_URI } = process.env
const { connect, connection } = require('mongoose')
const mongoConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
const { Currency } = require('../../models')

const updateData = async () => {
  try {
    const { data } = await axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
    )

    await Promise.all(
      data.map(({ txt, rate, cc }) =>
        Currency.findOneAndUpdate(
          { cc },
          { cc, txt, rate },
          { upsert: true, new: true }
        )
      )
    )
    console.log('Data has been updated')
  } catch (e) {
    console.log(e.message)
    console.log("Data isn't updated")
  }
}

connect(MONGO_URI, mongoConnectionOptions)
  .then(updateData)
  .then(() => connection.close().then(process.exit()))
