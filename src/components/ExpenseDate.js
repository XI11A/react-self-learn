function ExpenseDate(){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const date = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
}

export default ExpenseDate;