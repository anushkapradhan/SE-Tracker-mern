// npm i lodash

import _ from 'lodash';

export function getSum(transaction, type){
    //console.log(transaction);
    let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
        if (!type) return _.sumBy(objs, 'amount'); // [3500, 344, 244]
        return {
            'type': key,
            'color': objs[0].color,
            'total': _.sumBy(objs, 'amount')
        }
    })
    .value();
    //console.log(sum);
    return sum;
}

export function getLabels(transaction){
    let amountSum = getSum(transaction, 'type');
    let Total = _.sum(getSum(transaction));
    let percent = _(amountSum)
                .map(objs => _.assign(objs, { 
                    percent: (100*objs.total) / Total}))
                .value();
    return percent;
}


export function chart_data(transaction, custom){

    let bg = _.map(transaction, a => a.color);
    bg = _.uniq(bg);
    // console.log(bg);
    let dataValue = getSum(transaction);
    const config = {
        data: {
            datasets: [{
                data: dataValue,
                backgroundColor: bg,
                hoverOffset: 4,
                borderRadius: 30,
                borderColor: "black",
                spacing: 5
            }]
        },
        options: {
            cutout: 105
        }
    };

    return custom ?? config;
}

export function getTotal(transaction){
    return _.sum(getSum(transaction));
}

export function getRemaining(transaction){
    let total = getTotal(transaction);
    
    let amountSum = getSum(transaction, 'type');

    // getting total expense only
    let expenseArray = amountSum.find(obj => obj.type === 'Expenses');
    let expenseAmt = expenseArray ? expenseArray.total : 0;

    // getting total savings only
    let savingsArray = amountSum.find(obj => obj.type === 'Savings');
    let savingsAmt = savingsArray ? savingsArray.total : 0;

    // gettinf total investment only
    let investmentArray = amountSum.find(obj => obj.type === 'Investment');
    let investmentAmt = investmentArray ? investmentArray.total : 0;

    const total_remaining = total - expenseAmt;

    return { total_remaining, savingsAmt, investmentAmt };
}