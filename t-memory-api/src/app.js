const personRoutes = require("./routes/personRoutes")

const app = express()
app.use(express.json())
app.use(cors())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongoose.connect()

app.use(timelineRoutes)
app.use(memoryRoutes)
app.use(personRoutes)


module.exports = app