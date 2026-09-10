function doGet() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
    if (!sheet) throw new Error('Sheet "Data" was not found.');

    const values = sheet.getDataRange().getValues();
    if (values.length < 2) return jsonOutput([]);

    const headers = values.shift().map(String);
    const rows = values
      .filter(row => row.some(value => value !== ''))
      .map(row => Object.fromEntries(headers.map((header, i) => [header, row[i]])));

    return jsonOutput(rows);
  } catch (error) {
    return jsonOutput({ error: error.message });
  }
}

function jsonOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}