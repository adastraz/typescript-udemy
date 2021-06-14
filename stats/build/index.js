"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.WinsAnalysisHtml('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
//new Date(2020, 0, 12) january 12th, 2020
