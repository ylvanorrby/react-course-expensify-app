import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
    const sum = selectExpensesTotal([]);
    expect(sum).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const sum = selectExpensesTotal([expenses[1]]);
    expect(sum).toBe(expenses[1].amount);
});

test('Should correctly add up multiple expenses', () => {
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(2155);
});