// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const parseData = (data) => {
  return JSON.parse(data);
};

const splitData = (parsedData) => {
  if (parsedData.message !== undefined) {
    split = parsedData.message.split(" ");
    const newData = split[1];
    return newData;
  }
  if (parsedData[0].message !== undefined) {
    split = parsedData[0].message.split(" ");
    const newData = split[1];
    return newData;
  }
  if (parsedData[0].data.message !== undefined) {
    split = parsedData[0].data.message.split(" ");
    const newData = split[1];
    return newData;
  }
};

const pushData = (data) => {
  finalData.push(data);
};

let finalData = [];

const bacaData = (callback) => {
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }
    const dataHasilParse = parseData(data);
    const newData = splitData(dataHasilParse);
    pushData(newData);

    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        return callback(err);
      }
      const dataHasilParse = parseData(data);
      const newData = splitData(dataHasilParse);
      pushData(newData);

      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) {
          return callback(err);
        }
        const dataHasilParse = parseData(data);
        const newData = splitData(dataHasilParse);
        pushData(newData);
        callback(null, finalData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
