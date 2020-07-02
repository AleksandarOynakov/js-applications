function solve() {
    let reports = [];
    let clearReports = (selector) => {
        let reportsCollection = document.getElementById(`${selector}`).getElementsByClassName('report');
        let size = reportsCollection.length;
        for (let index = 0; index < size; index++) {
            reportsCollection[reportsCollection.length - 1].remove();
        }
    };
    function report(author, description, reproducible, severity) {
        this.id === undefined ? this.id = 0 : this.id++;
        let outputElement = document.getElementById(`${this.selector}`);
        let reportObj = { id: this.id, author, description, reproducible, severity, status: 'Open' };
        outputElement.innerHTML += generateOutputStruct(reportObj);
        reports.push(reportObj);
    }

    function setStatus(id, newStatus) {
        let currentReport = document.getElementById(`report_${id}`);
        if (currentReport) {
            let [status,severity] = currentReport.getElementsByClassName('status')[0].textContent.split(' | ');
            status = newStatus;
            currentReport.getElementsByClassName('status')[0].textContent = `${status} | ${severity}`;
        }
    }

    function remove(id) {
        let currentReport = document.getElementById(`report_${id}`);
        if (currentReport) {
            let searchedReport = reports.find(report => report.id === id);
            let index = reports.indexOf(searchedReport);
            reports.splice(index, 1);
            currentReport.remove();
        }
    }

    function sort(method) {
        let reportsCollection = document.getElementById(`${this.selector}`).getElementsByClassName('report');
        let options = {
            'author': () => reports.sort((a, b) => (a.author).localeCompare(b.author)),
            'severity': () => reports.sort((a, b) => a.severity - b.severity),
            'ID': () => reports.sort((a, b) => a.id - b.id)
        }
        let sortedArr = options[method]();
        let size = reportsCollection.length;
        for (let index = 0; index < size; index++) {
            reportsCollection[reportsCollection.length - 1].remove();
        }
        for (const element of sortedArr) {
            document.getElementById(`${this.selector}`).innerHTML += generateOutputStruct(element);
        }
    }

    function output(selector) {
        selector.startsWith('#') ? this.selector = selector.slice(1) : this.selector = selector;
        clearReports(this.selector);
    }

    function generateOutputStruct(reportObj) {
        let outputStruct = `<div id="report_${reportObj.id}" class="report">\n` +
            `<div class="body">\n` +
            `<p>${reportObj.description}</p>\n` +
            `</div>\n` +
            `<div class="title">\n` +
            `<span class="author">Submitted by: ${reportObj.author}</span>\n` +
            `<span class="status">${reportObj.status} | ${reportObj.severity}</span>\n` +
            `</div>\n` +
            `</div >\n`;
        return outputStruct;
    }
    return {
        report,
        setStatus,
        remove,
        sort,
        output
    }
}

