import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sort to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
})

test('Should set sort to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
})

test('Should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('hello');
});

test('Should set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    }
    const state = filtersReducer(undefined, action );
    expect(state.startDate).toEqual(moment());
});

test('Should set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment());
})