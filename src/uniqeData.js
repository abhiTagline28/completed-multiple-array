const uniqueVal = (data) => {
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    const distinctValues = data.filter(distinct)
    return distinctValues
}

export default uniqueVal