import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render summary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={1}
            expensesTotal={123}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Should render summary with multiple expense', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={23}
            expensesTotal={2345642}
        />
    );
    expect(wrapper).toMatchSnapshot();
})