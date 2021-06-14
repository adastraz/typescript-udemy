import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.WinsAnalysisHtml('Man United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)

//new Date(2020, 0, 12) january 12th, 2020